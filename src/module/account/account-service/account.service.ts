import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../users/users.model';
import { Sequelize } from 'sequelize-typescript';
import { CreateAccountDto } from '../account.dto';
import { HashService } from '../../hash/hash.service';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly sequelize: Sequelize,
    private readonly hashService: HashService,
  ) {}

  async createAccount(createAccountDto: CreateAccountDto): Promise<string> {
    try {
      await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const hashedPassword: string = await this.hashService.hashPassword(
          createAccountDto.password,
        );

        const createUser = await this.userModel.create(
          {
            name: createAccountDto.name,
            birth_date: createAccountDto.birth_date,
            description: createAccountDto.description,
            gender: createAccountDto.gender,
            email: createAccountDto.email,
            password: hashedPassword,
          },
          transactionHost,
        );

        if (createAccountDto.hobbies) {
          await createUser.$add(
            'hobbies',
            createAccountDto.hobbies,
            transactionHost,
          );
        }
      });
      return 'account created successfully.';
    } catch (err) {
      console.error(err);
    }
  }

  async deleteAccount(accountId: number): Promise<string> {
    await this.userModel.destroy({ where: { id: accountId } });
    return null;
  }
}
