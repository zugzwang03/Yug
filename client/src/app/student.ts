export interface studentRegistration {
    email: string,
    password: string,
    firstName: string,
    middleName: string,
    lastName: string,
    rollNo: number,
    grade: number,
    address: string,
    fathersName: string,
    mothersName: string,
    phoneNumber: number,
    parentPhoneNumber: number
};

export interface studentLogin {
    email: string,
    password: string
};

export interface studentInfo {
    firstName: string,
    middleName: string,
    lastName: string,
    rollNo: number,
    grade: number,
    address: string,
    fathersName: string,
    mothersName: string,
    phoneNumber: number,
    parentPhoneNumber: number
}

