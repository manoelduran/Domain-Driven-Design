import { BaseEntity } from "../../core/entities/baseEntity";

interface InstructorProps {
    name: string;
};

export class Instructor extends BaseEntity<InstructorProps> {
}