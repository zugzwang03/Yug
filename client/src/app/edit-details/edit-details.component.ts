import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { studentRegistration } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.css'
})
export class EditDetailsComponent {
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

  constructor(private studentService: StudentService, private router: Router) { 
    this.student = studentService.studentDetail;
  }

  saveDetails() {
    this.studentService.studentDetail = this.student;
    this.studentService.editInfo(this.student).subscribe(res => {
      console.log(res);
    });
    this.router.navigateByUrl('/studentInfo');
  }

}
