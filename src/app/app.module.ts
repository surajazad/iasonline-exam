import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AppComponent } from './app.component';
import { ExamContainerComponent } from './exam-container/exam-container.component';
import { QuestionContainerComponent } from './question-container/question-container.component';
import { SubmissionComponent } from './submission/submission.component';
import {routing} from './app.routing';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamContainerComponent,
    QuestionContainerComponent,
    SubmissionComponent,
    QuizComponent,
   
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
