(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[15],{502:function(e,t,a){"use strict";var n=a(28),c=a(1);t.a=Object(n.a)(Object(c.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},521:function(e,t,a){"use strict";var n=a(28),c=a(1);t.a=Object(n.a)(Object(c.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddBox")},736:function(e,t,a){"use strict";a.r(t);var n=a(70),c=a(275),i=a(87),r=a(3),s=a(17),o=a(27),l=a(7),j=a(2),d=a.n(j),u=a(185),b=a(377),O=a(367),m=a(274),f=a(57),h=a(85),x=a.n(h),p=a(373),g=a(481),v=a(482),y=a(464),C=a(1),S=function(e){var t=e.paramsPageDevices,a=e.totalPage,n=e.handleMoveToPrePage,c=e.handleMoveToNextPage;return Object(C.jsxs)(p.a,{container:!0,fullWidth:!0,children:[Object(C.jsx)(p.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"}}),Object(C.jsx)(p.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:Object(C.jsxs)("span",{children:[Object(C.jsx)(g.a,{title:"Previous page",children:Object(C.jsx)(v.a,{disabled:1===t.page,onClick:n,children:Object(C.jsx)(y.a,{})})}),"Page ",t.page," of ",a,Object(C.jsx)(g.a,{title:"Next page",children:Object(C.jsx)(v.a,{disabled:t.page===a,onClick:c,children:Object(C.jsx)(x.a,{})})})]})})]})},w=a(381),N=a(486),k=a(461),P=a(69),T=a.n(P),M=a(465),I=a(466),D=a(53),B=a(370),E=a(372),R=a(521),z=a(76),W=a(42),F=a(484),A=a(475),V=a(483),H=a(485),L=a(473),K={PaperProps:{style:{maxHeight:165.5,width:250}}};function J(e,t,a){return{fontWeight:-1===t.indexOf(e)?a.typography.fontWeightRegular:a.typography.fontWeightMedium}}function U(e){var t=e.data,a=e.handleSelected,n=e.title,c=e.defaultValue,i=Object(W.a)(),r=j.useState([]),s=Object(l.a)(r,2),o=s[0],d=s[1];return Object(C.jsx)("div",{children:Object(C.jsxs)(H.a,{sx:{width:"100%"},children:[Object(C.jsx)(A.a,{id:"list-select",children:n}),Object(C.jsx)(L.a,{labelId:"list-select",id:"list-select",value:c||"",onChange:function(e){d(e.target.value),a(e.target.value)},input:Object(C.jsx)(F.a,{label:n}),MenuProps:K,children:t.map((function(e){return Object(C.jsx)(V.a,{value:e,style:J(e,o,i),children:e},e)}))})]})})}var q=a(742);function G(e){var t=e.label,a=e.selectedOption,n=e.setSelectedOption,c=Object(j.useState)([]),i=Object(l.a)(c,2),d=i[0],u=i[1],b=Object(j.useState)({page:1,limit:10,search:null}),O=Object(l.a)(b,2),m=O[0],f=O[1],h=Object(j.useState)(!1),x=Object(l.a)(h,2),p=x[0],g=x[1],v=function(e){f(Object(r.a)(Object(r.a)({},m),{},{search:e.target.value})),g(!1)},y=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.j)(m);case 2:200===(t=e.sent).status&&(a=t.data.listResult,u(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){y()}),[m]),Object(j.useEffect)((function(){p||f(Object(r.a)(Object(r.a)({},m),{},{search:null}))}),[p]),Object(C.jsx)("div",{children:Object(C.jsx)(q.a,{options:d,getOptionLabel:function(e){return e.title},id:"include-input-in-list",value:a,onChange:function(e,t){n(t),g(!0)},renderInput:function(e){return Object(C.jsx)(w.a,Object(r.a)(Object(r.a)({},e),{},{label:t,variant:"outlined",onChange:v,fullWidth:!0}))}})})}var Q=function(e){var t=e.setResettable,a=Object(j.useState)(!1),n=Object(l.a)(a,2),c=n[0],i=n[1],r=Object(j.useState)(""),b=Object(l.a)(r,2),O=b[0],f=b[1],h=Object(j.useState)(""),x=Object(l.a)(h,2),y=x[0],S=x[1],N=d.a.useState(null),k=Object(l.a)(N,2),P=k[0],T=k[1],M=function(){i((function(e){return!e})),S(""),f("")},I=function(){var e=!0,t={name:O,command:y,commandNotificationId:P.id},a=["command","name"];"Notification"===y&&a.push("commandNotificationId");for(var n=0;n<a.length;n++)if(!t[a[n]]){e=!1,i(!0),D.b.info("Missing required parameter: "+a[n]);break}return e},W=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var a,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I()){e.next=7;break}return a={name:O,command:y,commandNotificationId:P.id},e.next=5,Object(z.o)(a);case 5:(n=e.sent)&&500===n.statusCode?n.message.includes("JSON parse error")?D.b.error("Contact must be phone number"):D.b.error(n.message):n&&200===n.status?(D.b.success("Create command success"),M(),t(!0)):(D.b.error(n.message),M());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(g.a,{arrow:!0,placement:"top",title:"Add New Command",children:Object(C.jsx)(v.a,{onClick:function(){i((function(e){return!e}))},children:Object(C.jsx)(R.a,{color:"primary"})})}),Object(C.jsx)(B.a,{open:c,onClose:M,children:Object(C.jsxs)(u.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400,width:"65%",minHeight:"35%"},children:[Object(C.jsx)(m.a,{variant:"h6",component:"h2",gutterBottom:!0,children:"Create a new Command"}),Object(C.jsxs)(p.a,{container:!0,spacing:2,children:[Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(w.a,{id:"name",label:"Name",fullWidth:!0,margin:"normal",onChange:function(e){!function(e,t){"name"===t&&f(e.target.value)}(e,"name")},value:O})}),Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(U,{data:["Reboot","Notification"],handleSelected:function(e){S(e)},title:"Command",defaultValue:y})}),"Notification"===y?Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(G,{label:"Notification",selectedOption:P,setSelectedOption:T})}):Object(C.jsx)(C.Fragment,{})]}),Object(C.jsxs)(u.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[Object(C.jsx)(E.a,{variant:"contained",onClick:M,children:"Cancel"}),Object(C.jsx)(E.a,{variant:"contained",type:"submit",onClick:W,children:"Save"})]})]})})]})},X=function(e){var t=e.searchTerm,a=e.setSearchTerm,n=e.handleResetTable,c=e.handleSearchMode,i=e.setResettable,r=0===t.trim().length;return Object(C.jsxs)(p.a,{container:!0,fullWidth:!0,children:[Object(C.jsx)(p.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:Object(C.jsx)(w.a,{id:"search",label:"Search",variant:"outlined",placeholder:"Only search in Policy",size:"small",value:t,onChange:function(e){a(e.target.value)},edge:"end",fullWidth:!0,InputProps:{endAdornment:Object(C.jsxs)(N.a,{children:[Object(C.jsx)(k.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(C.jsx)(g.a,{arrow:!0,placement:"top",title:"Only search in Policy",children:Object(C.jsx)(v.a,{type:"button","aria-label":"search",helperText:"Search",onClick:function(){r||c()},children:Object(C.jsx)(T.a,{color:"primary"})})})]})}})}),Object(C.jsxs)(p.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(p.a,{lg:6,md:6,sm:6,xs:6,style:{display:"flex",justifyContent:"flex-start"},children:Object(C.jsx)(g.a,{arrow:!0,placement:"top",title:"Close Search",children:Object(C.jsx)(v.a,{type:"button",onClick:function(){a(""),n()},disabled:r,children:Object(C.jsx)(M.a,{color:"error"})})})}),Object(C.jsxs)(p.a,{lg:6,md:6,sm:6,xs:6,style:{display:"flex",justifyContent:"flex-end"},children:[Object(C.jsx)(k.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(C.jsx)(g.a,{arrow:!0,placement:"top",title:"Reset table to default",children:Object(C.jsx)(v.a,{color:"primary","aria-label":"clear",onClick:n,children:Object(C.jsx)(I.a,{})})}),Object(C.jsx)(Q,{setResettable:i}),","]})]})]})},Y=a(502);function Z(e){var t=e.label,a=e.defaultNoti,n=e.selectedOption,c=e.setSelectedOption,i=Object(j.useState)([]),d=Object(l.a)(i,2),u=d[0],b=d[1],O=Object(j.useState)({page:1,limit:10,search:null}),m=Object(l.a)(O,2),f=m[0],h=m[1],x=Object(j.useState)(!1),p=Object(l.a)(x,2),g=p[0],v=p[1],y=function(e){h(Object(r.a)(Object(r.a)({},f),{},{search:e.target.value})),v(!1)},S=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.j)(f);case 2:200===(t=e.sent).status&&(a=t.data.listResult,b(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){S()}),[f]),Object(j.useEffect)((function(){if(!g&&u.length>0){var e=u.find((function(e){return e.id===a}));c(e),h(Object(r.a)(Object(r.a)({},f),{},{search:null})),v(!0)}}),[g,u,a,c,f]),Object(C.jsxs)("div",{children:["Recent Notification: ",n?n.title:"",Object(C.jsx)(q.a,{options:u,getOptionLabel:function(e){return e.title},id:"include-input-in-list",onChange:function(e,t){c(t),v(!0)},renderInput:function(e){return Object(C.jsx)(w.a,Object(r.a)(Object(r.a)({},e),{},{label:t,variant:"outlined",onChange:y,fullWidth:!0}))}})]})}var $=function(e){var t=e.row,a=e.setUpdatetable,n=Object(j.useState)(!1),c=Object(l.a)(n,2),i=c[0],r=c[1],b=Object(j.useState)(t.original.command),O=Object(l.a)(b,2),f=O[0],h=O[1],x=Object(j.useState)(t.original.name),g=Object(l.a)(x,2),v=g[0],y=g[1],S=t.original.command,N=t.original.name,k=t.original.commandNotificationId,P=d.a.useState(null),T=Object(l.a)(P,2),M=T[0],I=T[1],R=function(){r((function(e){return!e}))},W=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var n,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S!==f||N!==v||k!==M){e.next=4;break}return D.b.info("Nothing changes"),R(),e.abrupt("return");case 4:if(""!==f&&""!==v){e.next=7;break}return R(),e.abrupt("return");case 7:return n={id:t.original.id,command:f,name:v,commandNotificationId:M.id},e.next=10,Object(z.x)(n);case 10:(c=e.sent)&&200===c.status?(D.b.success("Change command data success"),a(!0),R()):500===c.statusCode&&D.b.error("Error: ",c.message);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(E.a,{onClick:function(){r((function(e){return!e}))},children:[Object(C.jsx)(Y.a,{color:"primary"}),Object(C.jsx)(m.a,{style:{marginLeft:"8px",color:"black"},textTransform:"none",children:"Edit Command"})]}),Object(C.jsx)(B.a,{open:i,onClose:R,children:Object(C.jsxs)(u.a,{sx:{position:"absolute",top:"50%",left:"50%",width:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400},children:[Object(C.jsx)(m.a,{variant:"h6",component:"h2",gutterBottom:!0,children:"Edit"}),Object(C.jsxs)(p.a,{container:!0,spacing:2,children:[Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(U,{data:["Reboot","Notification"],handleSelected:function(e){h(e)},title:"Command",defaultValue:f})}),Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(w.a,{id:"name",label:"Name",fullWidth:!0,margin:"normal",onChange:function(e){return function(e){y(e.target.value)}(e)},value:v})}),"Notification"===f?Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(Z,{label:"Notification",defaultNoti:k,selectedOption:M,setSelectedOption:I})}):Object(C.jsx)(C.Fragment,{})]}),Object(C.jsxs)(u.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[Object(C.jsx)(E.a,{variant:"contained",onClick:R,children:"Cancel"}),Object(C.jsx)(E.a,{variant:"contained",type:"submit",onClick:W,children:"Save"})]})]})})]})},_=a(58),ee=a(59),te=a(100),ae=a.n(te),ne=function(e){var t=e.id,a=Object(j.useState)(!1),n=Object(l.a)(a,2),c=n[0],i=n[1],r=Object(j.useState)([]),d=Object(l.a)(r,2),b=d[0],O=d[1],f=function(){i((function(e){return!e}))},h=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.n)(t);case 2:(a=e.sent)&&200===a.status?O(a.data):500===a.statusCode&&D.b.error("Error: ",a.message);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(g.a,{arrow:!0,placement:"bottom",title:"Detail",children:Object(C.jsx)(v.a,{onClick:function(){i((function(e){return!e})),h()},disabled:!t,children:Object(C.jsx)(ae.a,{color:"primary"})})}),Object(C.jsx)(B.a,{open:c,onClose:f,children:Object(C.jsxs)(u.a,{sx:{position:"absolute",top:"50%",left:"50%",width:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400},children:[Object(C.jsx)(m.a,{variant:"h6",component:"h2",gutterBottom:!0,children:"Detail Notification ID"}),Object(C.jsxs)(m.a,{children:["ID: ",b.id]}),Object(C.jsxs)(m.a,{children:["Title: ",b.title]}),Object(C.jsxs)(m.a,{children:["Message: ",b.message]}),Object(C.jsxs)(m.a,{children:["Created By: ",b.createdBy]}),Object(C.jsxs)(m.a,{children:["Created Date: ",Object(ee.a)(b.createdDate)]}),Object(C.jsxs)(m.a,{children:["Modified By: ",b.modifiedBy]}),Object(C.jsxs)(m.a,{children:["Modified Date: ",Object(ee.a)(b.modifiedDate)]}),Object(C.jsx)(u.a,{sx:{display:"flex",justifyContent:"flex-end",marginTop:"1rem"},children:Object(C.jsx)(E.a,{variant:"contained",onClick:f,children:"Cancel"})})]})})]})},ce=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(j.useState)({page:1,limit:10,policyname:null}),i=Object(l.a)(c,2),d=i[0],h=i[1],x=Object(j.useState)(),p=Object(l.a)(x,2),g=p[0],v=p[1],y=Object(j.useState)(!0),w=Object(l.a)(y,2),N=w[0],k=w[1],P=Object(j.useState)(!1),T=Object(l.a)(P,2),M=T[0],I=T[1],B=Object(j.useState)(""),E=Object(l.a)(B,2),R=E[0],W=E[1],F=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.f)(d);case 2:200===(t=e.sent).status&&(null===t.data.totalElement&&null!==R&&D.b.error("No elements match"),a=t.data.listResult,n(a),v(t.data.totalPage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){d.page<g&&(h({limit:d.limit,page:d.page+1}),k(!0))},V=function(){d.page>1&&(h({limit:d.limit,page:d.page-1}),k(!0))},H=function(){I(!0),W("")},L=function(){h(Object(r.a)(Object(r.a)({},d),{},{policyname:R})),k(!0)};Object(j.useEffect)((function(){M?(h({page:1,limit:10,policyname:null}),I(!1),k(!0)):N&&(F(),k(!1))}),[M,N]);var K=[{accessorKey:"id",header:"ID",size:20,enableEditing:!1,enableFilters:!1,muiTableHeadCellProps:{align:"center"},muiTableBodyCellProps:{align:"center"},Cell:function(e){return Object(C.jsx)("span",{children:e.row.original.id})}},{accessorKey:"command",header:"Command",enableEditing:!1,enableSorting:!1},{accessorKey:"name",header:"Name",enableEditing:!1,enableSorting:!1},{accessorKey:"commandNotificationId",header:"Notification",enableEditing:!1,enableSorting:!1,Cell:function(e){return Object(C.jsx)(u.a,{children:Object(C.jsx)(ne,{id:e.row.original.commandNotificationId})})}}];return Object(C.jsx)(b.a,{children:Object(C.jsx)(O.a,{theme:_.a,children:Object(C.jsx)(f.a,{columns:K,data:a,options:{actionsColumnIndex:-1},enableExpanding:!0,enableGlobalFilter:!1,enableColumnFilters:!1,enableColumnActions:!1,enablePagination:!1,enableSorting:!1,muiTableBodyRowProps:{hover:!1},defaultColumn:{maxSize:120,minSize:10,size:100},initialState:{columnVisibility:{id:!1},columnOrder:["id","command","name","commandNotificationId","mrt-row-expand","mrt-row-actions"]},renderRowActionMenuItems:function(e){var t=e.row;e.table,e.closeMenu;return[Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(u.a,{flexBasis:"25%",children:Object(C.jsx)($,{row:t,setUpdatetable:k})})})]},displayColumnDefOptions:{"mrt-row-actions":{size:300,header:""}},renderDetailPanel:function(e){var t=e.row;return Object(C.jsxs)(u.a,{sx:{display:"grid",margin:"auto",gridTemplateColumns:"1fr 1fr",width:"100%",justifyContent:"center",alignItems:"center"},children:[Object(C.jsxs)(m.a,{fontSize:"15px",children:["Created Date: ",Object(ee.a)(t.original.createdDate)]}),Object(C.jsxs)(m.a,{fontSize:"15px",children:["Created By: ",t.original.createdBy]}),Object(C.jsxs)(m.a,{fontSize:"15px",children:["Modified Date: ",Object(ee.a)(t.original.modifiedDate)]}),Object(C.jsxs)(m.a,{fontSize:"15px",children:["Modified By: ",t.original.modifiedBy]})]})},renderBottomToolbarCustomActions:function(){return Object(C.jsx)(S,{paramsPageDevices:d,totalPage:g,handleMoveToPrePage:V,handleMoveToNextPage:A})},renderTopToolbarCustomActions:function(){return Object(C.jsx)(X,{searchTerm:R,setSearchTerm:W,setResettable:I,handleSearchMode:L,handleResetTable:H})}})})})};t.default=function(){return Object(C.jsxs)(i.a,{children:[Object(C.jsx)(n.a,{routeSegments:[{name:"Policy Manager",path:"/tms-policy/policy-management"},{name:"Command",path:"/tms-policy/command-management"}]}),Object(C.jsx)(c.a,{spacing:3,children:Object(C.jsx)(ce,{})})]})}}}]);
//# sourceMappingURL=15.5e6e2947.chunk.js.map