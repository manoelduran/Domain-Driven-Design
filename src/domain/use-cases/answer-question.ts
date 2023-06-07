import { UniqueIdentifier } from "../../core/entities/unique-identifier";
import { AnswerQuestionDTO } from "../dto/AnswerQuestionDTO";
import { Answer } from "../entities/answer";
import { AnswerRepository } from "../repositories/answers-repository";

export class AnswerQuestionUseCase {
    constructor(
        private answersRepository: AnswerRepository,
    ) {
      
    }
   async  execute({instructor_id, question_id, content}: AnswerQuestionDTO) {
        const answer = Answer.create({content, instructorId: new UniqueIdentifier(instructor_id), questionId: new UniqueIdentifier(question_id)})
        await this.answersRepository.create(answer);
        return answer;
    }
}