import { TestBed } from '@angular/core/testing';

import { ServicioChatService } from './servicio-chat.service';

describe('ServicioChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioChatService = TestBed.get(ServicioChatService);
    expect(service).toBeTruthy();
  });
});
