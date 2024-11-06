import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AgentService } from 'src/agent/agent.service';
import { PropertyOwnerService } from 'src/property-owner/property-owner.service';
import { StudentService } from 'src/student/student.service';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly agentService: AgentService,
    private readonly onwerService: PropertyOwnerService,
    private readonly studentService: StudentService    
){
    
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'ifindSecret',
    });

  }

  async validate(payload) {
    const { id } = payload;

    const user = await this.agentService.findOneById(id);
    const user2 = await this.onwerService.findOneById(id);
    const user3 = await this.studentService.findOneById(id);
    
    if (!user && !user2 && !user3)
        throw new UnauthorizedException('Login first to access the resource.');

    

    return user;
  }
}