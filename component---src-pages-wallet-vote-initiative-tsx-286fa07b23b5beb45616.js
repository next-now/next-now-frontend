(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Cd8I:function(e,t,n){"use strict";n.r(t);n("YBKJ"),n("HQhv");var o=n("q1tI"),r=n("9kay"),i=n("KYPV"),a=n("FlpQ"),c=n("Wbzz"),l=function(e,t){setTimeout((function(){fetch("http://localhost:3000/api/v0/initiative/"+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).then((function(e){t(e)}))}),1e3)};t.default=function(){var e=Object(r.b)().t;if("undefined"==typeof window)return o.createElement(o.Fragment,null);var t=window.location.pathname.split("/").pop(),n=Number(t),u=Object(o.useState)({id:n,category:"",description:""}),s=u[0];u[1];l(n,(function(e){e.category=e.category,e.description=e.description,console.log(e)}));return o.createElement(o.Fragment,null,o.createElement("h1",{className:"mb-8"},e("Vote for the initiative")),o.createElement("p",{className:"mb-4"},e("Please vote for the initiative you decided to participate in.")),o.createElement(i.b,{initialValues:s,onSubmit:function(e,t){setTimeout((function(){fetch("http://localhost:3000/api/v0/vote/"+e.id,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).then((function(e){Object(c.b)("/wallet")})),t.setSubmitting(!1)}),1e3)}},(function(){return o.createElement(i.a,null,o.createElement(a.a,{text:"Vote for initiative"}))})))}},FlpQ:function(e,t,n){"use strict";var o=n("q1tI");t.a=function(e){var t=e.text;return o.createElement("button",{className:"flex items-center px-3 py-2 m-3 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white bg-nextnow-dark",type:"submit"},t)}}}]);
//# sourceMappingURL=component---src-pages-wallet-vote-initiative-tsx-286fa07b23b5beb45616.js.map