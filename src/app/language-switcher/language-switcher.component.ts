import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  currentLanguage: string = 'en';
  constructor(private languageService: LanguageService) {}

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const language = target.value;
    this.languageService.setLanguage(language);
  }

  // getFlagImage(): string {
  //   switch (this.currentLanguage) {
  //     case 'en':
  //       return 'assets/flags/uk.svg'; // UK flag
  //     case 'es':
  //       return 'assets/flags/spain.svg'; // Spain flag
  //     case 'fr':
  //       return 'assets/flags/france.svg'; // France flag
  //     default:
  //       return 'assets/flags/uk.svg'; // Default to UK flag
  //   }
  // }
}