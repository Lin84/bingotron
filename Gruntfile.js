module.exports=function(grunt){
	grunt.initConfig({

		concat: {
			dist: {
				src: ['sass/base.scss', 
						'sass/scroll-bar.scss',
						'sass/bingotron-top.scss',
						'sass/bingotron-body.scss',
						'sass/bingotron-footer.scss',
						'sass/login-pop-up.scss',
						'sass/license-pop-up.scss',
						'sass/attention-pop-up.scss',
						'sass/balanceRemain-pop-up.scss',
						'sass/offer-pop-up.scss',
						'sass/history-pop-up.scss' ],
				dest: 'sass/style.scss'
			}
		},
		sass:{
			dist:{
				src:"sass/style.scss",
				dest:"css/style.css"
			}
		},
		// uglify: {
		// 	dist:{
		// 		src:"js/script.js",
		// 		dest:"js/script-min.js"
		// 	}
		// },
		watch:{
			sass:{
				files:["sass/*.scss"],
				tasks:["concat","sass"]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	// grunt.loadNpmTasks('grunt-contrib-uglify');
};