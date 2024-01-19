import { Module } from '@nestjs/common';
import { NinjasController , addController} from './ninjas.controller';
import { NinjasService,addService } from './ninjas.service';

@Module({
  controllers: [NinjasController,addController],
  providers: [NinjasService,addService]
})
export class NinjasModule {}
///ninjas