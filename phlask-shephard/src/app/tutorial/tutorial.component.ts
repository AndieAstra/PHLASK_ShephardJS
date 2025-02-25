import { Component } from '@angular/core';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {
  constructor(public tourService: TourService) {}

  startTour() {
    this.tourService.startTour();
  }
}
