import { Component } from '@angular/core';
import { JnmSideMenuComponent } from '../../../jnm-side-menu/src/lib/jnm-side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JnmSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jnm-testbed';
}
