import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
}
