import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";

const API = 'http://localhost:3000';

// Incluido o Provider do PhotoService no root
// assim todos os modulos podem acessar a mesma instancia do compenente

@Injectable({ providedIn: 'root' })
export class PhotoService {

    // colocamos o private para poder usar na classe
    constructor(private http: HttpClient) {}

    // Se nao colocar o String da erro
    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/'+userName+'/photos');
    }

    listFromUserPaginated(userName: string, page: number) {
      const params = new HttpParams()
            .append('page', page.toString())
      return this.http
          .get<Photo[]>(API + '/'+userName+'/photos', { params });
    }

}
