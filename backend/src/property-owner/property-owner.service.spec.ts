import { Test, TestingModule } from '@nestjs/testing';
import { PropertyOwnerService } from './property-owner.service';

describe('PropertyOwnerService', () => {
  let service: PropertyOwnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyOwnerService],
    }).compile();

    service = module.get<PropertyOwnerService>(PropertyOwnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
