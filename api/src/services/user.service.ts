import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcryptjs';
import { Model } from 'mongoose';
import { AuthenticationRequest } from 'src/presentation/requests/authentication-request';
import { User, UserDocument } from 'src/domain/schemas/user.schema';
import { sign } from 'jsonwebtoken';
import { TOKEN_SECRET } from 'src/main/configs/constants';
import { formatRandomUserList } from 'src/presentation/formatters/format-random-user-list';
import { UserListResponse } from 'src/presentation/responses/user-list-response';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUserByUsernameAndPassword({
    username,
    password,
  }: AuthenticationRequest): Promise<User> {
    const user = await this.userModel.findOne({ username }).exec();

    if (!user)
      throw new NotFoundException({ error: 'Usuário não encontrado!' });

    const verifyPassword = await compare(password, user.pass);

    if (!verifyPassword)
      throw new NotFoundException({ error: 'Usuário não encontrado!' });

    return {
      id: user._id,
      name: user.name,
      age: user.age,
      email: user.email,
      username: user.username,
    };
  }

  async createUserToken(user: User): Promise<{ token: string }> {
    const token = sign({ user }, TOKEN_SECRET, {
      subject: String(user.id),
      expiresIn: '30h',
    });

    return { token };
  }

  async listAll(
    count: number,
    page: number,
    name: string,
    username: string,
    email: string,
  ): Promise<UserListResponse> {
    const randomUsers = await fetch(
      `https://randomuser.me/api/?results=${count}&page=${page}&exc=location,gender,registered,phone,cell,id`,
    );

    const randomUsersList: any = await randomUsers.json();

    const formattedUserList = {
      count: randomUsersList.info.results,
      page: randomUsersList.info.page,
      users: formatRandomUserList(randomUsersList.results),
    };

    // console.log(
    //   formattedUserList.users.filter(
    //     (user) => user.name.startsWith(name) || user.name.endsWith(name),
    //     // && user.username.startsWith(username)) ||
    //     // (user.username.endsWith(username) && user.email.startsWith(email)) ||
    //     // user.email.endsWith(email),
    //   ),
    // );

    return formattedUserList;
  }
}
