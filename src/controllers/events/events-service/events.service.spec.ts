import { Test, TestingModule } from '@nestjs/testing';
import { EventsServiceService } from './events.service';

describe('EventsServiceService', () => {
  let service: EventsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsServiceService],
    }).compile();

    service = module.get<EventsServiceService>(EventsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
