import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './typeOrmConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { AgentModule } from './agent/agent.module';
import { PropertyOwnerModule } from './property-owner/property-owner.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), StudentModule, AgentModule, PropertyOwnerModule, AuthModule,
    JwtModule.register({
      secret: 'ifindSecret',
      signOptions: {expiresIn: '1hr'},
      global: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
