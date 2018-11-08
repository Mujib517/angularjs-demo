module.exports = function (grunt) {
  grunt.initConfig({

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/app.min.js': ['dist/app.js']
        }
      }
    },

    jshint: {
      all: ['src/*.js']
    },

    concat: {
      options: {
        separator: ';'
      },
      basic: {
        src: ['src/app.js', 'src/myCtrl.js', 'src/myCtrl2.js', 'src/userCtrl.js', 'src/productsCtrl.js'
          , 'src/productDetailCtrl.js', 'src/newProductCtrl.js', 'src/address.directive.js', 'src/product.directive.js',
          'src/review-list.directive.js', 'src/product-review.directive.js', 'src/product.interceptor.js'],
        dest: 'dist/app.js'
      },
      extras: {
        src: ['src/shared.js', 'src/time.filter.js', 'src/product.svc.js'],
        dest: 'dist/shared.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat']);
  grunt.registerTask('build', ['jshint', 'concat']);
  grunt.registerTask('release', ['jshint', 'concat', 'uglify'])
}

//lint