import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import * as usersDto from './users.dto';
import * as userInterface from './user.interface';
import { UsersService } from './users-service/users.service';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { User } from './users.model';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    console.log('this action find all users');
    return await this.usersService.getUsers();
  }

  @Get('me')
  async findUserProfil(@Req() req): Promise<userInterface.Profil> {
    return await this.usersService.getUserProfile(req.user.userId);
  }

  @Patch('me')
  async updateUserProfil(
    @Req() req,
    @Body() updateUserDto: usersDto.UpdateMeDto,
  ): Promise<string> {
    return await this.usersService.updateProfile(
      req.user.userId,
      updateUserDto,
    );
  }

  @Get('me/suggestions')
  async findSuggestions(@Req() req): Promise<userInterface.Suggestion[]> {
    return await this.usersService.getSuggestions(req.user.userId);
  }

  @Get('contacts')
  async findAllContacts(@Req() req): Promise<userInterface.Users[]> {
    return await this.usersService.getAllContacts(req.user.userId);
  }

  @Get(':userId')
  async findOneUser(@Param('userId') userId: number): Promise<User> {
    console.log('this action find one user...');
    return await this.usersService.getUserById(userId);
  }
}
