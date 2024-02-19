import { Component, OnInit, Renderer2 } from '@angular/core';
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
  constructor(private studentService: StudentService, private router: Router, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.aptitudeScore = this.studentService.aptitudeScore;
    var pie = document.querySelector('.pie');
    console.log(pie);
    this.renderer.setStyle(pie, 'background-image', `conic-gradient(rgba(18, 167, 68, 0.304)  ${this.aptitudeScore.percentage }%, rgba(221, 11, 11, 0.336) ${(this.aptitudeScore.percentage) }%)`);
  }
  backHome() {
    this.router.navigateByUrl('landing-page')
  }
}
