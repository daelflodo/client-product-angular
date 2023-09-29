import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyComponent } from './components/survey/survey.component';
import { FormComponent } from './components/form/form.component';
const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'survey',
    component: SurveyComponent,
  },
  {
    path: 'survey/create',
    component: FormComponent,
  },
  {
    path: 'survey/edit/:id',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
