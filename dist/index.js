"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const question_1 = require("./question");
const calc_function_1 = require("./calc_function");
inquirer_1.default.prompt(question_1.questions).then((answers) => {
    (0, calc_function_1.performCalculation)({
        first_num: Number(answers.first_num),
        operation: answers.operation,
        second_num: Number(answers.second_num)
    });
});
//# sourceMappingURL=index.js.map