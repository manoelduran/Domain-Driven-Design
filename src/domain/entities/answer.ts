import { BaseEntity } from "../../core/entities/baseEntity";

interface AnswerProps {
    content: string,
     instructorId: string,
     questionId: string
}

export class Answer extends BaseEntity<AnswerProps> {
    get content() {
        return this.props.content
    }
}