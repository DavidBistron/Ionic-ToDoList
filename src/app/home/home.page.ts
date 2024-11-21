import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic, calendar, add } from 'ionicons/icons';
import { IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonButton, IonCheckbox, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonFab, IonFabButton, IonList, IonListHeader, IonLabel, IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

// Used components
@Component({
  // html, scss names
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonButton, IonCheckbox, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonFab, IonFabButton, IonList, IonListHeader, IonLabel, IonItem],
})

// Main Class for handling functions 
export class HomePage {
  todoList: string[] = ['Milch', 'Kuchen', 'Essen'];
  
  constructor() {
    addIcons({calendar,add,logoIonic});
  }
}