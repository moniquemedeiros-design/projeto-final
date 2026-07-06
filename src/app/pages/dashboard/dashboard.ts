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
  // 1. Cria a propriedade que controla se o menu está aberto ou fechado
  isMenuOpen: boolean = false;

  // 2. Adiciona o construtor com o detector de mudanças do Angular
  constructor(private cdr: ChangeDetectorRef) { }

  // 3. Cria a função toggleMenu que o HTML está chamando
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.cdr.detectChanges(); // Garante a atualização imediata na tela
  }
}
