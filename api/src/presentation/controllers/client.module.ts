import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Client, ClientSchema } from 'src/domain/schemas/client.schema';
import { ClientService } from 'src/services/client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Client.name,
        schema: ClientSchema,
      },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientsModule {}
