!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist/",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);i(1),i(6);function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}window.onload=function(){var e=function(){function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.i=0,this.images=document.querySelectorAll(t.images),this.next=document.querySelector(t.next),this.prev=document.querySelector(t.prev),this.auto=t.auto,this.speed=t.speed,this.next.onclick=function(){i.show_next()},this.prev.onclick=function(){i.show_prev()},this.auto&&(this.interval=setInterval(function(){i.images[i.i].classList.remove("active"),i.i++,i.i>=i.images.length&&(i.i=0),i.images[i.i].classList.add("active")},this.speed))}var t,i,a;return t=e,(i=[{key:"show_next",value:function(){this.images[this.i].classList.remove("active"),this.i++,this.i>=this.images.length&&(this.i=0),this.images[this.i].classList.add("active")}},{key:"show_prev",value:function(){this.images[this.i].classList.remove("active"),this.i--,this.i<0&&(this.i=this.images.length-1),this.images[this.i].classList.add("active")}}])&&n(t.prototype,i),a&&n(t,a),e}(),t=[],i=document.querySelector("#hidden_id"),a=document.querySelector("#name"),o=document.querySelector("#autor"),r=document.querySelector("#date"),l=document.querySelector("#publishName"),s=document.querySelector("#publishPhone"),d=document.querySelector("#heading"),c=document.querySelector(".home"),u=document.querySelector(".page_book__img");document.querySelector(".add_book");if(c&&(c.onclick=function(){new Promise(function(e,t){e(localStorage.removeItem("active_book"))}).then(function(){window.location="/"})},save_book.onclick=function(e){if(e.preventDefault(),0!=i.value){for(var n=0;n<t.length;n++){var c=t[n];c.id==i.value&&(c.name=a.value,c.autor=o.value,c.date=r.value,c.heading=d.value,c.publishName=l.value,c.publishPhone=s.value)}localStorage.removeItem("books"),localStorage.removeItem("active_book"),localStorage.setItem("books",JSON.stringify(t)),window.location="/"}else{var u=t[t.length-1].id+1,m={};m.id=u,m.name=a.value,m.autor=o.value,m.date=r.value,m.heading=d.value,m.publishName=l.value,m.publishPhone=s.value,m.img_src=["1.png","1.png","1.png"],t.push(m),localStorage.removeItem("books"),localStorage.setItem("books",JSON.stringify(t)),window.location="/"}}),localStorage.getItem("active_book")){var m=JSON.parse(localStorage.getItem("active_book"));u.innerHTML="",a.value=m[0].name,o.value=m[0].autor,r.value=m[0].date,l.value=m[0].publishName,s.value=m[0].publishPhone,d.value=m[0].heading,i.value=m[0].id;var p=document.createElement("img");p.src="dist/img/"+m[0].img_src[0],p.alt="картинка",u.appendChild(p)}localStorage.getItem("books")?t=JSON.parse(localStorage.getItem("books")):(t=[{id:1,img_src:["1.png","mask2.jpg","mask3.jpg"],name:"Илон Маск",autor:"Ashley Wens",date:"2018",publishName:"Space book",publishPhone:"+12678000403",heading:"Наука"},{id:2,img_src:["1.jpg","nike2.jpg"],name:"Продавец обуви",autor:"Phil Night",date:"2016",publishName:"Nike book",publishPhone:"+12678800800",heading:"Бизнес"},{id:3,img_src:["2.jpg","potter2.jpg","potter3.jpg","potter4.jpg","potter5.jpg"],name:"Harry Potter",autor:"Joan Rowling",date:"2015",publishName:"Roll book",publishPhone:"+12678000477",heading:"Фентези"},{id:4,img_src:["1a.jpg","mind2.jpg"],name:"Включите свой МОЗГ",autor:"Caroline Lif",date:"2019",publishName:"Carol book",publishPhone:"+12678800877",heading:"Бизнес"},{id:5,img_src:["1b.jpg","mater2.jpg"],name:"Материя",autor:"I. Banks",date:"2016",publishName:"Ban book",publishPhone:"+12678000433",heading:"Фентези"},{id:6,img_src:["1.png","mask2.jpg","mask3.jpg"],name:"Илон Маск",autor:"Ashley Wens",date:"2018",publishName:"Space book",publishPhone:"+12678000403",heading:"Наука"}],localStorage.setItem("books",JSON.stringify(t)));var h=document.querySelector(".find__inp"),g=document.querySelector(".books"),v=t;function f(e){e.map(function(e){var i=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),c=document.createElement("a"),u=document.createElement("div"),m=document.createElement("div"),p=document.createElement("i");p.setAttribute("aria-hidden","true"),p.classList.add("fa"),p.classList.add("fa-pencil"),u.appendChild(p);var h,v=document.createElement("i");v.setAttribute("aria-hidden","true"),v.classList.add("fa"),v.classList.add("fa-times"),u.setAttribute("id",e.id),u.classList.add("edit"),u.appendChild(p),m.setAttribute("id",e.id),m.classList.add("remove"),m.appendChild(v),i.classList.add("bookItem"),n.classList.add("bookItem__img"),a.classList.add("bookItem__name"),o.classList.add("bookItem__autor"),r.classList.add("bookItem__date"),l.classList.add("bookItem__publishName"),s.classList.add("bookItem__publishPhone"),d.classList.add("bookItem__heading"),c.href="#"+e.id;for(var b=0;b<e.img_src.length;b++)(h=document.createElement("img")).src="dist/img/"+e.img_src[b],h.alt="картинка книги",0==b&&h.classList.add("active"),n.appendChild(h);var k="slide"+e.id;n.classList.add(k);var _=document.createElement("div");_.classList.add("buttons");var y=document.createElement("input"),S=document.createElement("input");y.type="button",y.value="<";var L="prev"+e.id;y.classList.add(L),S.type="button",S.value=">";var w="next"+e.id;S.classList.add(w),_.appendChild(y),_.appendChild(S),n.appendChild(_),a.innerHTML='" '+e.name+' "',c.appendChild(a),o.innerHTML=e.autor,r.innerHTML=e.date,l.innerHTML=e.publishName,s.innerHTML=e.publishPhone,d.innerHTML=e.heading,n.appendChild(u),n.appendChild(m),i.appendChild(n),i.appendChild(c),i.appendChild(o),i.appendChild(r),i.appendChild(l),i.appendChild(s),i.appendChild(d),g&&g.appendChild(i),u&&(u.onclick=function(){var e;(e=m.id,new Promise(function(i,n){var a=function(e){return t.filter(function(t){return t.id==e})}(e);i(a)})).then(function(e){localStorage.setItem("active_book",JSON.stringify(e))}).then(function(){window.location="/add.html"})},m.onclick=function(){var e,i;e=m.id,i=t.filter(function(t){return t.id!=e}),t=i,g.innerHTML="",localStorage.clear(),localStorage.setItem("books",JSON.stringify(i)),f(i)})})}function b(){for(var i=0;i<t.length;i++)new e({images:".bookItem .bookItem__img.slide".concat(t[i].id," img"),next:".next".concat(t[i].id),prev:".prev".concat(t[i].id),auto:!1,speed:2e3})}h&&(h.oninput=function(){g.innerHTML="";var e=h.value;f(v=function(e){return t.filter(function(t){return-1!=t.name.toLowerCase().search(e.toLowerCase())})}(e)),b()}),f(v);var k=document.querySelector("#files");k&&(k.onchange=function(){var e,t,i;e=document.createElement("img"),t=document.querySelector("input[type=file]").files[0],(i=new FileReader).onloadend=function(){e.src=i.result},u.appendChild(e),t?i.readAsDataURL(t):e.src=""}),b()}},function(e,t){},,,,,function(e,t){}]);