(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[20],{593:function(e,a,t){"use strict";var n=t(34);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(35)),i=t(1),c=(0,r.default)((0,i.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile");a.default=c},727:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(17),i=t(27),c=t(7),l=t(2),s=t.n(l),o=t(377),d=t(483),j=t(274),b=t(57),u=t(1),m=[{accessorKey:"id",header:"ID",size:20,enableEditing:!1,enableFilters:!1,muiTableHeadCellProps:{align:"center"},muiTableBodyCellProps:{align:"center"},Cell:function(e){return Object(u.jsx)("span",{children:e.row.original.id})}},{accessorKey:"packagename",header:"Package Name",muiTableHeadCellProps:{align:"left"},muiTableBodyCellProps:{align:"left"},muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"version",header:"Version",muiTableHeadCellProps:{align:"left"},muiTableBodyCellProps:{align:"left"},muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"apkfileUrl",header:"Url",muiTableHeadCellProps:{align:"left"},muiTableBodyCellProps:{align:"left"}},{accessorKey:"md5",header:"MD5",hidden:!0,muiTableHeadCellProps:{align:"left"},muiTableBodyCellProps:{align:"left"}},{accessorKey:"packagesize",header:"Size (bytes)",muiTableHeadCellProps:{align:"left"},muiTableBodyCellProps:{align:"left"},muiTableBodyCellEditTextFieldProps:{required:!0}}],p=t(53),f=t(367),h=t(58),O=t(482),x=t(451),g=t(463),v=t(490),y=t(492),k=t(491),C=t(372),S=t(76),w=t(467),T=function(e){var a=e.row,t=e.setUpdatetable,n=Object(l.useState)(),s=Object(c.a)(n,2),o=s[0],d=s[1],b=Object(l.useState)(!1),m=Object(c.a)(b,2),f=m[0],h=m[1],T=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)([o]);case 2:200===e.sent.status?(t(!0),p.b.success("Delete APK file success"),P(),d()):(p.b.error("Something went wrong. Cannot delete apk"),P(),d());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){h(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(O.a,{onClick:function(){return function(e){h(!0),d(e.original.id)}(a)},children:[Object(u.jsx)(w.a,{color:"error"}),Object(u.jsx)(j.a,{style:{marginLeft:"8px",color:"black"},children:"Delete"})]}),Object(u.jsxs)(x.a,{open:f,onClose:P,id:"deleteDialog",children:[Object(u.jsx)(g.a,{children:"Delete confirmation"}),Object(u.jsx)(v.a,{children:Object(u.jsx)(y.a,{children:"Are you sure you want to delete this item?"})}),Object(u.jsxs)(k.a,{children:[Object(u.jsx)(C.a,{onClick:P,color:"primary",children:"Cancel"}),Object(u.jsx)(C.a,{onClick:T,color:"error",children:"Delete"})]})]})]})},P=t(85),z=t.n(P),M=t(373),U=t(481),N=t(464),D=function(e){var a=e.paramsPageUser,t=e.totalPage,n=e.handleMoveToPrePage,r=e.handleMoveToNextPage;return Object(u.jsxs)(M.a,{container:!0,fullWidth:!0,children:[Object(u.jsx)(M.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"}}),Object(u.jsx)(M.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:Object(u.jsxs)("span",{children:[Object(u.jsx)(U.a,{title:"Previous page",children:Object(u.jsx)(O.a,{disabled:1===a.page,onClick:n,children:Object(u.jsx)(N.a,{})})}),"Page ",a.page," of ",t,Object(u.jsx)(U.a,{title:"Next page",children:Object(u.jsx)(O.a,{disabled:a.page===t,onClick:r,children:Object(u.jsx)(z.a,{})})})]})})]})},R=t(370),A=t(185),B=t(381),I=t(500),W=function(e){var a=e.row,t=e.setUpdatetable,n=Object(l.useState)(!1),s=Object(c.a)(n,2),o=s[0],d=s[1],b=Object(l.useState)(a.original.packagename),m=Object(c.a)(b,2),f=m[0],h=m[1],x=Object(l.useState)(a.original.version),g=Object(c.a)(x,2),v=g[0],y=g[1],k=Object(l.useState)(a.original.apkfileUrl),w=Object(c.a)(k,2),T=w[0],P=w[1],z=Object(l.useState)(a.original.md5),U=Object(c.a)(z,2),N=U[0],D=U[1],W=Object(l.useState)(a.original.packagesize),F=Object(c.a)(W,2),V=F[0],E=F[1],K=function(){d((function(e){return!e}))},L=function(e,a){switch(a){case"packagename":h(e.target.value);break;case"version":y(e.target.value);break;case"apkfileUrl":P(e.target.value);break;case"md5":D(e.target.value);break;case"packagesize":E(e.target.value)}},H=function(){for(var e=!0,a={packagename:f,version:v,apkfileUrl:T,md5:N,packagesize:V},t=["packagename","version","apkfileUrl","md5","packagesize"],n=0;n<t.length;n++)if(!a[t[n]]){e=!1,d(!0),p.b.info("Missing required parameter: "+t[n]);break}return e},q=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var n,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!H()){e.next=11;break}if((n={packagename:f,version:v,apkfileUrl:T,md5:N,packagesize:V}).packagename!==a.original.packagename||n.version!==a.original.version||n.apkfileUrl!==a.original.apkfileUrl||n.md5!==a.original.md5||n.packagesize!==a.original.packagesize){e.next=7;break}p.b.info("Nothing changes"),e.next=11;break;case 7:return e.next=9,Object(S.w)(n,a.original.id);case 9:(i=e.sent)&&200===i.status?(p.b.success("Change user data success"),t(!0),K()):p.b.error(i.message);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(O.a,{onClick:function(){d((function(e){return!e}))},children:[Object(u.jsx)(I.a,{color:"primary"}),Object(u.jsx)(j.a,{style:{marginLeft:"8px",color:"black"},children:"Edit APK Data"})]}),Object(u.jsx)(R.a,{open:o,onClose:K,children:Object(u.jsxs)(A.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400},children:[Object(u.jsxs)(j.a,{variant:"h6",component:"h2",gutterBottom:!0,children:["Edit APK: ",f,"'s data"]}),Object(u.jsxs)(M.a,{container:!0,spacing:2,children:[Object(u.jsx)(M.a,{item:!0,xs:6,children:Object(u.jsx)(B.a,{id:"packagename",label:"Package Name",fullWidth:!0,margin:"normal",required:!0,value:f,onChange:function(e){L(e,"packagename")}})}),Object(u.jsx)(M.a,{item:!0,xs:6,children:Object(u.jsx)(B.a,{id:"version",label:"Version",fullWidth:!0,margin:"normal",required:!0,value:v,onChange:function(e){L(e,"version")}})}),Object(u.jsx)(M.a,{item:!0,xs:6,children:Object(u.jsx)(B.a,{id:"apkfileUrl",label:"URL",fullWidth:!0,margin:"normal",required:!0,value:T,onChange:function(e){L(e,"apkfileUrl")}})}),Object(u.jsx)(M.a,{item:!0,xs:6,children:Object(u.jsx)(B.a,{id:"md5",label:"MD5",fullWidth:!0,margin:"normal",required:!0,value:N,onChange:function(e){L(e,"md5")}})}),Object(u.jsx)(M.a,{item:!0,xs:12,children:Object(u.jsx)(B.a,{id:"packagesize",label:"Size",fullWidth:!0,margin:"normal",type:"number",required:!0,value:V,onChange:function(e){L(e,"packagesize")}})})]}),Object(u.jsxs)(A.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[Object(u.jsx)(C.a,{variant:"contained",onClick:K,children:"Cancel"}),Object(u.jsx)(C.a,{variant:"contained",type:"submit",onClick:q,children:"Save"})]})]})})]})},F=t(461),V=t(70),E=t.n(V),K=t(465),L=t(466),H=t(736),q=t(747),J=t(474),_=t(11),G=t(9),Y=t(137),Q=t(55),X=t(8),Z=t(15),$=t(75),ee=t(68);function ae(e){return Object(ee.a)("MuiListItemAvatar",e)}Object($.a)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var te=["className"],ne=Object(X.a)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,"flex-start"===t.alignItems&&a.alignItemsFlexStart]}})((function(e){var a=e.ownerState;return Object(n.a)({minWidth:56,flexShrink:0},"flex-start"===a.alignItems&&{marginTop:8})})),re=l.forwardRef((function(e,a){var t=Object(Z.a)({props:e,name:"MuiListItemAvatar"}),r=t.className,i=Object(_.a)(t,te),c=l.useContext(Q.a),s=Object(n.a)(Object(n.a)({},t),{},{alignItems:c.alignItems}),o=function(e){var a=e.alignItems,t=e.classes,n={root:["root","flex-start"===a&&"alignItemsFlexStart"]};return Object(Y.a)(n,ae,t)}(s);return Object(u.jsx)(ne,Object(n.a)({className:Object(G.a)(o.root,r),ownerState:s,ref:a},i))})),ie=t(6),ce=t(385),le=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],se=Object(X.a)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[Object(ie.a)({},"& .".concat(ce.a.primary),a.primary),Object(ie.a)({},"& .".concat(ce.a.secondary),a.secondary),a.root,t.inset&&a.inset,t.primary&&t.secondary&&a.multiline,t.dense&&a.dense]}})((function(e){var a=e.ownerState;return Object(n.a)(Object(n.a)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},a.primary&&a.secondary&&{marginTop:6,marginBottom:6}),a.inset&&{paddingLeft:56})})),oe=l.forwardRef((function(e,a){var t=Object(Z.a)({props:e,name:"MuiListItemText"}),r=t.children,i=t.className,c=t.disableTypography,s=void 0!==c&&c,o=t.inset,d=void 0!==o&&o,b=t.primary,m=t.primaryTypographyProps,p=t.secondary,f=t.secondaryTypographyProps,h=Object(_.a)(t,le),O=l.useContext(Q.a).dense,x=null!=b?b:r,g=p,v=Object(n.a)(Object(n.a)({},t),{},{disableTypography:s,inset:d,primary:!!x,secondary:!!g,dense:O}),y=function(e){var a=e.classes,t=e.inset,n=e.primary,r=e.secondary,i={root:["root",t&&"inset",e.dense&&"dense",n&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return Object(Y.a)(i,ce.b,a)}(v);return null==x||x.type===j.a||s||(x=Object(u.jsx)(j.a,Object(n.a)(Object(n.a)({variant:O?"body2":"body1",className:y.primary,component:null!=m&&m.variant?void 0:"span",display:"block"},m),{},{children:x}))),null==g||g.type===j.a||s||(g=Object(u.jsx)(j.a,Object(n.a)(Object(n.a)({variant:"body2",className:y.secondary,color:"text.secondary",display:"block"},f),{},{children:g}))),Object(u.jsxs)(se,Object(n.a)(Object(n.a)({className:Object(G.a)(y.root,i),ownerState:v,ref:a},h),{},{children:[x,g]}))})),de=t(593),je=t.n(de),be=t(375),ue=t(33),me=t(110),pe=t.n(me),fe=t(728);var he=t(749),Oe=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){var n=a.defaultTheme,r=a.withTheme,i=void 0!==r&&r,c=a.name,l=Object(_.a)(a,["defaultTheme","withTheme","name"]);var o=c,d=Object(fe.a)(e,Object(ue.a)({defaultTheme:n,Component:t,name:c||t.displayName,classNamePrefix:o},l)),j=s.a.forwardRef((function(e,a){e.classes;var r,l=e.innerRef,o=Object(_.a)(e,["classes","innerRef"]),j=d(Object(ue.a)({},t.defaultProps,e)),b=o;return("string"===typeof c||i)&&(r=Object(he.a)()||n,c&&(b=function(e){var a=e.theme,t=e.name,n=e.props;if(!a||!a.props||!a.props[t])return n;var r,i=a.props[t];for(r in i)void 0===n[r]&&(n[r]=i[r]);return n}({theme:r,name:c,props:o})),i&&!b.theme&&(b.theme=r)),s.a.createElement(t,Object(ue.a)({ref:l||a,classes:j},b))}));return pe()(j,t),j}},xe=t(560);var ge=function(e,a){return Oe(e,Object(ue.a)({defaultTheme:xe.a},a))},ve=t(724);function ye(e){if("string"!==typeof e)throw new Error(Object(ve.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}var ke=l.forwardRef((function(e,a){var t=e.children,n=e.classes,r=e.className,i=e.color,c=void 0===i?"inherit":i,s=e.component,o=void 0===s?"svg":s,d=e.fontSize,j=void 0===d?"default":d,b=e.htmlColor,u=e.titleAccess,m=e.viewBox,p=void 0===m?"0 0 24 24":m,f=Object(_.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return l.createElement(o,Object(ue.a)({className:Object(G.a)(n.root,r,"inherit"!==c&&n["color".concat(ye(c))],"default"!==j&&n["fontSize".concat(ye(j))]),focusable:"false",viewBox:p,color:b,"aria-hidden":!u||void 0,role:u?"img":void 0,ref:a},f),t,u?l.createElement("title",null,u):null)}));ke.muiName="SvgIcon";var Ce=ge((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(ke);var Se=function(e,a){var t=s.a.memo(s.a.forwardRef((function(a,t){return s.a.createElement(Ce,Object(ue.a)({ref:t},a),e)})));return t.muiName=Ce.muiName,t}(s.a.createElement("path",{d:"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"}));function we(e){return Object(u.jsxs)(A.a,{sx:{position:"relative",display:"inline-flex",flexDirection:"column"},children:[Object(u.jsx)(be.a,Object(n.a)({color:"success",variant:"determinate",size:64,thickness:2},e)),Object(u.jsx)(A.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u.jsxs)(M.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",position:"relative",children:[Object(u.jsx)(M.a,{item:!0,children:Object(u.jsx)(Se,{fontSize:"medium",style:{color:"green"}})}),Object(u.jsx)(M.a,{item:!0,style:{fontSize:"10px"},children:"".concat(Math.round(e.value),"%")})]})})]})}var Te=function(e){var a=e.setResettable,t=Object(l.useState)(!1),n=Object(c.a)(t,2),o=n[0],d=n[1],b=Object(l.useState)(""),m=Object(c.a)(b,2),f=m[0],h=m[1],x=Object(l.useState)(""),g=Object(c.a)(x,2),v=g[0],y=g[1],k=Object(l.useState)(""),w=Object(c.a)(k,2),T=w[0],P=w[1],z=Object(l.useState)(""),N=Object(c.a)(z,2),D=N[0],I=N[1],W=Object(l.useState)(""),V=Object(c.a)(W,2),E=V[0],K=V[1],L=Object(l.useState)(1),_=Object(c.a)(L,2),G=_[0],Y=_[1],Q=Object(l.useState)(null),X=Object(c.a)(Q,2),Z=X[0],$=X[1],ee=s.a.useRef(null),ae=Object(l.useState)(0),te=Object(c.a)(ae,2),ne=te[0],ie=te[1],ce=function(){d((function(e){return!e})),h(""),y(""),P(""),I(""),K(""),$(null),ie(0)},le=function(e,a){switch(a){case"packagename":h(e.target.value);break;case"version":y(e.target.value);break;case"apkfileUrl":P(e.target.value);break;case"md5":I(e.target.value);break;case"packagesize":K(e.target.value)}},se=function(){for(var e=!0,a={packagename:f,version:v,apkfileUrl:T,md5:D,packagesize:E},t=["packagename","version","apkfileUrl","md5","packagesize"],n=0;n<t.length;n++)if(!a[t[n]]){e=!1,d(!0),p.b.info("Missing required parameter: "+t[n]);break}return e},de=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=5;break}p.b.error("No File to upload"),ce(),e.next=9;break;case 5:return e.next=7,Object(S.v)(Z,(function(e){ie(Math.round(100*e.loaded/e.total))}));case 7:(t=e.sent)&&200===t.status?(p.b.success("Upload APK file success"),a(!0),ce()):p.b.error(t.message);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!se()){e.next=7;break}return t={packagename:f,version:v,apkfileUrl:T,md5:D,packagesize:E},e.next=5,Object(S.u)(t);case 5:(n=e.sent)&&200===n.status?(p.b.success("Upload APK data success"),a(!0),ce()):p.b.error(n.message);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(U.a,{arrow:!0,placement:"bottom",title:"Upload APK Data/File",children:Object(u.jsx)(O.a,{onClick:function(){d((function(e){return!e}))},children:Object(u.jsx)(je.a,{color:"primary"})})}),Object(u.jsx)(R.a,{open:o,onClose:ce,children:Object(u.jsxs)(A.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400},children:[Object(u.jsxs)(H.a,{value:G,onChange:function(e,a){return Y(a)},textColor:"primary",indicatorColor:"primary",children:[Object(u.jsx)(q.a,{value:1,label:"New APK Information"}),Object(u.jsx)(q.a,{value:2,label:"New APK File"})]}),1===G&&Object(u.jsxs)(A.a,{children:[Object(u.jsxs)(M.a,{container:!0,spacing:2,children:[Object(u.jsx)(M.a,{item:!0,xs:6,children:Object(u.jsx)(B.a,{id:"packagename",label:"Package Name",fullWidth:!0,margin:"normal",required:!0,value:f,onChange:function(e){le(e,"packagename")}})}),Object(u.jsx)(M.a,{item:!0,xs:6,children:Object(u.jsx)(B.a,{id:"version",label:"Version",fullWidth:!0,margin:"normal",required:!0,value:v,onChange:function(e){le(e,"version")}})}),Object(u.jsx)(M.a,{item:!0,xs:6,children:Object(u.jsx)(B.a,{id:"apkfileUrl",label:"URL",fullWidth:!0,margin:"normal",required:!0,value:T,onChange:function(e){le(e,"apkfileUrl")}})}),Object(u.jsx)(M.a,{item:!0,xs:6,children:Object(u.jsx)(B.a,{id:"md5",label:"MD5",fullWidth:!0,margin:"normal",required:!0,value:D,onChange:function(e){le(e,"md5")}})}),Object(u.jsx)(M.a,{item:!0,xs:12,children:Object(u.jsx)(B.a,{id:"packagesize",label:"Size",fullWidth:!0,margin:"normal",type:"number",required:!0,value:E,onChange:function(e){le(e,"packagesize")}})})]}),Object(u.jsxs)(A.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[Object(u.jsx)(C.a,{variant:"contained",onClick:ce,children:"Cancel"}),Object(u.jsx)(C.a,{variant:"contained",type:"submit",onClick:be,children:"Save"})]})]}),2===G&&Object(u.jsxs)(A.a,{sx:{minWidth:630,minHeight:210},onDrop:function(e){e.preventDefault();var a=e.dataTransfer.files[0];de(a)},onDragOver:function(e){e.preventDefault()},children:[Object(u.jsx)("input",{type:"file",onChange:function(e){var a=e.target.files[0];de(a)},style:{display:"none"},ref:ee}),!Z&&Object(u.jsxs)(A.a,{sx:{minWidth:510,minHeight:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem",border:"1px dashed grey"},children:[Object(u.jsx)(j.a,{variant:"h6",gutterBottom:!0,children:"Drag and drop your APK file here"}),Object(u.jsx)(j.a,{variant:"body1",color:"text.secondary",children:"or"}),Object(u.jsxs)(C.a,{variant:"contained",component:"label",children:["Choose File",Object(u.jsx)("input",{type:"file",onChange:function(e){$(e.target.files[0])},style:{display:"none"},ref:ee})]})]}),Z&&Object(u.jsx)(A.a,{sx:{marginTop:"1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem",border:"1px dashed grey"},children:Object(u.jsxs)(J.a,{children:[Object(u.jsx)(re,{children:Object(u.jsx)(we,{value:ne})}),Object(u.jsx)(F.a,{sx:{height:28,m:.5,borderWidth:2,opacity:0},orientation:"vertical"}),Object(u.jsx)(oe,{primary:"File name: ".concat(Z.name),secondary:"File size: ".concat(Z.size," bytes")})]})}),Object(u.jsxs)(A.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[Object(u.jsx)(C.a,{variant:"contained",onClick:ce,children:"Cancel"}),Object(u.jsx)(C.a,{variant:"contained",type:"submit",onClick:de,children:"Save"})]})]})]})})]})},Pe=function(e){var a=e.setResettable,t=e.handleResetTable,n=e.handleSearchMode,r=e.searchTermPackage,i=e.setSearchTermPackage,c=e.searchTermVersion,l=e.setSearchTermVersion,s=0===r.trim().length&&0===c.trim().length;return Object(u.jsxs)(M.a,{container:!0,fullWidth:!0,children:[Object(u.jsxs)(M.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:[Object(u.jsx)(B.a,{id:"searchpackage",label:"Search Package Name",variant:"outlined",size:"small",value:r,onChange:function(e){i(e.target.value)},edge:"end",fullWidth:!0}),Object(u.jsx)(F.a,{sx:{height:28,m:.5,borderWidth:2,opacity:0},orientation:"vertical"}),Object(u.jsx)(B.a,{id:"searchversion",label:"Search Version",variant:"outlined",size:"small",value:c,onChange:function(e){l(e.target.value)},edge:"end",fullWidth:!0}),Object(u.jsx)(F.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(u.jsx)(U.a,{arrow:!0,placement:"top",title:"Search",children:Object(u.jsx)(O.a,{type:"button","aria-label":"search",helperText:"Search",onClick:function(){s||n()},children:Object(u.jsx)(E.a,{color:"primary"})})}),Object(u.jsx)(U.a,{arrow:!0,placement:"top",title:"Close Search",children:Object(u.jsx)(O.a,{type:"button",onClick:function(){i(""),l(""),t()},disabled:s,children:Object(u.jsx)(K.a,{color:"error"})})})]}),Object(u.jsxs)(M.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:[Object(u.jsx)(F.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(u.jsx)(U.a,{arrow:!0,placement:"top",title:"Reset table to default",children:Object(u.jsx)(O.a,{color:"primary","aria-label":"clear",onClick:t,children:Object(u.jsx)(L.a,{})})}),Object(u.jsx)(Te,{setResettable:a})]})]})},ze=t(28),Me=Object(ze.a)(Object(u.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");function Ue(e){var a=e.url,t=e.filename.toString(),n=l.useState(!1),s=Object(c.a)(n,2),o=s[0],d=s[1],b=function(){d(!1)},m=function(){var e=Object(i.a)(Object(r.a)().mark((function e(a,t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.d)(a,t);case 2:200===e.sent.status&&(b(),p.b.success("File is downloading!!!"));case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsxs)(O.a,{onClick:function(){d(!0)},children:[Object(u.jsx)(Me,{color:"primary"}),Object(u.jsx)(j.a,{style:{marginLeft:"8px",color:"black"},children:"Download APK"})]}),Object(u.jsxs)(x.a,{open:o,onClose:b,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(u.jsx)(g.a,{id:"alert-dialog-title",children:"Confirm download"}),Object(u.jsx)(v.a,{children:Object(u.jsx)(y.a,{id:"alert-dialog-description",children:"Are you sure to dowwn load this file?"})}),Object(u.jsxs)(k.a,{children:[Object(u.jsx)(C.a,{onClick:b,children:"Cancel"}),Object(u.jsx)(C.a,{onClick:function(){return m(a,t)},children:"Yes"})]})]})]})}var Ne=t(59),De=function(){var e=Object(l.useState)([]),a=Object(c.a)(e,2),t=a[0],s=a[1],O=Object(l.useState)({page:1,limit:10,packagename:"",version:""}),x=Object(c.a)(O,2),g=x[0],v=x[1],y=Object(l.useState)(),k=Object(c.a)(y,2),C=k[0],w=k[1],P=Object(l.useState)(!0),z=Object(c.a)(P,2),M=z[0],U=z[1],N=Object(l.useState)(!1),R=Object(c.a)(N,2),A=R[0],B=R[1],I=Object(l.useState)(""),F=Object(c.a)(I,2),V=F[0],E=F[1],K=Object(l.useState)(""),L=Object(c.a)(K,2),H=L[0],q=L[1],J=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var a,t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.e)(g);case 2:200===(a=e.sent).status&&(null===a.data.totalElement&&(null!==V||null!==H?p.b.error("No element matchs"):p.b.error("Nothing to show")),t=a.data.listResult,s(t),w(a.data.totalPage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){g.page<C&&(v({limit:g.limit,page:g.page+1}),U(!0))},G=function(){g.page>1&&(v({limit:g.limit,page:g.page-1}),U(!0))},Y=function(){B(!0),E(""),q("")},Q=function(){v(Object(n.a)(Object(n.a)({},g),{},{packagename:V,version:H})),U(!0)};return Object(l.useEffect)((function(){A?(v({page:1,limit:10,packagename:null,version:null}),B(!1),U(!0)):M&&(J(),U(!1))}),[A,M]),Object(u.jsx)(o.a,{children:Object(u.jsx)(f.a,{theme:h.a,children:Object(u.jsx)(b.a,{columns:m,data:t,options:{actionsColumnIndex:-1},enableExpanding:!0,enableEditing:!1,enableBottomToolbar:!0,enableGlobalFilter:!1,enableColumnFilters:!1,enableColumnActions:!1,enablePagination:!1,enableSorting:!1,expanded:!0,muiTableBodyRowProps:{hover:!1},defaultColumn:{maxSize:120,minSize:10,size:100},initialState:{density:"comfortable",columnVisibility:{md5:!1,packagesize:!1,id:!1},columnOrder:["id","packagename","version","apkfileUrl","md5","packagesize","mrt-row-expand","mrt-row-actions"]},renderRowActionMenuItems:function(e){var a=e.row;return[Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{flexBasis:"25%",children:Object(u.jsx)(Ue,{url:a.original.apkfileUrl,filename:a.original.packagename.toString()})}),Object(u.jsx)(d.a,{flexBasis:"25%",children:Object(u.jsx)(W,{row:a,setUpdatetable:U})}),Object(u.jsx)(d.a,{flexBasis:"25%",children:Object(u.jsx)(T,{row:a,setUpdatetable:U})})]})]},renderDetailPanel:function(e){var a=e.row;return Object(u.jsxs)(d.a,{sx:{display:"grid",margin:"auto",gridTemplateColumns:"1fr 1fr",width:"100%",justifyContent:"center",alignItems:"center"},children:[Object(u.jsxs)(j.a,{fontSize:"15px",children:["Created Date: ",Object(Ne.a)(a.original.createdDate)]}),Object(u.jsxs)(j.a,{fontSize:"15px",children:["Created By: ",a.original.createdBy]}),Object(u.jsxs)(j.a,{fontSize:"15px",children:["Modified Date: ",Object(Ne.a)(a.original.modifiedDate)]}),Object(u.jsxs)(j.a,{fontSize:"15px",children:["Modified By: ",a.original.modifiedBy]})]})},renderBottomToolbarCustomActions:function(){return Object(u.jsx)(D,{paramsPageUser:g,totalPage:C,handleMoveToPrePage:G,handleMoveToNextPage:_})},renderTopToolbarCustomActions:function(){return Object(u.jsx)(Pe,{searchTermPackage:V,setSearchTermPackage:E,searchTermVersion:H,setSearchTermVersion:q,setResettable:B,handleSearchMode:Q,handleResetTable:Y})}})})})},Re=t(69),Ae=t(275),Be=t(86);a.default=function(){return Object(u.jsxs)(Be.a,{children:[Object(u.jsx)(Re.a,{routeSegments:[{name:"Application Managers",path:"/tms-application/application-management"},{name:"APK",path:"/tms-application/apk-management"}]}),Object(u.jsx)(Ae.a,{spacing:3,children:Object(u.jsx)(De,{})})]})}}}]);
//# sourceMappingURL=20.7e3ea676.chunk.js.map