import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HotelindexComponent } from './pages/hotelindex/hotelindex.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HomeComponent, HotelindexComponent],
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
})
export class ClientModule {}
