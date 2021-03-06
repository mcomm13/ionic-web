import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getAllBlogPosts(): Promise<any> {
    return this.http
      .get('http://mcomm-web-api.azurewebsites.net/api/blogs')
      .toPromise()
      .then((blogs: any) => {
        return blogs && blogs.data;
      });
  }

  sortBlogsByDate(blogs): any[] {
    return blogs.sort((a, b) => {
      const aDate = new Date(a.date).getTime();
      const bDate = new Date(b.date).getTime();
      return bDate - aDate;
    });
  }
}
