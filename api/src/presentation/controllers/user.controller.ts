import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { AuthenticationRequest } from 'src/presentation/requests/authentication-request';
import { AuthenticationResponse } from 'src/presentation/responses/authentication-response';
import { UserDocument } from 'src/domain/schemas/user.schema';
import { UserService } from '../../services/user.service';
import { UserListResponse } from '../responses/user-list-response';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  @HttpCode(200)
  async authenticate(
    @Body() { username, password }: AuthenticationRequest,
  ): Promise<AuthenticationResponse> {
    const user = await this.userService.findUserByUsernameAndPassword({
      username,
      password,
    });
    return this.userService.createUserToken(user as UserDocument);
  }

  @Get('/list')
  @HttpCode(200)
  async listAll(
    @Query('count') count: number,
    @Query('page') page: number,
    @Query('name') name: string,
    @Query('username') username: string,
    @Query('email') email: string,
  ): Promise<UserListResponse> {
    return await this.userService.listAll(
      count || 5,
      page || 1,
      name || '',
      username || '',
      email || '',
    );
  }
}
