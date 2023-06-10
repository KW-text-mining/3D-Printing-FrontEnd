"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[345],{1345:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var n=a(4165),r=a(5861),s=a(9439),i=a(2791),l=a(1912),o=a(6907),c=a(3967),d=a(1614),h=a(890),m=a(1889),u=a(1795),p=a(5209),x=a(1413),Z=a(5987),g=a(4925),j=a(3786),f=a(6362),k=a(5594),y=a(7621),b=a(9585),v=a(4554),w=a(289),W=a(1633),M=a(3329),S=["title","subheader","chart"];function T(e){var t=e.title,a=e.subheader,n=e.chart,r=(0,Z.Z)(e,S),l=n.labels,o=n.colors,c=n.series,d=n.options,h=(0,i.useState)("Week"),m=(0,s.Z)(h,2),u=m[0],p=m[1],T=(0,W.Q8)((0,x.Z)({chart:{stacked:!0},colors:o,stroke:{width:0},xaxis:{categories:"Week"===u&&l.week||"Month"===u&&l.month||l.year},tooltip:{y:{formatter:function(e){return(0,w.oe)(e)}}},plotOptions:{bar:{borderRadius:("Week"===u?8:"Month"===u&&6)||10,columnWidth:"20%"}}},d));return(0,M.jsxs)(y.Z,(0,x.Z)((0,x.Z)({},r),{},{children:[(0,M.jsx)(b.Z,{title:t,subheader:a,action:(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(f.Z,{sx:{m:1,minWidth:120},size:"small",children:[(0,M.jsx)(g.Z,{id:"demo-select-small",children:"Range"}),(0,M.jsxs)(k.Z,{labelId:"demo-select-small",id:"demo-select-small",value:u,label:"Range",onChange:function(e){p(e.target.value)},children:[(0,M.jsx)(j.Z,{value:"Year",children:"Year"}),(0,M.jsx)(j.Z,{value:"Month",children:"Month"}),(0,M.jsx)(j.Z,{value:"Week",children:"Week"})]})]})})}),c.map((function(e){return(0,M.jsx)(v.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.type===u&&(0,M.jsx)(W.ZP,{type:"bar",series:e.data,options:T,height:364})},e.type)}))]}))}var P=a(6436),_={week:["Mon","Tue","Web","Thu","Fri","Sat","Sun"],month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:["2018","2019","2020","2021","2022"]};function A(){var e=(0,c.Z)(),t=(0,i.useState)(!0),a=(0,s.Z)(t,2),x=a[0],Z=a[1],g=(0,i.useState)([]),j=(0,s.Z)(g,2),f=(j[0],j[1]),k=(0,i.useState)([]),y=(0,s.Z)(k,2),b=y[0],v=y[1],w=(0,i.useState)([]),W=(0,s.Z)(w,2),S=W[0],A=W[1],F=(0,u.K$)().themeStretch;return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("http://35.73.182.58:8080/data/dataweek");case 2:return t=e.sent,e.next=5,l.Z.get("http://35.73.182.58:8080/data/datayears");case 5:return a=e.sent,e.next=8,l.Z.get("http://35.73.182.58:8080/data/periodmonth?year=2023&month=03");case 8:r=e.sent,A(t.data),v(a.data),f(r.data),Z(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(o.ql,{children:(0,M.jsx)("title",{children:" 3D Printing DashBoard "})}),(0,M.jsxs)(d.Z,{maxWidth:!F&&"xl",children:[(0,M.jsx)(h.Z,{variant:"h4",sx:{mb:5},children:"Thingiverse Analytics"}),(0,M.jsxs)(m.ZP,{container:!0,spacing:3,children:[(0,M.jsx)(m.ZP,{item:!0,xs:12,md:4,children:(0,M.jsx)(p.xq,{title:"Total models",percent:0,total:318722,chart:{colors:[e.palette.primary.main],series:[36616,30123,19526,40884,35284,39817,13456,31297,25360,50406]}})}),(0,M.jsx)(m.ZP,{item:!0,xs:12,md:4,children:(0,M.jsx)(p.xq,{title:"Total likes",percent:0,total:59292496,chart:{colors:[e.palette.info.main],series:[8051261,5638273,2023354,5762779,5732899,9488916,1240346,7950724,4122634,9281310]}})}),(0,M.jsx)(m.ZP,{item:!0,xs:12,md:4,children:(0,M.jsx)(p.xq,{title:"Total makes",percent:0,total:729793,chart:{colors:[e.palette.warning.main],series:[140066,95082,21981,76356,49392,89923,10749,115200,26784,104260]}})}),(0,M.jsx)(m.ZP,{item:!0,xs:12,md:12,children:x?(0,M.jsx)(P.Z,{}):(0,M.jsx)(T,{title:"Total Analytics",chart:{labels:_,colors:[e.palette.error.light,e.palette.warning.light,e.palette.success.main,e.palette.error.main,e.palette.info.light,e.palette.info.darker,e.palette.success.light,e.palette.warning.main,e.palette.info.main,e.palette.primary.light],series:[{type:"Week",data:S},{type:"Month",data:[{name:"3D Printing",data:[20,34,48,65,37,48,32,64,87,65,23,97]},{name:"Art",data:[10,34,13,26,27,28,2,43,64,12,76,8]},{name:"Fashion",data:[10,14,13,16,17,18,12,23,29,19,23,21]},{name:"Gadgets",data:[5,12,6,7,8,9,2,45,9,43,7,23]},{name:"Hobby",data:[5,12,6,7,8,9,13,23,28,41,4]},{name:"Household",data:[5,53,3,4,52,4,12,17,19,24,31,27]},{name:"Learning",data:[4,2,11,65,34,2,23,52,12,29,12,17]},{name:"Models",data:[5,17,8,43,2,2,3,2,3,5,7,23]},{name:"Tools",data:[7,32,23,4,0,0,12,23,39,38,35,21]},{name:"Toys & Games",data:[8,15,23,67,2,0,12,43,18,14,12,19]}]},{type:"Year",data:b}]}})})]})]})]})}}}]);
//# sourceMappingURL=345.c377eaef.chunk.js.map