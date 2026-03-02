import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="logo">Hetal Patel</div>
      <div class="links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      padding: 20px 50px;
      background: rgba(255,255,255,0.95);
      color: #111;
      position: sticky;
      top: 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      backdrop-filter: blur(5px);
    }
    .logo {
      font-weight: 600;
      font-size: 1.2rem;
    }
    .links a {
      margin-left: 20px;
      color: #111;
      text-decoration: none;
      font-weight: 500;
      position: relative;
    }
    .links a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 2px;
      background: #007bff;
      transition: width 0.3s;
    }
    .links a:hover::after {
      width: 100%;
    }
  `]
})
export class NavbarComponent {}