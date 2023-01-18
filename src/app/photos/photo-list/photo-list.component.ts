import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit{
  photos: any[] = [];

  // Vou deixar o constructor apenas para injecao de dependencias
  // passando as logicas de negocio para uma funcao ngOnInit
  constructor(private photoService: PhotoService,
              private activatedRoute: ActivatedRoute)
          {}

  ngOnInit(){
    const userName = this.activatedRoute.snapshot.params['userName'];
    this.photoService.listFromUser(userName)
        .subscribe(photos => this.photos = photos)
  }


}
