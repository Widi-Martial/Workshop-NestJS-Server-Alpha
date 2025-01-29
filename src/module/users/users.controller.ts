import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Headers,
  ParseIntPipe,
} from '@nestjs/common';
import * as usersDto from './users.dto';
import * as userInterface from './user.interface';
import { UsersService } from './users-service/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAllUsers(
    @Headers('authorization') authorization: string,
  ): Promise<userInterface.Users[]> {
    console.log(authorization);
    console.log('this action find all users');
    return await this.usersService.getUsers();
  }

  @Get('me')
  async findUserProfil(
    @Headers('authorization') authorization: string,
  ): Promise<userInterface.Profil> {
    console.log(authorization);
    return await this.usersService.getUserProfile(2);
  }

  @Patch('me')
  async updateUserProfil(
    @Headers('authorization') authorization: string,
    @Body() updateUserDto: usersDto.UpdateMeDto,
  ) {
    return await this.usersService.updateProfile(2, updateUserDto);
  }

  @Get('me/suggestions')
  async findSuggestions(
    @Headers('authorization') authorization: string,
  ) /*: Promise<userInterface.Suggestion[]>*/ {
    console.log(authorization);
    return this.usersService.getSuggestions();
  }

  @Get(':userId')
  async findOneUser(
    @Headers('authorization') authorization: string,
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<userInterface.Users> {
    console.log(userId, authorization);
    console.log('this action find one user...');
    return await this.usersService.getUserById(userId);
  }
}
