import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './consulta.html',
  styleUrls: ['./consulta.css']
})
export class ConsultaComponent implements OnInit {
  isMenuOpen: boolean = false;
  termoPesquisa: string = '';
  profissionalSelecionado: any = null;
  dataSelecionada: string = '';

  // Dados dos profissionais com suas respectivas agendas de exemplo
  profissionais = [
    {
      id: 1,
      nome: 'Dr. Arnaldo Ribeiro',
      especialidade: 'Psicólogo Clínico',
      agendaDisponivel: ['2026-07-10', '2026-07-12', '2026-07-15'],
      avatar: '👨‍⚕️'
    },
    {
      id: 2,
      nome: 'Dra. Mariana Costa',
      especialidade: 'Terapeuta Cognitivo-Comportamental',
      agendaDisponivel: ['2026-07-11', '2026-07-14', '2026-07-18'],
      avatar: '👩‍⚕️'
    },
    {
      id: 3,
      nome: 'Roberto Antunes',
      especialidade: 'Psicanalista',
      agendaDisponivel: ['2026-07-13', '2026-07-16'],
      avatar: '🧠'
    }
  ];

  profissionaisFiltrados = [...this.profissionais];

  ngOnInit(): void { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  filtrarProfissionais() {
    this.profissionaisFiltrados = this.profissionais.filter(p =>
      p.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase()) ||
      p.especialidade.toLowerCase().includes(this.termoPesquisa.toLowerCase())
    );
  }

  selecionarProfissional(prof: any) {
    this.profissionalSelecionado = prof;
    this.dataSelecionada = ''; // Reseta a data escolhida para o novo profissional
  }

  marcarConsulta() {
    if (this.profissionalSelecionado && this.dataSelecionada) {
      alert(`Consulta agendada com sucesso com ${this.profissionalSelecionado.nome}!`);
    }
  }
}


