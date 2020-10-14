__NUXT_JSONP__("/woocommerce/search-for-woocommerce-products-variations", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return {data:[{document:{title:"Search For WooCommerce Products and Variations",description:"",position:4.3,category:"💰 WooCommerce",toc:[{id:B,depth:s,text:C},{id:D,depth:s,text:"Step 1: Hook into pre_get_posts action"},{id:E,depth:s,text:F},{id:G,depth:s,text:H}],body:{type:"root",children:[{type:b,tag:"social",props:{":tweet-text":"'Search For WooCommerce Products and Variations'",":page-url":"'https:\u002F\u002Fwp-dev-recipes.serversideup.net\u002Fwoocommerce\u002Fsearch-for-woocommerce-products-variations'",":github-url":"'https:\u002F\u002Fgithub.com\u002Fserversideup\u002Fwp-dev-recipes'"},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:"recipe-header",props:{":complexity":"'Medium'",":compatibility":"['WordPress 5.4, 5.5+', 'WooCommerce 4+']",":discussion":"'https:\u002F\u002Fcommunity.serversideup.net\u002Ft\u002Fsearch-for-woocommerce-products-and-variations\u002F223'"},children:[{type:a,value:"\n\n\n"}]},{type:a,value:f},{type:b,tag:t,props:{id:B},children:[{type:b,tag:o,props:{href:"#overview",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:C}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"By default WordPress only searches posts and pages. However, if you have a WooCommerce platform, it's extremely beneficial to allow users to search for products and product variations if you have them. "}]},{type:a,value:f},{type:b,tag:t,props:{id:D},children:[{type:b,tag:o,props:{href:"#step-1-hook-into-pre_get_posts-action",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Step 1: Hook into "},{type:b,tag:h,props:{},children:[{type:a,value:I}]},{type:a,value:" action"}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"When you hook into the "},{type:b,tag:h,props:{},children:[{type:a,value:I}]},{type:a,value:" action, you can easily modify the query used during the default WordPress search method. This allows you to adjust it so you can provide "},{type:b,tag:h,props:{},children:[{type:a,value:J}]},{type:a,value:" and "},{type:b,tag:h,props:{},children:[{type:a,value:K}]},{type:a,value:" search functionality."}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Add the following to an included PHP file in your WordPress theme or plugin:"}]},{type:a,value:f},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-php","line-numbers"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"add_action"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'pre_get_posts'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'ssu_search_woocommerce_products'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"ssu_search_woocommerce_products"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"if"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"!"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"is_admin"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"is_search"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"is_main_query"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"set"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'post_type'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"array"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'post'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'page'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'product'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'product_variation'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Before we modify the query, we check to see if 3 checks are true:"}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"The search is NOT coming from the admin side "},{type:b,tag:h,props:{},children:[{type:a,value:"!is_admin()"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"The query is the search query from a search form "},{type:b,tag:h,props:{},children:[{type:a,value:"is_search()"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"The query is the main query used to render the search template page "},{type:b,tag:h,props:{},children:[{type:a,value:"$query-\u003Eis_main_query()"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Now we just adjust the post types searched to include "},{type:b,tag:h,props:{},children:[{type:a,value:J}]},{type:a,value:" post type and "},{type:b,tag:h,props:{},children:[{type:a,value:K}]},{type:a,value:" post type. You will now get products and product variations in your search results."}]},{type:a,value:f},{type:b,tag:t,props:{id:E},children:[{type:b,tag:o,props:{href:"#usage-ideas",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:F}]},{type:a,value:f},{type:b,tag:S,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"Autocomplete products and product variations"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:t,props:{id:G},children:[{type:b,tag:o,props:{href:"#similar-recipes",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:H}]},{type:a,value:f},{type:b,tag:S,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:o,props:{href:"https:\u002F\u002Fwp-dev-recipes.serversideup.net\u002Fthemes\u002Fcreating-wordpress-search-form",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Creating a WordPress Search Form "}]}]},{type:a,value:f}]}]},dir:"\u002Fen\u002Fwoocommerce",path:"\u002Fen\u002Fwoocommerce\u002Fsearch-for-woocommerce-products-variations",extension:".md",slug:"search-for-woocommerce-products-variations",createdAt:T,updatedAt:T,to:"\u002Fwoocommerce\u002Fsearch-for-woocommerce-products-variations"},prev:{title:"Customize the WooCommerce Gutenberg Product Block",slug:"customize-woocommerce-gutenberg-product-block",to:"\u002Fwoocommerce\u002Fcustomize-woocommerce-gutenberg-product-block"},next:{title:"WP Query Posts or Pages By Category",slug:"query-by-category",to:"\u002Fwp-queries\u002Fquery-by-category"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n"," ","code","(",")","function","single-quoted-string","string","operator","a","p",",","li",2,"h2","true",-1,"icon","icon-link","keyword","variable","$query","overview","Overview","step-1-hook-into-pre_get_posts-action","usage-ideas","Usage Ideas","similar-recipes","Similar Recipes","pre_get_posts","product","product_variation",";","{","\n    ","&&","-","\u003E","}","ul","2020-10-14T21:14:03.849Z")));