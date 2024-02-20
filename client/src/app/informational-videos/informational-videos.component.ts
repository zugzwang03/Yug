import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { videos } from '../card';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-informational-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informational-videos.component.html',
  styleUrl: './informational-videos.component.css'
})
export class InformationalVideosComponent implements OnInit{
  videos: videos[] = [];
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit() {
    this.http.get<videos>('assets/informationalVideos.json').subscribe((data: any) => {
      this.videos = data.informationalVideos;
    });
  }
  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
