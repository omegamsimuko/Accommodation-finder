import { Injectable, ConflictException} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';
import { LoginDto } from 'src/auth/dto/LogIn.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
@Injectable()
export class StudentService {
 
 
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private jwtService: JwtService
 
){}


  async create(createStudentDto: SignUpDto):Promise<{token:string}> {
    const name = (createStudentDto.firstName + " "+ createStudentDto.lastName);
    const {email,password,phoneNumber} = createStudentDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = await this.studentRepository.create({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber

    })

    await this.studentRepository.save(newStudent);

    const token = this.jwtService.sign({id: newStudent.id})
    
    return {token};
  }

  async validate(validateUser : LoginDto): Promise<{token: string}>{

    const {email,password} = validateUser;

    const user = await this.studentRepository.findOne({where: {email}});
    
    if (!user)
      return null;
    
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return null;

    const token = this.jwtService.sign({id: user.id});

    return {token};

  }


  async findOneByEmail(user : SignUpDto): Promise<boolean> {
    const {email} = user;
    const check = await this.studentRepository.findOne({where:{email}})

    if (!check)
      return false;
    else
      return true;
    
  }

  async findOneById(id: string) {
    
    const user = await this.studentRepository.findOne({where:{id: id}});

    if (!user)
      return null;

    return user;

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
