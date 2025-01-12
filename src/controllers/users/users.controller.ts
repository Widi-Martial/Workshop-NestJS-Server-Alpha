import { Body, Controller, Get, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import * as usersDto from './users.dto';

@Controller('users')
export class UsersController {
  @Get()
  async findAllUsers(
    @Req() request: Request,
  ): Promise<usersDto.FindUsersDto[]> {
    console.log(request);
    return [];
  }
}

@Controller('me')
export class UsersMeController {
  @Get()
  async findMe(@Req() request: Request): Promise<usersDto.MeDto[]> {
    console.log(request);
    return [];
  }

  @Post('register')
  async createMe(@Body() createMeDto: usersDto.CreateMeDto) {
    console.log(createMeDto);
  }

  @Patch('me')
  async updateMe(
    @Req() request: Request,
    @Body() updateMeDto: usersDto.UpdateMeDto,
  ) {
    console.log(updateMeDto, request);
  }
}
