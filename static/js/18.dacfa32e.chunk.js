(self.webpackChunkKailiang_s_site=self.webpackChunkKailiang_s_site||[]).push([[18],{9018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(9439),i=n(2791),s=n(1087),a=n(6842),c=n(184),o=function(e){var t=e.data;return(0,c.jsx)("article",{className:"degree-container",children:(0,c.jsxs)("header",{children:[(0,c.jsx)("h4",{className:"degree",children:t.degree}),(0,c.jsxs)("p",{className:"school",children:[(0,c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},u=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"education",children:[(0,c.jsx)("div",{className:"link-to",id:"education"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,c.jsx)(o,{data:e},e.school)}))]})};u.defaultProps={data:[]};var l=u,h=n(7892),d=n.n(h),f=n(2773),m=function(e){var t=e.data,n=t.name,r=t.position,i=t.url,s=t.startDate,a=t.endDate,o=t.summary,u=t.highlights;return(0,c.jsxs)("article",{className:"jobs-container",children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("h4",{children:[(0,c.jsx)("a",{href:i,children:n})," - ",r]}),(0,c.jsxs)("p",{className:"daterange",children:[" ",d()(s).format("MMMM YYYY")," - ",a?d()(a).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,c.jsx)(f.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,u?(0,c.jsx)("ul",{className:"points",children:u.map((function(e){return(0,c.jsx)("li",{children:e},e)}))}):null]})},g=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"experience",children:[(0,c.jsx)("div",{className:"link-to",id:"experience"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,c.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};g.defaultProps={data:[]};var y=g,p=n(4942),v=n(1413),j=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},b=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,s=t.title,a={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,v.Z)((0,v.Z)({},a),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,c.jsxs)("div",{className:"skillbar clearfix",children:[(0,c.jsx)("div",{className:"skillbar-title",style:a,children:(0,c.jsx)("span",{children:s})}),(0,c.jsx)("div",{className:"skillbar-bar",style:o}),(0,c.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};b.defaultProps={categories:[]};var x=b,$=function(e){var t=e.skills,n=e.categories,s=Object.fromEntries([["All",!1]].concat(n.map((function(e){return[e.name,!1]})))),a=(0,i.useState)(s),o=(0,r.Z)(a,2),u=o[0],l=o[1],h=function(e){var t=Object.keys(u).reduce((function(t,n){return(0,v.Z)((0,v.Z)({},t),{},(0,p.Z)({},n,e===n&&!u[n]))}),{});t.All=!Object.keys(u).some((function(e){return t[e]})),l(t)};return(0,c.jsxs)("div",{className:"skills",children:[(0,c.jsx)("div",{className:"link-to",id:"skills"}),(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h3",{children:"Skills"}),(0,c.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,c.jsx)("div",{className:"skill-button-container",children:Object.keys(u).map((function(e){return(0,c.jsx)(j,{label:e,active:u,handleClick:h},e)}))}),(0,c.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(u).reduce((function(e,t){return u[t]?t:e}),"All");return t.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,c.jsx)(x,{categories:n,data:e},e.title)}))}()})]})};$.defaultProps={skills:[],categories:[]};var D=$,M=function(e){var t=e.data,n=e.last;return(0,c.jsxs)("li",{className:"course-container",children:[(0,c.jsxs)("a",{href:t.link,children:[(0,c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,c.jsx)("div",{className:"course-dot",children:(0,c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};M.defaultProps={last:!1};var k=M,w=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,c.jsx)(k,{data:t,last:n===e.length-1},t.title)}))},S=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"courses",children:[(0,c.jsx)("div",{className:"link-to",id:"courses"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Selected Courses"})}),(0,c.jsx)("ul",{className:"course-list",children:w(t)})]})};S.defaultProps={data:[]};var N=S,O=function(){return(0,c.jsxs)("div",{className:"references",children:[(0,c.jsx)("div",{className:"link-to",id:"references"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)(s.rU,{to:"/contact",children:(0,c.jsx)("h3",{children:"References are available upon request"})})})]})},L=[{title:"Machine Learning Foundations",number:"CS",link:"https://www.coursera.org/instructor/htlin",university:"National Taiwan University"},{title:"Machine Learning Techniques",number:"CS",link:"https://www.coursera.org/learn/machine-learning-techniques",university:"National Taiwan University"},{title:"Deep learning",number:"CS",link:"https://speech.ee.ntu.edu.tw/~tlkagk/courses.html",university:"National Taiwan University"},{title:"Linear Algebra",number:"Math",link:"https://speech.ee.ntu.edu.tw/~tlkagk/courses.html",university:"National Taiwan University"}],P=[{school:"Guangdong University Of Technology",degree:"B.S. electronic information engineering",link:"https://www.gdut.edu.cn/",year:2011}],T=[{name:"Alibaba Group",position:"Algorithm Engineer",url:"https://smileidentity.com",startDate:"2022-02-24",summary:"Building an intelligent marketing algorithm system for Lazada",highlights:["Lazada","E-commerce","Vouchers"]},{name:"Tencent",position:"Algorithm Engineer",url:"https://www.tencent.com/en-us/",startDate:"2017-01-17",endDate:"2020-02-24",summary:"Be responsible for building a recommendation system for NOW, a live streaming app.",highlights:["recommendation system","QQ"]},{name:"Manto",position:"Algorithm Engineer",url:"https://www.tencent.com/en-us/",startDate:"2015-07-01",endDate:"2017-01-10",summary:"Be responsible for building a DSP system and DMP system for AD.",highlights:[""]}],E=n(3433),C=[{title:"Causal Inference/Uplift modeling",competency:5,category:["CATE/ITE/ATE","Pytorch","Tensorflow","Python","Deep Learning"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Hive",competency:4,category:["Databases","Tools"]},{title:"Mysql",competency:3,category:["Tools","Databases"]},{title:"SQL",competency:4,category:["Databases","Languages"]},{title:"Redis",competency:3,category:["Tools","Databases"]},{title:"Data Mining",competency:3,category:["ML Engineering"]},{title:"Git",competency:3,category:["Tools"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Tensorflow",competency:3,category:["Deep Learning","Python"]},{title:"PyTorch",competency:3,category:["Deep Learning","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","ML Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","ML Engineering","Python"]},{title:"Spark",competency:2,category:["Data Engineering","ML Engineering"]}].map((function(e){return(0,v.Z)((0,v.Z)({},e),{},{category:e.category.sort()})})),_=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],Y=(0,E.Z)(new Set(C.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:_[t]}})),Z={Education:function(){return(0,c.jsx)(l,{data:P})},Experience:function(){return(0,c.jsx)(y,{data:T})},Skills:function(){return(0,c.jsx)(D,{skills:C,categories:Y})},Courses:function(){return(0,c.jsx)(N,{data:L})},References:function(){return(0,c.jsx)(O,{})}},A=function(){return(0,c.jsx)(a.Z,{title:"Resume",description:"Kailiang Zhong's Resume.",children:(0,c.jsxs)("article",{className:"post",id:"resume",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{children:(0,c.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,c.jsx)("div",{className:"link-container",children:Object.keys(Z).map((function(e){return(0,c.jsx)("h4",{children:(0,c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(Z).map((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,c.jsx)(i,{},n)}))]})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",c="day",o="week",u="month",l="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),s=n-i<0,a=t.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:h,w:o,d:c,D:d,h:a,m:s,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},j="en",b={};b[j]=y;var x=function(e){return e instanceof k},$=function e(t,n,r){var i;if(!t)return j;if("string"==typeof t){var s=t.toLowerCase();b[s]&&(i=s),n&&(b[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var c=t.name;b[c]=t,i=c}return!r&&i&&(j=i),i||!r&&j},D=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},M=v;M.l=$,M.i=x,M.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e)}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return M},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return D(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<D(e)},p.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,r=!!M.u(t)||t,l=M.p(e),f=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(c)},m=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,y=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case h:return r?f(1,0):f(31,11);case u:return r?f(1,y):f(0,y+1);case o:var j=this.$locale().weekStart||0,b=(g<j?g+7:g)-j;return f(r?p-b:p+(6-b),y);case c:case d:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case i:return m(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,o=M.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[c]=l+"Date",n[d]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===c?this.$D+(t-this.$W):t;if(o===u||o===h){var g=this.clone().set(d,1);g.$d[f](m),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[M.p(e)]()},p.add=function(r,l){var d,f=this;r=Number(r);var m=M.p(l),g=function(e){var t=D(f);return M.w(t.date(t.date()+Math.round(e*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===c)return g(1);if(m===o)return g(7);var y=(d={},d[s]=t,d[a]=n,d[i]=e,d)[m]||1,p=this.$d.getTime()+r*y;return M.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$H,a=this.$m,c=this.$M,o=n.weekdays,u=n.months,l=n.meridiem,h=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},d=function(e){return M.s(s%12||12,e,"0")},m=l||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return c+1;case"MM":return M.s(c+1,2,"0");case"MMM":return h(n.monthsShort,c,u,3);case"MMMM":return h(u,c);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,o,2);case"ddd":return h(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return M.s(a,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,d,f){var m,g=this,y=M.p(d),p=D(r),v=(p.utcOffset()-this.utcOffset())*t,j=this-p,b=function(){return M.m(g,p)};switch(y){case h:m=b()/12;break;case u:m=b();break;case l:m=b()/3;break;case o:m=(j-v)/6048e5;break;case c:m=(j-v)/864e5;break;case a:m=j/n;break;case s:m=j/t;break;case i:m=j/e;break;default:m=j}return f?m:M.a(m)},p.daysInMonth=function(){return this.endOf(u).$D},p.$locale=function(){return b[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},p.clone=function(){return M.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),w=k.prototype;return D.prototype=w,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",c],["$M",u],["$y",h],["$D",d]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,k,D),e.$i=!0),D},D.locale=$,D.isDayjs=x,D.unix=function(e){return D(1e3*e)},D.en=b[j],D.Ls=b,D.p={},D}()},4942:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9142);function i(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=18.dacfa32e.chunk.js.map