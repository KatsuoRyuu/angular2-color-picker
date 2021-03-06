import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ColorPickerModule} from 'angular2-color-picker';

import {AppComponent} from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, ColorPickerModule]
})
export class AppModule { }