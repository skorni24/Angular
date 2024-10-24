import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { TodoComponent } from './Components/todo.components';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
