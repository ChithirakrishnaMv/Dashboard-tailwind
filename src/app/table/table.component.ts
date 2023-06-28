import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'Vehicle', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
}
export interface PeriodicElement {
  name: string;
  position: number;
  Vehicle: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'MUNNAR', Vehicle: 'BUS', symbol: 'H'},
  {position: 2, name: 'KOCHI', Vehicle: 'CAR', symbol: 'He'},
  {position: 3, name: 'KOORG', Vehicle: 'BUS', symbol: 'Li'},
  {position: 4, name: 'WAYANAD', Vehicle: 'MINIBUS', symbol: 'Be'},
  {position: 5, name: 'KODAYKANAL', Vehicle: 'CAR', symbol: 'B'},
  {position: 6, name: 'KOORG', Vehicle: 'TRAVELER', symbol: 'C'},
  {position: 7, name: 'GOA', Vehicle: 'FLIGHT', symbol: 'N'},
  {position: 8, name: 'WAYANAD', Vehicle: 'BIKE', symbol: 'O'},
  {position: 9, name: 'GOA', Vehicle: 'CAR', symbol: 'F'},
  {position: 10, name: 'KOCHI', Vehicle: 'BUS', symbol: 'Ne'},
  {position: 11, name: 'MUNNAR', Vehicle: 'BIKE', symbol: 'Na'},
  {position: 12, name: 'WAYANAD', Vehicle: 'BUS', symbol: 'Mg'},
  {position: 13, name: 'KOORG', Vehicle: 'TRAVELER', symbol: 'Al'},
  {position: 14, name: 'WAYANAD', Vehicle: 'CAR', symbol: 'Si'},
  {position: 15, name: 'MUNNAR', Vehicle: 'BUS', symbol: 'P'},
  {position: 16, name: 'KOCHI', Vehicle: 'MINIBUS', symbol: 'S'},
  {position: 17, name: 'KOORG', Vehicle: 'TRAVELER', symbol: 'Cl'},
  {position: 18, name: 'GOA', Vehicle: 'CAR', symbol: 'Ar'},
  {position: 19, name: 'WAYANAD', Vehicle: 'FLIGHT', symbol: 'K'},
  {position: 20, name: 'KODAYKANAL', Vehicle: 'BUS', symbol: 'Ca'},
];