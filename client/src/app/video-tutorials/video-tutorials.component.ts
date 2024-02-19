import { CommonModule } from '@angular/common';
import { Component, Input, Pipe, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { video } from '../video';

@Component({
  selector: 'app-video-tutorials',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './video-tutorials.component.html',
  styleUrl: './video-tutorials.component.css'
})
export class VideoTutorialsComponent {
  videos: video[] = [];
  constructor(private studentService: StudentService, private http: HttpClient, private sanitizer: DomSanitizer) {
    this.http.get('assets/videoTutorials.json').subscribe((res: any) => {
      this.videos = res.videos;
      console.log(this.videos);
    });
  }
  checkAnswer(idx: number) {
    if ((this.videos[idx]['rightAnswer'] as string).toLocaleLowerCase() === this.videos[idx].userAnswer.toLocaleLowerCase()) {
      this.videos[idx]['check'] = "correct";
    } else {
      this.videos[idx]['check'] = "incorrect";
    }
  }
  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
