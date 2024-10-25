import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from '../Components/todo.components';
import { WappComponent } from '../Weatherapp/wapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, WappComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cnt = 0;

  inc() {
    this.cnt += 1;
  }

  dec() {
    this.cnt -= 1;
    if (this.cnt < 0) {
      this.cnt = 0;
      alert('Counter cannot be negative');
    }
  }

  onTesting() {
    console.log('Testing function called');
    alert('Testing');
  }
}
