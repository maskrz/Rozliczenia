module.exports = function (grunt) {
    grunt.initConfig({	 
    	clean: ['bower_components/'],
    	bowercopy: {
    		options: {
    			srcPrefix: 'node_modules'
    		},
    		scripts: {
    			options: {
    				destPrefix: 'WebContent'
    		    },
    		    files: {
    		    	'WEB-INF/resources/lib/angular/core.umd.js': '@angular/core/bundles/core.umd.js',
//    		    	'WebContent/WEB-INF/resources/lib/angular/angular-resource.js': 'angular-resource/angular-resource.js',
//    		    	'WebContent/WEB-INF/resources/lib/angular/angular-animate.js': 'angular-animate/angular-animate.js',
//    		    	'WebContent/WEB-INF/resources/lib/angucomplete-alt/angucomplete-alt.js': 'angucomplete-alt/angucomplete-alt.js',
//    		    	'WebContent/WEB-INF/resources/lib/angucomplete-alt/angucomplete-alt.css': 'angucomplete-alt/angucomplete-alt.css',
//    		    	'WebContent/WEB-INF/resources/lib/bootstrap-datepicker/bootstrap-datepicker.js': 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
//    		    	'WebContent/WEB-INF/resources/lib/bootstrap-datepicker/bootstrap-datepicker.css': 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
//    		    	'WebContent/WEB-INF/resources/lib/angular/angular-busy.js': 'angular-busy/dist/angular-busy.js',
//    		    	'WebContent/WEB-INF/resources/lib/angular/angular-busy.css': 'angular-busy/dist/angular-busy.css',	
//    		    	'WebContent/WEB-INF/resources/lib/angular/angular-xeditable.js': 'angular-xeditable/dist/js/xeditable.js',
//    		    	'WebContent/WEB-INF/resources/lib/angular/angular-xeditable.css': 'angular-xeditable/dist/css/xeditable.css',
//    		    	'WebContent/WEB-INF/resources/lib/bootstrap/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
//    		    	'WebContent/WEB-INF/resources/lib/fonts/': 'bootstrap/dist/fonts/*.*',
    		    	// workaround for bootstrap - mincss don't work, so min.css and maps 
    		    	// files are provided directly
    		    	//'WebContent/WEB-INF/resources/lib/bootstrap/bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css',
    		    	//'WebContent/WEB-INF/resources/lib/bootstrap/bootstrap.css.map': 'bootstrap/dist/css/bootstrap.css.map',
    		    	//'WebContent/WEB-INF/resources/lib/bootstrap/bootstrap-theme.css': 'bootstrap/dist/css/bootstrap-theme.min.css',
    		    	//'WebContent/WEB-INF/resources/lib/bootstrap/bootstrap-theme.css.map': 'bootstrap/dist/css/bootstrap-theme.css.map',
    		    	//'WebContent/WEB-INF/resources/lib/jquery/jquery.js': 'jquery/dist/jquery.js',
    		    }
    		}
    	}
	});
	
	// load plugins
	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-contrib-clean');	
	
	// register tasks
	grunt.registerTask('default', [ 'clean', 'bowercopy']);
};