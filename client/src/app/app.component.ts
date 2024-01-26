import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { studentRegistration } from './student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Yug';
  student: studentRegistration = {
    email: "student1@gmail.com",
    password: "student1",
    firstName: "Student",
    lastName: "One",
    rollNo: 1,
    grade: 3,
    address: "Student 1's address",
    fathersName: "Student 1's father",
    mothersName: "Student 1's mother",
    phoneNumber: 1234567890,
    parentPhoneNumber: 9087654321
  };
  constructor(private studentService: StudentService) { }
  ngOnInit() {
    this.studentRegister();
  }
  async studentRegister() {
    await this.studentService.studentRegistration(this.student).subscribe(res => {
      if (JSON.parse(JSON.stringify(res)).token) {
        console.log('Student registered');
      }
    })
  }
}
