import { TestBed } from '@angular/core/testing';

import { CsrftokenInterceptorService } from './csrftoken-interceptor.service';

describe('CsrftokenInterceptorService', () => {
  let service: CsrftokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsrftokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
