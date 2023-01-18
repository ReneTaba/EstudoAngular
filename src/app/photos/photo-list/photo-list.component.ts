import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit, OnDestroy{
  photos: Photo[] = [];
  filter:string = ''
  debounce: Subject<string> = new Subject<string>()
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
    this.debounce
            .pipe(debounceTime(600))
            .subscribe(filter => this.filter = filter)
  }

  ngOnDestroy(): void {
      this.debounce.unsubscribe()
  }

  load(){
    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
            // atribui novamente o valor com o concat para o OnChange
            // saber que mudou a lista
            // se vc apenas inclui itens na lista o OnChange nao ve a mudança
            this.photos = this.photos.concat(photos);
            if(!photos.length) this.hasMore=false;
        })
  }

  // Fiz isso pq colocar diretamente o KeyUp no Html nao funcionou
  // pq da erro dizendo que target nao possui value
  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      //this.filter = elemento.value;
      this.debounce.next(elemento.value);
    }
  }

}
