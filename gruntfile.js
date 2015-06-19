module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			js: {
				src: 'app/js/app.js',
				dest: 'dist/js/app.js',
				options: {
					external: ['angular', 'jQuery'],
					debug: true,
					browserifyOptions: { debug: true }
				}
			}
		},
		copy: {
			all: {
				expand: true,
				cwd: 'app/',
				src: ['**/*.html', '**/*.png','**/*.css', 'js/angular-modules/*.js'],
				dest: 'dist/',
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'dist/css/app.css' : 'app/css/sass/app.scss'
				}
			}
		},
		watch: {
			js: {
				files: "app/**/*.js",
				tasks: "browserify"
			},
			html: {
				files: 'app/**/*.html',
				tasks: 'copy'
			},
			css: {
				files: 'app/**/*.scss',
				tasks: 'sass'
			},
			png: {
				files: 'app/**/*.png',
				tasks: 'copy'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.registerTask('default', ['browserify', 'copy', 'sass']);
};

