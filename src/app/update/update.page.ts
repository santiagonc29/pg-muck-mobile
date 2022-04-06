import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  @Input() task;

  categories = ['Trabajo','Personal','Hogar'];

  taskName;
  taskDate;
  taskPriority;
  taskCategory;

  taskObj;
  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {
    this.taskName = this.task.value.itemName;
    this.taskDate = this.task.value.itemDate;
    this.taskPriority = this.task.value.itemPriority;
    this.taskCategory = this.task.value.itemCategory;
  }

  selectCat(index){
    this.taskCategory = this.categories[index];
  }

  async cancel(){
    this.modalCtrl.dismiss();
  }

  async update(){
    this.taskObj = ({itemName: this.taskName,
      itemDate: this.taskDate,
      itemPriority: this.taskPriority,
     itemCategory: this.taskCategory});

     const uid = this.task.key;
     await this.todoService.updateTask(uid, this.taskObj);
     this.cancel();
  }

}
