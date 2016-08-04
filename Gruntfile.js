module.exports = function(grunt) {
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    sizes: [{
                        name: 'large',
                        width: 1000,
                    }, {
                        name: 'medium',
                        width: 750
                    }, {
                        name: 'small',
                        width: 500,
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img_src',
                    dest: 'img/'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);

};
