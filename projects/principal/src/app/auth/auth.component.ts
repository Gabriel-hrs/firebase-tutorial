import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor() {}

  adicionarOuRemoverImagemDeFundo() {
    document.body.classList.toggle('auth-background');
  }

  ngOnInit() {
    this.adicionarOuRemoverImagemDeFundo();
  }

  ngOnDestroy() {
    this.adicionarOuRemoverImagemDeFundo();
  }
}