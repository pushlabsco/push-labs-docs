(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),i=(n(0),n(160)),a={id:"videobackgroundpro-is-not-defined",title:"VideoBackgroundPro is not defined",sidebar_label:"VideoBackgroundPro is not defined"},c={id:"video-background-pro/troubleshooting/videobackgroundpro-is-not-defined",title:"VideoBackgroundPro is not defined",description:"If you are experiencing the following error:",source:"@site/docs/video-background-pro/troubleshooting/videobackgroundpro-is-not-defined.md",permalink:"/video-background-pro/troubleshooting/videobackgroundpro-is-not-defined",editUrl:"https://github.com/pushlabsco/push-labs-docs/edit/master/docs/video-background-pro/troubleshooting/videobackgroundpro-is-not-defined.md",lastUpdatedAt:1614873550,sidebar_label:"VideoBackgroundPro is not defined",sidebar:"video-background-pro-docs",previous:{title:"Mobile Playback Issues",permalink:"/video-background-pro/troubleshooting/mobile-playback-issues"},next:{title:"YouTube Playback Issues",permalink:"/video-background-pro/troubleshooting/youtube-playback-issues"}},u=[{value:"Autoptimize Conflict Fix",id:"autoptimize-conflict-fix",children:[]},{value:"wp_footer() Not Being Called",id:"wp_footer-not-being-called",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you are experiencing the following error:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"ReferenceError: VideoBackgroundPro is not defined\n")),Object(i.b)("p",null,"It means that the plugin's main script is not being loaded. This can happen for a number of reasons, usually when using optimizing plugins, or caching plugins."),Object(i.b)("h2",{id:"autoptimize-conflict-fix"},"Autoptimize Conflict Fix"),Object(i.b)("p",null,"If you are using Autoptimize, and you are experiencing the ",Object(i.b)("inlineCode",{parentName:"p"},"ReferenceError")," message in the console, you may need to exclude the Video Background Pro scripts from Autoptimize."),Object(i.b)("p",null,"Navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"WordPress Admin > Settings > Autoptimize"),", and find the ",Object(i.b)("inlineCode",{parentName:"p"},"Exclude scripts from Autoptimize")," input field. You should see something like this in the field:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"wp-includes/js/dist/, wp-includes/js/tinymce/, js/jquery/jquery.js\n")),Object(i.b)("p",null,"You'll want to include the ",Object(i.b)("inlineCode",{parentName:"p"},"VideoBackgroundPro.js")," script in the field. Update the field to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"wp-includes/js/dist/, wp-includes/js/tinymce/, js/jquery/jquery.js, wp-content/plugins/video-background-pro/dist/VideoBackgroundPro.js\n")),Object(i.b)("p",null,"Finally, be sure to click the button at the bottom ",Object(i.b)("inlineCode",{parentName:"p"},"Save Changes and Empty Cache")),Object(i.b)("h2",{id:"wp_footer-not-being-called"},"wp_footer() Not Being Called"),Object(i.b)("p",null,"Another cause of this issue could be that your theme does not call ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.wordpress.org/reference/functions/wp_footer/"}),Object(i.b)("inlineCode",{parentName:"a"},"wp_footer()")),". This is critical for any theme, as most plugins use this hook to enqueue scripts, styles, etc."),Object(i.b)("p",null,"You may see this if you have built your own theme and forgot to call ",Object(i.b)("inlineCode",{parentName:"p"},"wp_footer()")," in your ",Object(i.b)("inlineCode",{parentName:"p"},"footer.php")," file."))}p.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,f=d["".concat(a,".").concat(b)]||d[b]||s[b]||i;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);