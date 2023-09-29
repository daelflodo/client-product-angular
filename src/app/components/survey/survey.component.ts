import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/interfaces/survey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {
  surveys: Survey[] = [];
  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.getSurveys();
  }

  getSurveys() {
    this.surveyService.getSurveys().subscribe(
      (res) => {
        this.surveys = res;
      },
      (err) => alert(err.message)
    );
  }
  deleteSurvey(id: string) {
    this.surveyService.deleteSurveys(id).subscribe(
      (res) => {
      this.getSurveys();
    },
    (err) => {
      alert(err.message)    }
    );
  }
}
