module.exports = function(grunt){


     grunt.initConfig({


       pkg: grunt.file.readJSON("package.json"),

       cssmin:{

          combine :{

                 files : {'app/css/main.css':['app/css/style1.css','app/css/style2.css']}
          }
  
       }
         ,

        uglify:{

          dist :{

                 files : {'app/js/main.min.js':['app/js/main.js']}
          }
  
       }


     })


      grunt.loadNpmTasks('grunt-contrib-cssmin');
       grunt.loadNpmTasks('grunt-contrib-uglify');

     grunt.registerTask('default',["cssmin",'uglify'])

}