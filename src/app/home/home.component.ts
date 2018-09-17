import { Component } from '@angular/core';
import { CountryService } from './country.service';
import { ICountry } from './ICountry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private _countryCode : CountryService) { }
countries : ICountry[];
cont1 : string;
cont2 : string;

  ngOnInit() {
    this.countries = this._countryCode.getData();
  }
  
}
