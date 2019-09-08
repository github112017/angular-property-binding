import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() childProperty;

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called with:', changes);
  }
}
