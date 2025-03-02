import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    // Set the default language
    this.translate.setDefaultLang('en');

    // Use the saved language from localStorage, or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.use(savedLanguage);
  }

  setLanguage(language: string) {
    this.translate.use(language); // Switch language dynamically
    localStorage.setItem('language', language); // Save to localStorage
  }
}