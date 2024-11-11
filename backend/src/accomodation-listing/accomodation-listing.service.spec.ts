import { Test, TestingModule } from '@nestjs/testing';
import { AccomodationListingService } from './accomodation-listing.service';

describe('AccomodationListingService', () => {
  let service: AccomodationListingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccomodationListingService],
    }).compile();

    service = module.get<AccomodationListingService>(AccomodationListingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
