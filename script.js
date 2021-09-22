const initialTitle=document.title;
const navHoverSizeChange=15;
let navbarExpanded=false;
let titleState=true;
let focused=true;

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

window.onfocus = function() {
  focused = true;
  document.title=initialTitle;
};
window.onblur = function() {
  focused = false;
};

setInterval(function () {
  if (!focused) {
    titleState=!titleState;
    document.title=titleState ? initialTitle : "Come back!";
  }
},2000);