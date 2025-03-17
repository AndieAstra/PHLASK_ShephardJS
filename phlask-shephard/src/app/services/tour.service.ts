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
        classes: 'shepherd-theme-custom', // Apply custom theme
        scrollTo: { behavior: 'smooth', block: 'center' },
        arrow: true,
        modalOverlayOpeningPadding: 10,
        modalOverlayOpeningRadius: 8
      }
    });

    // Step 1
    this.tour.addStep({
      id: 'example-step',
      text: `
      <div class="shepherd-step-counter">1 / 2</div>

      <h1>Welcome to the PHLASK App</h1>

      <h4>Your tool for finding and sharing free resources in Philadelphia - all you have to do is PHLask!</h4>

      <h4>Finding Resources</h4>
      <p>The control panel at the bottom of the screen allows you to toggle between different resources. Select the desired resource to search the city for free water, foraging, bathroom, and food locations. Use the NEAR ME button to find the nearest source depending on which interface is toggled (ex: Water will show you the closest water source).</p>

      <h4>Show Resource Type</h4>
      <p>What's a water app without a filter? Click the Resources filter to see the different source interfaces.</p>

      <br>
      `,
      attachTo: {
        element: '.first',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Next',
          action: this.tour.next,
          classes: 'shepherd-button-next'
        }
      ]
    });

    // Step 2
    this.tour.addStep({
      id: 'example-step2',
      text: `
      <div class="shepherd-step-counter">2 / 2</div>

      <br>

      <h4>Add a Site</h4>
      <p>Have a location or resource to add? Click on the Add Site button to submit the information and the PHLASK dev team will verify the information to add it to the app.</p>

      <h4>Filter</h4>
      <p>What's a water app without a filter? Click the icon to filter the taps on the WATER and FOOD interfaces with more specific criteria.</p>

      <h4>Contact Information</h4>
      <p>If you'd like to learn more about the PHLASK project, need to contact the team, or would like to join our development group, there are listed buttons in the upper left-hand section.</p>

      <br><br>

      `,
      attachTo: {
        element: 'h3',
        on: 'right'
      },
      buttons: [
        {
          text: 'Previous',
          action: this.tour.back,
          classes: 'shepherd-button-prev'
        },
        {
          text: 'Finish',
          action: this.tour.next,
          classes: 'shepherd-button-next'
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
