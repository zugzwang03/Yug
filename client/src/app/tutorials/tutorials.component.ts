import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorials',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css'
})
export class TutorialsComponent {
  allowedFileTypes = '.pdf,.docx,.jpg,.jpeg';
  selectedFiles: FileList | null = null;
  correctAnswer: String = "";
  file: any;
  previewUrl: any;
  constructor(private studentService: StudentService) { }
  onFileChange(event: any) {
    this.selectedFiles = event.target.files;

    // Validate file selection here (e.g., check file size, type, etc.)
    if (this.selectedFiles!.length > 1) {
      console.error('Only one file is allowed at a time.');
      this.selectedFiles = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.previewUrl = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);

    // Access individual file properties as needed:
    this.file = this.selectedFiles![0];
    console.log(this.file);
    console.log('File name:', this.file.name);
    console.log('File size:', this.file.size);
    console.log('File type:', this.file.type);


    // Perform further actions with the selected file(s), such as
    // uploading to a server, processing in the client-side, etc.
  }

  checkAnswer() {
    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.studentService.fileUpload(formData).subscribe(res => {
      this.correctAnswer = JSON.stringify(res);
      console.log(this.correctAnswer);
    });
  }
  ngOnInit() {
    // Load the allowed file types dynamically from configuration or state
    // if needed
  }
}
