$("#nav-placeholder").hide(() => {
	$("#nav-placeholder").load("/nav.html",() => {
		setTimeout(() => {
			$("#nav-placeholder").fadeIn();
		},10);
	});
});

$("#syntax").html(`
<link rel="stylesheet" href="/highlight/styles/atom-one-light.css">
<script src="/highlight/highlight.pack.js"></script>
<script>hljs.highlightAll();</script>
`);