import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReserveComponent } from './detail-reserve.component';

describe('DetailReserveComponent', () => {
  let component: DetailReserveComponent;
  let fixture: ComponentFixture<DetailReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
