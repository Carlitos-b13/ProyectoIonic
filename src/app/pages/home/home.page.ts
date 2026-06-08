import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonIcon, IonItem,IonList, IonLabel, IonInput } from '@ionic/angular/standalone';
import { Task } from '../../models/task.models';
import { addIcons } from 'ionicons';
import {addOutline} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,IonIcon ,IonLabel ,IonList, IonTitle,IonButton, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonInput]
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
    addIcons({
      addOutline
    })
    console.log(this.tasks);

  }

addTask(){

  console.log(this.newTaskStr)

  const titulo = this.newTaskStr.trim();

  if (!titulo) {
    alert('El título no puede estar vacío');
    return;
  }

  const existe = this.tasks.some(task => task.titulo === titulo);

  if (existe) {
    alert('Ya existe una tarea con ese título');
    return;
  }

  const newTask : Task ={
    id: Date.now(),
    titulo : titulo,
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