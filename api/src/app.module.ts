import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_URI } from './main/configs/constants';
import { ClientsModule } from './presentation/controllers/client.module';
import { UsersModule } from './presentation/controllers/user.module';

@Module({
  imports: [MongooseModule.forRoot(DB_URI), UsersModule, ClientsModule],
})
export class AppModule {}
