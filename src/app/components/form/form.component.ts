import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/interfaces/survey';
import { SurveyService } from 'src/app/services/survey.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  survey: Survey = {
    fullName: '',
    phoneNumber: '',
    startDate: new Date(),
    howFound: '',
    preferredLanguage: '',
    newsletterSubscription: false,
  };

  edit: boolean = false;

  constructor(
    private surveyService: SurveyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.surveyService.getSurvey(params['id'])
      .subscribe(
        (res) => {
          this.survey = res;
          this.edit = true;
      });
    }
  }

  submitSurvey() {
    this.surveyService.createSurveys(this.survey).subscribe(
      (res) => {
        this.router.navigate(['/survey']);
      },

      (err) =>alert(err.message)
    );
  }
  updateSurvey() {
    if (this.survey.id) {
      // Comprueba si this.product._id no es undefined
      this.surveyService.updateSurveys(this.survey).subscribe(
        (res) => {
          this.router.navigate(['/survey']);
        },
      );
    }
  }

}
