import inquirer from 'inquirer';
import { questions } from './question';

import AnswersI from './ts/interface';

import { performCalculation } from './calc_function';

inquirer.prompt(questions).then((answers: AnswersI) => {
  performCalculation({
    first_num: Number(answers.first_num),
    operation: answers.operation,
    second_num: Number(answers.second_num)
  });
});
