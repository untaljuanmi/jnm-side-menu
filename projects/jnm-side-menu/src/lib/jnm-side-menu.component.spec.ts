import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JnmSideMenuComponent } from './jnm-side-menu.component';
import { provideRouter } from '@angular/router';

describe('JnmSideMenuComponent', () => {
  let component: JnmSideMenuComponent;
  let fixture: ComponentFixture<JnmSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JnmSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(JnmSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when sign in button is clicked', () => {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      '[data-sign-in]',
    ) as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();
    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('should call onSignOut when sign out button is clicked', () => {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      '[data-sign-out]',
    ) as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();
    expect(component.onSignOut.emit).toHaveBeenCalled();
  });
});
