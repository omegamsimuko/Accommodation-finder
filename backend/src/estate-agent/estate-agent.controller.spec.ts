import { Test, TestingModule } from '@nestjs/testing';
import { EstateAgentController } from './estate-agent.controller';
import { EstateAgentService } from './estate-agent.service';

describe('EstateAgentController', () => {
  let controller: EstateAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateAgentController],
      providers: [EstateAgentService],
    }).compile();

    controller = module.get<EstateAgentController>(EstateAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
