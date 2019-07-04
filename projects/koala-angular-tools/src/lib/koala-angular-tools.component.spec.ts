import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoalaAngularToolsComponent } from './koala-angular-tools.component';

describe('KoalaAngularToolsComponent', () => {
  let component: KoalaAngularToolsComponent;
  let fixture: ComponentFixture<KoalaAngularToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoalaAngularToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoalaAngularToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
