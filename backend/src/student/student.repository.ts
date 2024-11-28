// src/student/repositories/student.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Student } from 'src/student/entities/student.entity'; 
@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  // You can add custom queries or methods here, for example:
  async findByEmail(email: string): Promise<Student | undefined> {
    return this.findOne({ where: { email } });
  }
}
