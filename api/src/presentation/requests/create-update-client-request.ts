import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUpdateClientRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  phone: number;
  cpf: number;
}
