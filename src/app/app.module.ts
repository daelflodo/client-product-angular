import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule, BsLocaleService  } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SurveyComponent } from './components/survey/survey.component';
import { FormComponent } from './components/form/form.component';

defineLocale('es', esLocale);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SurveyComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private bsLocaleService: BsLocaleService) {
    this.bsLocaleService.use('es'); // Establece el idioma español para el componente bsDatepicker
  }
 }
