import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';

import { environment } from 'src/environments/environment';

import { AuthService } from './../../../auth/service/auth.service';
import { HotelesService } from '../../service/hoteles.service';

import { Hoteles } from 'src/app/interfaces/hoteles';
import { Usuario } from 'src/app/interfaces/usuario';
import { Bares } from './../../../interfaces/bares';

@Component({
  selector: 'app-listbares',
  templateUrl: './listbares.component.html',
  styleUrls: ['./listbares.component.css'],
})
export class ListbaresComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  hotel!: Hoteles[];
  bares!: Bares[];
  public userlogeado: Usuario;
  hotelSeleccionadoId: number;

  public baseUrl: string = environment.baseUrl;

  dataSource!: _MatTableDataSource<any>;

  displayedColumns: string[] = ['Description', 'Foto', 'acciones'];
  constructor(
    private hotelServices: HotelesService,
    private authService: AuthService
  ) {
    this.userlogeado = new Usuario();
  }

  ngOnInit(): void {
    this.LoadHotel();
  }

  LoadHotel() {
    const idlogeado = this.authService.usuario.id;

    this.hotelServices.getHoteles().subscribe(
      (data) => {
        this.hotel = data.filter((hotel) => hotel.usuario.id === idlogeado);
      },
      (err) => {
        console.log(err);
      }
    );
    this.dataSource = new MatTableDataSource(this.bares);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onSelect(hotel: Hoteles) {
    let bar: any;
    this.hotelSeleccionadoId = +hotel;
    bar = this.hotel.filter((hotel) => hotel.id === this.hotelSeleccionadoId);
    this.bares = bar[0].bares;
    if (this.bares.length > 0) {
      this.LoadHotel();
    } else {
      this.bares = [];
      this.LoadHotel();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
