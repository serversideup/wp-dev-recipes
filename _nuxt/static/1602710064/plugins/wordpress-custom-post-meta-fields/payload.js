__NUXT_JSONP__("/plugins/wordpress-custom-post-meta-fields", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR){return {data:[{document:{title:"Add WordPress Custom Post Meta Fields",description:"",position:3.1,category:"🔌 Plugins",toc:[{id:ak,depth:C,text:al},{id:am,depth:C,text:an},{id:ao,depth:C,text:ap},{id:aq,depth:C,text:ar},{id:as,depth:C,text:at},{id:au,depth:C,text:av},{id:aw,depth:C,text:ax}],body:{type:"root",children:[{type:b,tag:"social",props:{":tweet-text":"'Add WordPress Custom Post Meta Fields'",":page-url":"'https:\u002F\u002Fwp-dev-recipes.serversideup.net\u002Fplugins\u002Fwordpress-custom-post-meta-fields'",":github-url":"'https:\u002F\u002Fgithub.com\u002Fserversideup\u002Fwp-dev-recipes'"},children:[{type:a,value:g}]},{type:a,value:g},{type:b,tag:"recipe-header",props:{":complexity":"'Medium'",":compatibility":"['WordPress 5.0+']",":discussion":"'https:\u002F\u002Fcommunity.serversideup.net\u002Ft\u002Fadd-wordpress-custom-post-meta-fields\u002F218'"},children:[{type:a,value:"\n\n\n"}]},{type:a,value:g},{type:b,tag:D,props:{id:ak},children:[{type:b,tag:z,props:{href:"#overview",ariaHidden:w,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:al}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Adding custom post meta fields to your posts, pages, custom post types, products, etc. is EXTREMELY helpful. This allows you to add any missing data that is beneficial to your custom use case. "}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"While I have this in the \"plugins\" category, the same functionality can be added to a theme. The reason this recipe is in the plugins category is it's primarily functional. However, if you don't need a plugin, add this to your theme."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"This recipe contains 3 different methods that all cooperate. I'd recommend grouping these methods in a way that they are easily maintainable. If you are using a theme check out "},{type:b,tag:z,props:{href:"https:\u002F\u002Fwp-dev-recipes.serversideup.net\u002Fgeneral\u002Fprevent-large-functions-by-grouping-functionality",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Prevent a Large functions.php By Grouping Functionality"}]},{type:a,value:". In a plugin, I'd recommend a similar structure of creating some sort of "},{type:b,tag:m,props:{},children:[{type:a,value:"included\u002Frequired"}]},{type:a,value:" functionality, whether it's an object or just a file that contains these methods."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"We will go through the process of adding this functionality and displaying the additional post meta in the meta box."}]},{type:a,value:g},{type:b,tag:D,props:{id:am},children:[{type:b,tag:z,props:{href:"#step-1-add-method-to-register-custom-meta-box",ariaHidden:w,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:an}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The first step we need to take is register the custom meta box to display our custom meta field. Add the following to an included PHP file:"}]},{type:a,value:g},{type:b,tag:x,props:{className:[N]},children:[{type:b,tag:O,props:{className:[H,P]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"add_meta_boxes\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"ssu_add_post_meta_box\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"ssu_add_post_meta_box"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"add_meta_box"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"ssu-custom-meta-fields\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"SSU Custom Meta Fields\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"ssu_post_box_markup\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"post\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"normal\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"high\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"null"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The parameters we will focus on are as follows:"}]},{type:a,value:g},{type:b,tag:az,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"ssu-custom-meta-fields"}]},{type:a,value:" The unique identifier\u002Fid of the custom meta field."}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"SSU Custom Meta Fields"}]},{type:a,value:" This is the title of the meta box."}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:aA}]},{type:a,value:" This is the name of the function that will render our form and the guts of the meta box (we work with this next)."}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"post"}]},{type:a,value:" We are only displaying this field on the post editor page. Set to "},{type:b,tag:m,props:{},children:[{type:a,value:"page"}]},{type:a,value:" or whatever the slug is for your custom post type if you are adding fields there."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:D,props:{id:ao},children:[{type:b,tag:z,props:{href:"#step-2-add-method-to-display-form-inputs",ariaHidden:w,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ap}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Preferably in the same included PHP file, add the next function to display the form:"}]},{type:a,value:g},{type:b,tag:x,props:{className:[N]},children:[{type:b,tag:O,props:{className:[H,P]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"wp_nonce_field"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"include"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"get_template_directory"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"."}]},{type:b,tag:c,props:{className:[d,K,j]},children:[{type:a,value:"'\u002Finc\u002Fcustom-post-meta-field\u002Fmarkup.php'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"This accepts a single parameter which is the "},{type:b,tag:m,props:{},children:[{type:a,value:Q}]},{type:a,value:" the form appears on. We will be using this in our display of the form to pre-populate the meta field if it already contains a value."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"First, we add a "},{type:b,tag:m,props:{},children:[{type:a,value:aD}]},{type:a,value:" field for security. That will injected into our form. Next, we include our form mark up. You don't have to do that, you can render it all within the function if you want. I like having the view separated if we want to add more meta fields otherwise your function will get hairy."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The markup file that contains the form looks like this:"}]},{type:a,value:g},{type:b,tag:x,props:{className:[N]},children:[{type:b,tag:O,props:{className:[H,P]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,aE,H]},children:[{type:b,tag:c,props:{className:[d,V,W]},children:[{type:a,value:aF}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,aI]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K,j]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aK,L]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,V,W]},children:[{type:a,value:aL}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:aM}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"for"}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e,Z]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:a,value:"SSU Extra Field"},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:"br"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:"input"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"name"}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e,Z]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"type"}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e,Z]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:a},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"value"}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e,Z]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,aE,H]},children:[{type:b,tag:c,props:{className:[d,V,W]},children:[{type:a,value:aF}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"echo"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,V,W]},children:[{type:a,value:aL}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"We are just adding an input to the meta box which will contain the value of our custom field (if it's set). The nonce field will be injected before this into our form. This input can be any form field that you want (checkbox, radio buttons, text, number, etc.). If you are using an HTML editor, you will have to initialize it appropriately, but it is possible."}]},{type:a,value:g},{type:b,tag:D,props:{id:aq},children:[{type:b,tag:z,props:{href:"#step-3-save-custom-meta-value",ariaHidden:w,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ar}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Finally, we need to persist the value to the database when the user fills out the information. In the file you added the other methods, add this code:"}]},{type:a,value:g},{type:b,tag:x,props:{className:[N]},children:[{type:b,tag:O,props:{className:[H,P]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"save_post\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"ssu_save_post_custom_meta_fields\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aN]},children:[{type:a,value:"10"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aN]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"ssu_save_post_custom_meta_fields"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"$update"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" \n        "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"||"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"wp_verify_nonce"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"current_user_can"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"edit_post\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"defined"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,q,j]},children:[{type:a,value:"\"DOING_AUTOSAVE\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"&&"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"DOING_AUTOSAVE"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K,j]},children:[{type:a,value:"''"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,K,j]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,K,j]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K,j]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"We hook into the action "},{type:b,tag:m,props:{},children:[{type:a,value:"save_post"}]},{type:a,value:" and run the method to save our additional meta. We run 3 checks before we actually persist the data."}]},{type:a,value:g},{type:b,tag:az,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"We make sure the "},{type:b,tag:m,props:{},children:[{type:a,value:aD}]},{type:a,value:" is valid. This is for security reasons and ensures that the request came from our site."}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"We make sure the user has the right permissions to edit the post."}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"We make sure that we aren't autosaving the post. We don't want this data to persist on an auto save."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"If these checks pass, we initialize the "},{type:b,tag:m,props:{},children:[{type:a,value:ac}]},{type:a,value:", grab it from the "},{type:b,tag:m,props:{},children:[{type:a,value:U}]},{type:a,value:" request if it exists, and run the "},{type:b,tag:m,props:{},children:[{type:a,value:aP}]},{type:a,value:" to save the data to the specific post, with the name of "},{type:b,tag:m,props:{},children:[{type:a,value:af}]},{type:a,value:" and the value of what was passed in."}]},{type:a,value:g},{type:b,tag:D,props:{id:as},children:[{type:b,tag:z,props:{href:"#step-4-retrieve-custom-meta-value",ariaHidden:w,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:at}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"We saw a sneak peak of this in Step 2 when we filled in the existing post meta data. To grab the custom meta field from anywhere (plugin or theme), run the following method:"}]},{type:a,value:g},{type:b,tag:x,props:{className:[N]},children:[{type:b,tag:O,props:{className:[H,P]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,aI]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K,j]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aK,L]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:D,props:{id:au},children:[{type:b,tag:z,props:{href:"#debugging",ariaHidden:w,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:av}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"This can be a little finicky. The first thing you should check is all of your callbacks. Make sure they are named correctly to register the post meta box, the fields are registered correctly, and the form field is displaying."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Second, ensure you are allowing the form field to be displayed in the editor."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"To do this, ensure your panel is being displayed by first clicking the more options button and clicking "},{type:b,tag:m,props:{},children:[{type:a,value:"Options"}]},{type:a,value:":"}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:b,tag:aQ,props:{alt:"Load WordPress Post Editor Options",src:"\u002Frecipes\u002Fplugins\u002Fwordpress-custom-post-meta-fields\u002Fshow-more-settings.png"},children:[]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Scroll to the bottom of the modal and ensure your meta box is checked:\n"},{type:b,tag:aQ,props:{alt:"Ensure Custom Meta Box is Displaying",src:"\u002Frecipes\u002Fplugins\u002Fwordpress-custom-post-meta-fields\u002Fmeta-fields-checked.png"},children:[]}]},{type:a,value:g},{type:b,tag:D,props:{id:aw},children:[{type:b,tag:z,props:{href:"#usage-ideas",ariaHidden:w,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ax}]},{type:a,value:g},{type:b,tag:"ul",props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"Subtitles on pages"}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"Toggle featured image display"}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"Additional product data for WooCommerce"}]},{type:a,value:g}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Fwordpress-custom-post-meta-fields",extension:".md",slug:"wordpress-custom-post-meta-fields",createdAt:aR,updatedAt:aR,to:"\u002Fplugins\u002Fwordpress-custom-post-meta-fields"},prev:{title:"Enable Categories on WordPress Pages",slug:"enable-categories-for-wordpress-pages",to:"\u002Fthemes\u002Fenable-categories-for-wordpress-pages"},next:{title:"Display WooCommerce Featured Products",slug:"display-woocommerce-featured-products",to:"\u002Fwoocommerce\u002Fdisplay-woocommerce-featured-products"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation"," ","\n","(",")","string",",","p","code","function","variable","tag","double-quoted-string",";","keyword","\n    ","operator","li","true","div","\u003E","a","=","\"",2,"h2",-1,"icon","icon-link","language-php","{","}","single-quoted-string","constant","$postID","nuxt-content-highlight","pre","line-numbers","$post","'ssu-extra-field'","\u003C","\n        ","$_POST","delimiter","important","attr-name","attr-value","attr-equals","if","global","[","]","$ssuExtraField","\"ssu-post-additional-fields-nonce\"","$extraField","ssu-extra-field","\u003C\u002F","!","return","\n\n    ","overview","Overview","step-1-add-method-to-register-custom-meta-box","Step 1: Add Method to Register Custom Meta Box","step-2-add-method-to-display-form-inputs","Step 2: Add Method to Display Form Inputs","step-3-save-custom-meta-value","Step 3: Save Custom Meta Value","step-4-retrieve-custom-meta-value","Step 4: Retrieve Custom Meta Value","debugging","Debugging","usage-ideas","Usage Ideas","add_action","ol","ssu_post_box_markup","basename","__FILE__","nonce","php","\u003C?php","get_post_meta","-","property","ID","boolean","?\u003E","label","number","isset","update_post_meta","img","2020-10-14T21:14:03.849Z")));