import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './Component/detail/detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './Component/home/home.component';
import { DataserviceService } from './service/dataservice.service';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, DetailComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
