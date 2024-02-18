import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { expert } from '../card';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expert-guidance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expert-guidance.component.html',
  styleUrl: './expert-guidance.component.css'
})
export class ExpertGuidanceComponent {
  experts: expert[] = [];
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private router: Router) {
    this.http.get<expert>('assets/experts.json').subscribe((data: any) => {
      console.log(data);
      this.experts = data;
    });
  }
  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  bookAMeet() {
    this.router.navigateByUrl('bookAMeet');
  }
}