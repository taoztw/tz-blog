(()=>{var u={};u.id=931,u.ids=[931],u.modules={47849:u=>{"use strict";u.exports=require("next/dist/client/components/action-async-storage.external")},72934:u=>{"use strict";u.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:u=>{"use strict";u.exports=require("next/dist/client/components/request-async-storage.external")},54580:u=>{"use strict";u.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:u=>{"use strict";u.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:u=>{"use strict";u.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:u=>{"use strict";u.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},93845:(u,t,e)=>{"use strict";e.r(t),e.d(t,{GlobalError:()=>n.a,__next_app__:()=>c,originalPathname:()=>l,pages:()=>o,routeModule:()=>C,tree:()=>a}),e(11210),e(58948),e(96560);var D=e(23191),s=e(88716),r=e(37922),n=e.n(r),i=e(95231),F={};for(let u in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(u)&&(F[u]=()=>i[u]);e.d(t,F);let a=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(e.bind(e,11210)),"/Users/tz/Desktop/react_project/tailwind-nextjs-blog/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(e.bind(e,58948)),"/Users/tz/Desktop/react_project/tailwind-nextjs-blog/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(e.bind(e,96560)),"/Users/tz/Desktop/react_project/tailwind-nextjs-blog/app/not-found.tsx"]}],o=["/Users/tz/Desktop/react_project/tailwind-nextjs-blog/app/page.tsx"],l="/page",c={require:e,loadChunk:()=>Promise.resolve()},C=new D.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:a}})},21233:(u,t,e)=>{Promise.resolve().then(e.bind(e,66382))},66382:(u,t,e)=>{"use strict";e.d(t,{default:()=>B});var D=e(10326),s=e(37907),r=e(7844),n=e(90606),i=e.n(n),F=e(29873),a=e(17577),o=e.n(a),l=(u,t,e)=>new Promise((D,s)=>{var r=u=>{try{i(e.next(u))}catch(u){s(u)}},n=u=>{try{i(e.throw(u))}catch(u){s(u)}},i=u=>u.done?D(u.value):Promise.resolve(u.value).then(r,n);i((e=e.apply(u,t)).next())}),c=({title:u="Subscribe to the newsletter",apiUrl:t="/api/newsletter"})=>{let e=(0,a.useRef)(null),[s,r]=(0,a.useState)(!1),[n,i]=(0,a.useState)(""),[F,o]=(0,a.useState)(!1);return(0,D.jsxs)("div",{children:[(0,D.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:u}),(0,D.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:u=>l(void 0,null,function*(){u.preventDefault();let D=yield fetch(t,{body:JSON.stringify({email:e.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:s}=yield D.json();if(s){r(!0),i("Your e-mail address is invalid or you are already subscribed!");return}e.current.value="",r(!1),o(!0)}),children:[(0,D.jsx)("div",{children:(0,D.jsxs)("label",{htmlFor:"email-input",children:[(0,D.jsx)("span",{className:"sr-only",children:"Email address"}),(0,D.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:F?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:e,required:!0,type:"email",disabled:F})]})}),(0,D.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,D.jsx)("button",{className:`bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ${F?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"} focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black`,type:"submit",disabled:F,children:F?"Thank you!":"Sign up"})})]}),s&&(0,D.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:n})]})};function C(){return(C=Object.assign?Object.assign.bind():function(u){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var D in e)Object.prototype.hasOwnProperty.call(e,D)&&(u[D]=e[D])}return u}).apply(this,arguments)}var p={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(u){},onComplete:function(u){},preStringTyped:function(u,t){},onStringTyped:function(u,t){},onLastStringBackspaced:function(u){},onTypingPaused:function(u,t){},onTypingResumed:function(u,t){},onReset:function(u){},onStop:function(u,t){},onStart:function(u,t){},onDestroy:function(u){}},E=new(function(){function u(){}var t=u.prototype;return t.load=function(u,t,e){if(u.el="string"==typeof e?document.querySelector(e):e,u.options=C({},p,t),u.isInput="input"===u.el.tagName.toLowerCase(),u.attr=u.options.attr,u.bindInputFocusEvents=u.options.bindInputFocusEvents,u.showCursor=!u.isInput&&u.options.showCursor,u.cursorChar=u.options.cursorChar,u.cursorBlinking=!0,u.elContent=u.attr?u.el.getAttribute(u.attr):u.el.textContent,u.contentType=u.options.contentType,u.typeSpeed=u.options.typeSpeed,u.startDelay=u.options.startDelay,u.backSpeed=u.options.backSpeed,u.smartBackspace=u.options.smartBackspace,u.backDelay=u.options.backDelay,u.fadeOut=u.options.fadeOut,u.fadeOutClass=u.options.fadeOutClass,u.fadeOutDelay=u.options.fadeOutDelay,u.isPaused=!1,u.strings=u.options.strings.map(function(u){return u.trim()}),u.stringsElement="string"==typeof u.options.stringsElement?document.querySelector(u.options.stringsElement):u.options.stringsElement,u.stringsElement){u.strings=[],u.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var D=Array.prototype.slice.apply(u.stringsElement.children),s=D.length;if(s)for(var r=0;r<s;r+=1)u.strings.push(D[r].innerHTML.trim())}for(var n in u.strPos=0,u.currentElContent=this.getCurrentElContent(u),u.currentElContent&&u.currentElContent.length>0&&(u.strPos=u.currentElContent.length-1,u.strings.unshift(u.currentElContent)),u.sequence=[],u.strings)u.sequence[n]=n;u.arrayPos=0,u.stopNum=0,u.loop=u.options.loop,u.loopCount=u.options.loopCount,u.curLoop=0,u.shuffle=u.options.shuffle,u.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},u.typingComplete=!1,u.autoInsertCss=u.options.autoInsertCss,u.autoInsertCss&&(this.appendCursorAnimationCss(u),this.appendFadeOutAnimationCss(u))},t.getCurrentElContent=function(u){return u.attr?u.el.getAttribute(u.attr):u.isInput?u.el.value:"html"===u.contentType?u.el.innerHTML:u.el.textContent},t.appendCursorAnimationCss=function(u){var t="data-typed-js-cursor-css";if(u.showCursor&&!document.querySelector("["+t+"]")){var e=document.createElement("style");e.setAttribute(t,"true"),e.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(e)}},t.appendFadeOutAnimationCss=function(u){var t="data-typed-fadeout-js-css";if(u.fadeOut&&!document.querySelector("["+t+"]")){var e=document.createElement("style");e.setAttribute(t,"true"),e.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(e)}},u}()),d=new(function(){function u(){}var t=u.prototype;return t.typeHtmlChars=function(u,t,e){if("html"!==e.contentType)return t;var D,s=u.substring(t).charAt(0);if("<"===s||"&"===s){for(D="<"===s?">":";";u.substring(t+1).charAt(0)!==D&&!(1+ ++t>u.length););t++}return t},t.backSpaceHtmlChars=function(u,t,e){if("html"!==e.contentType)return t;var D,s=u.substring(t).charAt(0);if(">"===s||";"===s){for(D=">"===s?"<":"&";u.substring(t-1).charAt(0)!==D&&!(--t<0););t--}return t},u}()),A=function(){function u(u,t){E.load(this,t,u),this.begin()}var t=u.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(u){void 0===u&&(u=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,u&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var u=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===u.strPos?u.typewrite(u.strings[u.sequence[u.arrayPos]],u.strPos):u.backspace(u.strings[u.sequence[u.arrayPos]],u.strPos)},this.startDelay)},t.typewrite=function(u,t){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var D=this.humanizer(this.typeSpeed),s=1;!0!==this.pause.status?this.timeout=setTimeout(function(){t=d.typeHtmlChars(u,t,e);var D,r=0,n=u.substring(t);if("^"===n.charAt(0)&&/^\^\d+/.test(n)&&(D=1+(n=/\d+/.exec(n)[0]).length,r=parseInt(n),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),u=u.substring(0,t)+u.substring(t+D),e.toggleBlinking(!0)),"`"===n.charAt(0)){for(;"`"!==u.substring(t+s).charAt(0)&&(s++,!(t+s>u.length)););var i=u.substring(0,t),F=u.substring(i.length+1,t+s);u=i+F+u.substring(t+s+1),s--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),t>=u.length?e.doneTyping(u,t):e.keepTyping(u,t,s),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},r)},D):this.setPauseStatus(u,t,!0)},t.keepTyping=function(u,t,e){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var D=u.substring(0,t+=e);this.replaceText(D),this.typewrite(u,t)},t.doneTyping=function(u,t){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(u,t)},this.backDelay))},t.backspace=function(u,t){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var D=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){t=d.backSpaceHtmlChars(u,t,e);var D=u.substring(0,t);if(e.replaceText(D),e.smartBackspace){var s=e.strings[e.arrayPos+1];e.stopNum=s&&D===s.substring(0,t)?t:0}t>e.stopNum?(t--,e.backspace(u,t)):t<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],t))},D)}else this.setPauseStatus(u,t,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(u,t,e){this.pause.typewrite=e,this.pause.curString=u,this.pause.curStrPos=t},t.toggleBlinking=function(u){this.cursor&&(this.pause.status||this.cursorBlinking!==u&&(this.cursorBlinking=u,u?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(u){return Math.round(Math.random()*u/2)+u},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var u=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){u.arrayPos++,u.replaceText(""),u.strings.length>u.arrayPos?u.typewrite(u.strings[u.sequence[u.arrayPos]],0):(u.typewrite(u.strings[0],0),u.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(u){this.attr?this.el.setAttribute(this.attr,u):this.isInput?this.el.value=u:"html"===this.contentType?this.el.innerHTML=u:this.el.textContent=u},t.bindFocusEvents=function(){var u=this;this.isInput&&(this.el.addEventListener("focus",function(t){u.stop()}),this.el.addEventListener("blur",function(t){u.el.value&&0!==u.el.value.length||u.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},u}();let h=(0,a.memo)(({style:u,className:t,typedRef:e,parseRef:D,stopped:s,children:r,startWhenVisible:n,...i})=>{let F=(0,a.useRef)(null),l=(0,a.useMemo)(()=>[...Object.values(i).filter(u=>"boolean"==typeof u||"number"==typeof u||"string"==typeof u),i.strings?.join(",")],[i]);(0,a.useEffect)(()=>{let u=D&&D(F)||F.current,t=new A(u,{...i});if((s||n)&&t?.stop(),n){let e=new IntersectionObserver(([u])=>{u.isIntersecting&&(t?.start(),e.disconnect())});e.observe(u)}return e&&t&&e(t),()=>{t.destroy()}},l);let c=r?o().cloneElement(r,{ref:F}):o().createElement("span",{style:u,ref:F});return o().createElement("span",{style:u,className:t,"data-testid":"react-typed"},c)});function B({posts:u}){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,D.jsxs)("div",{className:"space-y-2 pb-8 pt-6 md:space-y-5",children:[D.jsx(h,{className:"text-4xl font-extrabold leading-9 tracking-tight text-primary dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",cursorChar:"|",autoInsertCss:!0,typeSpeed:100,strings:["\uD83D\uDC4B It's Tz"]}),D.jsx("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:i().description})]}),(0,D.jsxs)("ul",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[!u.length&&"No posts found.",u.slice(0,5).map(u=>{let{slug:t,date:e,title:n,summary:a,tags:o}=u;return D.jsx("li",{className:"py-12",children:D.jsx("article",{className:"text-gray-900 duration-500 hover:-translate-y-0.5 hover:scale-110 dark:text-gray-100",children:(0,D.jsxs)("div",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0",children:[(0,D.jsxs)("dl",{children:[D.jsx("dt",{className:"sr-only",children:"Published on"}),D.jsx("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:D.jsx("time",{dateTime:e,children:(0,F.p)(e,i().locale)})})]}),(0,D.jsxs)("div",{className:"space-y-5 xl:col-span-3",children:[(0,D.jsxs)("div",{className:"space-y-6",children:[(0,D.jsxs)("div",{children:[D.jsx("h2",{className:"text-2xl font-bold leading-8 tracking-tight",children:D.jsx(s.Z,{href:`/blog/${t}`,className:"text-gray-900 dark:text-gray-100",children:n})}),D.jsx("div",{className:"mt-1 flex flex-wrap",children:o.map(u=>D.jsx(r.Z,{text:u},u))})]}),D.jsx("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:a})]}),D.jsx("div",{className:"text-base font-medium leading-6",children:D.jsx(s.Z,{href:`/blog/${t}`,className:"dark:hover:text-primary-400 text-blue-600 text-primary-500 hover:text-primary-600 dark:text-green-600","aria-label":`Read more: "${n}"`,children:"Read more →"})})]})]})})},t)})]})]}),u.length>5&&D.jsx("div",{className:"flex justify-end text-base font-medium leading-6",children:D.jsx(s.Z,{href:"/blog",className:"dark:hover:text-primary-400 text-primary-500 hover:text-primary-600","aria-label":"All posts",children:"All Posts →"})}),i().newsletter?.provider&&D.jsx("div",{className:"flex items-center justify-center pt-4",children:D.jsx(c,{})})]})}},7844:(u,t,e)=>{"use strict";e.d(t,{Z:()=>n});var D=e(10326),s=e(90434),r=e(61580);let n=({text:u})=>D.jsx(s.default,{href:`/tags/${(0,r.o)(u)}`,className:"mr-3 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 hover:bg-blue-600 hover:text-white dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-600 dark:hover:text-white",children:u.split(" ").join("-")})},61580:(u,t,e)=>{"use strict";e.d(t,{o:()=>s});let D=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;function s(u,t){return"string"!=typeof u?"":(t||(u=u.toLowerCase()),u.replace(D,"").replace(/ /g,"-"))}Object.hasOwnProperty},29873:(u,t,e)=>{"use strict";e.d(t,{p:()=>D.p});var D=e(40648);e(16269)},11210:(u,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>l});var D=e(19510),s=e(14662),r=e(49226),n=e(68570);let i=(0,n.createProxy)(String.raw`/Users/tz/Desktop/react_project/tailwind-nextjs-blog/app/Main.tsx`),{__esModule:F,$$typeof:a}=i;i.default;let o=(0,n.createProxy)(String.raw`/Users/tz/Desktop/react_project/tailwind-nextjs-blog/app/Main.tsx#default`);async function l(){let u=(0,s.O2)(r.R6),t=(0,s.ND)(u);return D.jsx(o,{posts:t})}}};var t=require("../webpack-runtime.js");t.C(u);var e=u=>t(t.s=u),D=t.X(0,[948,467,283,631],()=>e(93845));module.exports=D})();