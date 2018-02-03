import { Injectable } from '@angular/core';
import { CalculatorModel } from '../model/calculator.model';

@Injectable()
export class CalculatorService {
    getOptions() {
        return [
            new CalculatorModel('foo', 'Erklärung'),
            new CalculatorModel('bar', 'Erklärung 2')
        ];
    }
}