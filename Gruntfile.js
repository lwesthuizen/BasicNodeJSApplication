module.exports = function(grunt) {

  grunt.initConfig({
    compress: {
  main: {
    options: {
      archive: 'artifact.zip'
    },
    files: [{
      expand: true,
      cwd: './',
      src: ['**'],
      dest: '/'
    }]
  }
}
    
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask('default', ['compress']);

};