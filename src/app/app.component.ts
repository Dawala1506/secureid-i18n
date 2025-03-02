import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLanguage: string = '';
 constructor( private translateService: TranslateService, private cdr: ChangeDetectorRef){
  const useLang = navigator.language || 'en';
  const languageCode = useLang.split('-') [0];
  this.translateService.setDefaultLang(languageCode);
  this.translateService.use(languageCode);

  const browserLang = translateService.getBrowserLang();
  translateService.use(browserLang?.match(/en|es|fr/) ? browserLang : 'en');
 }
 getFlagImage(): string {
  switch (this.currentLanguage) {
    case 'en':
      return 'assets/flags/uk.svg'; 
    case 'es':
      return 'assets/flags/spain.svg';
    case 'fr':
      return 'assets/flags/france.svg'; 
    default:
      return 'assets/flags/uk.svg'; 
  }
}

 changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.currentLanguage = target.value;
    this.translateService.use(target.value);
    this.cdr.detectChanges(); 
  }
}
