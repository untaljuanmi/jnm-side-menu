import { Component, signal, WritableSignal } from '@angular/core';
import { JnmSideMenuComponent } from '../../../jnm-side-menu/src/lib/jnm-side-menu.component';
import { TitleColorEnum } from 'jnm-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JnmSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jnm-testbed';

  public isAuthenticated: WritableSignal<boolean> = signal<boolean>(false);

  public TitleColorEnum: typeof TitleColorEnum = TitleColorEnum;

  public onSignIn(): void {
    this.isAuthenticated.set(true);
  }

  public onSignOut(): void {
    this.isAuthenticated.set(false);
  }
}
