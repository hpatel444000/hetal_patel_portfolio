import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { PreloaderComponent } from './components/preloader.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    PreloaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
   templateUrl: './app.html',
   styleUrls: ['./app.scss']
})
export class AppComponent implements AfterViewInit {
  loading = false;

  ngAfterViewInit() {

  }
}