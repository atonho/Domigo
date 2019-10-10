import { Component, OnInit } from '@angular/core';
import { Timeouts } from 'selenium-webdriver';
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-noite',
  templateUrl: './noite.component.html',
  styleUrls: ['./noite.component.css']
})
export class NoiteComponent implements OnInit {

cadastros = [
  { times: 'Flamengo', jogadores:'Antonio',cidades:'Rio de Janeiro'},
  { times: 'Palmeira', jogadores:'Dunga',cidades:'São Paulo'},
]


  constructor() { }

  ngOnInit() {
  }

}
