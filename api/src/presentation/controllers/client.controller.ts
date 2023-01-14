import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Post,
  HttpCode,
  Body,
} from '@nestjs/common';
import { Client } from 'src/domain/schemas/client.schema';
import { ClientService } from 'src/services/client.service';
import { CreateUpdateClientRequest } from '../requests/create-update-client-request';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('/list')
  @HttpCode(200)
  async listAllClients(): Promise<Client[]> {
    return await this.clientService.listAll();
  }

  @Get(':id_client')
  @HttpCode(200)
  async loadOneClient(@Param('id_client') id_client: string): Promise<Client> {
    return await this.clientService.loadOne(id_client);
  }

  @Post()
  @HttpCode(201)
  async createClient(
    @Body() requestBody: CreateUpdateClientRequest,
  ): Promise<void> {
    return await this.clientService.create(requestBody);
  }

  @Put()
  @HttpCode(204)
  async updateClient(
    @Param('id_client') id_client: string,
    @Body() requestBody: CreateUpdateClientRequest,
  ): Promise<void> {
    return await this.clientService.update(id_client, requestBody);
  }

  @Delete()
  @HttpCode(204)
  async deleteClient(@Param('id_client') id_client: string): Promise<void> {
    return await this.clientService.delete(id_client);
  }
}
