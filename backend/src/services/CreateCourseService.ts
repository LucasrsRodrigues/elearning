import { getCustomRepository } from 'typeorm';
import Course from '../models/Course';
import CoursesRepository from '../repositories/CoursesRepository';

interface Request {
  name: string;
  image: string;
}

class CreateCourseService {
  public async execute({ name, image }: Request): Promise<Course> {
    const coursesRepository = getCustomRepository(CoursesRepository);

    const findCourse = await coursesRepository.findByName(name);

    if (findCourse) {
      throw Error('This Course has ben created');
    }

    const course = coursesRepository.create({ name, image });

    await coursesRepository.save(course);

    return course;
  }
}

export default CreateCourseService;
