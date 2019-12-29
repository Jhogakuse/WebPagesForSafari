var LabelEmail_1, LabelEmail_2, LabelEmail_3, LabelEmail_4, LabelEmail_5, LabelEmail_6, LabelEmail_7, LabelEmail_8, LabelEmail_9, LabelEmail_10, 
	LabelEmail_11, LabelEmail_12, LabelEmail_13, LabelEmail_14, LabelEmail_15, LabelEmail_16, LabelEmail_17, LabelEmail_18, LabelEmail_19, LabelEmail_20;
var MessageEmail_0, MessageEmail_1, MessageEmail_2, MessageEmail_3, MessageEmail_4, MessageEmail_5, MessageEmail_6, MessageEmail_7, MessageEmail_8, MessageEmail_9, MessageEmail_10, 
	MessageEmail_11, MessageEmail_12, MessageEmail_13, MessageEmail_14, MessageEmail_15, MessageEmail_16, MessageEmail_17, MessageEmail_18, MessageEmail_19, MessageEmail_20;
var container = document.getElementsByClassName("sign-up");
var firstEmail = false;
var timmerSet;

function getH() {
	var pageHeight = window.innerHeight;
	return pageHeight;
}

function getW(argument) {
	var pageWidth = window.innerWidth;
	return pageWidth;
}

function scalePages(page, maxWidth, maxHeight) {
	//page.attr("style", "height:" + maxHeight + "px");
	$(page).css('height', (maxHeight - 110) + 'px');
	//console.log(maxHeight);
	//console.log(maxWidth);
	if ((maxWidth - maxHeight) < 335) {
		console.log("Portrait  " + (maxWidth - maxHeight) + "   Haz desaparecer");
	}
    if (maxWidth > maxHeight) {
    } else {
    	console.log("Landscape" + (maxHeight - maxWidth));
    }
}

window.onresize = function () {
    scalePages(container, getW(), getH());
};

$(window).on("load", function () {
	scalePages(container, getW(), getH());
	Initialize();
});

function Initialize() {
	LabelEmail_1 = document.getElementById("LabelEmail_1");
	LabelEmail_2 = document.getElementById("LabelEmail_2");
	LabelEmail_3 = document.getElementById("LabelEmail_3");
	LabelEmail_4 = document.getElementById("LabelEmail_4");
	LabelEmail_5 = document.getElementById("LabelEmail_5");
	LabelEmail_6 = document.getElementById("LabelEmail_6");
	LabelEmail_7 = document.getElementById("LabelEmail_7");
	LabelEmail_8 = document.getElementById("LabelEmail_8");
	LabelEmail_9 = document.getElementById("LabelEmail_9");
	LabelEmail_10 = document.getElementById("LabelEmail_10");
	LabelEmail_11 = document.getElementById("LabelEmail_11");
	LabelEmail_12 = document.getElementById("LabelEmail_12");
	LabelEmail_13 = document.getElementById("LabelEmail_13");
	LabelEmail_14 = document.getElementById("LabelEmail_14");
	LabelEmail_15 = document.getElementById("LabelEmail_15");
	LabelEmail_16 = document.getElementById("LabelEmail_16");
	LabelEmail_17 = document.getElementById("LabelEmail_17");
	LabelEmail_18 = document.getElementById("LabelEmail_18");
	LabelEmail_19 = document.getElementById("LabelEmail_19");
	LabelEmail_20 = document.getElementById("LabelEmail_20");

	MessageEmail_0 = document.getElementById("MessageEmail_0");
	MessageEmail_1 = document.getElementById("MessageEmail_1");
	MessageEmail_2 = document.getElementById("MessageEmail_2");
	MessageEmail_3 = document.getElementById("MessageEmail_3");
	MessageEmail_4 = document.getElementById("MessageEmail_4");
	MessageEmail_5 = document.getElementById("MessageEmail_5");
	MessageEmail_6 = document.getElementById("MessageEmail_6");
	MessageEmail_7 = document.getElementById("MessageEmail_7");
	MessageEmail_8 = document.getElementById("MessageEmail_8");
	MessageEmail_9 = document.getElementById("MessageEmail_9");
	MessageEmail_10 = document.getElementById("MessageEmail_10");
	MessageEmail_11 = document.getElementById("MessageEmail_11");
	MessageEmail_12 = document.getElementById("MessageEmail_12");
	MessageEmail_13 = document.getElementById("MessageEmail_13");
	MessageEmail_14 = document.getElementById("MessageEmail_14");
	MessageEmail_15 = document.getElementById("MessageEmail_15");
	MessageEmail_16 = document.getElementById("MessageEmail_16");
	MessageEmail_17 = document.getElementById("MessageEmail_17");
	MessageEmail_18 = document.getElementById("MessageEmail_18");
	MessageEmail_19 = document.getElementById("MessageEmail_19");
	MessageEmail_20 = document.getElementById("MessageEmail_20");

	HideSth(LabelEmail_1);
	ShowSth(LabelEmail_2);
	ShowSth(LabelEmail_3);
	ShowSth(LabelEmail_4);
	ShowSth(LabelEmail_5);
	ShowSth(LabelEmail_6);
	ShowSth(LabelEmail_7);
	ShowSth(LabelEmail_8);
	ShowSth(LabelEmail_9);
	ShowSth(LabelEmail_10);
	ShowSth(LabelEmail_11);
	ShowSth(LabelEmail_12);
	ShowSth(LabelEmail_13);
	ShowSth(LabelEmail_14);
	ShowSth(LabelEmail_15);
	ShowSth(LabelEmail_16);
	ShowSth(LabelEmail_17);
	ShowSth(LabelEmail_18);
	ShowSth(LabelEmail_19);
	ShowSth(LabelEmail_20);

	HideMessageEmail();
	ShowSth(MessageEmail_0);

	hammerIt_LabelEmail(LabelEmail_1);
	hammerIt_LabelEmail(LabelEmail_2);
	hammerIt_LabelEmail(LabelEmail_3);
	hammerIt_LabelEmail(LabelEmail_4);
	hammerIt_LabelEmail(LabelEmail_5);
	hammerIt_LabelEmail(LabelEmail_6);
	hammerIt_LabelEmail(LabelEmail_7);
	hammerIt_LabelEmail(LabelEmail_8);
	hammerIt_LabelEmail(LabelEmail_9);
	hammerIt_LabelEmail(LabelEmail_10);
	hammerIt_LabelEmail(LabelEmail_11);
	hammerIt_LabelEmail(LabelEmail_12);
	hammerIt_LabelEmail(LabelEmail_13);
	hammerIt_LabelEmail(LabelEmail_14);
	hammerIt_LabelEmail(LabelEmail_15);
	hammerIt_LabelEmail(LabelEmail_16);
	hammerIt_LabelEmail(LabelEmail_17);
	hammerIt_LabelEmail(LabelEmail_18);
	hammerIt_LabelEmail(LabelEmail_19);
	hammerIt_LabelEmail(LabelEmail_20);
}

function hammerIt_LabelEmail(element) {
	$(element).on("click", function (e) {
        switch (element) {
            case LabelEmail_1:
            	HideMessageEmail();
            	ShowSth(MessageEmail_1);
            break;
            case LabelEmail_2:
            	HideMessageEmail();
            	ShowSth(MessageEmail_2);
            	ReadEmail();
            break;
            case LabelEmail_3:
            	HideMessageEmail();
            	ShowSth(MessageEmail_3);
            	ReadEmail();
            break;
            case LabelEmail_4:
            	HideMessageEmail();
            	ShowSth(MessageEmail_4);
            	ReadEmail();
            break;
            case LabelEmail_5:
            	HideMessageEmail();
            	ShowSth(MessageEmail_5);
            	ReadEmail();
            break;
            case LabelEmail_6:
            	HideMessageEmail();
            	ShowSth(MessageEmail_6);
            	ReadEmail();
            break;
            case LabelEmail_7:
            	HideMessageEmail();
            	ShowSth(MessageEmail_7);
            	ReadEmail();
            break;
            case LabelEmail_8:
            	HideMessageEmail();
            	ShowSth(MessageEmail_8);
            	ReadEmail();
            break;
            case LabelEmail_9:
            	HideMessageEmail();
            	ShowSth(MessageEmail_9);
            	ReadEmail();
            break;
            case LabelEmail_10:
            	HideMessageEmail();
            	ShowSth(MessageEmail_10);
            	ReadEmail();
            break;
            case LabelEmail_11:
            	HideMessageEmail();
            	ShowSth(MessageEmail_11);
            	ReadEmail();
            break;
            case LabelEmail_12:
            	HideMessageEmail();
            	ShowSth(MessageEmail_12);
            	ReadEmail();
            break;
            case LabelEmail_13:
            	HideMessageEmail();
            	ShowSth(MessageEmail_13);
            	ReadEmail();
            break;
            case LabelEmail_14:
            	HideMessageEmail();
            	ShowSth(MessageEmail_14);
            	ReadEmail();
            break;
            case LabelEmail_15:
            	HideMessageEmail();
            	ShowSth(MessageEmail_15);
            	ReadEmail();
            break;
            case LabelEmail_16:
            	HideMessageEmail();
            	ShowSth(MessageEmail_16);
            	ReadEmail();
            break;
            case LabelEmail_17:
            	HideMessageEmail();
            	ShowSth(MessageEmail_17);
            	ReadEmail();
            break;
            case LabelEmail_18:
            	HideMessageEmail();
            	ShowSth(MessageEmail_18);
            	ReadEmail();
            break;
            case LabelEmail_19:
            	HideMessageEmail();
            	ShowSth(MessageEmail_19);
            	ReadEmail();
            break;
            case LabelEmail_20:
            	HideMessageEmail();
            	ShowSth(MessageEmail_20);
            	ReadEmail();
            break;
            default:
            break;
        }
    });
}

function HideMessageEmail() {
	HideSth(MessageEmail_0);
	HideSth(MessageEmail_1);
	HideSth(MessageEmail_2);
	HideSth(MessageEmail_3);
	HideSth(MessageEmail_4);
	HideSth(MessageEmail_5);
	HideSth(MessageEmail_6);
	HideSth(MessageEmail_7);
	HideSth(MessageEmail_8);
	HideSth(MessageEmail_9);
	HideSth(MessageEmail_10);
	HideSth(MessageEmail_11);
	HideSth(MessageEmail_12);
	HideSth(MessageEmail_13);
	HideSth(MessageEmail_14);
	HideSth(MessageEmail_15);
	HideSth(MessageEmail_16);
	HideSth(MessageEmail_17);
	HideSth(MessageEmail_18);
	HideSth(MessageEmail_19);
	HideSth(MessageEmail_20);
}

function HideSth(element) {
	$(element).css("display", "none");
}

function ShowSth(element) {
	$(element).css("display", "block");
}

function ReadEmail() {
	if (!firstEmail) {
		firstEmail = true;
		ShowEmail();
	}
}

function ShowEmail() {
    timmerSet = setTimeout(alertFunc, 3000);
}

function alertFunc() {
    alert("Hello!");
    firstEmail = false;
}