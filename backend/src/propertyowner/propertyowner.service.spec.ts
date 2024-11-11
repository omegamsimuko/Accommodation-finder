import { Test, TestingModule } from '@nestjs/testing';
import { PropertyownerService } from './propertyowner.service';

describe('PropertyownerService', () => {
  let service: PropertyownerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyownerService],
    }).compile();

    service = module.get<PropertyownerService>(PropertyownerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
