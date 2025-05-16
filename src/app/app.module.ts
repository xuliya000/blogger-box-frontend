import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './services/post.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    CommonModule,
    CategoryListComponent,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PostListComponent,
    PostCreateComponent,
    MatSnackBarModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
