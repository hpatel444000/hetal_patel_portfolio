import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Senior Angular Developer</h1>
        <p>Building scalable enterprise healthcare applications</p>
        <a href="#projects" class="btn">View Projects</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #0066ff, #00ccff);
      color: #fff;
      text-align: center;
    }

    .hero-content {
      max-width: 600px;
    }

    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.25rem;
    }

    .btn {
      display: inline-block;
      padding: 10px 20px;
      background: #ffeb3b;
      color: #111;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      margin-top: 20px;
      transition: background 0.3s ease;
    }
    .btn:hover {
      background: #fdd835;
    }
  `]
})
export class HeroComponent {}