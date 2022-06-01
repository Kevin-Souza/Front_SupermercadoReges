import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../Services/cliente.service';

@Component({
  selector: 'app-frm-cliente',
  templateUrl: './frm-cliente.component.html',
  styleUrls: ['./frm-cliente.component.css']
})
export class FrmClienteComponent implements OnInit {

  constructor(private router: Router, private clienteService: ClienteService, private route: ActivatedRoute) { }

  //Criar objeto do tipo cliente
  model: Cliente = new Cliente();

  voltarParaLista() {
    this.router.navigate(['/clientes']);
  }

  ngOnInit(): void {

  }

  obterPorId(){

    var id:number = this.route.snapshot.params['id'];

    this.clienteService.ObterPorId(id).subscribe(
      dados => {
        this.model = dados;
      },
      e => {
        console.log(e.error);
      },
      );
  }



  onConfirmar() {
    var id: number = this.route.snapshot.params['id'];

    if (id > 0) {

      this.clienteService.Editar(id, this.model).subscribe((data) => {
        if (data > 0) {
          alert("cliente alterado com sucesso!!");
          this.voltarParaLista();
        }
      });

    } else {
      this.clienteService.Adicionar(this.model).subscribe((data) => {
        if (data > 0) {
          alert("cliente cadastro com sucesso!!");
          this.voltarParaLista();
        }
      });
    }
  }
}
