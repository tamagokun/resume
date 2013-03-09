jQuery(document).ready(function($) {
	$.ajax('resume.md', {
		success: function(markdown) {
			var lexed = marked.lexer(markdown);
			var parsed = marked.parser(lexed);
			//TODO: Loader?
			$("#main").append(parsed);
		}
	});
});
