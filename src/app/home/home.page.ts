import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdatePage } from '../update/update.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [];

  today: number = Date.now();
  constructor(public modalCtrl: ModalController, public todoService: TodoService) {
    this.getAllTask();
  }

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });

    modal.onDidDismiss().then(newTaskObj =>{
      this.getAllTask();
    });

    return await modal.present();
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTask();
    console.log(this.todoService.getAllTask());
  }

  borrar(key){
    this.todoService.deleteTask(key);
    this.getAllTask();
  }

  async upt(selectedTask){
    const modal = await this.modalCtrl.create({
      component: UpdatePage,
      componentProps: {task: selectedTask}
    });

    modal.onDidDismiss().then(()=>{
      this.getAllTask();
    });

    return await modal.present();
  }

}
// Santiago Nariño Cardenas copyright 2022