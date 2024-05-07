import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDataDto {
  @IsString()
  @ApiProperty({ type: String, description: 'data' })
  data: string;
}

export class UpdateDataDto {
  @IsString()
  @ApiProperty({ type: String, description: 'data' })
  data: string;
}
