import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NetsContainerComponent } from './containers/nets-container/nets-container.component';
import { LunchContainerComponent } from './containers/lunch-container/lunch-container.component';
import { MediaCellComponent } from './components/media-cell/media-cell.component';
import { ListComponent } from './components/list/list.component';
import { MapComponent } from './components/map/map.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NetsContainerComponent,
    LunchContainerComponent,
    MediaCellComponent,
    ListComponent,
    MapComponent,
    ItemDetailComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
