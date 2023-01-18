import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ErrosModule } from './erros/erros.module';
import { PhotosModule } from './photos/photos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        PhotosModule,
        AppRoutingModule,
        ErrosModule
    ]
})
export class AppModule { }
