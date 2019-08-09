import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MnFullpageModule } from "ngx-fullpage";
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
