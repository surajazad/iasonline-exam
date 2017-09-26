import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-container',
  templateUrl: './exam-container.component.html',
  styleUrls: ['./exam-container.component.css']
})
export class ExamContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToExam(){
    alert("hello");
    
  }


}
