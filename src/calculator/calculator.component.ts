import * as _ from 'lodash';
import { CalculatorService } from '../service/calculator.service';
import { Component, Inject, OnInit } from '@angular/core';
import { CalculatorModel } from '../model/calculator.model'

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html')
})
export class CalculatorComponent implements OnInit {

    // This part is a little weird. @Inject shouldnt be necessary with TS, but it is with fuse-box
    constructor(@Inject(CalculatorService) private _calculatorService: CalculatorService) { }

    amount: any;
    calculatorOptions = this._calculatorService.getOptions();

    ngOnInit() {
        this.amount = 1

    }


    onListOptionChanged() {

        console.log(this.calculatorOptions);
    }
}