import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanntComponent } from './gannt.component';

describe('GanntComponent', () => {
  let component: GanntComponent;
  let fixture: ComponentFixture<GanntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [GanntComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
