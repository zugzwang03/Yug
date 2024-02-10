import { Component, Input } from '@angular/core';
import { studentRegistration } from '../student';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {
  @Input() student: studentRegistration = {
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
  };

  constructor(private studentService: StudentService, private router: Router) { }
  studentRegister() {
    this.studentService.studentRegistration(this.student).subscribe((res) => {
      var msg = JSON.parse(JSON.stringify(res));
      if (msg.success) {
        console.log('Student registered');
      }
      else {
        alert('Student already have an account');
        alert('Try logging in');
      }
      this.router.navigate(['studentLogin']);
    });
  }
}
