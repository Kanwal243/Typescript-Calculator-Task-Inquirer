"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
exports.questions = [
    {
        type: 'input',
        name: 'first_num',
        message: 'Enter a first number:',
        validate: validateVal()
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Choose an operation:',
        choices: [
            "Add",
            "Subtract",
            "Multiply",
            "Divide"
        ],
        filter: (val) => val.toLowerCase(),
        validate: validateVal()
    },
    {
        type: 'input',
        name: 'second_num',
        message: 'Enter a second number:',
        validate: validateVal(),
    },
];
function validateVal() {
    return (val) => {
        const isValid = Boolean(val);
        return isValid || 'Please enter a number';
    };
}
//# sourceMappingURL=question.js.map