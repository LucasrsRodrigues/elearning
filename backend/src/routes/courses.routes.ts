import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CoursesRepository from '../repositories/CoursesRepository';
import CreateCourseService from '../services/CreateCourseService';

const coursesRouter = Router();

coursesRouter.get('/', async (request, response) => {
  const coursesRepository = getCustomRepository(CoursesRepository);

  const courses = await coursesRepository.find();

  return response.json(courses);
});

coursesRouter.post('/', async (request, response) => {
  try {
    const { name, image } = request.body;

    const createCourse = new CreateCourseService();

    const course = await createCourse.execute({ name, image });

    return response.json(course);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default coursesRouter;
