$("#nav-placeholder").hide(() => {
	$("#nav-placeholder").load("/nav.html",() => {
		setTimeout(() => {
			$("#nav-placeholder").fadeIn();
		},10);
	});
});