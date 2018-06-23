module.exports = function(grunt) {

    grunt.initConfig({

        clean: {
            dist: "dist/"
        },

        jst: {
            options: {
                processName: function(filepath) {
                    return filepath.split("/").pop().replace(".html", "");
                }
            },
            dist: {
                files: {
                    "public/templates/templates.js": "public/templates/*.html"
                }
            }
        },

        targethtml: {
            dist: {
                files: {
                    "dist/public/index.html": "public/index.html"
                }
            }
        },

        concat: {
            dist: {
                files: {
                    "dist/public/js/libs.min.js": [
                        "public/js/libs/jquery.js",
                        "public/js/libs/underscore.js",
                        "public/js/libs/backbone.js",
                        "public/js/libs/*.js"
                    ],
                    "dist/public/js/app.min.js": [
                        "public/templates/templates.js",
                        "public/js/App.js",
                        "public/js/models/*.js",
                        "public/js/collections/*.js",
                        "public/js/views/*.js",
                        "public/js/routers/*.js"
                    ]
                }
            }
        },

        uglify: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: "dist/public/js/",
                        src: "*.js",
                        dest: "dist/public/js/"
                    }
                ]
            }
        },

        cssmin: {
            dist: {
                files: {
                    "dist/public/css/style.min.css": "public/css/style.css"
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    "dist/public/index.html": "dist/public/index.html"
                }
            }
        },
        
        copy: {
            dist: {
                files: [
                    {expand: true, src: "server.js", dest: "dist/"},
                    {expand: true, cwd: "public/icoomon/", src: "*", dest: "dist/public/icoomon/"},
                    {expand: true, cwd: "public/icoomon/fonts/", src: "*", dest: "dist/public/icoomon/fonts/"},
                    {expand: true, cwd: "public/images/", src: "*", dest: "dist/public/images/"}
                ]
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jst");
    grunt.loadNpmTasks("grunt-targethtml");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("build", ["clean", "jst", "targethtml", "concat", "uglify", "cssmin", "htmlmin", "copy"]);
   
}