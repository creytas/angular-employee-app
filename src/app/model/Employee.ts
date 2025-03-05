export class Employee {
  employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: number;
  password: string;
  gender: string;
  role: string;
  createdDate: Date;

  constructor(
    employeeId: number,
    employeeName: string,
    contactNo: string,
    emailId: string,
    deptId: number,
    password: string,
    gender: string,
    role: string,
    createdDate: Date
  ){
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.contactNo = contactNo;
    this.emailId = emailId;
    this.deptId = deptId;
    this.password = password;
    this.gender = gender;
    this.role = role;
    this.createdDate = createdDate;
  }
}
