import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MnFullpageModule } from "ngx-fullpage";
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
import { RetailComponentComponent } from './retail-component/retail-component.component';
import { RetailTnpsOverallComponent } from './retail-tnps-overall/retail-tnps-overall.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { StaffSatMtTrComponent } from './staff-sat-mt-tr/staff-sat-mt-tr.component';
import { TripleLineChartComponent } from './triple-line-chart/triple-line-chart.component';
import { DoubleLineChartComponent } from './double-line-chart/double-line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { TopBottomTableComponent } from './top-bottom-table/top-bottom-table.component';
import { TNPSTableComponent } from './tnps-table/tnps-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AgendaComponent,
    ExecutiveSummaryComponent,
    HighchartsChartComponent,
    RetailComponentComponent,
    RetailTnpsOverallComponent,
    StaffSatMtTrComponent,
    TripleLineChartComponent,
    DoubleLineChartComponent,
    BarChartComponent,
    ColumnChartComponent,
    TopBottomTableComponent,
    TNPSTableComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
