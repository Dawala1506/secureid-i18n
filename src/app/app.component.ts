import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor( private translateService: TranslateService){
  const useLang = navigator.language || 'en';
  const languageCode = useLang.split('-') [0];
  this.translateService.setDefaultLang(languageCode);
  this.translateService.use(languageCode);

  const browserLang = translateService.getBrowserLang();
  translateService.use(browserLang?.match(/en|es|fr/) ? browserLang : 'en');
 }


 changeLanguage(event: Event) {
  const target = event.target as HTMLSelectElement;
  const language = target.value;
  this.translateService.use(language); // Switch language dynamically
  localStorage.setItem('language', language); // Save to localStorage
}
}
