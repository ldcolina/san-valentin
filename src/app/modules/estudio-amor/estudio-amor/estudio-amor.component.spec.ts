import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioAmorComponent } from './estudio-amor.component';

describe('EstudioAmorComponent', () => {
  let component: EstudioAmorComponent;
  let fixture: ComponentFixture<EstudioAmorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudioAmorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioAmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
