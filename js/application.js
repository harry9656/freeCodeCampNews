/**
*  Module
*
* Description
*/
(function(){
	var app = angular.module('articleFeed', []);
	app.config([function() {
		console.log("Status: Angular configurations.");
	}]);
	app.run([function(){
		console.log("Status: Angular running.");
	}]);
	app.controller('ArticleCtrl', ["$http", function($http){
		var self = this;
		this.articles = [];
		var show = false
		$http.get("http://www.freecodecamp.com/news/hot").success(function(data){
			self.articles = data;
			show = true;
		});
		var hide = true;

		this.isShow = function(){
			return show;
		}
		this.decodeHtml = function(html) {
			var txt = document.createElement("textarea");
			txt.innerHTML = html;
			return txt.value;
		};
		
	}]);

})();
