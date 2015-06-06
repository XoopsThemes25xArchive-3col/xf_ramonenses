$(document).ready(function() {
	$(".test").hrzAccordion();
	
	$(".test2").hrzAccordion({handlePosition     :"right",
							 openOnLoad     :5
							  });
	$(".test3").hrzAccordion({containerClass     : "hrzContainer3",
			listItemClass      : "listItem3",					
			contentStartClass  : "contentStart3",
			contentEndClass    : "contentEnd3",
			contentWrapper     : "contentWrapper3",
			contentInnerWrapper: "contentInnerWrapper3",
			handleClass        : "handle3",
			handleClassOver    : "handleOver3",
			handleClassSelected: "handleSelected3",
			customHandleClass  : "custom"
							  });
	
 });