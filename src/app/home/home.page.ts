import { Component } from '@angular/core';
import { AlertController, IonAlert, IonText, IonHeader, IonInput, IonReorderGroup, IonReorder, IonSegment, IonSegmentButton, IonIcon, IonToolbar, IonTitle, IonContent, IonButton, IonCheckbox, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonFab, IonFabButton, IonList, IonListHeader, IonLabel, IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Comment +++++++++++++++++++++
export interface ToDo {
  title: string;
  subtitle: string;
  content: string;
  actions: string[];
  isDone: boolean;
}

// Used components
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonSegment, IonAlert, IonText, IonHeader, IonInput, IonReorder, IonReorderGroup, IonSegmentButton, IonIcon, IonToolbar, IonTitle, IonContent, IonButton, IonCheckbox, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonFab, IonFabButton, IonList, IonListHeader, IonLabel, IonItem],
})

// Main Class for handling functions 
export class HomePage {
  // Filter Variable - display all by default
  filterStatus: string = 'all';
  
  // Constructor
  constructor(private alertController: AlertController) {}

  // ToDo List with default values
  todoList: ToDo[] = [
    { title: 'Shopping', subtitle: 'Food', content: 'Milk and Eggs', actions: ['Done', 'Undone', 'Delete'], isDone: false },
    { title: 'Household', subtitle: 'Clean', content: 'Wash the dishes', actions: ['Done', 'Undone', 'Delete'], isDone: false },
    { title: 'Work', subtitle: 'Call CEO', content: 'Discuss annual report', actions: ['Done', 'Undone', 'Delete'], isDone: false }
  ];

  // Public alert input for addToDo function
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      name: 'title',
      // type: 'text',
      placeholder: 'ToDo Title',
      value: '',
    },
    {
      name: 'subtitle',
      // type: 'text',
      placeholder: 'ToDo Subtitle',
      value: '',
    },
    {
      name: 'content',
      // type: 'textarea',
      placeholder: 'ToDo Content',
      value: '',
    },
  ];


  // Methode zum Anzeigen des Alerts
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Enter new ToDo',
      inputs: this.alertInputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            this.addToDo(data);

            alert.dismiss();
          },
        },
      ],
    });
    await alert.present();
  }

  // Add new ToDo
  addToDo(data: { title: string; subtitle: string; content: string; }) {
    const newTodo = {
      title: data.title,
      subtitle: data.subtitle,
      content: data.content,
      actions: ['Done', 'Undone', 'Delete'],
      isDone: false,
    };
    this.todoList.push(newTodo);
  }

  // Funktion zur Handhabung von Aktionen
  handleAction(action: string, todo: ToDo) {
    if (action === 'Delete') {
      this.deleteToDo(todo);
    } else if (action === 'Done') {
      this.markAsDone(todo);
    } else if (action === 'Undone') {
      this.markAsUndone(todo);
    }
  }

  // Function: Delete ToDo 
  deleteToDo(todoToDelete: ToDo) {
    const index = this.todoList.indexOf(todoToDelete);
    if (index > -1) {
      this.todoList.splice(index, 1); // Delete ToDo from List
    }
  }

  // Function: Mark ToDo as done = green color
  markAsDone(todoToMark: ToDo) {
    todoToMark.isDone = true;
  } 

  // Function: Mark ToDo as undone = red color
  markAsUndone(todoToMark: ToDo) {
    todoToMark.isDone = false;
  }

  // Function for sort: shows only done elements 
  get filteredTodos() {
    if (this.filterStatus === 'done') {
      return this.todoList.filter(todo => todo.isDone);
    } else if (this.filterStatus === 'undone') {
      return this.todoList.filter(todo => !todo.isDone);
    } else {
      return this.todoList;
    }
  }
}