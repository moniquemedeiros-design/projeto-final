import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  isMenuOpen: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.cdr.detectChanges(); // Força o Angular a mostrar o menu
  }
}