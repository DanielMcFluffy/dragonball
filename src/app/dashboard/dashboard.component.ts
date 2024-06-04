import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { Character } from '../shared/models/character';
import { DataService } from '../shared/service/data.service';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    InfiniteScrollDirective,
    MatProgressSpinnerModule,
    //components
    CardComponent,
  ],
})
export class DashboardComponent implements OnInit {
  characters: Character[] = [];
  pageNumber!: number;
  isEmpty = false;
  private dataService = inject(DataService);

  ngOnInit(): void {
    this.pageNumber = 0;
    this.dataService.getDatas(this.pageNumber).subscribe({
      next: (data: unknown) => {
        const items = (data as { items: Character[] }).items;
        this.characters = items;
      },
    });
  }

  onScroll() {
    console.log('scroleld');
    this.pageNumber++;
    this.dataService.getDatas(this.pageNumber).subscribe((data: unknown) => {
      const items = (data as { items: Character[] }).items;
      if (items.length > 0) {
        this.characters.push(...items);
      } else {
        this.isEmpty = true;
      }
    });
  }
}
