import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AgentModule } from 'src/agent/agent.module';
import { PropertyOwnerModule } from 'src/property-owner/property-owner.module';
import { StudentModule } from 'src/student/student.module';
import { AuthController } from './auth.controller';


@Module({
  imports: [StudentModule, AgentModule, PropertyOwnerModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}