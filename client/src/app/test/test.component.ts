import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from "@angular/material/radio";
import { CommonModule } from '@angular/common';
import { questionSet } from '../question';
import { HttpClient } from '@angular/common/http';
import { MatRadioChange } from '@angular/material/radio';
import { StudentService } from '../student.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatRadioModule, FormsModule, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  questionSet: questionSet[] = [];
  timer: number = 60;
  constructor(private http: HttpClient, private studentService: StudentService, private router: Router) {
    this.getQuestions();
    var refToThis = this;
    setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.timer = 60;
      }
      this.ngOnInit();
    }, 1000)
    setTimeout(function () {
      refToThis.checkAnswers();
    }, 60000);
  }
  ngOnInit() {
    const timerElement = document.querySelector('.timer');
    if (this.timer <= 10) {
      timerElement?.classList.add("red-text");
    }
    else {
      timerElement?.classList.add("green-text");
    }
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
      var userAnswer = (this.questionSet[i].userAnswer);
      var rightAnswer = (this.questionSet[i].rightAnswer);
      if (userAnswer == rightAnswer) {
        scoreObtained++;
      }
    }
    this.studentService.aptitudeScore = {
      userScore: scoreObtained,
      totalScore: totalScore,
      percentage: (scoreObtained / totalScore) * 100
    };
    this.studentService.updateAptitudeScore(this.studentService.aptitudeScore, this.studentService.studentDetail.email).subscribe(res => console.log(res));
    this.router.navigateByUrl('score-card');
  }
  onRadioChange(event: MatRadioChange, index: number) {
    const selectedValue = event.value.value;
    this.questionSet[index].userAnswer = selectedValue;
  }
}
