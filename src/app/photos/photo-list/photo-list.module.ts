import { DarkOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './photos/filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent

    ],
    imports: [CommonModule,
              PhotoModule,
              CardModule,
              DarkOnHoverModule
            ]
})
export class PhotoListModule {

}
