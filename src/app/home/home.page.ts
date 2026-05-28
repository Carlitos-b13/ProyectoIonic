import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton, IonItem,IonList, IonLabel, IonInput } from '@ionic/angular/standalone';
import { Task } from '../models/task.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader ,IonLabel ,IonList, IonTitle,IonButton, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonInput]
})
export class HomePage implements OnInit {

  newTaskStr: string = '';

  tasks: Task[] = [
    {
      id: 1,
      titulo: "Configuración de Ionic",
      descripcion: "Instalar Node.js, AngularCli, Ionic",
      finalizado: true,
      prioridad: "Alta"
    },
    {
      id: 2,
      titulo: "Crear app tasklist",
      descripcion: "Crear el proyecto inicial de Ionic con Angular",
      finalizado: false,
      prioridad: "Media"
    }
  ];

  constructor() { 
    console.log(this.tasks);

  }

  addTask(){
    console.log(this.newTaskStr)
    const newTask : Task ={
      id: Date.now(),
      titulo : this.newTaskStr,
      descripcion:'',
      finalizado: false,
      prioridad : 'Media'

    }  
    this.tasks.push(newTask)
    this.newTaskStr='';

}

  ngOnInit() {
  }

  saludar() {
    console.log("¡Hola, Ionic!");
  }

}