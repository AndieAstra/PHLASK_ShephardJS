import { Injectable } from '@angular/core';
import Shepherd from 'shepherd.js';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private tour!: Shepherd.Tour;

  constructor() {
    this.initializeTour();
  }

  private initializeTour(): void {
    this.tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      }
    });

    this.tour.addStep({
      id: 'example-step',
      text: 'This is where you will learn about us.',
      attachTo: {
        element: '.first',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Next',
          action: this.tour.next
        }
      ]
    });

    this.tour.addStep({
      id: 'example-step2',
      text: 'This is a side navigation, duh!',
      attachTo: {
        element: 'h3',
        on: 'right'
      },
      buttons: [
        {
          text: 'Next',
          action: this.tour.next
        }
      ]
    });

    this.tour.addStep({
      id: 'example-step3',
      text: 'This is the end of your tour bro',
      attachTo: {
        element: 'h1',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Finish',
          action: this.tour.complete
        }
      ]
    });
  }

  startTour(): void {
    this.tour.start();
  }
}
