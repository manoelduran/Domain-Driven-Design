import { BaseEntity } from "@/core/entities/baseEntity";
import { UniqueIdentifier } from "@/core/entities/unique-identifier";
import { Optional } from "@/core/types/optional";

interface AnswerProps {
    content: string,
     instructorId: UniqueIdentifier,
     questionId: UniqueIdentifier,
     createdAt: Date,
     updatedAt?: Date
}

export class Answer extends BaseEntity<AnswerProps> {
    get content() {
        return this.props.content
    }
    get instructorId() {
        return this.props.instructorId
    }
    get questionId() {
        return this.props.questionId
    }
    get createdAt() {
        return this.props.createdAt
    }
    get updatedAt() {
        return this.props.updatedAt
    }
    get excerpt() {
        return this.content.substring(0, 120).trimEnd().concat('...')
     }
     private touch() {
         this.props.updatedAt = new Date();
     }
  
     set content(content: string) {
         this.props.content = content;
         this.touch()
     }
    static create(props: Optional<AnswerProps, 'createdAt'>, id?: UniqueIdentifier) {
        const answer = new Answer({
             ...props,
             createdAt: new Date()
        }, id);
        return answer
    }
}