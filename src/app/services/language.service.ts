import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    
    this.translate.setDefaultLang('en');

  
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.use(savedLanguage);
  }

  setLanguage(language: string) {
    this.translate.use(language); 
    localStorage.setItem('language', language); 
  }
}