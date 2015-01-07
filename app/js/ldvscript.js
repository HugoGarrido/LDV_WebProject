$(document).ready(function(){
	var funfacts_Load = [];

	//CORE
	//Hiding/showing menu
	$("#js-menuShow").click(function(){
		tl = new TimelineLite();
		ldvMenuActionShow(tl);

		getFunFact();
		return false;
	});



	//Hidding by clicking the button
	$("#js-menuHide").click(function(){
		tl2 = new TimelineLite();
		ldvMenuActionHide(tl2);
		return false;
	});	

	$(".ldvMenu li a").click(function(){

		var href = $(this).attr('href');
		tl3 = new TimelineLite();
		ldvMenuActionHide(tl3);
		//Pas de rechargement avec angular donc on doit hack en timant l'event de changement de page 
		setTimeout(function() {window.location = href;}, 2100);
		return false;
	});

	//Fun Facts
	$.getJSON('jsonFunFacts.php', function(data) {
		
		d=data;
		_d();
		getFunFact();

	});

	//Masquage de la couverture s'il l'on est sur l'accueil ou non
	if($(".borderedContainerIntroState").length>0){
		$("#ldvIntro").addClass("visible");	
	}
	else{
		$("#ldvIntro").addClass("hidden");
	}
	
	///////////////////////////////////

	//EFFECT
	//Cover effect on home
	if($("#ldvIntro").length>0){
		var ldvIntro = $("#ldvIntro");
		containerOnContainerSlideEffect(ldvIntro);
	}

	//////////////////////////////////
});



//////////////////////////////////////
//Creation de l'effet de soulevement sur l'intro (utilisation de plugin jquery mousewheel pour récupérer event souris sur une page sans overflow)
function containerOnContainerSlideEffect(container){
	var currentTop;
	var tlX = new TimelineLite();
	var scrollStep =  Math.round(0.1 * $(document).height());
	var scrollStepAbs =  Math.round($(document).height());

	$(document).on('mousewheel', function(event) {

		if(!($("nav").hasClass("doNotScroll"))){
			currentTop = parseInt(container.css('top'));
			currentTop += event.deltaY * scrollStepAbs;
			
			//Pour empêcher de scroller #ldvIntro vers le bas
			if(currentTop > 0){
				currentTop = 0;
			}

			//Pour empêcher de scoller #ldvIntro à l'infini vers le haut 
			if(Math.abs(currentTop) - scrollStep > $(document).height()){
				currentTop = - $(document).height();
				$(".borderedContainerIntroState").removeClass("borderedContainerIntroState");
				$("body").css("padding-top", "4px");
				$("#ldvIntro").remove();
			}

			tlX.fromTo(container, 1, {top : 0, ease : "Back.easeOut"}, {top: currentTop});
			//container.css('top', ''+currentTop+'px');
		}	
	});
}


//Bugged with one TL reversed for the hiding, so I've switch to 2 fcts/TLs -> TO DO : Translate comments because i speak wall street english
function ldvMenuActionShow(tl){
 	tl.to($(".borderedContainer"), 1.2, {scale : 0.96, ease:"Circ.easeIn"});

 	tl.fromTo($("nav"), 0.8, {opacity : 0, scale : 0.98, display:'none', left : '-50px', ease:"Back.easeOut"} , {opacity: 1, scale: 1, display: 'block', left : '0px'}, 0.2);
 	
 	tl.fromTo($(".ffZoneOuter"), 0.6, {opacity : 0, paddingTop : "18%", ease:"Back.easeOut"}, {opacity : 1, paddingTop : "12%"});
 	
 	$("nav").addClass("doNotScroll");
}

function ldvMenuActionHide(tl){
	tl.to($(".ffZoneOuter"), 0.8, {opacity : 0, paddingTop : "15%" ,ease : "Back.easeIn"});

	tl.fromTo($("nav"), 0.8, {opacity: 1, scale: 1, display: 'block', left : '0px'} , {opacity : 0, scale : 0.98, display:'none', left : '-50px', ease:"Back.easeIn"}, 0.2);

	tl.to($(".borderedContainer"), 0.8, {scale : 1, ease:"Back.easeOut"});

	$("nav").removeClass("doNotScroll");
}

/*******************************************************************************************/

//Loading funfacts and stuff
function getFunFact(){
	
	var ff = Math.floor((Math.random() * funfacts.length));
	$(".ffTitle span").empty().append("Fun Fact # "+funfacts[ff]._id);
	$(".ffQuote p").empty().append(funfacts[ff].descriptionF);
}

function _d(){
	funfacts = d.funfacts;
};

function search(Tab, domaine){
	var v = false;
	if(Tab.length>0){
		for (var i=0;i<Tab.length;i++){
			var obj = Tab[i];
			if (Tab[i] == domaine){
				v = true;
				break;
			};
		};
	};
	return v;
};

function increPrjt() {
	for (var i = 0; i < funfacts.length; i++) {
		if (search(funfacts_Load, funfacts.descriptionF)){
			//console.log('ok');
		}	
		else{
			funfacts_Load[funfacts_Load.length] = funfacts[i];
		}
	};
};