import { Test, TestingModule } from '@nestjs/testing';
import { PropertyownerController } from './propertyowner.controller';
import { PropertyownerService } from './propertyowner.service';

describe('PropertyownerController', () => {
  let controller: PropertyownerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyownerController],
      providers: [PropertyownerService],
    }).compile();

    controller = module.get<PropertyownerController>(PropertyownerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
