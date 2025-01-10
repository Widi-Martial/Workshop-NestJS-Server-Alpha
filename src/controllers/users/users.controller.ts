import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {}

@Controller('users\me')
export class UsersMeController {}
