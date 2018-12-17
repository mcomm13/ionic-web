import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getAllBlogPosts(): Promise<any> {
    return this.http
      .get('/api/blogs')
      .toPromise()
      .then((blogs: any) => {
        console.log(blogs);
        return blogs && blogs.data;
      });
  }
}
