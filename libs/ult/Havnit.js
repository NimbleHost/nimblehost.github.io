/* sdHavnitFunctions */
jQuery.noConflict();
jQuery(document).ready(function($){
	var sdHavnitFunctions = (function(){
		// VARIABLES
		var jq = $([]),
		siteHeader = jq.add('header.siteHeader'),
		siteLogo = siteHeader.find('a.logo img'),
		title = siteHeader.find('hgroup.title'),
		mContainer = jq.add('div.mainContainer'),
		mPreContent = mContainer.find('div.preContent'),
		mContent = mContainer.find('section.mainContent'),
		fsI = jq.add('.filesharing-item'),
		bEntry = jq.add('.blog-entry'),
		sContent = mContainer.find('aside.sidebarContent'),
		mPostContent = mContainer.find('div.postContent'),
		pContainer = jq.add('div.postContainer'),
		fContainer = jq.add('footer.footerContainer'),
		bContainer = fContainer.find('nav.breadcrumbContainer'),
		breadList = bContainer.find('ul.breadcrumbList'),
		fContent = jq.add('.footerContent');
			
		// FUNCTIONS
		
		/* @group toolbar split/vertical options */
		var sdNavOptions = (function(){
			// invoke sdSmartNav
			$.sdSmartNav();

			//  set top margin for #toolbar_horizontal / !hide !empty top nav
			sdNav.tb1.sdVertAlign('o','m').show();	
			
			// hide empty #toolbar_horizontal
			if (!sdNav.tb1.html().length) sdNav.tb1.css('display','none');
			
			// !round main content if #toolbar_sub is present
			if (sdNav.tb2.html().length) mPreContent.addClass('radius0');
		})();
		/* @end */

		/* @group footer options */
		var sdFooter = (function(){
			//  hide empty footer
			if (bContainer.length){
				bContainer.parent().show();
				// additional breadcrumb separator styling
				breadList
					.append('/')
					.find('li').filter(':last').css('margin','0 5px')
					.find('a').filter(':last').css('margin','0 5px');
			}
			if (fContent.html().length) fContainer.show();
		})();
		/* @end */
		
		/* @group ExtraContent */
		var sdExtracontent = (function(){
			// EC 1 is handled in SS3
			// VARIABLES
			var myEC = '#myExtraContent',
				ec = [
					mPreContent,
					mPostContent,
					pContainer
				],
				ecValue = ec.length;
			
			/* ExtraContent (jQuery) VERSION: r1.4.2 */
			// change ecValue to suit your theme
			for (i=2;i<=ecValue + 1;i++) {
				if ($(myEC + i).length) {
					$(myEC + i + ' script').remove();
					$(myEC + i).appendTo('#extraContainer'+i).show();
					// !hide !empty ExtraContent areas
					ec[i-2].show();
				}
			}
		})();
		/* @end */
		
		/* @group various page style */
		var sdPageStyles = (function(){
			// styles for File Sharing page
			// set width/height of File Sharing blocks according to available space
			if (fsI.length) fsI.width(fsI.parent().outerWidth(true) / 3 - 45).sdSetHeight(fsI,0);
			// styles for Blog page
			// no margin/padding on last blog entry
			if (bEntry.length) bEntry.filter(':last').css({'margin':'0','padding':'0'});
		})();
		/* @end */
		
		/* @group Album */
		var sdAlbums = (function(){
			// invoke sdLightboxAlbums
			$.sdLightboxAlbums({
				css_file	:	'http://seydoggy.github.com/libs/prettyPhoto/jquery.prettyPhoto.css',
				js_file		:	'http://seydoggy.github.com/libs/prettyPhoto/jquery.prettyPhoto.js',
				animation_speed	:	'fast',
				show_title		:	false,
				theme			:	'light_square'
			});

			$.sdAlbumStyle();
		})();
		/* @end */
		
		/* @group general styles */
		// invoke SeydoggySlideshow
		$.SeydoggySlideshow({
			wrapper:'.preContainer',
			heightAdjust:72,
			widthAdjust:74
		});
		
		// set height .mainContent to that of .sidebarContent if shorter
		if (sContent.css('display') != 'none') mContent.css('min-height',sContent.height());
		// set top margin for .siteHeader .title
		if (title.find('h1.site_title').html().length) title.sdVertAlign('o','m');
		// set top margin for .logo img
		if (siteLogo.length) siteLogo.sdVertAlign(siteHeader,'o','m');
		/* @end */
		
	})();
});