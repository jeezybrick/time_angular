import { TestBed, inject } from '@angular/core/testing';

import { HeaderIconsService } from './header-icons.service';

describe('HeaderIconsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderIconsService]
    });
  });

  it('should be created', inject([HeaderIconsService], (service: HeaderIconsService) => {
    expect(service).toBeTruthy();
  }));
});
