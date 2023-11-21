export type Gardian = {
  fatherName: string;
  motherName: string;
};
export type UserName = {
  firstname: string;
  middlename: string;
  lastname: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfbirth: string;
  contactNumber: string;
  emmergency: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB-' | 'AB+';
  address: string;
  email: string;
  guardian: Gardian;
  profileImg?: string;
  isActive: 'active' | 'block';
};
