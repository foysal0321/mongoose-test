import { Schema, model } from 'mongoose';
import { Gardian, Student, UserName } from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
    required: true,
  },
});

const gaurgianSchema = new Schema<Gardian>({
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfbirth: { type: String },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emmergency: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB-', 'AB+'],
  address: { type: String, required: true },
  guardian: gaurgianSchema,
  isActive: ['active', 'block'],
  profileImg: { type: String },
});

export const StudentModel = model<Student>('Student', studentSchema);
