import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-frm-cliente',
  templateUrl: './frm-cliente.component.html',
  styleUrls: ['./frm-cliente.component.css']
})
export class FrmClienteComponent implements OnInit {

  constructor() { }

  model: Cliente = new Cliente();

  ngOnInit(): void {
  }

  onConfirmar() {
    console.log(this.model);
  }

}
