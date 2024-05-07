import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateDataDto, UpdateDataDto } from './crud.dto';

@Controller('crud')
export class CrudsController {
  constructor(private crudService: CrudService) {}

  @Get()
  findAll(): string {
    return this.crudService.get();
  }

  @Post()
  createData(@Body() createDataDto: CreateDataDto): void {
    this.crudService.create(createDataDto.data);
  }
  @Put(':index')
  updateData(
    @Param('index') index: number,
    @Body() updateDataDto: UpdateDataDto,
  ): void {
    this.crudService.update(index, updateDataDto.data);
  }
  @Delete(':index')
  deleteData(@Param('index') index: number): void {
    this.crudService.delete(index);
  }
}
