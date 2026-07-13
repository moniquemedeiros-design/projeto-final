import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './biblioteca.html',
  styleUrls: ['./biblioteca.css']
})

export class BibliotecaComponent implements OnInit {

  isMenuOpen: boolean = false;


  // Todos os arquivos vindos da API
  todosArquivos: any[] = [];


  // Arquivos que aparecem na tela depois do filtro
  arquivosFiltrados: any[] = [];


  // Categorias iguais às da API
  categorias: string[] = [
    'Todos',
    'E-book',
    'Áudio',
    'Ferramenta',
    'Vídeo'
  ];


  categoriaAtiva: string = 'Todos';



  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }



  ngOnInit(): void {

    this.buscarDadosDaApi();

  }



  toggleMenu() {

    this.isMenuOpen = !this.isMenuOpen;

    this.cdr.detectChanges();

  }



  buscarDadosDaApi() {


    this.http.get<any[]>(
      'http://localhost:3000/biblioteca'
    )
      .subscribe({

        next: (dados) => {


          this.todosArquivos = dados;


          // começa mostrando todos
          this.arquivosFiltrados = dados;


          this.cdr.detectChanges();


        },


        error: (erro) => {

          console.error(
            'Erro ao conectar com a API:',
            erro
          );

        }


      });


  }




  filtrarCategoria(categoria: string) {


    this.categoriaAtiva = categoria;



    if (categoria === 'Todos') {


      this.arquivosFiltrados = this.todosArquivos;


    } else {


      this.arquivosFiltrados =
        this.todosArquivos.filter(
          arquivo => arquivo.tipo === categoria
        );


    }



    this.cdr.detectChanges();


  }



}