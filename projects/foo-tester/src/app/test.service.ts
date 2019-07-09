import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  getTest() {
    return 'test20190704-001';
  }
}
