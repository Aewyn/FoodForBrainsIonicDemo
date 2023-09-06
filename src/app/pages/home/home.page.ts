import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StarWarsService } from 'src/app/service/star-wars.service';
import { StarWarsPerson } from 'src/app/model/star-wars-person';
import { StarWarsPlanet } from 'src/app/model/star-wars-planet';
import { StarWarsVehicle } from 'src/app/model/star-wars-vehicle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  dataset: any[] = [];
  showingPeople: boolean = false;
  showingPlanets: boolean = false;
  showingVehicles: boolean = false;


  constructor(private swService: StarWarsService) { 
    const types = ['StarWarsPerson', 'StarWarsPlanet', 'StarWarsVehicle'] as const;
  }

  showPeople() {
    this.swService.getData('people').subscribe((data => {
      console.log('Fetching people...');
      this.dataset = data.results as StarWarsPerson[];
      this.setActive('people');
    }));
  }
  showPlanets() {
    this.swService.getData('planets').subscribe((data => {
      console.log('Fetching planets...');
      this.dataset = data.results as StarWarsPlanet[];
      this.setActive('planets');
    }));
  }
  showVehicles() {
    this.swService.getData('vehicles').subscribe((data => {
      console.log('Fetching vehicles...');
      this.dataset = data.results as StarWarsVehicle[];
      this.setActive('vehicles');
    }));
  }

  setActive(nowActive: string){{
    if(nowActive === 'people'){
    this.showingPeople = true;
    this.showingPlanets = false;
    this.showingVehicles = false;
    } else if (nowActive === 'planets'){
      this.showingPeople = false;
      this.showingPlanets = true;
      this.showingVehicles = false;
    } else if (nowActive === 'vehicles'){
      this.showingPeople = false;
      this.showingPlanets = false;
      this.showingVehicles = true;
    }
  }

  }

  // isPerson(val: any): boolean {
  //   if(typeof val == (typeof this.types)[0]){
  //     console.log("Positive for StarWarsPerson");
  //     return true;
  //   } else {
  //     console.log("Negative for StarWarsPerson")
  //     return false;
  //   }
  // }

  // isPlanet(val: any) {
  //   if(typeof val == (typeof this.types)[1]){
  //     console.log("Positive for StarWarsPlanet");
  //     return true;
  //   } else {
  //     console.log("Negative for StarWarsPlanet")
  //     return false;
  //   }
  // }

  // isVehicle(val: any) {
  //   if(typeof val == (typeof this.types)[2]){
  //     console.log("Positive for StarWarsVehicle");
  //     return true;
  //   } else {
  //     console.log("Negative for StarWarsVehicle")
  //     return false;
  //   }
  // }
}
