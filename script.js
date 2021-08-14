const navHoverSizeChange=15;

$("#nav-placeholder").hide(() => {
	$("#nav-placeholder").load("/nav.html",() => {
		setTimeout(() => {
			$("#nav-placeholder").fadeIn();
			
			$("nav").hover(function() {
				$(this).stop().animate({height: navHoverSizeChange+50});
			}, function() {
				$(this).stop().animate({height: 50});
			});
		},10);
	});
});

$("#syntax").html(`
<link rel="stylesheet" href="/highlight/styles/atom-one-dark.css">
<script src="/highlight/highlight.pack.js"></script>
<script>hljs.highlightAll();</script>
`);