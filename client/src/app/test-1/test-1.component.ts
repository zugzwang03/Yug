import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, MatRadioGroup, MatRadioButton } from "@angular/material/radio";
import { CommonModule } from '@angular/common';
import { questionSet } from '../question';
import { HttpClient } from '@angular/common/http';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-test-1',
  standalone: true,
  imports: [MatRadioModule, FormsModule, MatRadioGroup, MatRadioButton, CommonModule],
  templateUrl: './test-1.component.html',
  styleUrl: './test-1.component.css'
})
export class Test1Component {
  answer: string = "";
  questionSet: questionSet[] = [];
  answers: String[] = [];
  constructor(private http: HttpClient) { 
    this.getQuestions();
  }
  getQuestions() {
    this.http.get("assets/questionSet.json").subscribe((res: any) =>{
      this.questionSet = res.questionSet;
    });
  }
  checkAnswers() {
    var totalScore = this.questionSet.length;
    var scoreObtained = 0;
    for(var i = 0; i < this.questionSet.length; i++) {
      var userAnswer = (this.answers[i]);
      var rightAnswer = (this.questionSet[i].rightAnswer);
      if(userAnswer == rightAnswer) {
        scoreObtained++;
      }
    }
    console.log(scoreObtained / totalScore);
  }
  onRadioChange(event: MatRadioChange, index: number) {
    const selectedValue = event.value.value; 
    this.answers[index] = selectedValue;
  }
}
