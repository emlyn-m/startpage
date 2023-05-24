cmd_input = document.getElementsByTagName("input")[0];

COLOR_HIDDEN = "#454850"
COLOR_SHOWN = "#e2e2e2";

CUSTOM_URL = "custom_url";


function cmd_submit() {
	idx = setLinkVis();
	if (idx) {
		window.location.href = document.getElementById("links").children[idx].dataset["url"];
	}
}

function onkeydown(event) {
	if (event.keyCode == 13) { cmd_submit() }
}

function onblur() {
	setTimeout(function() {document.getElementsByTagName('input')[0].focus()}, 0);
}

function setLinkVis() {

	cmd = cmd_input.value;

	c = 0;
	idx = -1;

	links = document.getElementById("links").children;
	for (i=3; i < links.length; i++) {
		if (links[i].innerHTML.toLowerCase().includes(cmd.toLowerCase())) {
			links[i].style.color = COLOR_SHOWN;
			c++;
			idx = i;
		} else {
			links[i].style.color = COLOR_HIDDEN;
		}
	}
	if (c == 1) { return idx; }
}


window.addEventListener("load", (e) => {


	inp = document.getElementsByTagName("input")[0];
	inp.onblur = (ev) => { onblur()};
	inp.oninput = (ev) => { setLinkVis() };
	inp.onkeydown = (ev) => { onkeydown(ev)};
	setFocus();


});

function setFocus() {
	cmd_input.focus();
	setTimeout(setFocus, 100);
};
