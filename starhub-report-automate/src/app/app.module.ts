import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MnFullpageModule } from "ngx-fullpage";
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
import { ExecutiveSummaryDivsComponent } from './executive-summary-divs/executive-summary-divs.component';
import { RetailComponentComponent } from './retail-component/retail-component.component';
import { RetailTnpsOverallComponent } from './retail-tnps-overall/retail-tnps-overall.component';
import { HighchartsChartComponent } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AgendaComponent,
    ExecutiveSummaryComponent,
    ExecutiveSummaryDivsComponent,
    HighchartsChartComponent,
    RetailComponentComponent,
    RetailTnpsOverallComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
