(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(39)},25:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(17),o=a.n(s),r=(a(25),a(5)),l=a(6),c=a(8),d=a(7),p=a(2),m=a(9),y=a(12),u=a(1),h=a(11),g=a(3),f=a.n(g),b=a(18),v=a.n(b);var k=function(){var e,t,a,i={},n=[window.innerWidth||1280,window.innerHeight||760],s=32,o=u.dispatch("scroll","activate","deactivate"),r="ontouchstart"in document,l=r?function(){e=n[1]/n[0]*innerWidth,t=innerHeight,y.style("height",e+"px").style("box-shadow","0 4px 4px rgba(0,0,0,.3)").filter(function(e,t){return t<h-1}).style("margin-bottom","20px"),g.style("font-size",innerWidth/n[0]*s+"px")}:function(){if(e)var a=p;e=n[1]/n[0]*innerWidth,t=innerHeight,b.style("top",(t-e)/2+"px").style("height",e+"px"),v.style("top",function(e){return(e+(1-m)/2)*t+"px"}).style("height",t*m+"px"),g.style("font-size",innerWidth/n[0]*s+"px").style("height",t*h+"px"),isNaN(a)||scrollTo(0,(p=a)*t)},c=0,d=NaN,p=0,m=1/6,y=u.selectAll("section").style("box-sizing","border-box").style("line-height","1.35em").each(function(e,t){this.__stack__={index:t,active:!1}}),h=y.size(),g=u.select("body").style("margin",0).style("padding",0).style("background","#333");if(r)y.style("position","relative"),u.select(window).on("resize.stack",l).each(l);else{var f=u.select(".body").insert("div","section").style("background","#000").style("box-shadow","0 8px 16px rgba(0,0,0,.3)").style("padding","1px 0").style("margin-top","-1px").style("z-index",0);y.style("display","none").style("opacity",0).style("z-index",0);var b=u.selectAll(y[0].concat(f.node())).style("position","fixed").style("left",0).style("top",0).style("width","100%"),v=u.select("body").append("div").attr("class","indicator").selectAll("div").data(u.range(y.size())).enter().append("div").style("position","absolute").style("z-index",10).style("left",0).style("width","3px").style("background","linear-gradient(to top,black,white)"),k=u.select(null),x=u.select(y[0][0]),N=u.select(y[0][1]);u.select(window).on("resize.stack",l).on("scroll.stack",z).on("keydown.stack",function(){var e;switch(u.event.keyCode){case 39:if(u.event.metaKey)return;case 40:case 34:L(e=u.event.metaKey?1/0:1);break;case 37:if(u.event.metaKey)return;case 38:case 33:L(e=u.event.metaKey?-1/0:-1);break;case 32:e=u.event.shiftKey?-1:1;break;default:return}var i=isNaN(a)?p:a;a=Math.max(0,Math.min(h-1,(e>0?Math.floor(i+(1+m)/2):Math.ceil(i-(1-m)/2))+e)),u.select(document.documentElement).interrupt().transition().duration(500).tween("scroll",function(){var e=u.interpolateNumber(pageYOffset,a*t);return function(t){scrollTo(0,e(t))}}).each("end",function(){a=NaN}),u.event.preventDefault()}).each(l),u.timer(function(){return z(),!0})}function w(e,t){var a=y[0][t],i=e.sourceEvent=u.event;try{u.event=e,o[e.type].call(a,a.__data__,t)}finally{u.event=i}}function E(){this.__stack__.active||(this.__stack__.active=!0,w({type:"activate"},this.__stack__.index))}function P(){this.__stack__.active&&(this.__stack__.active=!1,w({type:"deactivate"},this.__stack__.index))}function z(){var e=pageYOffset/t,a=Math.max(0,Math.min(h-1,Math.floor(e+(1+m)/2)));d!==a&&(a===d+1?(k.interrupt().style("display","none").style("opacity",0).style("z-index",0).each(P),(k=x.interrupt().style("opacity",0).style("z-index",1)).transition().each("end",P),(x=N.interrupt().style("opacity",0).style("z-index",2).each(E)).transition().style("opacity",1),N=u.select(y[0][a+1]).interrupt().style("display","block").style("opacity",0).style("z-index",0)):a===d-1?(N.interrupt().style("display","none").style("opacity",0).style("z-index",0).each(P),(N=x.interrupt().style("opacity",0).style("z-index",1)).transition().each("end",P),(x=k.interrupt().style("opacity",0).style("z-index",2).each(E)).transition().style("opacity",1),k=u.select(y[0][a-1]).interrupt().style("display","block").style("opacity",0).style("z-index",0)):(k.interrupt().style("display","none").style("opacity",0).style("z-index",0).each(P),x.interrupt().style("display","none").style("opacity",0).style("z-index",0).each(P),N.interrupt().style("display","none").style("opacity",0).style("z-index",0).each(P),k=u.select(y[0][a-1]).interrupt().style("display","block").style("opacity",0).style("z-index",0).each(P),x=u.select(y[0][a]).interrupt().style("display","block").style("opacity",1).style("z-index",2).each(E),N=u.select(y[0][a+1]).interrupt().style("display","block").style("opacity",0).style("z-index",0).each(P)),d=a),w({type:"scroll",offset:p=e},d)}function L(e){c=isNaN(a)?p:a+e}return i.size=function(e){return arguments.length?(n=[+e[0],+e[1]],l(),i):n},i.scrollRatio=function(e){return arguments.length?(m=+e,l(),i):m},i.fontSize=function(e){return arguments.length?(s=+e,l(),i):s},i.currentPosition=function(e){return arguments.length?(c=+e,l(),i):c},u.rebind(i,o,"on"),i};var x=function(e){var t=e.children,a=e.className,i=e.background,s=e.full,o=e.bgSize,r=e.bgPosition,l=a||"default";return s?n.a.createElement("section",{className:l+" slide",style:{textAlign:"right",padding:"5em",backgroundImage:i?"url(".concat(i,")"):"#000",backgroundSize:o||"cover",backgroundPosition:r||"center",backgroundRepeat:"no-repeat",zIndex:4}},n.a.createElement("div",{className:"row "+a+"-child",style:{zIndex:30}},n.a.createElement("div",{className:" offset-md-2 col-md-10"},t))):n.a.createElement("section",{className:l+" slide",style:{textAlign:"right",padding:"5em",backgroundImage:r?"url(".concat(i,")"):"#000",backgroundSize:o||"cover",backgroundPosition:r||"center",backgroundRepeat:"no-repeat",zIndex:4}},n.a.createElement("div",{className:"row "+a+"-child",style:{zIndex:30}},n.a.createElement("div",{className:" offset-md-7 col-md-5"},t)))},N=(a(36),{districts:{13:"https://dl.dropboxusercontent.com/s/0ay4ttnkvkmq1zz/13.jpg",20:"https://dl.dropboxusercontent.com/s/wqcvg13idbp3cct/20.jpg",21:"https://dl.dropboxusercontent.com/s/jc5objqrxc01n9i/21.jpg",22:"https://dl.dropboxusercontent.com/s/fhe1m81siwcnzdv/22.jpg",23:"https://dl.dropboxusercontent.com/s/bnl032h26osmhzt/23.jpg",24:"https://dl.dropboxusercontent.com/s/62syda2lmooa4i6/24.jpg",28:"https://dl.dropboxusercontent.com/s/t9u4tn7xcyqpkh1/28.jpg",29:"https://dl.dropboxusercontent.com/s/aj1w6vci09sre79/29.jpg",30:"https://dl.dropboxusercontent.com/s/fc853tyhuybmvgi/30.jpg",31:"https://dl.dropboxusercontent.com/s/so51iklp76mcain/31.jpg",36:"https://dl.dropboxusercontent.com/s/lmdi7d34yfjvy2q/36.jpg"},backgrounds:{langtang:"https://dl.dropboxusercontent.com/s/mctsnz7ctrp3z5e/langtang_bg.jpg",damagecollapse:"https://dl.dropboxusercontent.com/s/8lnr1jpumnjhush/damagecollapse.png",fullrecovery:"https://dl.dropboxusercontent.com/s/y5n2drf5oqjjlw3/fullrecovery.png",reconrecovery:"https://dl.dropboxusercontent.com/s/q57glaj2mh89zb7/reconstructionrecovery.png"}}),w=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).state={},e.myRef=n.a.createRef(),e.sectionLabels=["firstMap","secondMap"],e.activate=e.activate.bind(Object(p.a)(e)),e.deactivate=e.deactivate.bind(Object(p.a)(e)),e.initStack=e.initStack.bind(Object(p.a)(e)),e.firstMapMagic=e.firstMapMagic.bind(Object(p.a)(e)),e.bringBgToFront=e.bringBgToFront.bind(Object(p.a)(e)),e.sectionConfig=[{sectionName:"firstMap",backgroundNode:"firstMapBg",magicFunction:e.firstMapMagic},{sectionName:"secondMap",backgroundNode:"secondMapBg",magicFunction:e.firstMapMagic}],e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;h.accessToken="pk.eyJ1IjoiYWZ0ZXJ0aGVxdWFrZSIsImEiOiJjankxeGg3dzEwNnJtM2Nyemp6a3U5OXJ6In0.aA7Az96tDYkdreQiI5dn_w";var t=new h.Map({container:"firstMapBg",style:"mapbox://styles/afterthequake/cjy2z0w5b28591dqvy4g7iw9t",center:[85.324,27.7172],zoom:4}),a={type:"Point",coordinates:[84.731,28.231]};f()("html, body").css({overflow:"hidden",height:"100%"}),u.select(".scroll-ready").style("visibility","hidden"),t.on("load",function(){t.flyTo({center:[85.324,27.7172],zoom:4}),t.addSource("point",{type:"geojson",data:a}),t.addLayer({id:"point",source:"point",type:"circle",paint:{"circle-radius":5,"circle-color":"orange"}}),t.addLayer({id:"shaking-intensity",source:{type:"vector",url:"mapbox://afterthequake.53b7infa"},"source-layer":"shakingintensity_updated-8xrpym",type:"fill",paint:{"fill-color":["get","color"],"fill-opacity":.6,"fill-outline-color":"#fff"}}),t.addLayer({id:"vdcs",source:{type:"vector",url:"mapbox://afterthequake.bhwygfry"},"source-layer":"vdc_shp_updated-1hhls4",type:"fill",paint:{"fill-color":["get","color"],"fill-opacity":.7}}),t.addLayer({id:"langtang",source:{type:"vector",url:"mapbox://afterthequake.6x1w6i1n"},"source-layer":"langtang_vdc-d7sith",type:"fill",paint:{"fill-color":["get","color"],"fill-opacity":.7,"fill-outline-color":["get","line"]}}),t.addLayer({id:"landslides",source:{type:"vector",url:"mapbox://afterthequake.3uw55vup"},"source-layer":"landslides_updated-2mbant",type:"fill",paint:{"fill-color":["get","color"],"fill-opacity":.7}}),t.addLayer({id:"11-dists",source:{type:"vector",url:"mapbox://afterthequake.3j3p40y7"},"source-layer":"dist11_shp_updated-77f0vk",type:"fill",paint:{"fill-color":["get","color"],"fill-outline-color":"#fff","fill-opacity":.7}});e.map.setLayoutProperty("shaking-intensity","visibility","none"),e.map.setLayoutProperty("point","visibility","none"),e.map.setLayoutProperty("vdcs","visibility","none"),e.map.setLayoutProperty("langtang","visibility","none"),e.map.setLayoutProperty("landslides","visibility","none"),e.map.setLayoutProperty("11-dists","visibility","none"),function e(a){t.setPaintProperty("point","circle-radius",120*Math.abs(Math.sin(a/600)/2)+5),t.setPaintProperty("point","circle-opacity",Math.abs(Math.cos(a/600)/2)+.1),t.setPaintProperty("shaking-intensity","fill-opacity",1*Math.abs(Math.sin(a/600))),requestAnimationFrame(e)}(0),f()("html, body").css({overflow:"auto",height:"auto"}),u.select(".scroll-ready").style("visibility","visible"),u.select(".loadingScreen").transition("ease").style("opacity","0").duration(1e3).style("z-index","-1"),console.log("end of map.onload")}),t.once("style.load",function(){console.log("end of map.onstyleload")}),this.map=t,this.initStack()}},{key:"toTitleCase",value:function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}},{key:"firstMapMagic",value:function(e){var t=this;switch(e){case 0:this.map.isStyleLoaded()&&(this.map.fitBounds([[80.725,26.371169954656388],[88.18355070914183,30.430731412528115]],{padding:100,offset:[-100,0]}),this.map.setLayoutProperty("shaking-intensity","visibility","none"),this.map.setLayoutProperty("point","visibility","visible"),this.map.setLayoutProperty("vdcs","visibility","none"),this.map.setLayoutProperty("langtang","visibility","none"),this.map.setLayoutProperty("landslides","visibility","none"),this.map.setLayoutProperty("11-dists","visibility","none"));break;case 1:this.map.isStyleLoaded()&&(this.map.fitBounds([[80.725,26.371169954656388],[88.18355070914183,30.430731412528115]],{padding:100,offset:[-100,0]}),this.map.setLayoutProperty("shaking-intensity","visibility","visible"),this.map.setLayoutProperty("point","visibility","visible"),this.map.setLayoutProperty("vdcs","visibility","none"),this.map.setLayoutProperty("langtang","visibility","none"),this.map.setLayoutProperty("landslides","visibility","none"),this.map.setLayoutProperty("11-dists","visibility","none"));break;case 2:this.map.isStyleLoaded()&&(this.map.fitBounds([[84.41874016200006,26.922909152000045],[86.68570557500004,28.75051294800005]],{padding:100,offset:[-100,0]}),this.map.setLayoutProperty("shaking-intensity","visibility","none"),this.map.setLayoutProperty("point","visibility","none"),this.map.setLayoutProperty("vdcs","visibility","visible"),this.map.setLayoutProperty("langtang","visibility","none"),this.map.setLayoutProperty("landslides","visibility","none"),this.map.setLayoutProperty("11-dists","visibility","none"));break;case 3:this.map.isStyleLoaded()&&(this.map.fitBounds([[84.41874016200006,26.922909152000045],[86.68570557500004,28.75051294800005]],{padding:100,offset:[-100,0]}),this.map.setLayoutProperty("shaking-intensity","visibility","none"),this.map.setLayoutProperty("point","visibility","none"),this.map.setLayoutProperty("vdcs","visibility","visible"),this.map.setLayoutProperty("langtang","visibility","visible"),this.map.setLayoutProperty("landslides","visibility","none"),this.map.setLayoutProperty("11-dists","visibility","none"));break;case 4:this.map.isStyleLoaded()&&(this.map.fitBounds([[85.39955896100008,28.12921535600003],[85.80010921600007,28.386211634000063]],{padding:100,offset:[-100,0]}),this.map.setLayoutProperty("shaking-intensity","visibility","none"),this.map.setLayoutProperty("point","visibility","none"),this.map.setLayoutProperty("vdcs","visibility","none"),this.map.setLayoutProperty("langtang","visibility","visible"),this.map.setLayoutProperty("landslides","visibility","visible"),this.map.setLayoutProperty("11-dists","visibility","none"));break;case 5:u.select(".exceptionLayer").style("z-index",5),u.select(".firstMapBg").style("z-index",4),this.map.isStyleLoaded()&&(this.map.fitBounds([[84.41874016200006,26.922909152000045],[86.68570557500004,28.75051294800005]],{padding:100,offset:[-100,0]}),this.map.setLayoutProperty("shaking-intensity","visibility","none"),this.map.setLayoutProperty("point","visibility","none"),this.map.setLayoutProperty("vdcs","visibility","none"),this.map.setLayoutProperty("langtang","visibility","none"),this.map.setLayoutProperty("landslides","visibility","none"),this.map.setLayoutProperty("11-dists","visibility","visible")),this.map.on("mousemove","11-dists",function(e){var a=t.map.queryRenderedFeatures(e.point,{layers:["11-dists"]}),i=a[0].properties["DNAME.x"],n=a[0].properties.DCODE;u.select(".exceptionInfo").style("z-index",5).html("<div>\n                        <h5>\n                        ".concat(t.toTitleCase(i),' - Reconstruction Progress\n                        </h5>    \n                        <img class="img-responsive" width="100%" src=').concat(N.districts[n],"/>\n                        </div>\n                        "))}),this.map.on("mouseout","11-dists",function(e){u.select(".exceptionInfo").style("z-index",-1)})}}},{key:"getSlideShowConfig2",value:function(e){var t={sectionBySection:{}},a=this.sectionConfig,i=[],n={};a.forEach(function(e,s){for(var o=u.selectAll("."+e.sectionName),r=o[0].length,l=u.selectAll("section"),c=[],d=0;d<r;d++){var p=l[0].indexOf(o[0][d]);n[p]=Object(y.a)({},e,{position:d}),c.push(l[0].indexOf(o[0][d]))}t.sectionBySection[e.sectionName]={sectionName:e.sectionName,positions:c,backgroundNode:a[s].backgroundNode,magicFunction:a[s].magicFunction},i.push.apply(i,c)});for(var s=u.selectAll(".slide")[0].length,o={},r=0;r<s;r++)-1!==i.indexOf(r)?o[r]=Object(y.a)({},n[r]):o[r]=null;return o[e]}},{key:"bringBgToFront",value:function(e){u.select("."+e.backgroundNode).style("z-index",3),u.selectAll("."+e.sectionName).filter(function(t,a){return a===e.position}).style("z-index",3).style("background-color","rgba(0,0,0,0)")}},{key:"sendBgBack",value:function(){console.log("sendBgBack"),this.sectionConfig.forEach(function(e){u.select("."+e.backgroundNode).style("z-index",-1)})}},{key:"activate",value:function(e,t){var a=this.getSlideShowConfig2(t);null!==a?(this.bringBgToFront(a),u.select(".exceptionLayer").style("z-index",-1),u.select(".exceptionInfo").style("z-index",-1),this.props.isReady&&a.magicFunction(a.position)):(u.select(".exceptionLayer").style("z-index",-1),u.select(".exceptionInfo").style("z-index",-1),this.sendBgBack())}},{key:"deactivate",value:function(e,t){}},{key:"initStack",value:function(){this.mystack=k().on("activate",this.activate).on("deactivate",this.deactivate)}},{key:"render",value:function(){return n.a.createElement("div",{ref:this.myRef,className:"body"},this.sectionConfig.map(function(e){return n.a.createElement("div",{key:e.backgroundNode,id:e.backgroundNode,className:e.backgroundNode+" test"})}),n.a.createElement("div",{className:"row d-flex loadingScreen"},n.a.createElement("div",{className:"col-sm-2 offset-md-5 align-self-center"},n.a.createElement("div",{className:"text-center"},n.a.createElement(v.a,{sizeUnit:"px",size:170,margin:"0 auto",color:"#fff",loading:!0})))),n.a.createElement("div",{className:"exceptionLayer"},n.a.createElement("p",{className:"mediumText"},"More than 4 years later, the country has made significant progress on their reconstruction."),n.a.createElement("p",{className:"smallText"},"As of July 2019, 387,500 out of 726,000 eligible beneficiaries have completed construction. received NPR 300000 (~USD $3000)."),n.a.createElement("p",{className:"grey "},"Move your mouse over a district to learn more."),n.a.createElement("p",{className:"tinyText"},"Source: the"," ",n.a.createElement("a",{href:"https://ehrpinspection.nra.gov.np/moud/combined-chart",rel:"noopener noreferrer",target:"_blank"},"Earthquake Housing Reconstruction Registration Program")," ","has tracked reconstruction progress.")),n.a.createElement("div",{className:"exceptionInfo"}),n.a.createElement(x,{id:"test"},n.a.createElement("p",{className:"largeText"},n.a.createElement("b",null,"Nepal after the quake.")),n.a.createElement("p",{className:"mediumTextLight"},"Exploring the impacts and reconstruction of the 2015 Gorkha earthquake."),n.a.createElement("p",{className:"mediumTextLight"},"Submitted as part of the"," ",n.a.createElement("a",{href:"https://understandrisk.org/vizrisk/",rel:"noopener noreferrer",target:"_blank"},"#VizRisk")," ","challenge by Arogya Koirala, Sabine Loos, and Karen Barns"),n.a.createElement("p",{className:"grey scroll-ready"},"Press the down arrow of your keyboard to begin.")),n.a.createElement(x,{className:this.sectionConfig[0].sectionName},n.a.createElement("p",{className:"mediumText"},"On April 25, 2015 a Mw7.8 earthquake struck central Nepal."),n.a.createElement("p",{className:"smallText"},"The epicenter of the earthquake was in the village of Barpak, only 175 km away from the Nepal\u2019s largest city, Kathmandu.")),n.a.createElement(x,{className:this.sectionConfig[0].sectionName},n.a.createElement("p",{className:"mediumText"},"Shaking could be felt across most of the country.."),n.a.createElement("p",{className:"smallText"},"Here is the shaking intensity from the"," ",n.a.createElement("a",{href:"https://earthquake.usgs.gov/earthquakes/eventpage/us20002926/executive#shakemap?source=us&code=us20002926",target:"_blank",rel:"noopener noreferrer"},"USGS Shakemap"),". An intensity as low as five can cause objects to fall from homes\u2019 shelves and windows to crack.")),n.a.createElement(x,{className:this.sectionConfig[0].sectionName},n.a.createElement("p",{className:"mediumText"},"..and it severely damaged homes across 11 districts."),n.a.createElement("p",{className:"smallText"},"This is the average damage of all homes with each village of the 11 hardest hit districts outside of Kathmandu Valley. Here, a damage level of five means all the homes within that village collapsed."," "),n.a.createElement("p",{className:"tinyText"},"Source: The Government of Nepal surveyed the household impact for each home outside of Kathmandu Valley, made publicly available"," ",n.a.createElement("a",{href:"http://eq2015.npc.gov.np",target:"_blank",rel:"noopener noreferrer"}," ","here"),". Blank areas due to unsurveyed locations or missing geometries.")),n.a.createElement(x,{className:this.sectionConfig[0].sectionName},n.a.createElement("p",{className:"mediumText"},"Mountainous regions were particularly affected"),n.a.createElement("p",{className:"smallText"},"Many homes in the Himalayas to the north were also impacted by landslides triggered by the earthquake.")),n.a.createElement(x,{className:this.sectionConfig[0].sectionName},n.a.createElement("p",{className:"mediumText"},"Langtang village alone had 291 landslides"," "),n.a.createElement("p",{className:"smallText"},"Here you can see the areas where landslides occurred in the month following the earthquake."),n.a.createElement("p",{className:"tinyText"},"Source: The United States Geological Survey used pre- and post-event satellite imagery to map landslides, available"," ",n.a.createElement("a",{href:"https://www.sciencebase.gov/catalog/item/582c74fbe4b04d580bd377e8",rel:"noopener noreferrer",target:"_blank"},"here."))),n.a.createElement(x,{background:"https://www.dl.dropboxusercontent.com/s/mctsnz7ctrp3z5e/langtang_bg.jpg"},n.a.createElement("p",{className:"mediumText"},"The village was almost entirely buried."),n.a.createElement("p",{className:"smallText"},"After an avalanche hit the villages of Ghodatabela and Langtang, nearly 250 people were reported missing. Since Langtang is a popular terkking route, casualties included a large number of domestic and international tourists, as well as locals from the region."),n.a.createElement("p",{className:"tinyText"},"Photo by"," ",n.a.createElement("a",{href:"https://www.flickr.com/photos/markhorrell/33657429816/in/photostream/",rel:"noopener noreferrer",target:"_blank"},"Mark Horell on flickr"),", CC BY-NC-SA 2.0")),n.a.createElement(x,null,n.a.createElement("p",{className:"mediumText"},"Damages and losses from the earthquake were estimated at NPR 706 billion (USD$7 billion)."),n.a.createElement("p",{className:"smallText"},"Three weeks after the earthquake struck, the Government of Nepal led a Post Disaster Needs Assessment to estimate their recovery needs."," "),n.a.createElement("p",{className:"tinyText"},"Source: The Post Disaster Needs Assessment can be found"," ",n.a.createElement("a",{href:"https://www.npc.gov.np/images/category/PDNA_volume_BFinalVersion.pdf",rel:"noopener noreferrer",target:"_blank"},"here."))),n.a.createElement(x,null,n.a.createElement("p",{className:"mediumText"},"The international community responded with a pledge for NPR 480 billion (USD$4 billion)."),n.a.createElement("p",{className:"smallText"},"The International Conference on Nepal\u2019s Reconstruction brought together representatives from over 60 countries exactly two months after the earthquake."),n.a.createElement("p",{className:"tinyText"},"Source: a briefing of the conference is"," ",n.a.createElement("a",{href:"https://kathmandupost.ekantipur.com/news/2015-06-25/44-bn-aid-pledged-during-donor-conference.html",rel:"noopener noreferrer",target:"_blank"},"in The Kathmandu Post."))),n.a.createElement(x,{background:N.backgrounds.damagecollapse,bgSize:"1000px",bgPosition:"left center"},n.a.createElement("p",{className:"mediumText"},"Part of this funding was distributed to homeowners to reconstruct."),n.a.createElement("p",{className:"smallText"},"The National Reconstruction Authority of Nepal provided aid for eligible homeowners. A damaged home received NPR 100000 (~USD $1000) and a collapsed home received NPR 300000 (~USD $3000)"),n.a.createElement("p",{className:"tinyText"},"Source: the full grant disbursement procedure is"," ",n.a.createElement("a",{href:"https://drive.google.com/file/d/0B1aJ_HQvgE5rcTFHcHN0bWZ0VUU/view",rel:"noopener noreferrer",target:"_blank"},"here"))),n.a.createElement(x,{className:this.sectionConfig[0].sectionName}),n.a.createElement(x,{background:N.backgrounds.reconrecovery,bgSize:"1000px",bgPosition:"left center"},n.a.createElement("p",{className:"mediumText"},"From financing, to getting construction materials, organizing the reconstruction for a large part of the population is a massive effort.")),n.a.createElement(x,null,n.a.createElement("p",{className:"mediumText"},"Given the scale, it can arguably be said that reconstruction is progressing well in the case of Nepal."),n.a.createElement("br",null)),n.a.createElement(x,{background:N.backgrounds.fullrecovery,bgSize:"1000px",bgPosition:"left center"},n.a.createElement("p",{className:"mediumText"},"However, reconstruction is only one component of recovery. It also encompasses aspects such as livelihoods, the economy and well-being."),n.a.createElement("br",null),n.a.createElement("p",{className:"mediumText"},"Some of these may be difficult to measure and show on a map but is equally as important.")))}}]),t}(i.Component),E=(a(37),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).state={scrollTop:f()("html, body").scrollTop(),hasReachedZero:0===f()("html, body").scrollTop()},e.onScroll=e.onScroll.bind(Object(p.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onScroll",value:function(){this.setState({scrollTop:0,hasReachedZero:!0})}},{key:"componentWillMount",value:function(){window.addEventListener("scroll",this.onScroll),f()(document).ready(function(){f()(this).scrollTop(0)})}},{key:"componentDidMount",value:function(){f()("html, body").animate({scrollTop:0},"slow")}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},this.state.hasReachedZero&&n.a.createElement(w,{isReady:this.state.hasReachedZero})))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.f94f4421.chunk.js.map