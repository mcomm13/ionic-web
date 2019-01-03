import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { DataCacheService } from '../services/data-cache.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage implements OnInit {
  blogData: any[];
  constructor(
    private blogService: BlogService,
    private dataCacheService: DataCacheService
  ) {}

  ngOnInit() {
    const cachedBlogData = this.dataCacheService.getCachedBlogData();
    if (cachedBlogData && cachedBlogData.length) {
      this.blogData = cachedBlogData;
    } else {
      this.blogService.getAllBlogPosts().then(blogs => {
        this.sortBlogsByDate(blogs || []);
        this.dataCacheService.cacheBlogData(this.blogData);
      });
    }
  }

  sortBlogsByDate(blogs) {
    this.blogData = blogs.sort((a, b) => {
      const aDate = new Date(a.date).getTime();
      const bDate = new Date(b.date).getTime();
      return bDate - aDate;
    });
  }
}
