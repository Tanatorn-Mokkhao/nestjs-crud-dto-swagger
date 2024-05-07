import { Module } from '@nestjs/common';
import { CrudsController } from './crud.controller';
import { CrudService } from './crud.service';

@Module({
  controllers: [CrudsController],
  providers: [CrudService],
  exports: [],
})
export class CrudModule {}
