import { Test, TestingModule } from '@nestjs/testing';
import { PropertyOwnerController } from './property-owner.controller';
import { PropertyOwnerService } from './property-owner.service';

describe('PropertyOwnerController', () => {
  let controller: PropertyOwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyOwnerController],
      providers: [PropertyOwnerService],
    }).compile();

    controller = module.get<PropertyOwnerController>(PropertyOwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
