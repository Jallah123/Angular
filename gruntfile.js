module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			js: {
				src: 'app/js/app.js',
				dest: 'dist/js/app.js',
				options: {
					external: ['angular'],
					debug: true,
					browserifyOptions: { debug: true }
				}
			}
		},
		copy: {
			all: {
				expand: true,
				cwd: 'app/',
				src: ['**/*.html', '**/*.css', 'js/angular-modules/*.js'],
				dest: 'dist/',
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
				files: 'app/**/*.css',
				tasks: 'copy'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['browserify', 'copy']);
};

