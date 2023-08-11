(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[9],{493:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return i})),a.d(t,"j",(function(){return s})),a.d(t,"i",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"h",(function(){return u})),a.d(t,"g",(function(){return j})),a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return b}));var n=a(19),r=function(e){return n.a.get("/TMS/api/user/".concat(e),{})},c=function(e){var t={method:"get",maxBodyLength:1/0,url:"/TMS/api/user",params:{page:e.page,limit:e.limit,active:e.active,search:e.search}};return n.a.request(t)},i=function(e){return n.a.post("/TMS/api/auth/signup",{name:e.name,username:e.username,password:e.password,company:e.company,email:e.email,contact:e.contact,rulename:e.rulename}).catch((function(e){if(e.response)return e.response.data}))},s=function(e){return n.a.put("/TMS/api/user/admin/".concat(e.id),{company:e.company,email:e.email,contact:e.contact,rulename:e.rulename})},o=function(e){return n.a.put("/TMS/api/user/".concat(e.id),{company:e.company,email:e.email,contact:e.contact})},l=function(e){return n.a.delete("/TMS/api/user/remove/".concat(e),{})},u=function(e,t){return Object(n.a)({method:"put",url:"/TMS/api/user/admin/password/".concat(e),params:{passwordnew:t}})},j=function(e,t,a){return Object(n.a)({method:"put",url:"/TMS/api/user/password/".concat(e),params:{passwordold:t,passwordnew:a}})},d=function(e){var t={method:"get",url:"/TMS/api/user/".concat(e,"/listDevice")};return n.a.request(t)},b=function(e){return Object(n.a)({method:"get",url:"/TMS/api/barSearch/device",params:{search:e}})}},500:function(e,t,a){"use strict";var n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(35)),c=a(1),i=(0,r.default)((0,c.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},502:function(e,t,a){"use strict";var n=a(28),r=a(1);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},503:function(e,t,a){"use strict";var n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(35)),c=a(1),i=(0,r.default)((0,c.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.default=i},504:function(e,t,a){"use strict";var n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(35)),c=a(1),i=(0,r.default)([(0,c.jsx)("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z"},"0"),(0,c.jsx)("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z"},"1")],"AdminPanelSettings");t.default=i},578:function(e,t,a){"use strict";var n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(35)),c=a(1),i=(0,r.default)((0,c.jsx)("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"Password");t.default=i},579:function(e,t,a){"use strict";var n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(35)),c=a(1),i=(0,r.default)((0,c.jsx)("path",{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"}),"PersonAddAlt1");t.default=i},732:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(17),c=a(27),i=a(7),s=a(2),o=a(377),l=a(483),u=a(274),j=a(57),d=a(185),b=a(481),m=a(482),h=a(504),O=a.n(h),x=a(503),p=a.n(x),f=a(1),g=[{accessorKey:"id",header:"ID",size:20,enableEditing:!1,enableFilters:!1,Cell:function(e){return Object(f.jsx)("span",{children:e.row.original.id})}},{accessorKey:"role-state",header:"Role/State",enableEditing:!1,enableSorting:!1,enableColumnFilter:!1,size:50,Cell:function(e){return Object(f.jsx)(d.a,{children:Object(f.jsx)(b.a,{placement:"left",title:"ROLE_USER"!==e.row.original.rulename[0]||e.row.original.rulename[1]?"Admin":"User",children:Object(f.jsx)(m.a,{children:"ROLE_USER"!==e.row.original.rulename[0]||e.row.original.rulename[1]?Object(f.jsx)(O.a,{color:!0===e.row.original.active?"success":"error"}):Object(f.jsx)(p.a,{color:!0===e.row.original.active?"success":"error"})})})})}},{accessorKey:"name",header:"Name",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"username",header:"Username",enableEditing:!1},{accessorKey:"email",header:"Email",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"company",header:"Company",muiTableBodyCellEditTextFieldProps:{required:!0}},{accessorKey:"contact",header:"Contact",muiTableBodyCellEditTextFieldProps:{required:!0,type:"number"}}],v=a(53),y=a(367),C=a(58),w=a(189),S=a(372),k=a(451),T=a(463),M=a(490),P=a(373),E=a(381),z=a(486),D=a(491),U=a(500),B=a.n(U),R=a(190),W=a.n(R),q=a(578),A=a.n(q),L=a(493),F=function(e){var t=e.row,a=Object(w.a)(),n=a.logout,o=a.user,l=Object(s.useState)(),j=Object(i.a)(l,2),d=j[0],b=j[1],h=Object(s.useState)(!1),O=Object(i.a)(h,2),x=O[0],p=O[1],g=Object(s.useState)(!1),y=Object(i.a)(g,2),C=y[0],U=y[1],R=Object(s.useState)(!1),q=Object(i.a)(R,2),F=q[0],_=q[1],N=Object(s.useState)(""),H=Object(i.a)(N,2),I=H[0],K=H[1],V=Object(s.useState)(""),J=Object(i.a)(V,2),G=J[0],Q=J[1],X=function(e){e.preventDefault()},Y=function(){b(),K(),Q(),p(!1)},Z=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I===G){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Object(L.h)(d,I);case 6:(t=e.sent)&&200===t.status?(v.b.success("Change password success"),b(),K(),Q(),Y(),d===o.id&&(alert("Please login again!!!"),n())):(v.b.error("Something went wrong. Cannot change password"),Y(),b(),K(),Q());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{onClick:function(){return t.original.active?function(e,t,a){p(!0),b(e.original.id)}(t):""},children:[Object(f.jsx)(A.a,{color:"primary"}),Object(f.jsx)(u.a,{style:{marginLeft:"8px",color:"black"},textTransform:"none",children:"Change password"})]}),Object(f.jsxs)(k.a,{open:x,onClose:Y,id:"changePassword",maxHeight:!1,height:500,children:[Object(f.jsx)(T.a,{children:"Change Password"}),Object(f.jsxs)(M.a,{children:[Object(f.jsx)("br",{}),Object(f.jsx)(P.a,{item:!0,xs:12,children:Object(f.jsx)(E.a,{id:"outlined-adornment-password",type:C?"text":"password",variant:"outlined",label:"Password",value:I,onChange:function(e){return K(e.target.value)},InputProps:{endAdornment:Object(f.jsx)(z.a,{position:"end",children:Object(f.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:function(){U(!C)},onMouseDown:X,edge:"end",children:C?Object(f.jsx)(W.a,{}):Object(f.jsx)(B.a,{})})})}})}),Object(f.jsx)("br",{}),Object(f.jsx)(P.a,{item:!0,xs:12,children:Object(f.jsx)(E.a,{id:"outlined-adornment-password-2",type:F?"text":"password",variant:"outlined",label:"Input Password again",value:G,onChange:function(e){return Q(e.target.value)},error:I!==G,helperText:I!==G?"Passwords do not match":"",InputProps:{endAdornment:Object(f.jsx)(z.a,{position:"end",children:Object(f.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:function(){_(!F)},onMouseDown:X,edge:"end",children:F?Object(f.jsx)(W.a,{}):Object(f.jsx)(B.a,{})})})}})})]}),Object(f.jsxs)(D.a,{children:[Object(f.jsx)(S.a,{onClick:Y,color:"primary",children:"Cancel"}),Object(f.jsx)(S.a,{onClick:Z,color:"primary",children:"Change Password"})]})]})]})},_=a(492),N=a(467),H=function(e){var t=e.row,a=e.setUpdatetable,n=Object(s.useState)(),o=Object(i.a)(n,2),l=o[0],j=o[1],d=Object(s.useState)(!1),b=Object(i.a)(d,2),m=b[0],h=b[1],O=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)(l);case 2:200===e.sent.status?(a(!0),v.b.success("Delete user success"),x(),j()):(v.b.error("Something went wrong. Cannot delete user"),x(),j());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){h(!1)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{onClick:function(){return t.original.active?function(e){h(!0),j(e.original.id)}(t):""},children:[Object(f.jsx)(N.a,{color:"error"}),Object(f.jsx)(u.a,{style:{marginLeft:"8px",color:"black"},textTransform:"none",children:"Delete"})]}),Object(f.jsxs)(k.a,{open:m,onClose:x,id:"deleteDialog",children:[Object(f.jsx)(T.a,{children:"Delete confirmation"}),Object(f.jsx)(M.a,{children:Object(f.jsx)(_.a,{children:"Are you sure you want to delete this item?"})}),Object(f.jsxs)(D.a,{children:[Object(f.jsx)(S.a,{onClick:x,color:"primary",children:"Cancel"}),Object(f.jsx)(S.a,{onClick:O,color:"primary",children:"Delete"})]})]})]})},I=a(85),K=a.n(I),V=a(464),J=function(e){var t=e.paramsPageUser,a=e.totalPage,n=e.handleMoveToPrePage,r=e.handleMoveToNextPage;return Object(f.jsxs)(P.a,{container:!0,fullWidth:!0,children:[Object(f.jsx)(P.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"}}),Object(f.jsx)(P.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:Object(f.jsxs)("span",{children:[Object(f.jsx)(b.a,{title:"Previous page",children:Object(f.jsx)(m.a,{disabled:1===t.page,onClick:n,children:Object(f.jsx)(V.a,{})})}),"Page ",t.page," of ",a,Object(f.jsx)(b.a,{title:"Next page",children:Object(f.jsx)(m.a,{disabled:t.page===a,onClick:r,children:Object(f.jsx)(K.a,{})})})]})})]})},G=a(370),Q=a(485),X=a(475),Y=a(473),Z=a(502),$=["ROLE_ADMIN","ROLE_USER"],ee=["ROLE_USER"],te=function(e){var t=e.row,a=e.setUpdatetable,n=Object(s.useState)(!1),o=Object(i.a)(n,2),j=o[0],b=o[1],m=t.original.name,h=t.original.username,O=Object(s.useState)(t.original.company),x=Object(i.a)(O,2),p=x[0],g=x[1],y=Object(s.useState)(t.original.email),C=Object(i.a)(y,2),w=C[0],k=C[1],T=Object(s.useState)(t.original.contact),M=Object(i.a)(T,2),z=M[0],D=M[1],U=Object(s.useState)(t.original.rulename.length>1?$:ee),B=Object(i.a)(U,2),R=B[0],W=B[1],q=Object(s.useState)(t.original.rulename.length>1?$:ee),A=Object(i.a)(q,2),F=A[0],_=A[1],N=function(){b((function(e){return!e}))},H=function(e,t){switch(t){case"company":g(e.target.value);break;case"email":k(e.target.value);break;case"contact":D(e.target.value);break;case"rulename":_(e.target.value)}},I=function(){for(var e=!0,t={company:p,email:w,contact:z,rulename:F},a=["company","email","contact","rulename"],n=0;n<a.length;n++)if(!t[a[n]]){e=!1,b(!0),v.b.info("Missing required parameter: "+a[n]);break}return e},K=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var n,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I()){e.next=11;break}if((n={id:t.original.id,company:p,email:w,contact:z,rulename:F}).company!==t.original.company||n.email!==t.original.email||n.contact!==t.original.contact||n.rulename.length!==R.length){e.next=7;break}v.b.info("Nothing changes"),e.next=11;break;case 7:return e.next=9,Object(L.j)(n);case 9:(c=e.sent)&&500===c.statusCode?c.message.includes("JSON parse error")?v.b.error("Contact must be phone number"):v.b.error(c.message):(v.b.success("Change user data success"),a(!0),W(""),N());case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{onClick:t.original.active?function(){b((function(e){return!e}))}:"",children:[Object(f.jsx)(Z.a,{color:"primary"}),Object(f.jsx)(u.a,{style:{marginLeft:"8px",color:"black"},textTransform:"none",children:"Edit User Data"})]}),Object(f.jsx)(G.a,{open:j,onClose:N,children:Object(f.jsxs)(d.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400},children:[Object(f.jsxs)(u.a,{variant:"h6",component:"h2",gutterBottom:!0,children:["Edit user: ",m,"'s data"]}),Object(f.jsxs)(P.a,{container:!0,spacing:2,children:[Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{id:"name",label:"Name",disabled:!0,fullWidth:!0,margin:"normal",required:!0,value:m})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{id:"username",label:"Username",disabled:!0,fullWidth:!0,margin:"normal",required:!0,value:h})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{id:"company",label:"Company",fullWidth:!0,margin:"normal",required:!0,value:p,onChange:function(e){H(e,"company")}})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{id:"email",label:"Email",fullWidth:!0,margin:"normal",required:!0,value:w,onChange:function(e){H(e,"email")}})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{id:"contact",label:"Contact",fullWidth:!0,margin:"normal",type:"number",required:!0,value:z,onChange:function(e){H(e,"contact")}})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsxs)(Q.a,{fullWidth:!0,margin:"normal",required:!0,children:[Object(f.jsx)(X.a,{id:"rulename-label",children:"Role"}),Object(f.jsxs)(Y.a,{id:"rulename",value:F,onChange:function(e){H(e,"rulename")},children:[Object(f.jsx)(l.a,{value:$,children:"Admin"}),Object(f.jsx)(l.a,{value:ee,children:"User"})]})]})})]}),Object(f.jsxs)(d.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[Object(f.jsx)(S.a,{variant:"contained",onClick:N,children:"Cancel"}),Object(f.jsx)(S.a,{variant:"contained",type:"submit",onClick:K,children:"Save"})]})]})})]})},ae=a(461),ne=a(69),re=a.n(ne),ce=a(465),ie=a(28),se=Object(ie.a)(Object(f.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),"Circle"),oe=a(466),le=a(579),ue=a.n(le),je=["admin","user"],de=["user"],be=function(e){var t=e.setResettable,a=Object(s.useState)(!1),n=Object(i.a)(a,2),o=n[0],j=n[1],h=Object(s.useState)(!1),O=Object(i.a)(h,2),x=O[0],p=O[1],g=Object(s.useState)(""),y=Object(i.a)(g,2),C=y[0],w=y[1],k=Object(s.useState)(""),T=Object(i.a)(k,2),M=T[0],D=T[1],U=Object(s.useState)(""),R=Object(i.a)(U,2),q=R[0],A=R[1],F=Object(s.useState)(""),_=Object(i.a)(F,2),N=_[0],H=_[1],I=Object(s.useState)(""),K=Object(i.a)(I,2),V=K[0],J=K[1],Z=Object(s.useState)(""),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ae=Object(s.useState)(""),ne=Object(i.a)(ae,2),re=ne[0],ce=ne[1],ie=function(){j((function(e){return!e})),D(""),A(""),w(""),J(""),H(""),te(""),ce("")},se=function(e,t){if("rulename"===t)"admin"===e.target.value?ce(je):ce(de);else switch(t){case"name":w(e.target.value);break;case"username":D(e.target.value);break;case"password":A(e.target.value);break;case"company":H(e.target.value);break;case"email":J(e.target.value);break;case"contact":te(e.target.value)}},oe=function(){for(var e=!0,t={name:C,username:M,password:q,company:N,email:V,contact:ee,rulename:re},a=["name","username","password","company","email","contact","rulename"],n=0;n<a.length;n++)if(!t[a[n]]){e=!1,j(!0),v.b.info("Missing required parameter: "+a[n]);break}return e},le=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var a,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!oe()){e.next=7;break}return a={name:C,username:M,password:q,company:N,email:V,contact:ee,rulename:re},e.next=5,Object(L.f)(a);case 5:(n=e.sent)&&500===n.statusCode?n.message.includes("JSON parse error")?v.b.error("Contact must be phone number"):v.b.error(n.message):n&&200===n.status?(v.b.success("Create user success"),ie(),t(!0)):(v.b.error(n.message),ie());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{arrow:!0,placement:"top",title:"Add New User",children:Object(f.jsx)(m.a,{onClick:function(){j((function(e){return!e}))},children:Object(f.jsx)(ue.a,{color:"primary"})})}),Object(f.jsx)(G.a,{open:o,onClose:ie,children:Object(f.jsxs)(d.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400},children:[Object(f.jsx)(u.a,{variant:"h6",component:"h2",gutterBottom:!0,children:"Create a new User"}),Object(f.jsxs)(P.a,{container:!0,spacing:2,children:[Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{label:"Name",fullWidth:!0,margin:"normal",required:!0,onChange:function(e){se(e,"name")}})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{label:"Username",fullWidth:!0,margin:"normal",required:!0,onChange:function(e){se(e,"username")}})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{label:"Password",required:!0,fullWidth:!0,margin:"normal",type:x?"text":"password",value:q,onChange:function(e){se(e,"password")},InputProps:{endAdornment:Object(f.jsx)(z.a,{position:"end",children:Object(f.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:function(){p((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:x?Object(f.jsx)(W.a,{}):Object(f.jsx)(B.a,{})})})}})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{label:"Company",fullWidth:!0,margin:"normal",required:!0,onChange:function(e){se(e,"company")},onBlur:function(){N.endsWith("vnpt")||H(N+"vnpt")},value:N})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{label:"Email",fullWidth:!0,margin:"normal",required:!0,onChange:function(e){se(e,"email")},onBlur:function(){V.endsWith("@gmail.com")||J(V+"@gmail.com")},value:V})}),Object(f.jsx)(P.a,{item:!0,xs:6,children:Object(f.jsx)(E.a,{label:"Contact",fullWidth:!0,margin:"normal",type:"numeric",inputProps:{pattern:"[0-9]*",shrink:!1},required:!0,onChange:function(e){se(e,"contact")},onBlur:function(){ee.endsWith("123456")||te(ee+"123456")},value:ee})}),Object(f.jsx)(P.a,{item:!0,xs:12,children:Object(f.jsxs)(Q.a,{fullWidth:!0,margin:"normal",required:!0,children:[Object(f.jsx)(X.a,{id:"rulename-label",children:"Role"}),Object(f.jsxs)(Y.a,{id:"rulename",onChange:function(e){se(e,"rulename")},children:[Object(f.jsx)(l.a,{value:"admin",children:"Admin"}),Object(f.jsx)(l.a,{value:"user",children:"User"})]})]})})]}),Object(f.jsxs)(d.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[Object(f.jsx)(S.a,{variant:"contained",onClick:ie,children:"Cancel"}),Object(f.jsx)(S.a,{variant:"contained",type:"submit",onClick:le,children:"Save"})]})]})})]})},me=function(e){var t=e.searchTerm,a=e.setSearchTerm,n=e.setResettable,r=e.color,c=e.handleChangeStatus,i=e.handleResetTable,s=e.handleSearchMode,o=0===t.trim().length;return Object(f.jsxs)(P.a,{container:!0,fullWidth:!0,children:[Object(f.jsxs)(P.a,{item:!0,lg:8,md:8,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:[Object(f.jsx)(E.a,{id:"search",label:"Search",variant:"outlined",size:"small",value:t,onChange:function(e){a(e.target.value)},edge:"end",fullWidth:!0,InputProps:{endAdornment:Object(f.jsxs)(z.a,{children:[Object(f.jsx)(ae.a,{sx:{height:24,m:.5},orientation:"vertical"}),Object(f.jsx)(b.a,{arrow:!0,placement:"top",title:"Search",children:Object(f.jsx)(m.a,{type:"button","aria-label":"search",helperText:"Search",onClick:function(){o||s()},children:Object(f.jsx)(re.a,{color:"primary"})})})]})}}),Object(f.jsx)(b.a,{arrow:!0,placement:"top",title:"Close Search",children:Object(f.jsx)(m.a,{type:"button",onClick:function(){a(""),i()},disabled:o,children:Object(f.jsx)(ce.a,{color:"error"})})})]}),Object(f.jsxs)(P.a,{item:!0,lg:4,md:4,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"},children:[Object(f.jsx)(ae.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(f.jsx)(b.a,{arrow:!0,placement:"top",title:"success"===r?"Enable User":"error"===r?"Disabled User":"All Users",children:Object(f.jsx)(m.a,{color:"primary","aria-label":"clear",onClick:c,disabled:!o,children:Object(f.jsx)(se,{color:r})})}),Object(f.jsx)(b.a,{arrow:!0,placement:"top",title:"Reset table to default",children:Object(f.jsx)(m.a,{color:"primary","aria-label":"clear",onClick:i,children:Object(f.jsx)(oe.a,{})})}),Object(f.jsx)(be,{setResettable:n})]})]})},he=a(100),Oe=a.n(he),xe=function(e){var t=e.row,a=Object(s.useState)([]),n=Object(i.a)(a,2),o=n[0],l=n[1],b=Object(s.useState)(!1),m=Object(i.a)(b,2),h=m[0],O=m[1],x=function(){O((function(e){return!e}))},p=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(t.original.id);case 2:200===(a=e.sent).status&&l(a.data.listResult);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){!0===h&&p()}),[h]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{onClick:function(){O((function(e){return!e}))},children:[Object(f.jsx)(Oe.a,{color:"primary"}),Object(f.jsx)(u.a,{style:{marginLeft:"8px",color:"black"},textTransform:"none",children:"User's List Devices"})]}),Object(f.jsx)(G.a,{open:h,onClose:x,children:Object(f.jsxs)(d.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,minWidth:400},children:[Object(f.jsxs)(u.a,{variant:"h6",component:"h2",gutterBottom:!0,children:[t.original.name,"'s List Devices"]}),Object(f.jsx)(P.a,{spacing:2,children:Object(f.jsx)(j.a,{data:o,columns:[{accessorKey:"name",header:"Name",enableEditing:!1,enableSorting:!1},{accessorKey:"location",header:"Location"},{accessorKey:"description",header:"Description",enableEditing:!1}],enableSorting:!1,enableBottomToolbar:!1,enableTopToolbar:!1,enableColumnActions:!1,enableHiding:!1,enableColumnFilterModes:!1,enableFilters:!1,enableDensityToggle:!1,initialState:{density:"compact"}})}),Object(f.jsx)("br",{}),Object(f.jsx)(d.a,{sx:{textAlign:"right"},children:Object(f.jsx)(S.a,{variant:"contained",onClick:x,children:"Cancel"})})]})})]})},pe=a(59),fe=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],d=t[1],b=Object(s.useState)({page:1,limit:10,active:1,search:null}),m=Object(i.a)(b,2),h=m[0],O=m[1],x=Object(s.useState)(),p=Object(i.a)(x,2),w=p[0],S=p[1],k=Object(s.useState)(!0),T=Object(i.a)(k,2),M=T[0],P=T[1],E=Object(s.useState)(!1),z=Object(i.a)(E,2),D=z[0],U=z[1],B=Object(s.useState)(""),R=Object(i.a)(B,2),W=R[0],q=R[1],A=Object(s.useState)("success"),_=Object(i.a)(A,2),N=_[0],I=_[1],K=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var t,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.b)(h);case 2:200===(t=e.sent).status&&(null===t.data.totalElement&&(null!==W?v.b.error("No element matchs"):v.b.error("Nothing to show")),a=t.data.listResult,d(a),S(t.data.totalPage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){h.page<w&&(O({limit:h.limit,page:h.page+1}),P(!0))},G=function(){h.page>1&&(O({limit:h.limit,page:h.page-1}),P(!0))},Q=function(){"success"===N&&(I("error"),O(Object(n.a)(Object(n.a)({},h),{},{active:0})),P(!0)),"error"===N&&(I("disabled"),O(Object(n.a)(Object(n.a)({},h),{},{active:null})),P(!0)),"disabled"===N&&(I("success"),O(Object(n.a)(Object(n.a)({},h),{},{active:1})),P(!0))},X=function(){U(!0),q(""),I("success")},Y=function(){O(Object(n.a)(Object(n.a)({},h),{},{search:W})),P(!0)};return Object(s.useEffect)((function(){D?(O({page:1,limit:10,active:1,search:null}),U(!1),P(!0)):M&&(K(),P(!1))}),[D,M]),Object(f.jsx)(o.a,{children:Object(f.jsx)(y.a,{theme:C.a,children:Object(f.jsx)(j.a,{columns:g,data:a,options:{actionsColumnIndex:-1},enableExpanding:!0,enableEditing:!1,enableBottomToolbar:!0,enableGlobalFilter:!1,enableColumnFilters:!1,enableColumnActions:!1,enablePagination:!1,enableSorting:!1,expanded:!0,muiTableBodyRowProps:{hover:!1},defaultColumn:{maxSize:120,minSize:10,size:100},initialState:{density:"compact",columnVisibility:{id:!1},columnOrder:["id","role-state","name","username","email","company","contact","mrt-row-expand","mrt-row-actions"]},renderRowActionMenuItems:function(e){var t=e.row;return[Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{flexBasis:"25%",children:Object(f.jsx)(te,{row:t,setUpdatetable:P})}),Object(f.jsx)(l.a,{flexBasis:"25%",children:Object(f.jsx)(F,{row:t})}),Object(f.jsx)(l.a,{flexBasis:"25%",children:Object(f.jsx)(H,{row:t,setUpdatetable:P})}),Object(f.jsx)(l.a,{flexBasis:"25%",children:Object(f.jsx)(xe,{row:t})})]})]},renderDetailPanel:function(e){var t=e.row;return Object(f.jsxs)(l.a,{sx:{display:"grid",margin:"auto",gridTemplateColumns:"1fr 1fr",width:"100%",justifyContent:"center",alignItems:"center"},children:[Object(f.jsxs)(u.a,{fontSize:"15px",children:["Created Date: ",Object(pe.a)(t.original.createdDate)]}),Object(f.jsxs)(u.a,{fontSize:"15px",children:["Created By: ",t.original.createdBy]}),Object(f.jsxs)(u.a,{fontSize:"15px",children:["Modified Date: ",Object(pe.a)(t.original.modifiedDate)]}),Object(f.jsxs)(u.a,{fontSize:"15px",children:["Modified By: ",t.original.modifiedBy]})]})},renderBottomToolbarCustomActions:function(){return Object(f.jsx)(J,{paramsPageUser:h,totalPage:w,handleMoveToPrePage:G,handleMoveToNextPage:V})},renderTopToolbarCustomActions:function(){return Object(f.jsx)(me,{searchTerm:W,color:N,setSearchTerm:q,setResettable:U,handleSearchMode:Y,handleChangeStatus:Q,handleResetTable:X})}})})})},ge=a(70),ve=a(275),ye=a(87);t.default=function(){return Object(f.jsxs)(ye.a,{children:[Object(f.jsx)(ge.a,{routeSegments:[{name:"User Managers",path:"/tms-admin/user-management"}]}),Object(f.jsx)(ve.a,{spacing:3,children:Object(f.jsx)(fe,{})})]})}}}]);
//# sourceMappingURL=9.13f49867.chunk.js.map