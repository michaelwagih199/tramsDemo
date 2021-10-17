import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramsListComponent } from './trams-list.component';

describe('TramsListComponent', () => {
  let component: TramsListComponent;
  let fixture: ComponentFixture<TramsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
