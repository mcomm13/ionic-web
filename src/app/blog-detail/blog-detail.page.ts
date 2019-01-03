import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { DataCacheService } from '../services/data-cache.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss']
})
export class BlogDetailPage implements OnInit {
  blog: any;

  constructor(
    private blogService: BlogService,
    private dataCacheService: DataCacheService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const cachedBlogData = this.dataCacheService.getCachedBlogData();
    const routeParam = this.route.snapshot.params.title;
    if (cachedBlogData && cachedBlogData.length) {
      this.blog = cachedBlogData.find(item => {
        return item.title === decodeURIComponent(routeParam);
      });
    } else {
      this.blogService.getAllBlogPosts().then(blogs => {
        blogs = this.blogService.sortBlogsByDate(blogs || []);
        this.dataCacheService.cacheBlogData(blogs);
        this.blog = blogs.find(item => {
          return item.title === decodeURIComponent(routeParam);
        });
      });
    }
  }
}
