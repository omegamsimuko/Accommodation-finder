import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeOrmConfig';
import { StudentModule } from './student/student.module';
@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    StudentModule],

  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}


