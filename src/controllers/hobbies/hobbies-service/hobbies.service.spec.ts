import { Test, TestingModule } from '@nestjs/testing';
import { HobbiesServiceService } from './hobbies.service';

describe('HobbiesServiceService', () => {
  let service: HobbiesServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HobbiesServiceService],
    }).compile();

    service = module.get<HobbiesServiceService>(HobbiesServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
