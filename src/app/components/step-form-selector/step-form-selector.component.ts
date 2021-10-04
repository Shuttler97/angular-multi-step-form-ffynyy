import { Component, OnInit, Input, Output } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata';

@Component({
  selector: 'app-step-form-selector',
  templateUrl: './step-form-selector.component.html',
  styleUrls: ['./step-form-selector.component.css']
})
export class StepFormSelectorComponent implements OnInit, OnChanges {
  @Input()step:number
  constructor() { }

  ngOnInit() {
    console.log(this.step)
  }
  ngOnChanges(){
    console.log(this.step)
  }

}