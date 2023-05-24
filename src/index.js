function cmdsub() {
	idx = setLinkVis();
	if (idx) {
		window.location.href = document.getElementById("links").children[idx].dataset["url"];
	}
}

COLOR_HIDDEN = "#454850"
COLOR_SHOWN = "#e2e2e2";

function okd(event) {
	if (event.keyCode == 13) { cmdsub() }
}

function ob() {
	setTimeout(function() {document.getElementsByTagName('input')[0].focus()}, 0);
}

function setLinkVis() {

	txt = document.getElementsByTagName("input")[0].value;

	c = 0;
	idx = -1;

	links = document.getElementById("links").children;
	for (i=3; i < links.length; i++) {
		if (links[i].innerHTML.toLowerCase().includes(txt.toLowerCase())) {
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
	inp.onblur = (ev) => { ob()};
	inp.oninput = (ev) => { setLinkVis() };
	inp.onkeydown = (ev) => {okd(ev)};
});
