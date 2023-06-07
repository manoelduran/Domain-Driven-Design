import { BaseEntity } from "@/core/entities/baseEntity";
import { UniqueIdentifier } from "@/core/entities/unique-identifier";


interface StudentProps {
    name: string;
};
export class Student extends BaseEntity<StudentProps> {
    static create(props: StudentProps, id?: UniqueIdentifier) {
        const student = new Student(props, id);
        return student
    }
}