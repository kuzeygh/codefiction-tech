import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastListShortComponent } from './podcast-list-short/podcast-list-short.component';
import { AboutComponent } from './about/about.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PodcastListComponent,
    PodcastListShortComponent,
    AboutComponent,
    PodcastsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
