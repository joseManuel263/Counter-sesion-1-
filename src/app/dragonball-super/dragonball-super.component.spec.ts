import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballSuperComponent } from './dragonball-super.component';

describe('DragonballSuperComponent', () => {
  let component: DragonballSuperComponent;
  let fixture: ComponentFixture<DragonballSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballSuperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
