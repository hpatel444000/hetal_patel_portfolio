import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section">
      <h2>About Me</h2>
      <p>
        Angular Developer with 4+ years of experience building scalable
        healthcare and enterprise web applications using Angular,
        TypeScript, RxJS and modern frontend architecture.
      </p>
    </section>
  `,
  styles: [`
    .section {
      text-align: center;
    }

    #about p {
      max-width: 800px;
      margin: 0 auto;
      font-size: 1.1rem;
    }
  `]
})
export class AboutComponent {}