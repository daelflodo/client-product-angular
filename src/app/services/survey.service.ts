import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { Survey } from '../interfaces/survey';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  BASE_URL: string = 'https://survey-form-eo0g.onrender.com';

  constructor(private http: HttpClient) {}

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.BASE_URL}/survey`);
  }


  getSurvey(id: string): Observable<Survey> {
    return this.http.get<Survey>(`${this.BASE_URL}/survey/${id}`);
  }

  createSurveys(survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(`${this.BASE_URL}/survey`, survey);
  }

  deleteSurveys(id: string): Observable<Survey> {
    return this.http.delete<Survey>(`${this.BASE_URL}/survey/${id}`);
  }

  updateSurveys(survey: Survey): Observable<Survey> {
    const updateData = {
      fullName: survey.fullName,
      phoneNumber: survey.phoneNumber,
      startDate: survey.startDate,
      howFound: survey.howFound,
      preferredLanguage: survey.preferredLanguage,
      newsletterSubscription: survey.newsletterSubscription,
    };
    return this.http.put<Survey>(`${this.BASE_URL}/survey/${survey.id}`, updateData);
  }
}
