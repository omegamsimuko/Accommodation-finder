import { Module } from '@nestjs/common';
import { PropertyownerService } from './propertyowner.service';
import { PropertyownerController } from './propertyowner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { propertyowner } from './entities/propertyowner.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([propertyowner])],
  controllers: [PropertyownerController],
  providers: [PropertyownerService],
})
export class PropertyownerModule {}
