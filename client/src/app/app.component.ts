import { Component, Input, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'Yug';
  @Input() loginInfo = 'Login';
  constructor(private studentService: StudentService) { }
  ngOnInit() {
    const toggleBtn = document.querySelector(".menu-toggle");
    const toggleicon = document.querySelector(".menu-toggle>i");
    const navList = document.querySelector(".nav-list");
    console.log(toggleBtn);

    toggleBtn?.addEventListener("click", function () {
      if (toggleicon?.classList.contains("fa-bars")) {
        toggleicon.classList.replace("fa-bars", "fa-rectangle-xmark");
        navList?.classList.toggle("hide");
      } else {
        toggleicon?.classList.replace("fa-rectangle-xmark", "fa-bars");
        navList?.classList.toggle("hide");
      }
    });
  }
  onActivate() {
    console.log('update login');
    this.loginInfo = this.studentService.studentDetail.firstName + " " + this.studentService.studentDetail.lastName;
  }


}

