import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  photos: any[] = [];

  // Vou deixar o constructor apenas para injecao de dependencias
  // passando as logicas de negocio para uma funcao ngOnInit
  constructor(private photoService: PhotoService){}

  ngOnInit(){
    this.photoService.listFromUser('flavio')
        .subscribe(photos => this.photos = photos)
  }

}
