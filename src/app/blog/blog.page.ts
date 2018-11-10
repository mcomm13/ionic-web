import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage implements OnInit {
  blogData: any[];
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogData = this.blogService.getAllBlogPosts() || [];
  }
}
