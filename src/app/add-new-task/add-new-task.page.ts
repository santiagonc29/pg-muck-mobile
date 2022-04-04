import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async cancel(){
    await this.modalCtrl.dismiss(this.taskObj);
  }

  selectCat(index){
    this.taskCategory = this.categories[index];
  }

  addTask(){
    this.taskObj = ({itemName: this.taskName,
                     itemDate: this.taskDate,
                     itemPriority: this.taskPriority,
                    itemCategory: this.taskCategory});

    this.cancel();
  }

}
