import { Injectable } from '@angular/core';
import data = require('./data/blogs.json');

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor() {}

  getAllBlogPosts() {
    return data && data.blogs;
  }
}
