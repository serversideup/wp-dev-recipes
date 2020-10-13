__NUXT_JSONP__("/themes/creating-wordpress-search-form", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:[{document:{title:"Creating a WordPress Search Form",description:"",position:2.2,category:"Themes",toc:[{id:E,depth:r,text:F},{id:G,depth:r,text:"Step 1: Add searchform.php to Your Theme"},{id:H,depth:r,text:"Step 2: Display Search Results in search.php Template"},{id:I,depth:r,text:J}],body:{type:"root",children:[{type:b,tag:"social",props:{":tweet-text":"'Creating a WordPress Search Form'",":page-url":"'https:\u002F\u002Fwp-dev-recipes.serversideup.net\u002Fthemes\u002Fcreating-wordpress-search-form'",":github-url":"'https:\u002F\u002Fgithub.com\u002Fserversideup\u002Fwp-dev-recipes'"},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:"recipe-header",props:{":complexity":"'Medium'",":compatibility":"['WordPress 5.4, 5.5+']",":discussion":"'https:\u002F\u002Fcommunity.serversideup.net\u002Ft\u002Fcreating-a-wordpress-search-form\u002F219'"},children:[{type:a,value:"\n\n\n"}]},{type:a,value:f},{type:b,tag:s,props:{id:E},children:[{type:b,tag:p,props:{href:"#overview",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:F}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"WordPress provides a very basic search experience that users can use to find posts within your site, blog, store, etc. In this recipe, we will use the basic functionality to build a simple form into our theme and display the results in the "},{type:b,tag:i,props:{},children:[{type:a,value:o}]},{type:a,value:" template. I consider this a \"theme\" recipe instead of a \"plugin\" recipe since most of the functionality is baked into theme templates."}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"There are 2 different templates that are affected by this recipe. First is the "},{type:b,tag:i,props:{},children:[{type:a,value:o}]},{type:a,value:" page. This will display the search results and you can customize that display in the template. Second, there is a "},{type:b,tag:i,props:{},children:[{type:a,value:x}]},{type:a,value:" template that actually displays the search form (Source: "},{type:b,tag:p,props:{href:K,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:K}]},{type:a,value:"). We will be working in the "},{type:b,tag:i,props:{},children:[{type:a,value:o}]},{type:a,value:" to show the results and providing code that you can either put in the "},{type:b,tag:i,props:{},children:[{type:a,value:x}]},{type:a,value:" (the preferred method) or in any part of your theme if you want to break up search forms into different levels of complexity."}]},{type:a,value:f},{type:b,tag:s,props:{id:G},children:[{type:b,tag:p,props:{href:"#step-1-add-searchformphp-to-your-theme",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:"Step 1: Add "},{type:b,tag:i,props:{},children:[{type:a,value:x}]},{type:a,value:" to Your Theme"}]},{type:a,value:f},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:c,props:{className:[N]},children:[{type:a,value:x}]},{type:b,tag:O,props:{className:[P,"language-html"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"method"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e,m]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"GET"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"action"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e,m]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:T}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"placeholder"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e,m]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"name"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e,m]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e,m]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:a},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:T}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e,m]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"submit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"value"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e,m]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"You can also add that code to any part of your template. As long as the action is "},{type:b,tag:i,props:{},children:[{type:a,value:R}]},{type:a,value:" and the search input has a name of "},{type:b,tag:i,props:{},children:[{type:a,value:V}]},{type:a,value:". "}]},{type:a,value:f},{type:b,tag:s,props:{id:H},children:[{type:b,tag:p,props:{href:"#step-2-display-search-results-in-searchphp-template",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:"Step 2: Display Search Results in "},{type:b,tag:i,props:{},children:[{type:a,value:o}]},{type:a,value:" Template"}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"The results will now be a part of the main WordPress query. So to display the basic results, add the following to "},{type:b,tag:i,props:{},children:[{type:a,value:o}]},{type:a,value:Y}]},{type:a,value:f},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:c,props:{className:[N]},children:[{type:a,value:o}]},{type:b,tag:O,props:{className:[P,"language-php"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"while"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"have_posts"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"the_post"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"get_template_part"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,_,$]},children:[{type:a,value:"'template-parts\u002Fcontent'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,_,$]},children:[{type:a,value:"'search-result'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"endwhile"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"You can modify the display of the search result with the "},{type:b,tag:i,props:{},children:[{type:a,value:"template-parts\u002Fcontent-search-result.php"}]},{type:a,value:" file."}]},{type:a,value:f},{type:b,tag:s,props:{id:I},children:[{type:b,tag:p,props:{href:"#usage-ideas",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:J}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:"li",props:{},children:[{type:a,value:"Basic search for content on your site."}]},{type:a,value:f}]}]},dir:"\u002Fen\u002Fthemes",path:"\u002Fen\u002Fthemes\u002Fcreating-wordpress-search-form",extension:".md",slug:"creating-wordpress-search-form",createdAt:aa,updatedAt:aa,to:"\u002Fthemes\u002Fcreating-wordpress-search-form"},prev:{title:"Add a Custom Menu To Your WordPress Theme",slug:"add-custom-menu-to-your-wordpress-theme",to:"\u002Fthemes\u002Fadd-custom-menu-to-your-wordpress-theme"},next:{title:"Enable Categories on WordPress Pages",slug:"enable-categories-for-wordpress-pages",to:"\u002Fthemes\u002Fenable-categories-for-wordpress-pages"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n"," ","\"","code","tag","attr-name","attr-value","attr-equals","=","search.php","a","p",2,"h2","true",-1,"icon","icon-link","searchform.php","(",")","\u003C","\n    ","function",";","overview","Overview","step-1-add-searchformphp-to-your-theme","step-2-display-search-results-in-searchphp-template","usage-ideas","Usage Ideas","https:\u002F\u002Fcodex.wordpress.org\u002FCreating_a_Search_Page","div","nuxt-content-highlight","filename","pre","line-numbers","form","\u002F","\u003E","input","Search","s","type","\u002F\u003E",":","keyword","single-quoted-string","string","2020-10-13T00:41:26.476Z")));