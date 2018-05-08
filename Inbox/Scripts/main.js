var container = $(".sign-up");

function getH() {
	var pageHeight = window.innerHeight;
	return pageHeight;
}

function getW(argument) {
	var pageWidth = window.innerWidth;
	return pageWidth;
}

function scalePages(page, maxWidth, maxHeight) {
	/*page.attr("style", "height:" + maxHeight + "px");*/
	page.attr('style', 'height: ' + maxHeight + 'px;');
}

window.onresize = function (event) {
	console.log(getH());
    scalePages(container, getW, getH);
};

$(window).on("load", function () {
	console.log(getH());
	scalePages(container, getW, getH);
});