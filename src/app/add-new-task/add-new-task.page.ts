import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['Trabajo','Personal','Hogar'];

  taskName;
  taskDate;
  taskPriority;
  taskCategory;

  taskObj;
  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {
  }

  async cancel(){
    await this.modalCtrl.dismiss(this.taskObj);
  }

  selectCat(index){
    this.taskCategory = this.categories[index];
  }

  async addTask(){
    this.taskObj = ({itemName: this.taskName,
                     itemDate: this.taskDate,
                     itemPriority: this.taskPriority,
                    itemCategory: this.taskCategory});

    const uid = this.taskName + this.taskDate;

    if(uid){
      await this.todoService.addTask(uid, this.taskObj);
    }else{
      console.log('No se puede guardar vacio:(');
    }
    this.cancel();
  }

}
