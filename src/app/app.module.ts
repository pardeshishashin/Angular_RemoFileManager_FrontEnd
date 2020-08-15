import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeviewModule } from 'ngx-treeview';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TreeviewModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
