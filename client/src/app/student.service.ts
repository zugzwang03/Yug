import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentLogin, studentRegistration } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  isLoggedIn: boolean = false;
  studentDetail: studentRegistration = {
    email: "",
    password: "",
    firstName: "LogIn",
    middleName: "",
    lastName: "",
    rollNo: 1,
    grade: 3,
    address: "",
    fathersName: "",
    mothersName: "",
    phoneNumber: 0,
    parentPhoneNumber: 0
  }
  constructor(private http: HttpClient) {}
  studentRegistration(student: studentRegistration): Observable<string> {
    return this.http.post<string>(
      'http://localhost:3000/api/v1/student/register',
      student
    );
  }
  studentLogin(student: studentLogin): Observable<string> {
    return this.http.post<string>(
      'http://localhost:3000/api/v1/student/login',
      student
    );
  }
  getStudentInfo(): Observable<string> {
    return this.http.post<string>(
      'http://localhost:3000/api/v1/student/getInfo',
      {
        email: this.studentDetail.email,
      }
    );
  }
}
