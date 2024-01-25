export interface studentRegistration {
    email: string,
    password: string,
    firstName: string,
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