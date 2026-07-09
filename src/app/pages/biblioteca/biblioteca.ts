import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule], // Habilita requisições HTTP nesta página
  templateUrl: './biblioteca.html',
  styleUrls: ['./biblioteca.css']
})
export class BibliotecaComponent implements OnInit {
  isMenuOpen: boolean = false;

  // Arrays para os dados que vêm da API
  todosArquivos: any[] = [];
  arquivosFiltrados: any[] = [];

  // Categorias do filtro
  categorias: string[] = ['Todos', 'Ebooks', 'Áudios', 'Ferramentas'];
  categoriaAtiva: string = 'Todos';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.buscarDadosDaApi();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.cdr.detectChanges();
  }

  // Faz a busca dinâmica batendo na rota do server.js
  buscarDadosDaApi() {
    this.http.get<any[]>('http://localhost:3000/api').subscribe({
      next: (dados) => {
        this.todosArquivos = dados;
        this.arquivosFiltrados = dados; // Exibe todos ao carregar
        this.cdr.detectChanges(); // Força renderização visual estável
      },
      error: (erro) => {
        console.error('Erro ao conectar com a API do backend:', erro);
      }
    });
  }

  // Filtra os cards sem precisar recarregar a requisição
  filtrarCategoria(categoria: string) {
    this.categoriaAtiva = categoria;
    if (categoria === 'Todos') {
      this.arquivosFiltrados = this.todosArquivos;
    } else {
      this.arquivosFiltrados = this.todosArquivos.filter(arq => arq.categoria === categoria);
    }
    this.cdr.detectChanges();
  }
}
