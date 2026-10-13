import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { LanguageSwitcher } from './shared/presentation/components/language-switcher';
import { environment } from '../environments/environments';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    ToolbarModule,
    ButtonModule,
    LanguageSwitcher,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly config = environment;
  readonly logoFailed = signal(false);
  readonly menuOpen = signal(true);
  readonly logoUrl = environment.logoToken
    ? `${environment.logoBase}/${environment.logoDomain}?token=${encodeURIComponent(environment.logoToken)}`
    : '';
}
