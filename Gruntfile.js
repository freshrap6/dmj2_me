'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/plugins/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
<<<<<<< HEAD
    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'assets/css/main.min.css': [
            'assets/less/main.less'
          ],
          'assets/css/ie.min.css': [
            'assets/less/ie.less'
          ]
        }
      }
    },
=======
>>>>>>> 8bdf13ed21f8fe69028643ac08c44afb9c84d627
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'images/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: 'images/'
        }]
      }
    },
    watch: {
<<<<<<< HEAD
      less: {
        files: [
          'assets/less/*.less',
          'assets/less/bootstrap/*.less'
        ],
        tasks: ['recess']
      },
=======
>>>>>>> 8bdf13ed21f8fe69028643ac08c44afb9c84d627
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint','uglify']
      }
    },
    clean: {
      dist: [
<<<<<<< HEAD
        'assets/css/main.min.css',
=======
>>>>>>> 8bdf13ed21f8fe69028643ac08c44afb9c84d627
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
<<<<<<< HEAD
  grunt.loadNpmTasks('grunt-recess');
=======
>>>>>>> 8bdf13ed21f8fe69028643ac08c44afb9c84d627
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
<<<<<<< HEAD
    'recess',
=======
>>>>>>> 8bdf13ed21f8fe69028643ac08c44afb9c84d627
    'uglify',
    'imagemin',
    'svgmin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);
<<<<<<< HEAD
=======
  grunt.registerTask('images', [
    'imagemin',
    'svgmin'
  ]);
>>>>>>> 8bdf13ed21f8fe69028643ac08c44afb9c84d627

};