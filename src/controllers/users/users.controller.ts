import { Body, Controller, Get, Param, Patch, Headers } from '@nestjs/common';
import * as usersDto from './users.dto';

@Controller('users')
export class UsersController {
  @Get()
  async findAllUsers(
    @Headers('authorization') authorization: string,
  ): Promise<usersDto.FindUsersDto[]> {
    console.log(authorization);
    return [];
  }

  @Get('me')
  async findUserProfil(
    @Headers('authorization') authorization: string,
  ): Promise<usersDto.MeDto[]> {
    console.log(authorization);
    return [];
  }

  @Patch('me')
  async updateUserProfil(
    @Headers('authorization') authorization: string,
    @Body() updateUserDto: usersDto.UpdateMeDto,
  ) {
    console.log(updateUserDto, authorization);
    return 'this action update user';
  }

  @Get('me/suggestions')
  async findSuggestions(
    @Headers('authorization') authorization: string,
  ): Promise<usersDto.SuggestionDto[]> {
    console.log(authorization);
    return [];
  }

  @Get(':userId')
  async findOneUser(
    @Headers('authorization') authorization: string,
    @Param() userId: usersDto.UserIdDto,
  ): Promise<usersDto.FindOneUserDto> {
    console.log(userId);
    return;
  }
}
