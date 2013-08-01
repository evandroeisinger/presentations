module.exports = function( grunt ) {
 
    grunt.initConfig({
	    
	    // jshint options
	    jshint : {
	        all : ['js/main.js']
	    },

	    // concat options
	    concat : {
	        task: {
	            src: [ 'css/general.css', 'css/desktop.css' ],
	            dest: 'css/style.css'
	        }
	    },

	    // js minifcation options
	    uglify : {
	        task : {
	        	options : {
	        		report : 'gzip',
	        		compress : true,
	        		mangle : false
	        	},
	            files : {
	                'js/main.min.js' : ['js/main.js']
	            }
	        }
	    },

	    // css minifcation options
		cssmin: {
		  	task : {
		  		options : {
		  			report : 'gzip'
		  		},
		    	files : { 
		    		'css/style.min.css': [ 'css/style.css' ] 
		    	}
			}
		},

	    // sass options
	    sass : {
			task : {
		      files: {
		    	   'css/desktop.css' : 'scss/desktop.scss',
		           'css/general.css' : 'scss/general.scss'
		      }
		    },
		},

	    // watch options
	    watch : {
		  js : {
		  	files : [ 'js/main.js' ],
		    tasks : [ 'jshint', 'uglify' ]
		  },
		  sass : {
		  	files : [ 'scss/*.scss' ],
		  	tasks : [ 'sass', 'concat', 'cssmin' ]
		  }
		},

    });

    // load our plugins
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

    // set custom tasks
    grunt.registerTask( 'default', ['watch'] );
    grunt.registerTask( 'build', [ 'uglify' ,'jshint', 'sass', 'concat', 'cssmin' ] );
    grunt.registerTask( 'test', [ 'uglify' ,'jshint' ] );

}