import { TestBed } from '@angular/core/testing';

import { MovieSiteService } from './movie-site.service';

describe('MovieSiteService', () => {
  let service: MovieSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
