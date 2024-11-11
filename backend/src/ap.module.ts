import { Module } from '@nestjs/common';
import { ApiController } from './ap.icontroller';

@Module({
  controllers: [ApiController], // Register the controller
})
export class ApiModule {}
