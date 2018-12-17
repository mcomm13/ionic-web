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
    this.blogService.getAllBlogPosts().then(blogs => {
      this.blogData = blogs || [];
      this.blogData = blogs.sort((a, b) => {
        const aDate = new Date(a.date).getTime();
        const bDate = new Date(b.date).getTime();
        return bDate - aDate;
      });
    });
  }
}
