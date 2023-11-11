(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();var u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e={},g={},l={};Object.defineProperty(l,"__esModule",{value:!0});l.isSvgTag=l.applyChildren=l.setElementStyle=void 0;function S(n,s){let o;const r=Object.keys(s);for(o of r)n.style[o]=s[o]}l.setElementStyle=S;function h(n,s){s instanceof HTMLElement?n.appendChild(s):typeof s=="string"||typeof s=="number"?n.appendChild(document.createTextNode(s.toString())):console.warn("Unknown type to append: ",s)}function y(n,s){for(const o of s)if(!(!o&&o!==0))if(Array.isArray(o))for(const r of o)Array.isArray(r)?y(n,r):h(n,r);else h(n,o)}l.applyChildren=y;function w(n){return["a","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","path","pattern","polygon","polyline","radialGradient","rect","script","stop","style","svg","switch","symbol","text","textPath","title","tspan","use","view"].includes(n)}l.isSvgTag=w;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.h=n.xlinkNS=void 0;const s=l;n.xlinkNS="http://www.w3.org/1999/xlink";function o(r,t,...i){if(typeof r=="function")return r(Object.assign(Object.assign({},t),{children:i}));const a=s.isSvgTag(r),d=a?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r);if(t){t.style&&typeof t.style!="string"&&(s.setElementStyle(d,t.style),delete t.style);for(const c of Object.keys(t)){const f=t[c];if(c.startsWith("on")){const p=c.replace(/Capture$/,""),L=c!==p,I=p.toLowerCase().substring(2);d.addEventListener(I,f,L)}else a&&c.startsWith("xlink:")?d.setAttributeNS(n.xlinkNS,c,f):f===!0?d.setAttribute(c,c):(f||f===0)&&d.setAttribute(c,f.toString())}}return s.applyChildren(d,i),d}n.h=o})(g);var v={};Object.defineProperty(v,"__esModule",{value:!0});(function(n){var s=u&&u.__createBinding||(Object.create?function(r,t,i,a){a===void 0&&(a=i),Object.defineProperty(r,a,{enumerable:!0,get:function(){return t[i]}})}:function(r,t,i,a){a===void 0&&(a=i),r[a]=t[i]}),o=u&&u.__exportStar||function(r,t){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(t,i)&&s(t,r,i)};Object.defineProperty(n,"__esModule",{value:!0}),o(g,n),o(v,n)})(e);const k=()=>e.h("div",{class:"headerContainer"},e.h("div",{class:"headerLeft"},e.h("span",{class:"logo"},"Sentire")),e.h("div",{class:"headerCenter"},e.h("i",{class:"fa fa-search"}),e.h("input",{placeholder:"Search for songs, artists or albums",class:"searchInput"})),e.h("div",{class:"headerRight"},e.h("div",{class:"headerLinks"},e.h("span",{class:"headerLink loginLink"},"Login"),e.h("span",{class:"profile-divider"},"|"),e.h("span",{class:"headerLink registerLink"},"Register")),e.h("div",{class:"headerIcons"},e.h("div",{class:"headerIconItem"},e.h("i",{class:"fa fa-user"}),e.h("span",{class:"headerIconBadge"},"1")),e.h("div",{class:"headerIconItem"},e.h("i",{class:"fa fa-comment"}),e.h("span",{class:"headerIconBadge"},"1")),e.h("div",{class:"headerIconItem"},e.h("i",{class:"fa fa-bell"}),e.h("span",{class:"headerIconBadge"},"2"))),e.h("img",{src:"/assets/noAvatar.png",alt:"profileImage",class:"profileIcon",style:"width:30px"}))),C=()=>e.h("div",{class:"navbar-container"},e.h("div",{class:"navbar-items"},e.h("button",{class:"navbar-item"},"Discover"),e.h("button",{class:"navbar-item"},"Playlists"),e.h("button",{class:"navbar-item"},"Originals"),e.h("button",{class:"navbar-item"},"Share"))),O="https://api.noroff.dev/api/v1/social/";async function b(){const n="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjE1MiwibmFtZSI6IndjdjlMMXQ3SjFaSW5JcTlXUnJnIiwiZW1haWwiOiJ0aG9qZW44NDQ4MEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8zNGJmN2JlYmE2YTFjZDYyMTIzZmZlNDk2Nzc5ZmIxOC5qcGciLCJiYW5uZXIiOiJodHRwczovL3d3dy50bmplbnNlbi5jb20iLCJpYXQiOjE2OTg2OTAxMDB9.H4sr7eXMe0FdpU3p_DKlA5bTJwE49hvH-O4gFtkGQnA",s=O+"posts";try{const o={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}},t=await(await fetch(s,o)).json();console.log(t)}catch(o){console.log(o)}return e.h("div",{class:"posts"},e.h("div",{class:"wrapper"},e.h("div",{class:"postTop"},e.h("div",{class:"postTopLeft"},e.h("img",{class:"postProfileImg",src:"/assets/noAvatar.png",alt:"User image"}),e.h("span",{class:"postUserName"}),e.h("span",{class:"postDate"})),e.h("div",{class:"postTopRight"})),e.h("div",{class:"postCenter"},e.h("span",{class:"postContent"}),e.h("img",{class:"postImg",src:"post/noCover.png",alt:"post image"})),e.h("div",{class:"postBottom"},e.h("div",{class:"postBottomLeft"},e.h("img",{class:"postLikeIcon",src:"/assets/like.png",onClick:likeHandler,alt:"Like icon"}),e.h("img",{class:"postLikeIcon",src:"/assets/heart.png",onClick:likeHandler,alt:"Heart icon"}),e.h("span",{class:"postLikeCounter"},"people liked this")),e.h("div",{className:"postBottomRight"},e.h("span",{class:"postCommentText"},"comments")))))}b();document.querySelector(".header").replaceWith(k());document.querySelector(".navigation").replaceWith(C());document.querySelector(".featured").replaceWith(b);const m=document.querySelectorAll(".navbar-item");for(let n=0;n<m.length;n++)document.body.classList.contains("home")&&m[0].classList.add("active");const T=document.querySelector(".loginLink");T.onclick=function(){window.location="/login.html"};const j=document.querySelector(".registerLink");j.onclick=function(){window.location="/register.html"};const N=document.querySelector(".logo");N.onclick=function(){window.location="/"};const M=document.querySelector(".profileIcon");M.onclick=function(){const n=document.querySelector(".headerLinks");if(window.innerWidth<768){n.classList.toggle("active");const s=document.querySelectorAll(".headerLink");for(let o=0;o<s.length;o++)s[o].addEventListener("click",function(){n.classList.remove("active")})}};