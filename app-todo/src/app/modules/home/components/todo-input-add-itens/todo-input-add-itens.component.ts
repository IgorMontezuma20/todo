import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemInTaskList: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitItemTaskList() {

    this.addItemInTaskList = this.addItemInTaskList.trim();
    if (this.addItemInTaskList) {
      this.emitItemTaskList.emit(this.addItemInTaskList);
      this.addItemInTaskList = '';
    }
    else{
      window.alert("Insira um a valor válido antes de confirmar.")
    }
  }
}
