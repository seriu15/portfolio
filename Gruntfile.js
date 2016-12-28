'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img_origin/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }
  })

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch')

// Default task.
grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};
