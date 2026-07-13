import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule], // Soluciona o redirecionamento incorreto do menu
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    // Controle do Menu Hambúrguer
    isMenuOpen: boolean = false;

    // Controle do Carrossel
    currentIndex: number = 0;
    totalSlides: number = 3;
    intervalId: any;

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        // Inicia o carrossel automático ao carregar a página (passando a cada 3 segundos)
        this.startCarousel();
    }

    ngOnDestroy(): void {
        // Limpa o temporizador quando o usuário sai da página para não travar a memória
        this.clearCarousel();
    }

    // Alterna a abertura do menu lateral
    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
        this.cdr.detectChanges();
    }

    // Inicia o timer do carrossel
    startCarousel(): void {
        this.intervalId = setInterval(() => {
            this.nextSlide();
        }, 3000);
    }

    // Limpa o timer do carrossel
    clearCarousel(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    // Vai para o próximo slide
    nextSlide(): void {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.cdr.detectChanges();
    }

    // Volta para o slide anterior
    prevSlide(): void {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.cdr.detectChanges();
    }


}
