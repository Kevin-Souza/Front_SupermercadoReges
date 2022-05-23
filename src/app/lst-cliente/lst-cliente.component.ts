import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lst-cliente',
  templateUrl: './lst-cliente.component.html',
  styleUrls: ['./lst-cliente.component.css']
})
export class LstClienteComponent implements OnInit {


  constructor(private route: Router) { }

  cadastrarCliente(){
    this.route.navigate(["/cliente"])
  }
  ngOnInit(): void {
  }

}
