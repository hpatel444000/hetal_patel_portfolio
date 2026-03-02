import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  template: `
    <div class="preloader-backdrop">
      <div class="loader"></div>
    </div>
  `,
  styles: [`
    .preloader-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .loader {
      width: 60px;
      height: 60px;
      border: 6px solid transparent;
      border-top-color: #4285f4;
      border-right-color: #db4437;
      border-bottom-color: #f4b400;
      border-left-color: #0f9d58;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `]
})
export class PreloaderComponent {}
