import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses')
class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;
}
export default Course;
