import { Module } from '@nestjs/common';
import { EstateAgentService } from './estate-agent.service';
import { EstateAgentController } from './estate-agent.controller';

@Module({
  controllers: [EstateAgentController],
  providers: [EstateAgentService],
})
export class EstateAgentModule {}
