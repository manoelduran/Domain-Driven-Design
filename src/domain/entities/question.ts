import { BaseEntity } from "../../core/entities/baseEntity";
import { Slug } from "./value-objects/slug";

interface QuestionProps {
    title: string;
    content: string;
    slug: Slug;
    studentId: string;
}
export class Question extends BaseEntity<QuestionProps> {
}