import { Injectable } from '@angular/core';
import * as data from './data/blogs.json';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor() {}

  getAllBlogPosts() {
    const blogs = (<any>data).blogs;
    return blogs;
  }
}
