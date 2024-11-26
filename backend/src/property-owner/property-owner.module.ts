import { Module } from '@nestjs/common';
import { PropertyOwnerService } from './property-owner.service';
import { PropertyOwnerController } from './property-owner.controller';
import { PropertyOwner } from './entities/property-owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/booking/entities/booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyOwner],  )],
  controllers: [PropertyOwnerController],
  providers: [PropertyOwnerService],
  exports: [PropertyOwnerService]
})
export class PropertyOwnerModule {}
