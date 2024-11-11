import { Test, TestingModule } from '@nestjs/testing';
import { EstateAgentService } from './estate-agent.service';

describe('EstateAgentService', () => {
  let service: EstateAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstateAgentService],
    }).compile();

    service = module.get<EstateAgentService>(EstateAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
