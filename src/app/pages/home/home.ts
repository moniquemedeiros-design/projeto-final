import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'; // 👈 Adicionado o ChangeDetectorRef
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    currentIndex: number = 0;
    totalSlides: number = 3;
    carouselInterval: any;
    isMenuOpen: boolean = false;

    // 👈 Injetamos o detector de mudanças aqui no construtor
    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.startCarouselAutoPlay();
    }

    ngOnDestroy(): void {
        this.clearCarouselAutoPlay();
    }

    nextSlide(): void {
        if (this.currentIndex < this.totalSlides - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }

        // 👈 Força o Angular a olhar para a tela e atualizar o slide visualmente
        this.cdr.detectChanges();
        this.resetAutoPlay();
    }

    prevSlide(): void {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.totalSlides - 1;
        }

        // 👈 Força o Angular a olhar para a tela e atualizar o slide visualmente
        this.cdr.detectChanges();
        this.resetAutoPlay();
    }

    startCarouselAutoPlay(): void {
        this.carouselInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    clearCarouselAutoPlay(): void {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
        }
    }

    resetAutoPlay(): void {
        this.clearCarouselAutoPlay();
        this.startCarouselAutoPlay();
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
        this.cdr.detectChanges(); // Garante que o menu hambúrguer também abra na hora
    }
}
