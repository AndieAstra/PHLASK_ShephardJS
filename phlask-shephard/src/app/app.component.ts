import { Component } from '@angular/core';
import { TourService } from './services/tour.service';
import { TutorialComponent } from './tutorial/tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TutorialComponent],
})
export class AppComponent {

}
