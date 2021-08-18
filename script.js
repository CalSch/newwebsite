const navHoverSizeChange=15;
let navbarExpanded=false;

$("#nav-placeholder").hide(() => {
	$("#nav-placeholder").load("/nav.html",() => {
		setTimeout(() => {


			$("#nav-placeholder").fadeIn();
			
			if ($("html").width()>"768") {
				console.log("Nav hover effect enabled.\nWidth: "+$("html").width());
				$("nav").hover(function() {
					$(this).stop().animate({height: navHoverSizeChange+50});
				}, function() {
					$(this).stop().animate({height: 50});
				});
			} else {
				console.log("Nav hover effect disabled.\nWidth: "+$("html").width());
			}

			/* $(".navbar-toggler").click(function() {
				navbarExpanded=!navbarExpanded;

				if (navbarExpanded) {
					$("nav").addClass("nav-expand");
				} else {
					$("nav").removeClass("nav-expand");
				}
			}) */
		},10);
	});
});

$("#syntax").html(`
<link rel="stylesheet" href="/highlight/styles/atom-one-dark.css">
<script src="/highlight/highlight.pack.js"></script>
<script>hljs.highlightAll();</script>
`);