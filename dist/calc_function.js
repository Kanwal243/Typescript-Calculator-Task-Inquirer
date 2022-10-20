"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performCalculation = void 0;
const performCalculation = ({ first_num, operation, second_num }) => {
    let result = 0;
    switch (operation) {
        case 'add':
            result = first_num + second_num;
            break;
        case 'subtract':
            result = first_num - second_num;
            break;
        case 'multiply':
            result = first_num * second_num;
            break;
        case 'divide':
            result = first_num / second_num;
            break;
        default:
            result;
    }
    console.log(`Answer: ${result}`);
};
exports.performCalculation = performCalculation;
//# sourceMappingURL=calc_function.js.map