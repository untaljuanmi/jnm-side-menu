import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColorEnum {
  Red = 'text-red-500',
  Green = 'text-green-500',
  Blue = 'text-blue-500',
  Purple = 'text-purple-500',
}

@Component({
  selector: 'lib-jnm-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './jnm-side-menu.component.html',
})
export class JnmSideMenuComponent {
  public isAuthenticated: InputSignal<boolean> = input<boolean>(false);
  public titleColor: InputSignal<TitleColorEnum> = input<TitleColorEnum>(TitleColorEnum.Blue);

  public onSignIn: OutputEmitterRef<void> = output<void>();
  public onSignOut: OutputEmitterRef<void> = output<void>();
}
