(function(){"use strict";var t={191:function(t,e,n){var a=n(7195),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("h1",{staticClass:"title"},[t._v(t._s(t.innerTitle))]),e("button",{staticClass:"nextPage",on:{click:function(e){return t.prev()}}},[t._v("Prev")]),e("button",{staticClass:"nextPage",on:{click:function(e){return t.next()}}},[t._v("Next")]),e("backgroundFolder",{attrs:{dualPage:this.projects[t.pageCount]}}),e("inputBox",{on:{submitted:function(e){return t.title(e)}}})],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"backgroundFolder"},[e("body",[e("div",{staticClass:"container"},[e("img",{staticStyle:{width:"100%"},attrs:{id:"svg",src:n(6330)}}),e("textPage",{staticClass:"left",attrs:{text:t.dualPage.left.text,link:t.dualPage.left.link}}),e("textPage",{staticClass:"right",attrs:{text:t.dualPage.right.text,link:t.dualPage.right.link}})],1)])])},s=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"textPage"},[e("h3",{staticClass:"doc"},[t._v(t._s(t.text))]),e("iframe",{staticClass:"vid",attrs:{src:this.linkFromString,allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",referrerpolicy:"no-referrer-when-downgrade"}})])},h=[],c={name:"textPage",props:{text:String,link:String},computed:{linkFromString:function(){return console.log("https://youtube.com/embed/"+this.link),"https://youtube.com/embed/"+this.link}}},u=c,d=n(1001),p=(0,d.Z)(u,l,h,!1,null,null,null),m=p.exports,f={name:"backgroundFolder",components:{textPage:m},data:function(){return{}},props:{dualPage:Object}},g=f,b=(0,d.Z)(g,r,s,!1,null,null,null),w=b.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inputBox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"in",domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),e("button",{staticClass:"submit",on:{click:function(e){return t.submit()}}},[t._v("Submit")])])},y=[],k={name:"inputBox",data:function(){return{input:""}},methods:{submit:function(){this.$emit("submitted",this.input)}}},I=k,x=(0,d.Z)(I,v,y,!1,null,"7fd0633d",null),j=x.exports;const C=[{left:{text:"Welcome to my portfolio website that I use to store 'proof' of all my projects.\n                        The above buttons will guide you through my projects. This first entry is on this website itself.\n                        I made the website to be a demonstration of my javascript skills and my ability to teach myself a framework by sifting through\n                        documentation. I programmed the website using a front end framework called Vue. In Vue you can make various\n                        components that are kind of like custom made html tags. Your 'Vue App Instance' can pass data into these components in a top\n                        down manner, and the components can bubble information up to the main app by emitting custom events. I attempted to use all the\n                        basic functionality of vue, without getting too involved (I find front end web design frustrating and am not a huge fan). In vue, components\n                        have a template section, a script section, and a style section making it easy to make a components with lots of functionality in one file\n                        Components can have data, methods, properties which pass information from the parent to child component, and computed properties (for data that needs some math done beforehand).\n                        They can also emit custom events with an $emit method, which allows for data to bubble up to the parent instance. These custom events are then used like any other DOM event would.\n                        I attempted to use all of these in some way or form, even if it complicated things a rather than solve a specific problem.",link:"53kB0GKAd2k"},right:{text:"Since this is a static website, I used Netlify, which is a free service that allows you to link your github and host\n                        a static webpages. It was really simple, I just had to sign up for Netlify with Github and link my repository to the Netlify site, then click\n                        the Deploy button and it gives me a URL which is availiable to anywhere on the internet.",link:"XG8nJDWu3a0"}},{left:{text:'This is one of the games I made using Javascript and the HTML canvas. Its a quick project that I found on youtube, and\n                        it really helped refresh my javascript skills. It uses sprite sheets found online, and animates them based on a simple "physics engine" which consists\n                        of velocity, acceleration, left and right movement, and gravity. There is also a feature which I call "infinite jump" which is definitely a feature\n                        and not a bug at all. There is a health system with hitboxes, and attack boxes which appear while an attack animation displays. It really helped me\n                        get used to the idea of an animation loop, sprite sheets and other parts of game development which were helpful in my current project',link:"JXWTg_vCKZs"},right:{text:"This next project was teed up by the project of the previous page, and it is not yet complete. I am recreating the classic Street Fighter II\n                        game in Javascript. The project is like the previous project, but with more complicated hitboxes and various attack animation, movement animations,\n                        jump animations, idle animations, etc. The project is based on a youtube series by a channel called Shezzor's Corner. He also ripped all the sprites and\n                        posted sprite sheets to use as well, which is really helpful. The project is not finished, but has movement and animation for both players as well as\n                        \"parallax scrolling\" for the background and floor. The attacks are not in yet, and the only characters available are Ken and Ryu, but I've had to take a lot\n                        of time away from the project because this last semester was very difficult. Eventually, I want to add me and my friends as characters, with their own attack\n                        animations and everything. I have a friend who is good at pixel art so this is something he and I have been working on a little bit, but of course we are both busy\n                        and it's always hard to find the time. ",link:"i53Kd2bIBTY"}},{left:{text:"Another Project that I have made in the past is a 5-bar kinetic linkage that\n                        translates rotational motion into a path that looks like a walking motion. It is called a Klann linkage and is often used in robotics to emulate\n                        a crab-like or spider-like walking motion. I used a stepper motor, to drive the mechanism, which wasn't exactly necessary\n                        but it was one of the parts I had at my house. I was going to make more of these legs, cut them out, and attach it to a platform with a controller\n                        to make a crawling robot, but never got around to it. I actually made a CAD model in solidworks for the mechanism and the robot at my old internship,\n                        but I don't work there anymore and I can find the model that I thought I had on a flash drive somewhere.",link:""},right:{text:"I got a _________ stepper motor driver board and hooked it up to an arduino to process input from a joystick and use that to\n                        control the stepper motor's speed and direction. The driver board made it really easy to control the motor, you just have to drive two of the pins to step the motor\n                        and there is a direction pin that controls the direction. In the code for the leg, I had a variable that changed based on the joystick input,\n                        which controlled how long to wait before stepping again, controlling the speed.",link:""}},{left:{text:"This is a flame thrower I made in highschool that I attached to my airsoft gun. Not complicated or super related to programming but\n                        it's pretty cool. I had to buy parts to create a pressurized chamber, and put a ball valve on one end for filling up the chamber with butane,\n                        and a solenoid valve on the other end which triggers when I press a button. I used to have it hooked up to an accelerometer, because i was copying an\n                        Allen Pan youtube project where he makes flamethrowers attached to your arm, which activate when you punch, making the wielder look like a character for\n                        the TV show Avatar the Last Airbender. This was obviously an incredibly dangerous idea, so I decided not to strap the\n                        flamethrower to my arm, and instead strapped it to my airsoft gun. (Much safer)",link:""},right:{text:"This is a little little arduino doodad I made with an arduino for an event hosted by the SBCC Computer Science Club. At the event,\n                        middle school age kids came to the computer lab and got to play with some projects which a few club officers made. There was a soundboard/keyboard made\n                        from tinfoil pads and a arduino mini, A game which my friend made, and a bunch of little arduino devices demonstrating different sensors that it can be\n                        used with. I used an ultrasonic sensor to detect objects, and then flashed red, yellow, or green depending on how close something is to the sensor.\n                        I still have it because I made it out of my arduino, since we were already using all of the department's boards.",link:""}}];var T=C,_={name:"App",components:{backgroundFolder:w,inputBox:j},data:function(){return{innerTitle:"Beau's Portfolio",projects:T,pageCount:0}},methods:{title:function(t){return this.innerTitle=t,t},prev:function(){this.pageCount<=0?this.pageCount=this.projects.length-1:this.pageCount--},next:function(){this.pageCount>=this.projects.length-1?this.pageCount=0:this.pageCount++}}},P=_,O=(0,d.Z)(P,o,i,!1,null,null,null),S=O.exports;a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(S)}).$mount("#app")},6330:function(t,e,n){t.exports=n.p+"img/istockphoto-123469316-612x612-removebg-preview.2ba64545.svg"}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,i){if(!a){var r=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],i=t[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(c--,1);var h=o();void 0!==h&&(e=h)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[a,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,i,r=a[0],s=a[1],l=a[2],h=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(e&&e(a);h<r.length;h++)i=r[h],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},a=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(191)}));a=n.O(a)})();
//# sourceMappingURL=app.9c2a281a.js.map