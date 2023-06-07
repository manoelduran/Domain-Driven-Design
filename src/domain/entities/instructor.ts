import { BaseEntity } from "@/core/entities/baseEntity";
import { UniqueIdentifier } from "@/core/entities/unique-identifier";

interface InstructorProps {
    name: string;
};

export class Instructor extends BaseEntity<InstructorProps> {
    static create(props: InstructorProps, id?: UniqueIdentifier) {
        const instructor = new Instructor(props, id);
        return instructor
    }
}