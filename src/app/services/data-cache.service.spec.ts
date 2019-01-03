import { TestBed } from '@angular/core/testing';

import { DataCacheService } from './data-cache.service';

describe('DataCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCacheService = TestBed.get(DataCacheService);
    expect(service).toBeTruthy();
  });

  it('should have functions to cache and get blog data', () => {
    const service = TestBed.get(DataCacheService);
    expect(service.cacheBlogData).toBeDefined();
    expect(service.getCachedBlogData).toBeDefined();
    expect(service.getCachedBlogData()).toEqual([]);
    const sampleBlogData = [
      {
        title: 'A Sample Blog',
        date: '01-03-2019',
        content: 'Some stuff to rant about'
      }
    ];
    service.cacheBlogData(sampleBlogData);
    expect(service.getCachedBlogData()).toEqual(sampleBlogData);
  });

  it('should have functions to cache and get music data', () => {
    const service = TestBed.get(DataCacheService);
    expect(service.cacheMusicData).toBeDefined();
    expect(service.getCachedMusicData).toBeDefined();
    expect(service.getCachedMusicData()).toEqual([]);
    const sampleMusicData = [
      {
        title: 'A Sample Song',
        date: '01-03-2019',
        artist: 'Some Guy',
        url: 'http://mcomm.azurewebsites.net',
        year: '2015',
        description: 'A really good song.'
      }
    ];
    service.cacheBlogData(sampleMusicData);
    expect(service.getCachedBlogData()).toEqual(sampleMusicData);
  });
});
