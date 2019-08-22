import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../modelo/mensaje';
import { ServicioChatService } from '../services/servicio-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje = new Mensaje('', '');
  nombre: string;
  texto: string;
  constructor(private servicioChat: ServicioChatService) { }

  ngOnInit() {
  }

  procesarMensaje() {
    this.servicioChat.guardarMensaje( new Mensaje(this.nombre, this.texto));
  }

}
