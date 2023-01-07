import { TestBed } from '@angular/core/testing';

import { WalletTransactionsService } from './wallet-transactions.service';

describe('WalletTransactionsService', () => {
  let service: WalletTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
