import { Component, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { studentRegistration } from '../student';
import { aptitudeScore } from '../question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent {
  student: studentRegistration = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    middleName: "",
    rollNo: -1,
    grade: -1,
    address: "",
    fathersName: "",
    mothersName: "",
    phoneNumber: 0,
    parentPhoneNumber: 0
  }
  aptitudeScore: aptitudeScore = {
    userScore: 0,
    totalScore: 5,
    percentage: 0
  }
  @Output() loginInfo = new EventEmitter();
  constructor(private studentService: StudentService, private router: Router) {
    this.student = this.studentService.studentDetail;
    this.aptitudeScore = this.studentService.aptitudeScore;
  }

  logOut() {
    this.studentService.studentDetail = {
      email: "",
      password: "",
      firstName: "Login",
      lastName: "",
      middleName: "",
      rollNo: -1,
      grade: -1,
      address: "",
      fathersName: "",
      mothersName: "",
      phoneNumber: 0,
      parentPhoneNumber: 0
    };
    this.studentService.aptitudeScore = {
      userScore: 0,
      totalScore: 0,
      percentage: 0
    }
    this.studentService.isLoggedIn = false;
    this.loginInfo.emit(); 
    this.router.navigateByUrl('studentLogin');
  }

}
