(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{333:function(t,e,s){},369:function(t,e,s){t.exports=s.p+"assets/img/2.8c3cb683.png"},370:function(t,e,s){"use strict";var n=s(333);s.n(n).a},377:function(t,e,s){"use strict";s.r(e);s(22),s(73);var n={name:"",data:function(){return{activeClass:"",hrefArr:[],offsetTop:[],scrollTop:0}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;if(Math.abs(t+e-s)<1)this.activeClass=this.hrefArr[this.hrefArr.length-1];else{var n=this;this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;var i=this.offsetTop.filter((function(t){if(n.scrollTop+2>t)return!0}));this.activeClass=this.hrefArr[i.length-1]}},initTitle:function(){this.hrefArr=[],window.addEventListener("scroll",this.handleScroll);for(var t=document.getElementsByTagName("h2"),e=0;e<t.length;e++){var s="#"+t[e].getAttribute("id");this.hrefArr.push(s),this.offsetTop[e]=t[e].offsetTop}}},mounted:function(){setTimeout(this.initTitle,100);var t=this;window.onresize=function(){t.initTitle()}}},i=(s(370),s(26)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"rightMenuWrapper"},t._l(t.hrefArr,(function(e,i){return n("li",{key:i},[n("img",{directives:[{name:"show",rawName:"v-show",value:e===t.activeClass,expression:"item === activeClass"}],attrs:{src:s(369)}}),t._v(" "),n("a",{class:{active:e===t.activeClass},attrs:{href:e,id:e}},[t._v(t._s(e.slice(1))+"\n      ")])])})),0)])}),[],!1,null,"244f5c7a",null);e.default=o.exports}}]);