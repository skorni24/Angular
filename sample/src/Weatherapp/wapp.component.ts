import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'wapp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './wapp.component.html',
  styleUrls: ['./wapp.component.css'],
})
export class WappComponent {
  weather: any = {};
  city: string = '';
  message: string = '';
  temperature: number = 0;

  getWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=bd5e378503939ddaee76f12ad7a97608`
      )
      .then((response) => {
        this.weather = response.data;
        this.temperature = Math.round(this.weather.main.temp - 273.15);
      })
      .catch((error) => {
        this.message = 'City not found';
        console.error('Error fetching weather data:', error);
      });
  }
}
