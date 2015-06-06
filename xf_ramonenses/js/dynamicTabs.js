/*  DOM Dynamic Tab Creator, version 1
 *  (c) 2005 Andrew Weir <andrew@ajaxlessons.com>
 *
 *  For details, visit Ajax Lessons: http://ajaxlessons.com
 *
/*--------------------------------------------------------------------------*/

var dynamicTabs = Class.create();
dynamicTabs.prototype = {
	
	// CUSTOMIZATION START
	// PROPERTIES CAN ALSO BE CALLED EXTERNALLY BY USING 'dynamicTabs.property = value'
	totalWidth       : 600,
	tabHeight        : 20,
	tabPadding       : 4,
	tabWidth         : 'default',
	tabText          : 'default',
	activeTabText    : 'default',
	tabMsOverTabColor: 'black',
	tabMsOverColor   : 'white',
	tabMsOutColor    : 'black',
	hiliteTabColor   : 'default',
	marginBetweenTabs: 20,
	contentHeight    : 300,
	contentPadding   : 4,
	contentText      : 'default',
	contentColor     : 'default',
	border           : '1px solid black',
	overflow         : 'default',
	parentDiv        : 'default',
	// TAB DATA CAN ALSO BE CALLED EXTERNALLY BY USING 'dynamicTabs.tab[{}]'
	tab: [
		{'name':'Red','color':'red','content':'This is content for the red tab.'},
		{'name':'Blue','color':'blue','content':'This is content for the blue tab.'},
		{'name':'Yellow','color':'yellow','content':'This is content for the yellow tab.'},
		{'name':'Green','color':'green','content':'This is content for the green tab.'},
		{'name':'Orange','color':'orange','content':'This is content for the orange tab.'}
	],
	// CUSTOMIZATION END
	
	instance: 1,
	
	initialize: function () {
	},	
	changeTabs: function (obj) {
		var instance = this.instance;
		var tabs = document.getElementsByClassName ('tabClass' + instance);
		var tab = this.tab;
		var hilite = this.hiliteTabColor;
		var cColor = this.contentColor;
		var tText  = this.tabText;
		tabs.each(function (item, index) {
			if (obj.id == tabs[index].id) {
				$(tabs[index].id).style.marginBottom = '-1px';		
				if (hilite == 'default') {
					$(tabs[index].id).style.background = tab[index].color;
					$(tabs[index].id).style.borderBottom = '1px ' + tab[index].color + ' solid';
				} else {
					$(tabs[index].id).style.background = hilite;
					$(tabs[index].id).style.borderBottom = '1px ' + hilite + ' solid';
				}
				if (cColor == 'default') {
					$('content' + instance).style.background = tab[index].color;
				} else {
					$('content' + instance).style.background = cColor;
				}				
				activeColor = tab[index].color;
			} else {
				$(tabs[index].id).style.borderBottom = 0;
				if (tText != 'default') {
					$(tabs[index].id).style.color = tText;
				}
				$(tabs[index].id).style.marginBottom = 0;
				$(tabs[index].id).style.background   = tab[index].color;
			}		
		});	
	},
	drawTabs: function () {
		var instance = this.instance;
		var tab      = this.tab;
		var width    = this.totalWidth;
		var tWidth   = this.tabWidth;
		var tHeight  = this.tabHeight;
		var tPadding = this.tabPadding;
		var mbTabs   = this.marginBetweenTabs;
		var cHeight  = this.contentHeight;
		var cPadding = this.contentPadding;
		var border   = this.border;
		var tText    = this.tabText;
		var cText    = this.contentText;
		var ovrflow  = this.overflow;
		var ct = document.createElement('div');
		ct.setAttribute('id', 'container' + instance);
		ct.style.width = width + 'px';
		if (this.parentDiv != 'default') {
			var tmp = this.parentDiv;
			tmp.appendChild(ct);
		} else {
			document.body.appendChild(ct);
		}
		var tb = Array();
		this.tab.each(function (item, index) {
			tb[index] = document.createElement('div');
			tb[index].setAttribute('id', 'tab' + (index+1) + "." + instance);
			tb[index].style.marginRight = mbTabs + 'px';
			if (tWidth == 'default') {
				tb[index].style.width = (width/tab.length)-40 + 'px';
			} else {
				tb[index].style.width = tWidth + 'px';
			}
			if (tText != 'default') {
				tb[index].style.color = tText;
			}
			tb[index].style.styleFloat   = 'left';
			tb[index].style.cssFloat     = 'left';
			tb[index].style.height       = tHeight + 'px';
			tb[index].style.border       = border;
			tb[index].style.borderBottom = 0;
			tb[index].style.cursor       = 'pointer';
			tb[index].style.padding      = tPadding + 'px';
			tb[index].className          = 'tabClass' + instance;
			tb[index].innerHTML          = tab[index].name;
			ct.appendChild(tb[index]);	
		});
		var cn = document.createElement('div');
		cn.setAttribute('id', 'content' + instance);
		if (cText != 'default') {
			cn.style.color = cText;
		}		
		cn.style.clear   = 'both';
		cn.style.height  = cHeight + 'px';
		cn.style.border  = border;
		cn.style.padding = cPadding + 'px';
		if (ovrflow != 'default') {
			cn.style.overflow = ovrflow;
		}
		ct.appendChild(cn);	
	},
	init: function () {
		this.drawTabs ();
		var instance          = this.instance;
		var active            = 'tab1.' + instance;
		var tab               = this.tab;
		var activeColor       = tab[0].color;
		var tabMsOverTabColor = this.tabMsOverTabColor;
		var tabMsOverColor    = this.tabMsOverColor;
		var tabMsOutColor     = this.tabMsOutColor;
		var hilite            = this.hiliteTabColor;
		var tText             = this.tabText;	
		var atText            = this.activeTabText;
		var changeTabs = this.changeTabs.bind(this);		
		var tabs = document.getElementsByClassName ('tabClass' + instance);
		tabs.each(function (item, index) {
			$(tabs[index].id).style.background = tab[index].color;
			$(tabs[index].id).onmouseover = function () {
				this.style.background = tabMsOverTabColor;
				this.style.color      = tabMsOverColor;				
			}
			$(tabs[index].id).onmouseout = function () {
				tmp  = this.id.split('tab');
				tmp  = tmp[1].split('.');
				tmp2 = active.split('tab');
				tmp2 = tmp2[1].split('.');
				tmp2 = tmp2[0];				
				if (tText != 'default') {
					this.style.color = tText;
				} else {
					this.style.color = tabMsOutColor;
				}
				if (atText != 'default') {
					if ((tmp2-1) == index) {
						this.style.color = atText;
					}
				}
				if (hilite == 'default') {
					this.style.background = tab[tmp[0]-1].color;
				} else {
					if ((tmp2-1) == index) {
						this.style.background = hilite;
					} else {
						this.style.background = tab[tmp[0]-1].color;
					}
				}				
			}
			$(tabs[index].id).onclick = function () {
				changeTabs(this);
				active = this.id;
				tmp    = this.id.split('tab');
				tmp    = tmp[1].split('.');
				if (atText != 'default') {
					this.style.color = atText;
				} else if (tText != 'default') {
					this.style.color = tText;
				} else {
					this.style.color = tabMsOutColor;
				}
				$('content' + instance).innerHTML = tab[tmp[0]-1].content;
			}		
		});
		
		// INITIATE ACTIVE TABS START
		$(active).style.marginBottom  = '-1px';
		if (this.hiliteTabColor == 'default') {
			$(active).style.background = activeColor;
			$(active).style.borderBottom  = '1px ' + activeColor + ' solid';
		} else {
			$(active).style.background = this.hiliteTabColor;		
			$(active).style.borderBottom  = '1px ' + this.hiliteTabColor + ' solid';			
		}
		if (this.activeTabText != 'default') {
			$(active).style.color = this.activeTabText;
		}
		if (this.contentColor == 'default') {
			$('content' + instance).style.background = activeColor;
		} else {
			$('content' + instance).style.background = this.contentColor;
		}		
		$('content' + instance).innerHTML = tab[0].content;
		// INITIATE ACTIVE TABS END		
	}
}