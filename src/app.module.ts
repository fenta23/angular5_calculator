import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatButtonModule


} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalculatorComponent} from "./calculator/calculator.component";
import {CalculatorService} from "./service/calculator.service";

const MATERIAL_IMPORTS = [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MATERIAL_IMPORTS
    ],
    exports: [
        MATERIAL_IMPORTS
    ],
    declarations: [
        AppComponent,
        CalculatorComponent,
    ],
    providers: [CalculatorService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
