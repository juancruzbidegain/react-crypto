(this["webpackJsonpcrypto-api"]=this["webpackJsonpcrypto-api"]||[]).push([[0],{20:function(e,c,t){},21:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(2),s=t.n(n),r=t(13),i=t.n(r),o=t(4),l=(t(20),function(e){var c=e.image,t=e.name,n=e.symbol,s=e.price,r=e.marketcap,i=e.volume,o=e.priceChange;return Object(a.jsx)("div",{className:"coin-container",children:Object(a.jsxs)("div",{className:"coin-row",children:[Object(a.jsxs)("div",{className:"coin",children:[Object(a.jsx)("img",{src:c,alt:"Crypto"}),Object(a.jsx)("h1",{children:t}),Object(a.jsx)("p",{className:"coin-symbol",children:n})]}),Object(a.jsxs)("div",{className:"coin-data",children:[Object(a.jsxs)("p",{className:"coin-price",children:["$",s.toLocaleString()]}),Object(a.jsxs)("p",{className:"coin-volume",children:["$",i.toLocaleString()]}),o<0?Object(a.jsxs)("p",{className:"coin-percent red",children:[o,"%"]}):Object(a.jsxs)("p",{className:"coin-percent green",children:[o,"%"]}),Object(a.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",r.toLocaleString()]})]})]})})}),p=(t(21),t(14)),j=t.n(p);var m=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],s=c[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),p=i[0],m=i[1];Object(n.useEffect)((function(){j.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){s(e.data)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));return Object(a.jsxs)("div",{className:"coin-app",children:[Object(a.jsxs)("div",{className:"coin-search",children:[Object(a.jsx)("h1",{className:"coin-text",children:"Buscador Crypto \ud83d\udcb0"}),Object(a.jsx)("form",{action:"",children:Object(a.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){m(e.target.value)}})})]}),d.map((function(e){return Object(a.jsx)(l,{name:e.name,image:e.image,symbol:e.symbol,volume:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,marketcap:e.total_volume},e.id)}))]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4133e930.chunk.js.map