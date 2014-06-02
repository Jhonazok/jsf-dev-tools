module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'src/*.js', 'test/**/*.js'],
      options: {
        camelcase: true,
        curly: true,
        eqeqeq: true,
        indent: 2,
        latedef: true,
        newcap: true,
        undef: true,
        unused: true,
        strict: false,
        quotmark: 'single',
        globals: {
          jQuery: true,
          console: true,
          module: true,
          jsf: true,
          window: true,
          chrome: true,
          document: true 
        }
      }
    },

    qunit: {
      files: ['test/**/*.html']
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask( 'default', [ 'jshint' ] );

};