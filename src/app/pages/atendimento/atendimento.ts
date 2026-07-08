import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-atendimento',
  imports: [RouterLink],
  templateUrl: './atendimento.html',
  styleUrl: './atendimento.css',
})
export class Atendimento {

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
