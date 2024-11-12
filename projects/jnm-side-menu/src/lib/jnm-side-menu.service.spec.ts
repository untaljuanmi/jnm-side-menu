import { TestBed } from '@angular/core/testing';

import { JnmSideMenuService } from './jnm-side-menu.service';

describe('JnmSideMenuService', () => {
  let service: JnmSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JnmSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
