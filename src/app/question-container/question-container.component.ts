import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit {

  constructor(private router : Router) { }
  ques : any;
  questions : any = [
    {'questionKey':'first','question':'What is your name','options':[{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'}],'questionType':'radio'},
   {'questionKey':'first','question':'What is your name','options':[{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'}],'questionType':'radio'},
   {'questionKey':'first','question':'What is your name','options':[{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'}],'questionType':'radio'},
   {'questionKey':'first','question':'What is your name','options':[{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'},{'ansKey':'a','questionDesc':'suraj'}],'questionType':'radio'},
  ];

  ngOnInit() {
    this.ques = this.questions;
  }
 
 selected(evt,i){
   console.log(evt,i);
 }
 redirectTosubmit(){
  this.router.navigate(['submit']);
 }
}
