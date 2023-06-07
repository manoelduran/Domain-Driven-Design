import dayjs from "dayjs";
import { BaseEntity } from "@/core/entities/baseEntity";
import { UniqueIdentifier } from "@/core/entities/unique-identifier";
import { Optional } from "@/core/types/optional";
import { Slug } from "./value-objects/slug";

interface QuestionProps {
    title: string;
    content: string;
    slug: Slug;
    studentId: UniqueIdentifier;
    bestAnswerId?: UniqueIdentifier;
    createdAt: Date;
    updatedAt?: Date;
}
export class Question extends BaseEntity<QuestionProps> {
    get content() {
        return this.props.content
    }
    get studentId() {
        return this.props.studentId
    }
    get slug() {
        return this.props.slug
    }
    get title() {
        return this.props.title
    }
    get bestAnswerId() {
        return this.props.bestAnswerId
    }
    get createdAt() {
        return this.props.createdAt
    }
    get updatedAt() {
        return this.props.updatedAt
    }
    get isNew(): boolean {
        return dayjs().diff(this.createdAt) <= 3
    }
    get excerpt() {
       return this.content.substring(0, 120).trimEnd().concat('...')
    }
    private touch() {
        this.props.updatedAt = new Date();
    }
    set title(title: string) {
        this.props.title = title;
        this.props.slug = Slug.createFromText(title);
        this.touch()
    }
    set content(content: string) {
        this.props.content = content;
        this.touch()
    }
    set bestAnswerId(bestAnswerId: UniqueIdentifier | undefined ) {
        this.bestAnswerId = bestAnswerId;
        this.touch()
    }
    static create(props: Optional<QuestionProps, 'createdAt' | 'slug'>, id?: UniqueIdentifier) {
        const question = new Question({
             ...props,
             slug: props.slug ?? Slug.createFromText(props.title),
             createdAt: new Date()
        }, id);
        return question
    }
}