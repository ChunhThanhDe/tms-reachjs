(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[12],{497:function(e,t,a){"use strict";var n=a(26),i=a(1);t.a=Object(n.a)(Object(i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},514:function(e,t,a){"use strict";var n=a(26),i=a(1);t.a=Object(n.a)(Object(i.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddBox")},515:function(e,t,a){"use strict";var n=a(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(33)),c=a(1),r=(0,i.default)((0,c.jsx)("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"}),"QueuePlayNext");t.default=r},580:function(e,t,a){"use strict";var n=a(26),i=a(1);t.a=Object(n.a)(Object(i.jsx)("path",{d:"M21 10h-3L2 3v7l9 2-9 2v7l8-3.5V21c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm0 11h-9v-9h9v9zm-4.5-1L13 16h2v-3h3v3h2l-3.5 4z"}),"SendAndArchive")},723:function(e,t,a){"use strict";a.r(t);var n=a(68),i=a(272),c=a(83),r=a(3),s=a(17),l=a(28),o=a(8),d=a(2),j=a(371),b=a(361),u=a(184),h=a(271),x=a(66),m=a(1),O=[{accessorKey:"id",header:"ID",size:20,enableEditing:!1,enableFilters:!1,muiTableHeadCellProps:{align:"center"},muiTableBodyCellProps:{align:"center"},Cell:function(e){return Object(m.jsx)("span",{children:e.row.original.id})}},{accessorKey:"name",header:"Name",enableEditing:!1,enableSorting:!1},{accessorKey:"location",header:"Location"},{accessorKey:"description",header:"Description",enableEditing:!1}],p=a(84),f=a(106),g=a.n(f),v=a(367),y=a(480),C=a(481),S=a(460),w=function(e){var t=e.paramsPageDevices,a=e.totalPage,n=e.handleMoveToPrePage,i=e.handleMoveToNextPage;return Object(m.jsxs)(v.a,{container:!0,fullWidth:!0,children:[Object(m.jsx)(v.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"}}),Object(m.jsx)(v.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:Object(m.jsxs)("span",{children:[Object(m.jsx)(y.a,{title:"Previous page",children:Object(m.jsx)(C.a,{disabled:1===t.page,onClick:n,children:Object(m.jsx)(S.a,{})})}),"Page ",t.page," of ",a,Object(m.jsx)(y.a,{title:"Next page",children:Object(m.jsx)(C.a,{disabled:t.page===a,onClick:i,children:Object(m.jsx)(g.a,{})})})]})})]})},T=a(375),P=a(485),k=a(455),D=a(82),M=a.n(D),z=a(461),E=a(462),A=a(58),F=a(364),R=a(366),N=a(514),B=function(e){var t=e.setResettable,a=Object(d.useState)(!1),n=Object(o.a)(a,2),i=n[0],c=n[1],r=Object(d.useState)(""),j=Object(o.a)(r,2),b=j[0],x=j[1],O=Object(d.useState)(""),f=Object(o.a)(O,2),g=f[0],S=f[1],w=Object(d.useState)(""),P=Object(o.a)(w,2),k=P[0],D=P[1],M=function(){c((function(e){return!e})),S(""),D(""),x("")},z=function(e,t){switch(t){case"name":x(e.target.value);break;case"location":S(e.target.value);break;case"description":D(e.target.value)}},E=function(){for(var e=!0,t={name:b,location:g,description:k},a=["name","location"],n=0;n<a.length;n++)if(!t[a[n]]){e=!1,c(!0),A.b.info("Missing required parameter: "+a[n]);break}return e},B=function(){var e=Object(l.a)(Object(s.a)().mark((function e(){var a,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E()){e.next=7;break}return a={name:b,location:g,description:k},e.next=5,Object(p.j)(a);case 5:(n=e.sent)&&500===n.statusCode?n.message.includes("JSON parse error")?A.b.error("Contact must be phone number"):A.b.error(n.message):n&&200===n.status?(A.b.success("Create list devices success"),M(),t(!0)):(A.b.error(n.message),M());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Add New List Devices",children:Object(m.jsx)(C.a,{onClick:function(){c((function(e){return!e}))},children:Object(m.jsx)(N.a,{color:"primary"})})}),Object(m.jsx)(F.a,{open:i,onClose:M,children:Object(m.jsxs)(u.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400},children:[Object(m.jsx)(h.a,{variant:"h6",component:"h2",gutterBottom:!0,children:"Create a new User"}),Object(m.jsxs)(v.a,{container:!0,spacing:2,children:[Object(m.jsx)(v.a,{item:!0,xs:12,children:Object(m.jsx)(T.a,{id:"name",label:"Name",fullWidth:!0,margin:"normal",onChange:function(e){z(e,"name")},value:b})}),Object(m.jsx)(v.a,{item:!0,xs:12,children:Object(m.jsx)(T.a,{id:"location",label:"Location",fullWidth:!0,margin:"normal",onChange:function(e){z(e,"location")},value:g})}),Object(m.jsx)(v.a,{item:!0,xs:12,children:Object(m.jsx)(T.a,{id:"description",label:"Description",fullWidth:!0,multiline:!0,rows:6,margin:"normal",onChange:function(e){z(e,"description")},value:k})})]}),Object(m.jsxs)(u.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[Object(m.jsx)(R.a,{variant:"contained",onClick:M,children:"Cancel"}),Object(m.jsx)(R.a,{variant:"contained",type:"submit",onClick:B,children:"Save"})]})]})})]})},I=function(e){var t=e.searchTerm,a=e.setSearchTerm,n=e.handleResetTable,i=e.handleSearchMode,c=e.setResettable,r=t&&0===t.trim().length;return Object(m.jsxs)(v.a,{container:!0,fullWidth:!0,children:[Object(m.jsxs)(v.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:[Object(m.jsx)(T.a,{id:"search",label:"Search",variant:"outlined",placeholder:"Only search in Name",size:"small",value:t,onChange:function(e){a(e.target.value)},edge:"end",fullWidth:!0,InputProps:{endAdornment:Object(m.jsxs)(P.a,{children:[Object(m.jsx)(k.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Only search in Name",children:Object(m.jsx)(C.a,{type:"button","aria-label":"search",helperText:"Search",onClick:function(){r||i()},children:Object(m.jsx)(M.a,{color:"primary"})})})]})}}),Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Close Search",children:Object(m.jsx)(C.a,{type:"button",onClick:function(){a(""),n()},disabled:r,children:Object(m.jsx)(z.a,{color:"error"})})})]}),Object(m.jsxs)(v.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:[Object(m.jsx)(k.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Reset table to default",children:Object(m.jsx)(C.a,{color:"primary","aria-label":"clear",onClick:n,children:Object(m.jsx)(E.a,{})})}),Object(m.jsx)(B,{setResettable:c}),","]})]})},K=a(497),W=function(e){var t=e.row,a=e.setUpdatetable,n=Object(d.useState)(!1),i=Object(o.a)(n,2),c=i[0],r=i[1],j=Object(d.useState)(t.original.description),b=Object(o.a)(j,2),x=b[0],O=b[1],f=Object(d.useState)(t.original.name),g=Object(o.a)(f,2),y=g[0],C=g[1],S=t.original.description,w=function(){r((function(e){return!e}))},P=function(){var e=Object(l.a)(Object(s.a)().mark((function e(){var n,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x!==S){e.next=4;break}return A.b.info("Nothing changes"),w(),e.abrupt("return");case 4:return n={id:t.original.id,description:x,name:y},e.next=7,Object(p.l)(n);case 7:(i=e.sent)&&200===i.status?(A.b.success("Change list devices data success"),a(!0),w()):500===i.statusCode&&A.b.error("Error: ",i.message);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(R.a,{onClick:function(){r((function(e){return!e}))},children:[Object(m.jsx)(K.a,{color:"primary"}),Object(m.jsx)(h.a,{style:{marginLeft:"8px",color:"black"},textTransform:"none",children:"Edit"})]}),Object(m.jsx)(F.a,{open:c,onClose:w,children:Object(m.jsxs)(u.a,{sx:{position:"absolute",top:"50%",left:"50%",width:"50%",height:"700",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400},children:[Object(m.jsx)(h.a,{variant:"h6",component:"h2",gutterBottom:!0,children:"Edit"}),Object(m.jsxs)(v.a,{container:!0,spacing:2,children:[Object(m.jsx)(v.a,{item:!0,xs:12,children:Object(m.jsx)(T.a,{id:"name",label:"Name",fullWidth:!0,margin:"normal",onChange:function(e){return function(e){C(e.target.value)}(e)},value:y})}),Object(m.jsx)(v.a,{item:!0,xs:12,children:Object(m.jsx)(T.a,{id:"description",label:"Description",fullWidth:!0,multiline:!0,rows:6,margin:"normal",onChange:function(e){return function(e){O(e.target.value)}(e)},value:x})})]}),Object(m.jsxs)(u.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[Object(m.jsx)(R.a,{variant:"contained",onClick:w,children:"Cancel"}),Object(m.jsx)(R.a,{variant:"contained",type:"submit",onClick:P,children:"Save"})]})]})})]})},L=a(67),V=a(74),q=a(515),H=a.n(q),U=a(41),G=a(107),J=a.n(G),_=[{accessorKey:"id",header:"ID",size:20,enableEditing:!1,enableFilters:!1,Cell:function(e){return Object(m.jsx)("span",{children:e.row.original.id})}},{accessorKey:"sn",header:"Serial Number",enableEditing:!1,enableSorting:!1,enableColumnFilter:!1,size:50},{accessorKey:"model",header:"Model",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"ip",header:"IP",enableEditing:!1},{accessorKey:"firmwareVer",header:"Firmware Version",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"location",header:"Location",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"description",header:"Description",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"detail",header:"Detail",Cell:function(e){return Object(m.jsx)(u.a,{children:Object(m.jsx)(y.a,{arrow:!0,placement:"bottom",title:"Detail",children:Object(m.jsx)(U.c,{to:"/tms-policy/policy-management/policy?id=".concat(e.row.original.id,"&pn=").concat(e.row.original.policyname),children:Object(m.jsx)(C.a,{children:Object(m.jsx)(J.a,{color:"primary"})})})})})}}],Q=function(e){var t=e.paramsPageDevices,a=e.totalPage,n=e.handleMoveToPrePage,i=e.handleMoveToNextPage;return Object(m.jsxs)(v.a,{container:!0,fullWidth:!0,children:[Object(m.jsx)(v.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"}}),Object(m.jsx)(v.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:Object(m.jsxs)("span",{children:[Object(m.jsx)(y.a,{title:"Previous page",children:Object(m.jsx)(C.a,{disabled:1===t.page,onClick:n,children:Object(m.jsx)(S.a,{})})}),"Page ",t.page," of ",a,Object(m.jsx)(y.a,{title:"Next page",children:Object(m.jsx)(C.a,{disabled:t.page===a,onClick:i,children:Object(m.jsx)(g.a,{})})})]})})]})},X=a(580),Y=function(e){var t=e.searchTerm,a=e.setSearchTerm,n=e.handleResetTable,i=e.handleSearchMode,c=e.handleEditDevicesToListDevices,r=0===t.trim().length;return Object(m.jsxs)(v.a,{container:!0,fullWidth:!0,children:[Object(m.jsxs)(v.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:[Object(m.jsx)(T.a,{id:"search",label:"Search",variant:"outlined",placeholder:"Only search in SerialNumber and Descripttion",size:"small",value:t,onChange:function(e){a(e.target.value)},edge:"end",fullWidth:!0,InputProps:{endAdornment:Object(m.jsxs)(P.a,{children:[Object(m.jsx)(k.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Only search in SerialNumber and Descripttion",children:Object(m.jsx)(C.a,{type:"button","aria-label":"search",helperText:"Search",onClick:function(){r||i()},children:Object(m.jsx)(M.a,{color:"primary"})})})]})}}),Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Close Search",children:Object(m.jsx)(C.a,{type:"button",onClick:function(){a(""),n()},disabled:r,children:Object(m.jsx)(z.a,{color:"error"})})})]}),Object(m.jsxs)(v.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:[Object(m.jsx)(k.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Reset table to default",children:Object(m.jsx)(C.a,{color:"primary","aria-label":"clear",onClick:n,children:Object(m.jsx)(E.a,{})})}),Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Add devices",children:Object(m.jsx)(C.a,{color:"primary","aria-label":"clear",onClick:c,children:Object(m.jsx)(X.a,{})})})]})]})},Z=function(e){var t=e.id,a=e.handleAddDeviceSuccess,n=Object(d.useState)([]),i=Object(o.a)(n,2),c=i[0],O=i[1],f=Object(d.useState)({page:1,limit:5,search:null}),g=Object(o.a)(f,2),v=g[0],y=g[1],C=Object(d.useState)(),S=Object(o.a)(C,2),w=S[0],T=S[1],P=Object(d.useState)(!0),k=Object(o.a)(P,2),D=k[0],M=k[1],z=Object(d.useState)(!1),E=Object(o.a)(z,2),F=E[0],R=E[1],N=Object(d.useState)(""),B=Object(o.a)(N,2),I=B[0],K=B[1],W=Object(d.useState)([]),q=Object(o.a)(W,2),H=q[0],U=q[1],G=function(){var e=Object(l.a)(Object(s.a)().mark((function e(){var n,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(n=Object.keys(H).filter((function(e){return H[e]})).map((function(e){return parseInt(e)}))).length){e.next=5;break}A.b.error("There is no devices selected."),e.next=9;break;case 5:return e.next=7,Object(p.k)(t,n);case 7:200===(i=e.sent).status?(A.b.success("Add devices success"),a()):A.b.error(i.message);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(Object(s.a)().mark((function e(){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(v);case 2:200===(t=e.sent).status&&(null===t.data.totalElement&&null!==I&&A.b.error("No elements match"),a=t.data.listResult,O(a),T(t.data.totalPage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){v.page<w&&(y({limit:v.limit,page:v.page+1}),M(!0))},Z=function(){v.page>1&&(y({limit:v.limit,page:v.page-1}),M(!0))},$=function(){R(!0),K("")},ee=function(){y(Object(r.a)(Object(r.a)({},v),{},{search:I})),M(!0)};return Object(d.useEffect)((function(){F?(y({page:1,limit:5,search:null}),R(!1),M(!0)):D&&(J(),M(!1))}),[F,D]),Object(m.jsx)(j.a,{children:Object(m.jsx)(b.a,{theme:L.a,children:Object(m.jsx)(x.a,{columns:_,data:c,options:{actionsColumnIndex:-1},enableExpanding:!0,positionExpandColumn:"last",enableGlobalFilter:!1,enableColumnFilters:!1,enableColumnActions:!1,enablePagination:!1,enableSorting:!1,muiTableBodyRowProps:{hover:!1},enableRowSelection:!0,enableSelectAll:!1,positionToolbarAlertBanner:"none",getRowId:function(e){return e.id},onRowSelectionChange:function(e){return U(e)},state:{rowSelection:H},defaultColumn:{maxSize:120,minSize:10,size:100},initialState:{density:"compact",columnVisibility:{id:!1}},renderDetailPanel:function(e){var t=e.row;return Object(m.jsxs)(u.a,{sx:{display:"grid",margin:"auto",gridTemplateColumns:"1fr 1fr",width:"100%",justifyContent:"center",alignItems:"center"},children:[Object(m.jsxs)(h.a,{fontSize:"15px",children:["Created Date: ",Object(V.a)(t.original.createdDate)]}),Object(m.jsxs)(h.a,{fontSize:"15px",children:["Modified Date: ",Object(V.a)(t.original.modifiedDate)]})]})},renderBottomToolbarCustomActions:function(){return Object(m.jsx)(Q,{paramsPageDevices:v,totalPage:w,handleMoveToPrePage:Z,handleMoveToNextPage:X})},renderTopToolbarCustomActions:function(){return Object(m.jsx)(Y,{handleEditDevicesToListDevices:G,searchTerm:I,setSearchTerm:K,setResettable:R,handleSearchMode:ee,handleResetTable:$})}})})})},$=a(445),ee=a(457),te=a(488),ae=a(490),ne=a(489),ie=[{accessorKey:"id",header:"ID",size:20,enableEditing:!1,enableFilters:!1,Cell:function(e){return Object(m.jsx)("span",{children:e.row.original.id})}},{accessorKey:"sn",header:"Serial Number",enableEditing:!1,enableSorting:!1,enableColumnFilter:!1,size:50},{accessorKey:"model",header:"Model",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"ip",header:"IP",enableEditing:!1},{accessorKey:"firmwareVer",header:"Firmware Version",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"location",header:"Location",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"description",header:"Description",muiTableBodyCellEditTextFieldProps:{required:!0}}],ce=a(465),re=function(e){var t=e.paramsPage,a=e.totalPage,n=e.handleMoveToPrePage,i=e.handleMoveToNextPage;return Object(m.jsxs)(v.a,{container:!0,fullWidth:!0,children:[Object(m.jsx)(v.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"}}),Object(m.jsx)(v.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:Object(m.jsxs)("span",{children:[Object(m.jsx)(y.a,{title:"Previous page",children:Object(m.jsx)(C.a,{disabled:1===t.page,onClick:n,children:Object(m.jsx)(S.a,{})})}),"Page ",t.page," of ",a,Object(m.jsx)(y.a,{title:"Next page",children:Object(m.jsx)(C.a,{disabled:t.page===a,onClick:i,children:Object(m.jsx)(g.a,{})})})]})})]})},se=function(e){var t=e.handleResetTable,a=e.handleSearchMode,n=e.searchTerm,i=e.setSearchTerm,c=0===n.trim().length;return Object(m.jsxs)(v.a,{container:!0,fullWidth:!0,children:[Object(m.jsxs)(v.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-center"},children:[Object(m.jsx)(T.a,{id:"search",label:"Only search in Serial Number and Descripttion",variant:"outlined",size:"small",value:n,onChange:function(e){i(e.target.value)},edge:"end",fullWidth:!0}),Object(m.jsx)(k.a,{sx:{height:28,m:.5,borderWidth:2,opacity:0},orientation:"vertical"})]}),Object(m.jsxs)(v.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"space-between"},children:[Object(m.jsxs)(v.a,{lg:2,md:2,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-start"},children:[Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Search",children:Object(m.jsx)(C.a,{type:"button","aria-label":"search",helperText:"Search",onClick:function(){c||a()},children:Object(m.jsx)(M.a,{color:"primary"})})}),Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Close Search",children:Object(m.jsx)(C.a,{type:"button",onClick:function(){i(""),t()},disabled:c,children:Object(m.jsx)(z.a,{color:"error"})})})]}),Object(m.jsxs)(v.a,{lg:2,md:2,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:[Object(m.jsx)(k.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(m.jsx)(y.a,{arrow:!0,placement:"top",title:"Reset table to default",children:Object(m.jsx)(C.a,{color:"primary","aria-label":"clear",onClick:t,children:Object(m.jsx)(E.a,{})})})]})]})]})},le=function(e){var t=e.listDeviceId,a=e.deviceId,n=e.setUpdateTable,i=Object(d.useState)(!1),c=Object(o.a)(i,2),r=c[0],j=c[1],b=function(){j(!1)},u=function(){var e=Object(l.a)(Object(s.a)().mark((function e(){var i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(t,a);case 2:204===(i=e.sent).status?(A.b.success("Delete success"),n(!0),b()):(A.b.error("Delete fail!!!",i.message),b());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.a,{arrow:!0,placement:"bottom",title:"Delete",children:Object(m.jsx)(C.a,{onClick:function(){j(!0)},children:Object(m.jsx)(ce.a,{color:"error"})})}),Object(m.jsxs)($.a,{open:r,onClose:b,id:"deleteDialog",children:[Object(m.jsx)(ee.a,{children:"Delete confirmation"}),Object(m.jsx)(te.a,{children:Object(m.jsx)(ae.a,{children:"Are you sure you want to delete device?"})}),Object(m.jsxs)(ne.a,{children:[Object(m.jsx)(R.a,{onClick:b,color:"primary",children:"Cancel"}),Object(m.jsx)(R.a,{onClick:u,color:"error",children:"Delete"})]})]})]})},oe=function(e){var t=e.id,a=e.addDevicesSuccess,n=e.setAddDevicesSuccess,i=Object(d.useState)([]),c=Object(o.a)(i,2),h=c[0],O=c[1],f=Object(d.useState)({page:1,limit:5,id:t,search:null}),g=Object(o.a)(f,2),v=g[0],S=g[1],w=Object(d.useState)(!0),T=Object(o.a)(w,2),P=T[0],k=T[1],D=Object(d.useState)(!1),M=Object(o.a)(D,2),z=M[0],E=M[1],A=Object(d.useState)(""),F=Object(o.a)(A,2),R=F[0],N=F[1],B=Object(d.useState)(),I=Object(o.a)(B,2),K=I[0],W=I[1],V=function(){var e=Object(l.a)(Object(s.a)().mark((function e(){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.i)(v);case 2:200===(t=e.sent).status&&(a=t.data.listResult,O(a),W(t.data.totalPage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){v.page<K&&(S({limit:v.limit,page:v.page+1}),k(!0))},H=function(){v.page>1&&(S({limit:v.limit,page:v.page-1}),k(!0))},G=function(){E(!0),N("")},_=function(){S(Object(r.a)(Object(r.a)({},v),{},{search:R})),k(!0)};return Object(d.useEffect)((function(){P&&(V(),a&&n(!1),k(!1)),a&&k(!0),z&&(S({page:1,limit:5,id:t,search:null}),k(!0))}),[P,a,z]),Object(m.jsx)(j.a,{children:Object(m.jsx)(b.a,{theme:L.a,children:Object(m.jsx)(x.a,{columns:ie,data:h,options:{actionsColumnIndex:-1},enableExpanding:!0,enableGlobalFilter:!1,enableColumnFilters:!1,enableColumnActions:!1,enablePagination:!1,enableSorting:!1,muiTableBodyRowProps:{hover:!1},defaultColumn:{maxSize:120,minSize:10,size:100},initialState:{density:"compact",columnOrder:["id","sn","model","ip","firmwareVer","location","description","mrt-row-actions"]},renderRowActions:function(e){var a=e.row;return[Object(m.jsxs)(u.a,{children:[Object(m.jsx)(y.a,{arrow:!0,placement:"bottom",title:"Detail",children:Object(m.jsx)(U.c,{to:"/tms-devices/devices-management/device?id=".concat(a.original.id,"&sn=").concat(a.original.sn),children:Object(m.jsx)(C.a,{children:Object(m.jsx)(J.a,{color:"primary"})})})}),Object(m.jsx)(le,{listDeviceId:t,deviceId:a.original.id,setUpdateTable:k})]})]},renderBottomToolbarCustomActions:function(){return Object(m.jsx)(re,{paramsPage:v,totalPage:K,handleMoveToPrePage:H,handleMoveToNextPage:q})},renderTopToolbarCustomActions:function(){return Object(m.jsx)(se,{searchTerm:R,setSearchTerm:N,setResettable:E,handleSearchMode:_,handleResetTable:G})}})})})},de=function(e){var t=e.row,a=Object(d.useState)(!1),n=Object(o.a)(a,2),i=n[0],c=n[1],r=Object(d.useState)(!1),s=Object(o.a)(r,2),l=s[0],j=s[1],b=function(){c((function(e){return!e}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(R.a,{onClick:function(){c((function(e){return!e}))},children:[Object(m.jsx)(H.a,{color:"primary"}),Object(m.jsx)(h.a,{style:{marginLeft:"8px",color:"black",whiteSpace:"nowrap"},textTransform:"none",children:"Add devices to list device"})]}),Object(m.jsx)(F.a,{open:i,onClose:b,children:Object(m.jsx)(u.a,{sx:{position:"absolute",top:"50%",left:"50%",width:"95%",minHeight:"35%",maxHeight:"95%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:0,overflow:"auto"},children:Object(m.jsxs)(u.a,{sx:{p:1},children:[Object(m.jsxs)(u.a,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[" ",Object(m.jsx)(h.a,{variant:"h6",align:"left",fontWeight:"fontWeightBold",fontSize:22,sx:{marginTop:"15px",marginLeft:"10px"},children:"Add devices to list devices"}),Object(m.jsx)(C.a,{type:"button",children:Object(m.jsx)(z.a,{color:"inherit",onClick:b})})]}),Object(m.jsx)(Z,{id:t.original.id,handleAddDeviceSuccess:function(){j(!0)}}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{sx:{width:"100%",height:"100%",bgcolor:"background.paper"},children:Object(m.jsx)(oe,{id:t.original.id,addDevicesSuccess:l,setAddDevicesSuccess:j})})]})})})]})},je=function(){var e=Object(d.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(d.useState)({page:1,limit:10,name:null}),c=Object(o.a)(i,2),f=c[0],g=c[1],v=Object(d.useState)(),y=Object(o.a)(v,2),C=y[0],S=y[1],T=Object(d.useState)(!0),P=Object(o.a)(T,2),k=P[0],D=P[1],M=Object(d.useState)(!1),z=Object(o.a)(M,2),E=z[0],F=z[1],R=Object(d.useState)(""),N=Object(o.a)(R,2),B=N[0],K=N[1],q=function(){var e=Object(l.a)(Object(s.a)().mark((function e(){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.g)(f);case 2:200===(t=e.sent).status&&(null===t.data.totalElement&&null!==B&&A.b.error("NO elemant match"),a=t.data.listResult,n(a),S(t.data.totalPage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){f.page<C&&(g({limit:f.limit,page:f.page+1}),D(!0))},U=function(){f.page>1&&(g({limit:f.limit,page:f.page-1}),D(!0))},G=function(){F(!0),K("")},J=function(){g(Object(r.a)(Object(r.a)({},f),{},{name:B})),D(!0)};return Object(d.useEffect)((function(){E?(g({page:1,limit:10,name:null}),F(!1),D(!0)):k&&(q(),D(!1))}),[E,k]),Object(m.jsx)(j.a,{children:Object(m.jsx)(b.a,{theme:L.a,children:Object(m.jsx)(x.a,{columns:O,data:a,options:{actionsColumnIndex:-1},enableExpanding:!0,enableGlobalFilter:!1,enableColumnFilters:!1,enableColumnActions:!1,enablePagination:!1,enableSorting:!1,muiTableBodyRowProps:{hover:!1},defaultColumn:{maxSize:120,minSize:10,size:100},initialState:{columnVisibility:{id:!1},columnOrder:["id","name","location","description","mrt-row-expand","mrt-row-actions"]},renderRowActionMenuItems:function(e){var t=e.row;e.table,e.closeMenu;return[Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{flexBasis:"25%",children:Object(m.jsx)(W,{row:t,setUpdatetable:D})}),Object(m.jsx)(u.a,{flexBasis:"25%",children:Object(m.jsx)(de,{row:t})})]})]},renderDetailPanel:function(e){var t=e.row;return Object(m.jsxs)(u.a,{sx:{display:"grid",margin:"auto",gridTemplateColumns:"1fr 1fr",width:"100%",justifyContent:"center",alignItems:"center"},children:[Object(m.jsxs)(h.a,{fontSize:"15px",children:["Modified Date: ",Object(V.a)(t.original.modifiedDate)]}),Object(m.jsxs)(h.a,{fontSize:"15px",children:["Modified By: ",t.original.modifiedBy]})]})},renderBottomToolbarCustomActions:function(){return Object(m.jsx)(w,{paramsPageDevices:f,totalPage:C,handleMoveToPrePage:U,handleMoveToNextPage:H})},renderTopToolbarCustomActions:function(){return Object(m.jsx)(I,{searchTerm:B,setSearchTerm:K,setResettable:F,handleSearchMode:J,handleResetTable:G})}})})})};t.default=function(){return Object(m.jsxs)(c.a,{children:[Object(m.jsx)(n.a,{routeSegments:[{name:"Devices Manager",path:"/tms-devices/devices-management"},{name:"List Devices",path:"/tms-devices/list-devices"}]}),Object(m.jsx)(i.a,{spacing:3,children:Object(m.jsx)(je,{})})]})}}}]);