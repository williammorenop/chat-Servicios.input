import { Injectable } from '@angular/core';
import { Mensaje } from '../modelo/mensaje';
import { NumberFormatStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicioChatService {
  mensajes: Mensaje[] = [];
  constructor() { }

  guardarMensaje(mensaje: Mensaje): void {
    this.mensajes.push(mensaje);
    console.log('Me llega:');
    console.log(mensaje);
    console.log(this.mensajes);
  }

}
