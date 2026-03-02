import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="section light">
      <h2>Technical Skills</h2>
      <div class="grid">
        <div>Angular (v8+)</div>
        <div>TypeScript</div>
        <div>RxJS</div>
        <div>NgRx</div>
        <div>REST APIs</div>
        <div>JWT Auth</div>
        <div>CI/CD</div>
        <div>Performance Optimization</div>
      </div>
    </section>
  `,
  styles: [`
    .light { background:#fafafa; }
    .grid {
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
      gap:20px;
      margin-top:30px;
    }
    .grid div {
      padding: 15px;
      background: white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      border-radius: 4px;
      text-align: center;
      font-weight: 500;
    }
  `]
})
export class SkillsComponent {}