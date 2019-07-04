import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KoalaAngularToolsService {

  constructor() { }
  getTest() {
    return 'koalaTest20190704-001';
  }
}
