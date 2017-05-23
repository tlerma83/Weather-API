module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
        js: {
            src: ['../javascripts/**/*.js'],
            dest: '../dist/app.js'

        },
        options: {
            transform: ["hbsfy"],
            browserifyOptions: {
                debug:true,
                paths: [
                    "./node_modules"
                ]
            }
        }
    },
    jshint: {
      options: {
        predef: ["document", "console"],
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {"$": true, "park" : true,  "Handlebars":true}, //name value pairs, allows to define global vars used in many files.
        browserify: true
      },
      files: ['../javascripts/**/*.js'] //location of javascript files
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/style.css': '../sass/main.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      browserify: {
        files: ['../javascripts/*.js'],
        tasks: ['browserify']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
