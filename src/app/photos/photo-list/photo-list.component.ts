import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter:string = ''

  hasMore: boolean = true
  currentPage: number = 1
  userName: string = ''

  // Vou deixar o constructor apenas para injecao de dependencias
  // passando as logicas de negocio para uma funcao ngOnInit
  constructor(private activatedRoute: ActivatedRoute,
              private photoService: PhotoService){}

  ngOnInit(){
    this.userName = this.activatedRoute.snapshot.params['userName']
    this.photos = this.activatedRoute.snapshot.data['photos']
  }


  load(){
    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
            this.filter = ''
            // atribui novamente o valor com o concat para o OnChange
            // saber que mudou a lista
            // se vc apenas inclui itens na lista o OnChange nao ve a mudança
            this.photos = this.photos.concat(photos);
            if(!photos.length) this.hasMore=false;
        })
  }



}
