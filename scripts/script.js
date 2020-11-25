let issue_form = document.querySelector('.issue-form'),
issue_mail = issue_form.querySelector('.mail'),
issue_subj = issue_form.querySelector('.subj'),
issue_desc = issue_form.querySelector('.desc'),
issue_plat = issue_form.querySelector('.platform'),
issue_type = issue_form.querySelector('.type'),
issue_validateBtn = issue_form.querySelector('.validateBtn'),

suggestion_form = document.querySelector('.suggestion-form'),
suggestion_mail = suggestion_form.querySelector('.mail'),
suggestion_subj = suggestion_form.querySelector('.subj'),
suggestion_desc = suggestion_form.querySelector('.desc'),
suggestion_plat = suggestion_form.querySelector('.platform'),
suggestion_validateBtn = suggestion_form.querySelector('.validateBtn'),

mail_pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,

topOfHome = $("#page1").offset().top,
topOfWorld = $("#page2").offset().top,
topOfChar = $("#page3").offset().top,
topOfFeat = $("#page4").offset().top,
topOfHelp = $("#page5").offset().top,

menu = document.getElementById ('menu-button'),
nav = document.getElementById ('menu-nav'),

currentSlide = 0,
animation = 1,
slides = document.getElementsByClassName ('slider_img'),
dots = document.querySelectorAll ('.indicators img'),
textSlides = document.getElementsByClassName ('textSlide'),

tab_button1 = document.getElementById("tab_button1"),
tab_button2 = document.getElementById("tab_button2"),
tab_button3 = document.getElementById("tab_button3"),

page1 = document.getElementById ('page1'),
page2 = document.getElementById ('page2'),
page3 = document.getElementById ('page3'),
page4 = document.getElementById ('page4'),
page5 = document.getElementById ('page5'),

page1_btn = document.getElementById ('page1_btn'),
page2_btn = document.getElementById ('page2_btn'),
page3_btn = document.getElementById ('page3_btn'),
page4_btn = document.getElementById ('page4_btn'),
page5_btn = document.getElementById ('page5_btn'),

menu_page1_btn = document.getElementById ('menu_page1_btn'),
menu_page2_btn = document.getElementById ('menu_page2_btn'),
menu_page3_btn = document.getElementById ('menu_page3_btn'),
menu_page4_btn = document.getElementById ('menu_page4_btn'),
menu_page5_btn = document.getElementById ('menu_page5_btn'),

summon = document.getElementById ('ft1'),
customize = document.getElementById ('ft2'),
stratigize = document.getElementById ('ft3'),
battle = document.getElementById ('ft4'),
quest = document.getElementById ('ft5'),
arena = document.getElementById ('ft6');

issue_form.addEventListener('submit', function () {
	event.preventDefault();

	if (mail_pattern.test(issue_mail.value) == false) {
		alert('Введите корректный e-mail (ololo@lol.com)');
	} else {
		alert(issue_mail.value + "\n" +
			issue_subj.value + '\n' + 
			issue_desc.value + '\n' + 
			issue_plat.value + '\n' +
			issue_type.value);
	}
})

suggestion_form.addEventListener('submit', function () {
	event.preventDefault();

	if (mail_pattern.test(suggestion_mail.value) == false) {
		alert('Введите корректный e-mail (ololo@lol.com)');
	} else {
		alert(suggestion_mail.value + '\n' +
			suggestion_subj.value + '\n' +
			suggestion_desc.value + '\n' +
			suggestion_plat.value);
	}
})

window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
  height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
  scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.addEventListener('scroll', function() {
	let howMuchScrolled = Math.round(pageYOffset);

	if (howMuchScrolled >= 0  && howMuchScrolled < topOfWorld - 300) {
		let active = document.querySelector ('.active-page');
		active.classList.remove ('active-page');

		page1_btn.classList.add("active-page");
		menu_page1_btn.classList.add("menu-active-page");
	}

	if (howMuchScrolled >= topOfWorld  && howMuchScrolled < topOfChar - 300) {
		let active = document.querySelector ('.active-page');	
		active.classList.remove ('active-page');

		page2_btn.classList.add("active-page");
		menu_page2_btn.classList.add("menu-active-page");
	}

	if (howMuchScrolled >= topOfChar  && howMuchScrolled < topOfFeat - 300) {
		let active = document.querySelector ('.active-page');	
		active.classList.remove ('active-page');

		page3_btn.classList.add("active-page");
		menu_page3_btn.classList.add("menu-active-page");
	}

	if (howMuchScrolled >= topOfFeat  && howMuchScrolled < topOfHelp - 300) {
		let active = document.querySelector ('.active-page');	
		active.classList.remove ('active-page');

		page4_btn.classList.add("active-page");
		menu_page4_btn.classList.add("menu-active-page");
	}

	if (howMuchScrolled >= topOfHelp) {
		let active = document.querySelector ('.active-page');	
		active.classList.remove ('active-page');

		page5_btn.classList.add("active-page");
		menu_page5_btn.classList.add("menu-active-page");
	}
});


function toggleCollaps () {
	menu.classList.toggle ('collapsed');
	nav.classList.toggle ('toggle-menu')
}

function slider () {
	animation = 1;

	if (currentSlide == 0 && animation == 1) {
		dots[0].src = "img/page2/slides/dot-off.png";
		dots[1].src = "img/page2/slides/dot-on.png";
		

		slides[0].style.left = '-627px';
		slides[1].style.left = '-627px';
		slides[2].style.left = '-627px';

		textSlides[0].style.display = 'none';
		textSlides[1].style.display = 'block';

		currentSlide++;
		animation = 0;
	}

	if (currentSlide == 1 && animation == 1) {
		dots[1].src = "img/page2/slides/dot-off.png";
		dots[2].src = "img/page2/slides/dot-on.png";

		slides[0].style.left = -627 * 2 + 'px';
		slides[1].style.left = -627 * 2 + 'px';
		slides[2].style.left = -627 * 2 + 'px';

		textSlides[1].style.display = 'none';
		textSlides[2].style.display = 'block';

		currentSlide++;
		animation = 0;
	}

	if (currentSlide == 2 && animation == 1) {
		dots[2].src = "img/page2/slides/dot-off.png";
		dots[0].src = "img/page2/slides/dot-on.png";

		textSlides[2].style.display = 'none';
		textSlides[0].style.display = 'block';

		slides[0].style.left = 0;
		slides[1].style.left = 0;
		slides[2].style.left = 0;

		currentSlide = 0;
		animation = 0;
	}
}
setInterval(slider,5000);

function changeByDot (toSlideNumber) {
	dots[0].src = "img/page2/slides/dot-off.png";
	dots[1].src = "img/page2/slides/dot-off.png";
	dots[2].src = "img/page2/slides/dot-off.png";
	if (toSlideNumber == 0) {
		dots[0].src = "img/page2/slides/dot-on.png";

		slides[0].style.left = 0;
		slides[1].style.left = 0;
		slides[2].style.left = 0;

		currentSlide = 0;
	}

	if (toSlideNumber == 1) {
		dots[1].src = "img/page2/slides/dot-on.png";

		slides[0].style.left = '-627px';
		slides[1].style.left = '-627px';
		slides[2].style.left = '-627px';

		currentSlide = 1;
	}

	if (toSlideNumber == 2) {
		dots[2].src = "img/page2/slides/dot-on.png";

		slides[0].style.left = -627 * 2 + 'px';
		slides[1].style.left = -627 * 2 + 'px';
		slides[2].style.left = -627 * 2 + 'px';

		currentSlide = 2;
	}

	textSlides[0].style.display = 'none';
	textSlides[1].style.display = 'none';
	textSlides[2].style.display = 'none';

	textSlides[toSlideNumber].style.display = 'block';
}

function changeDot0 () {
	changeByDot(0);
}

function changeDot1 () {
	changeByDot(1);
}

function changeDot2 () {
	changeByDot(2);
}

function firstTab() {
	if (tab_button2.classList.contains('active_tab')) {
		tab_button2.classList.add('inactive_tab');
		tab_button2.classList.remove('active_tab');

		tab_window2.classList.add('inactive_tab_window');
		tab_window2.classList.remove('active_tab_window');
	}

	if (tab_button3.classList.contains('active_tab')) {
		tab_button3.classList.add('inactive_tab');
		tab_button3.classList.remove('active_tab');

		tab_window3.classList.add('inactive_tab_window');
		tab_window3.classList.remove('active_tab_window');
	}
	
	tab_button1.classList.add ('active_tab');
	tab_button1.classList.remove ('inactive_tab');

	tab_window1.classList.remove('inactive_tab_window');
	tab_window1.classList.add('active_tab_window');
}



function secondTab() {
	if (tab_button1.classList.contains('active_tab')) {
		tab_button1.classList.add('inactive_tab');
		tab_button1.classList.remove('active_tab');

		tab_window1.classList.add('inactive_tab_window');
		tab_window1.classList.remove('active_tab_window');
	}

	if (tab_button3.classList.contains('active_tab')) {
		tab_button3.classList.add('inactive_tab');
		tab_button3.classList.remove('active_tab');

		tab_window3.classList.add('inactive_tab_window');
		tab_window3.classList.remove('active_tab_window');
	}
	

	tab_button2.classList.add ('active_tab');
	tab_button2.classList.remove ('inactive_tab');

	tab_window2.classList.remove('inactive_tab_window');
	tab_window2.classList.add('active_tab_window');
}

function thirdTab() {
	if (tab_button1.classList.contains('active_tab')) {
		tab_button1.classList.add('inactive_tab');
		tab_button1.classList.remove('active_tab');

		tab_window1.classList.add('inactive_tab_window');
		tab_window1.classList.remove('active_tab_window');
	}

	if (tab_button2.classList.contains('active_tab')) {
		tab_button2.classList.add('inactive_tab');
		tab_button2.classList.remove('active_tab');

		tab_window2.classList.add('inactive_tab_window');
		tab_window2.classList.remove('active_tab_window');
	}
	

	tab_button3.classList.add ('active_tab');
	tab_button3.classList.remove ('inactive_tab');

	tab_window3.classList.remove('inactive_tab_window');
	tab_window3.classList.add('active_tab_window');
}

function ToStart () {
	page1.scrollIntoView({block: "start", behavior: "smooth"});
		
	let active = document.querySelector ('.active-page');	
	active.classList.remove ('active-page');

	page1_btn.classList.add("active-page");
	menu_page1_btn.classList.add("menu-active-page");
}

function ToWorld () {
	page2.scrollIntoView({block: "start", behavior: "smooth"});
	
	let active = document.querySelector ('.active-page');
	active.classList.remove ('active-page');

	page2_btn.classList.add("active-page");
	menu_page2_btn.classList.add("menu-active-page");
}

function ToChar () {
	page3.scrollIntoView({block: "start", behavior: "smooth"});

	let active = document.querySelector ('.active-page');
	active.classList.remove ('active-page');

	page3_btn.classList.add("active-page");
	menu_page3_btn.classList.add("menu-active-page");
}

function ToFeat() {
	page4.scrollIntoView({block: "start", behavior: "smooth"});
		
	let active = document.querySelector ('.active-page');
	active.classList.remove ('active-page');

	page4_btn.classList.add("active-page");
	menu_page4_btn.classList.add("menu-active-page");
}

function ToHellp () {
	page5.scrollIntoView({block: "start", behavior: "smooth"});
		
	let active = document.querySelector ('.active-page');
	active.classList.remove ('active-page');

	page5_btn.classList.add("active-page");
	menu_page5_btn.classList.add("menu-active-page");
}

function toSummon () {
	summon.scrollIntoView({block: "start", behavior: "smooth"});
	
}
function toCustomize () {
	customize.scrollIntoView({block: "start", behavior: "smooth"});
}
function toStratigize () {
	stratigize.scrollIntoView({block: "start", behavior: "smooth"});
}
function toBattle () {
	battle.scrollIntoView({block: "start", behavior: "smooth"});
}
function toQuest () {
	quest.scrollIntoView({block: "start", behavior: "smooth"});
}
function toArena () {
	arena.scrollIntoView({block: "start", behavior: "smooth"});
}
