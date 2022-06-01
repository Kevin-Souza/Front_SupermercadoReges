import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../Services/cliente.service';

@Component({
  selector: 'app-lst-cliente',
  templateUrl: './lst-cliente.component.html',
  styleUrls: ['./lst-cliente.component.css']
})
export class LstClientesComponent implements OnInit {


  constructor(private route: Router,private clienteService: ClienteService ) { }

  clientes!: Cliente[];

  ngOnInit(): void {
    this.obterTodos();
  }


  cadastrarCliente(){

    this.route.navigate(['/cliente']);

  }
  obterTodos(){

    this.clienteService.ObterTodos()
    .subscribe(
      data => {
        this.clientes = data;
      },
      e => {
        console.log(e.error);
      },
      () => {
      });
  }
}