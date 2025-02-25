import { Injectable } from '@angular/core';
import Shepherd from 'shepherd.js';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private tour!: Shepherd.Tour;
  showOverlay = false; // Added missing property

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

    // Step 1
    this.tour.addStep({
      id: 'example-step',
      text: 'Welcome to the PHLASK App Your tool for finding and sharing free resources in Philadelphia - all you have to do is PHLask! Finding Resources The control panel at the bottom of the screen allows you to toggle between different resources. Select the desired resource to search the city for free water, foraging, bathroom, and food locations. Use the NEAR ME button to find the nearest source depending on which interface is toggled (ex: Water will show you the closest water source). Show Resource Type Whats a water app without a filter? Click the Resources filter to see the different source interfaces.',
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

    // Step 2
    this.tour.addStep({
      id: 'example-step2',
      text: 'Add a Site Have a location or resource to add? Click on the Add Site button to submit the information and the PHLASK dev team will verify the information to add it to the app. Filter Whats a water app without a filter? Click the icon to filter the taps on the WATER and FOOD interfaces with more specific criteria. Contact Information In the upper left-hand section of the page if you would like to learn more about the PHLASK project, need to contact the team, or would like to join our development group there are listed buttons.',
      attachTo: {
        element: 'h3',
        on: 'right'
      },
      buttons: [
        {
          text: 'Finish',
          action: this.tour.next
        }
      ]
    });

    // Event listeners for overlay visibility
    this.tour.on('start', () => {
      this.showOverlay = true;
    });

    this.tour.on('complete', () => {
      this.showOverlay = false;
    });

    this.tour.on('cancel', () => {
      this.showOverlay = false;
    });
  }

  startTour(): void {
    this.showOverlay = true; // Ensure overlay appears when clicking
    this.tour.start();
  }
}
