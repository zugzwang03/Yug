import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, StudentRegistrationComponent, StudentLoginComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Yug';
  @Input() loginInfo = 'Login ';
  isLoggedIn: Boolean = false;
  constructor(private studentService: StudentService, private dialog: MatDialog, private router: Router) { }
  ngOnInit() {
    this.isLoggedIn = this.studentService.isLoggedIn;
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
    this.isLoggedIn = this.studentService.isLoggedIn;
    console.log('update login');
    this.loginInfo = this.studentService.studentDetail.firstName + " " + this.studentService.studentDetail.lastName;
  }

  openDialogBox() {
    if (this.loginInfo == "Login" || this.isLoggedIn == false) {
      alert("You have to login at first to access this feature!");
      this.router.navigateByUrl('studentLogin');
      return;
    }
    let dialogRef = this.dialog.open(PopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === "Start now") {
        this.router.navigateByUrl('test');
      }
      else {
        this.router.navigateByUrl('landing-page');
      }
    })
  }
}

