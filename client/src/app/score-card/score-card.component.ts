import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { aptitudeScore } from '../question';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-score-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './score-card.component.html',
  styleUrl: './score-card.component.css'
})
export class ScoreCardComponent implements OnInit {
  aptitudeScore: aptitudeScore = {
    userScore: 0,
    totalScore: 0,
    percentage: 0
  }
  constructor(private studentService: StudentService, private router: Router) { }
  ngOnInit(): void {
    this.aptitudeScore = this.studentService.aptitudeScore;
  }
  backHome() {
    this.router.navigateByUrl('landing-page')
  }
}
