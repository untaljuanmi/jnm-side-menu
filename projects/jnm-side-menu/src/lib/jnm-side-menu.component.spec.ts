import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JnmSideMenuComponent } from './jnm-side-menu.component';

describe('JnmSideMenuComponent', () => {
  let component: JnmSideMenuComponent;
  let fixture: ComponentFixture<JnmSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JnmSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JnmSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
