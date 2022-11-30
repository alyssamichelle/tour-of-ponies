import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneCardComponent } from './standalone-card.component';

describe('StandaloneCardComponent', () => {
  let component: StandaloneCardComponent;
  let fixture: ComponentFixture<StandaloneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandaloneCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
