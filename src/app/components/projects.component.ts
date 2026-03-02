import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="section">
      <h2>Projects</h2>
      <div class="project">
        <h3>Healthcare Workforce Platform</h3>
        <p>
          Enterprise Angular 13 application with modular architecture,
          JWT authentication, and performance optimization.
        </p>
      </div>
      <div class="project">
        <h3>BioPath Web Application</h3>
        <p>
          Angular-based healthcare portal with payment integration and
          multilingual support.
        </p>
      </div>
    </section>
  `,
  styles: [`
    .project {
      margin-top: 30px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .project:hover {
      transform: translateY(-4px);
    }
  `]
})
export class ProjectsComponent {}