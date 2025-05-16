import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    loadComponent: () =>
      import('./components/post-list/post-list.component').then(m => m.PostListComponent)
  },
  {
    path: 'add-post',
    loadComponent: () =>
      import('./components/post-create/post-create.component').then(m => m.PostCreateComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
