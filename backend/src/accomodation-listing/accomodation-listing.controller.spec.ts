import { Test, TestingModule } from '@nestjs/testing';
import { AccomodationListingController } from './accomodation-listing.controller';
import { AccomodationListingService } from './accomodation-listing.service';

describe('AccomodationListingController', () => {
  let controller: AccomodationListingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccomodationListingController],
      providers: [AccomodationListingService],
    }).compile();

    controller = module.get<AccomodationListingController>(AccomodationListingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
