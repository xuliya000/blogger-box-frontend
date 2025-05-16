import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Post, PostCreationRequest } from '../models/post'; 
import { environment } from "../environment/environment";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly postsUrl = `${environment.apiUrl}/v1/posts`;

  constructor(
    private readonly http: HttpClient,
    private readonly snackBar: MatSnackBar
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl).pipe(
      catchError(this.handleError<Post[]>('getPosts', []))
    );
  }
  

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.postsUrl}/${id}`).pipe(
      catchError(this.handleError<Post>('getPostById'))
    );
  }

  createPost(postRequest: PostCreationRequest): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, postRequest).pipe(
      catchError(this.handleError<Post>('createPost'))
    );
  }

  deletePost(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.postsUrl}/${id}`).pipe(
      catchError(this.handleError<boolean>('deletePost', false))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`[${operation}] failed: ${error.message}`, error);

      this.snackBar.open(
        `An error occurred during "${operation}". Please try again.`,
        'Close',
        {
          duration: 3000,
          panelClass: ['snack-bar-error']
        }
      );

      return of(result as T);
    };
  }
}
