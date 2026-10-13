
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LanguageService } from '../../aplication/language.service';
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [FormsModule, SelectButtonModule],
  template: `<p-selectbutton
    [options]="options"
    [ngModel]="language.current()"
    (ngModelChange)="language.use($event)"
    [allowEmpty]="false"
    ariaLabel="Language / Idioma"
  />`,
})
/** Shared accessible language selector. */
export class LanguageSwitcher {
  readonly language = inject(LanguageService);
  readonly options = ['EN', 'ES'];
}
