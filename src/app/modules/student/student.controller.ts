import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentService.createStudentInoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is create successfuly!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentDB();
    res.status(200).json({
      success: true,
      message: 'Students are retive successfuly!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const student = req.params.id;
    const result = await studentService.getStudentDB(student);
    res.status(200).json({
      success: true,
      message: 'Student is retive successfuly!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getStudent,
};
