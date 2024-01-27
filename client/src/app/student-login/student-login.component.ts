import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { studentLogin } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {
  @Input() email = "";
  @Input() password = "";
  @Output() loginInfo = new EventEmitter();
  student: studentLogin = {
    email: "",
    password: ""
  }
  constructor(private studentService: StudentService, private router: Router) { }
  login(): void {
    this.student.email = this.email;
    this.student.password = this.password;
    this.studentService.studentLogin(this.student).subscribe(res => {
      var msg = JSON.parse(JSON.stringify(res));
      if(msg.success) {
        console.log('Student logged in');
        this.studentService.isLoggedIn = true;
        this.studentService.studentDetail = msg.student;    
        this.loginInfo.emit(); 
        this.router.navigate(['landing-page']);
      }
      else if(msg.message == "Incorrect password") {
        console.log('Incorrect password');
        alert('Incorrect password!');
        alert('Try logging in again');
        this.router.navigate(['studentLogin']);
      }
      else {
        console.log('Student not registered');
        alert('Incorrect login details');
        alert('Try logging in again');
        this.router.navigate(['studentLogin']);
      }
    })
  }
}
