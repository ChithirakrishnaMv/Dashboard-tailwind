import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { AddCarComponent } from './add-car/add-car.component';
import { LeadsComponent } from './leads/leads.component';



const routes: Routes = [
  {path:'',component:MainContentComponent },
  {path:'Gallery',component:GalleryComponent},
  {path:'Driver',component:AddDriverComponent},
  {path:'AddCar',component:AddCarComponent},
  {path:'Vehicle',component:LeadsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
