import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { card } from '../card';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scholarship-portal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './scholarship-portal.component.html',
  styleUrl: './scholarship-portal.component.css'
})
export class ScholarshipPortalComponent {
  cards: card[] = [
    {
      title: 'Scholarship 1',
      description: 'Scholarship 1 description',
      link: 'https://www.google.com',
      image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' 
    }
  ];

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
    http.get<card[]>('assets/scholarships.json').subscribe((cards: any) => {
      this.cards = cards['scholarships'];
      console.log(this.cards);
    });
  }
  
  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
