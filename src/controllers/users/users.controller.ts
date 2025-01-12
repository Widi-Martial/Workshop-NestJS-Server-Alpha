import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
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

  @Get(':userId')
  async findOneUser(
    @Param() userId: usersDto.UserIdDto,
  ): Promise<usersDto.FindOneUserDto> {
    console.log(userId);
    return;
  }

  @Get('me')
  async findMe(@Req() request: Request): Promise<usersDto.MeDto[]> {
    console.log(request);
    return [];
  }

  // move in single controller
  @Post('register')
  async createMe(@Body() createMeDto: usersDto.CreateMeDto) {
    console.log(createMeDto);
    return 'this action create user';
  }

  @Patch('me')
  async updateMe(
    @Req() request: Request,
    @Body() updateMeDto: usersDto.UpdateMeDto,
  ) {
    console.log(updateMeDto, request);
    return 'this action update user';
  }

  @Delete('me')
  async deleteMe(@Req() request: Request) {
    console.log(request);
    return 'this action delete user';
  }

  @Get('me/suggestions')
  async findSuggestions(
    @Req() request: Request,
  ): Promise<usersDto.SuggestionDto[]> {
    console.log(request);
    return [];
  }
}
