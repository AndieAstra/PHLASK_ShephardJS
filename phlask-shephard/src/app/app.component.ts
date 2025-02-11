import { Component } from '@angular/core';
import { TourService } from './services/tour.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [],
})
export class AppComponent {
  constructor(private tourService: TourService) {}

  startTour() {
    this.tourService.startTour();
  }
}
