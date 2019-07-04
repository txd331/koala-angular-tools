import { TestBed } from '@angular/core/testing';

import { KoalaAngularToolsService } from './koala-angular-tools.service';

describe('KoalaAngularToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KoalaAngularToolsService = TestBed.get(KoalaAngularToolsService);
    expect(service).toBeTruthy();
  });
});
