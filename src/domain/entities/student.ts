import { BaseEntity } from "../../core/entities/baseEntity";


interface StudentProps {
    name: string;
};
export class Student extends BaseEntity<StudentProps> {
}