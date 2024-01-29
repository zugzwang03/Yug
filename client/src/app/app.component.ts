import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { studentRegistration } from './student';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, StudentRegistrationComponent, StudentLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Yug';
  @Input() loginInfo = 'Login';
  constructor(private studentService: StudentService) { }
  onActivate() {
    console.log('update login');
    this.loginInfo = this.studentService.studentDetail.firstName + " " + this.studentService.studentDetail.lastName;
  }

  
}

