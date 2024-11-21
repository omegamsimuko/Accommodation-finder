import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],  // Register Student repository
  providers: [StudentService],
  exports: [StudentService, TypeOrmModule],  // Export the service and repositories if needed in other modules
})
export class StudentModule {}
