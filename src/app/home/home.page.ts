import { Component } from '@angular/core';
import { AlertController, IonAlert, IonText, IonHeader, IonInput, IonReorderGroup, IonReorder, IonSegment, IonSegmentButton, IonIcon, IonToolbar, IonTitle, IonContent, IonButton, IonCheckbox, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonFab, IonFabButton, IonList, IonListHeader, IonLabel, IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

// Used components
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonAlert, IonText, IonHeader, IonInput, IonReorder, IonReorderGroup, IonSegmentButton, IonSegment, IonIcon, IonToolbar, IonTitle, IonContent, IonButton, IonCheckbox, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonFab, IonFabButton, IonList, IonListHeader, IonLabel, IonItem],
})

// Main Class for handling functions 
export class HomePage {
  
  // Constructor
  constructor(private alertController: AlertController) {}

  // ToDo List with default values
  todoList: ToDo[] = [
    { title: 'Shopping', subtitle: 'Food', content: 'Milk and Eggs', actions: ['Done', 'Undone', 'Delete'], isDone: false },
    { title: 'Household', subtitle: 'Clean', content: 'Wash the dishes', actions: ['Done', 'Undone', 'Delete'], isDone: false },
    { title: 'Work', subtitle: 'Call CEO', content: 'Discuss annual report', actions: ['Done', 'Undone', 'Delete'], isDone: false }
  ];

  // Function for adding new ToDo
  async addToDo() {
    
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

  // Function: Mark ToDo as done
  markAsDone(todoToMark: ToDo) {
    todoToMark.isDone = true;
    
  } 

  // Function: Mark ToDo as undone
  markAsUndone(todoToMark: ToDo) {
    todoToMark.isDone = false;
  }
}

export interface ToDo {
  title: string;
  subtitle: string;
  content: string;
  actions: string[];
  isDone: boolean;
}