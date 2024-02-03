import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, MatRadioGroup, MatRadioButton } from "@angular/material/radio";
import { CommonModule } from '@angular/common';
import { questionSet } from '../question';
import { HttpClient } from '@angular/common/http';
import { MatRadioChange } from '@angular/material/radio';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatRadioModule, FormsModule, MatRadioGroup, MatRadioButton, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  answer: string = "";
  questionSet: questionSet[] = [];
  answers: String[] = [];
  constructor(private http: HttpClient, private studentService: StudentService) {
    this.getQuestions();
  }
  getQuestions() {
    this.http.get(`assets/questionSet${this.studentService.studentDetail.grade}.json`).subscribe((res: any) => {
      this.questionSet = res.questionSet;
    });
  }
  checkAnswers() {
    var totalScore = this.questionSet.length;
    var scoreObtained = 0;
    for (var i = 0; i < this.questionSet.length; i++) {
      var userAnswer = (this.answers[i]);
      var rightAnswer = (this.questionSet[i].rightAnswer);
      if (userAnswer == rightAnswer) {
        scoreObtained++;
      }
    }
    console.log((scoreObtained / totalScore) * 100);
  }
  onRadioChange(event: MatRadioChange, index: number) {
    const selectedValue = event.value.value;
    this.answers[index] = selectedValue;
  }
}
