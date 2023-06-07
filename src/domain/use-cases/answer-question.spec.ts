import { AnswerQuestionUseCase } from './answer-question';
import { AnswerRepository } from '../repositories/answers-repository';
import { Answer } from '../entities/answer';

const fakeAnswerRepository: AnswerRepository = {
    create:  async (answer: Answer) => {
        return
    }
}

test('Create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);
    const answer = await answerQuestion.execute( {instructor_id: '1', question_id: '1',content: 'New answer'})
    expect(answer.content).toEqual("New answer");
})