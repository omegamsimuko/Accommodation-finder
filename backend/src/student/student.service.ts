import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
 
 
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
 
){}


  async create(createStudentDto: SignUpDto) {
    const name = (createStudentDto.firstName + createStudentDto.lastName);
    const {email,password,phoneNumber} = createStudentDto;

    const newAgent = await this.studentRepository.create({
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber

    })

    await this.studentRepository.save(newAgent);

    return 'This action adds a new student';
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
  
}
