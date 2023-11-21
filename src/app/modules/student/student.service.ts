import { StudentModel } from '../student.modal';
import { Student } from './student.interface';

const createStudentInoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getStudentDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentService = {
  createStudentInoDB,
  getAllStudentDB,
  getStudentDB,
};
