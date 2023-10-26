import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent {
  @Input() dataUsers!: any;
  @Input() searchEmail: string = '';
  @Output() btnClick = new EventEmitter<string>();
  isBorderRed: boolean = false;

  handleClick() {
    this.btnClick.emit(this.dataUsers.username);
    this.isBorderRed = !this.isBorderRed;

  }
  isEmailMatching(): boolean {
    if (this.searchEmail && this.dataUsers && this.dataUsers.email) {
      return this.dataUsers.email.includes(this.searchEmail);
    }
    return true;
  }
}
