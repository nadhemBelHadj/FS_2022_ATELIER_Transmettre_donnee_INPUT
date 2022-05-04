import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styles: [
  ]
})
export class UpdateCategorieComponent implements OnInit {

  @Input()
  categorie! : Categorie;

  @Input()
  ajout!:boolean;

  @Output() 
  categorieUpdated = new EventEmitter<Categorie>();


  constructor() { }

  ngOnInit(): void {
    
  }

  saveCategorie(){
    this.categorieUpdated.emit(this.categorie);
  }


  modeAjout()
  {
    this.ajout=true;
    this.categorie.idCat = 0;
    this.categorie.nomCat="";
  }
}
