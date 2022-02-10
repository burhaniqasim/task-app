import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() color: string;
  @Input() text: string;
  @Input() disableBtn: boolean = false;

  @Output() btnClick = new EventEmitter();

  constructor() { 
    this.color = ""
    this.text = ""
  }

  ngOnInit(): void {
    console.log('disabled : ', this.disableBtn)
  }

  onClickHandler(){
    this.btnClick.emit()
  }

}
