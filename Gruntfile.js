module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		run: {
			test: {
				cmd: 'npm',
				args: [
				'run',
				'test'
				]
			},

			install: {
				cmd: 'npm',
				args: [
					'install'
				]
			},

			build: {
				cmd: 'npm',
				args: [
					'build'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-run');
	grunt.registerTask('build', ['run:build']);
	grunt.registerTask('install', ['run:install']);
	grunt.registerTask('test', ['run:test']);
};
