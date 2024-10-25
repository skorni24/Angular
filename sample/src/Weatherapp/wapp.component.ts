import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wapp',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './wapp.component.html',
  styleUrls: ['./wapp.component.css'],
})
export class WappComponent {
  weather: any = {};
  city: string = '';
  constructor(private http: HttpClient) {}

  getWeather() {
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=bd5e378503939ddaee76f12ad7a97608`
      )
      .subscribe((data) => {
        this.weather = data;
      });
  }
}
