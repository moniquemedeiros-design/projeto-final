import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  aceitouTermos: boolean = false;
  mensagemErro: string = '';
  mostrarSenha: boolean = false;
  email: string = '';
  senha: string = '';

  constructor(private router: Router) { }

  entrar() {

    if (!this.aceitouTermos) {
      this.mensagemErro = 'Aceite os Termos de Uso para prosseguir.';
      return;
    }

    if (this.email !== '@Marcelomentalhealth.com' || this.senha !== '123456') {
      this.mensagemErro = 'E-mail ou senha inválidos.';
      return;
    }

    localStorage.setItem('logado', 'true');
    this.mensagemErro = '';

    this.router.navigate(['/home']);
  }

  alternarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

}