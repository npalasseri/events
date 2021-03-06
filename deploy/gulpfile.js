var gulp = require('gulp');

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = '.';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [rootDir + '/{css,fonts,images,js}/*.{js,css,png,jpg,gif,svg,ttf}'],
    runtimeCaching: [
    {
      urlPattern: /(\.html|\/)(?:\?|$)/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /images\.hasgeek\.com/,
      handler: 'cacheFirst'
    },
    {
      urlPattern: /talkfunnel\.com.*schedule\/json$/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /imgee\.s3\.amazonaws\.com\/imgee/,
      handler: 'cacheFirst'
    },
    {
      urlPattern: /^https:\/\/[A-Za-z]+.tile.openstreetmap.org/,
      handler: 'cacheFirst'
    }],
    stripPrefix: rootDir
  }, callback);
});
