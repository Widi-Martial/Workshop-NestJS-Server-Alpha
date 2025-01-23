import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';

describe('AccountController', (): void => {
  let controller: AccountController;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
    }).compile();

    controller = module.get<AccountController>(AccountController);
  });

  it('should be defined', (): void => {
    expect(controller).toBeDefined();
  });
});
