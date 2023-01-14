import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from 'src/domain/schemas/client.schema';
import { CreateUpdateClientRequest } from 'src/presentation/requests/create-update-client-request';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async loadOne(id_client: string): Promise<Client> {
    const client = await this.clientModel.findOne({ _id: id_client }).exec();
    if (!client)
      throw new NotFoundException({ error: 'Cliente não encontrado!' });
    return client;
  }

  async listAll(): Promise<Client[]> {
    return await this.clientModel.find().exec();
  }

  async create(bodyRequest: CreateUpdateClientRequest): Promise<void> {
    try {
      await this.clientModel.create(bodyRequest);
    } catch (error) {
      if (error.name === 'ValidationError')
        throw new BadRequestException({ error: 'Requisição invalida!' });
    }
  }

  async update(
    id_client: string,
    bodyRequest: CreateUpdateClientRequest,
  ): Promise<void> {
    try {
      await this.clientModel.updateOne({ _id: id_client }, bodyRequest).exec();
    } catch (error) {
      if (error.name === 'ValidationError')
        throw new BadRequestException({ error: 'Requisição invalida!' });
    }
  }

  async delete(id_client: string): Promise<void> {
    const client = await this.clientModel.findOne({ _id: id_client }).exec();
    if (!client)
      throw new NotFoundException({ error: 'Cliente não encontrado!' });
    await this.clientModel.deleteOne({ _id: id_client }).exec();
  }
}
