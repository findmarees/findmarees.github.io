(this["webpackJsonpnyx-app"]=this["webpackJsonpnyx-app"]||[]).push([[0],{43:function(e,t,a){e.exports=a(74)},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",(function(){return p})),a.d(n,"deleteTodo",(function(){return E})),a.d(n,"modeAction",(function(){return v})),a.d(n,"returnErrors",(function(){return g})),a.d(n,"clearErrors",(function(){return h})),a.d(n,"login",(function(){return y})),a.d(n,"register",(function(){return b})),a.d(n,"logout",(function(){return O})),a.d(n,"updateTodo",(function(){return j})),a.d(n,"addTodo",(function(){return S})),a.d(n,"addCat",(function(){return x})),a.d(n,"getCat",(function(){return C})),a.d(n,"getTodo",(function(){return _})),a.d(n,"deleteCat",(function(){return k})),a.d(n,"chosen",(function(){return R})),a.d(n,"tokenConfig",(function(){return T}));var r=a(0),c=a.n(r),o=a(20),l=a.n(o),s=a(5),i=a(4),u=a.n(i),d=a(12),m=a(13),f=a.n(m),p=function(){return function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"USER_LOADING"}),e.prev=1,e.next=4,f.a.get("https://project-nyx-todo.herokuapp.com/api/user",T(a));case 4:(n=e.sent)&&t({type:"USER_LOADED",payload:n.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(g(e.t0.response.data,e.t0.response.status)),t({type:"AUTH_ERROR"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,f.a.post("https://project-nyx-todo.herokuapp.com/api/delete_todo",e,T(n));case 4:t.sent&&a(g("Successful","200","DELETE_TODO")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(g("Failed To delete",500));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()},v=function(e){return function(t){t({type:"MODE",payload:e})}},g=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"GET_ERRORS",payload:{msg:e,status:t,id:a}}},h=function(){return{type:"CLEAR_ERRORS"}},y=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,f.a.post("https://project-nyx-todo.herokuapp.com/api/login",e);case 4:n=t.sent,console.log(n),n&&(a(g("Login Successful","200","LOGIN_SUCCESS")),a({type:"LOGIN_SUCCESS",payload:n.data})),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a(g(t.t0.toString(),"500","REGISTER_FAIL")),a({type:"REGISTER_FAIL"});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={header:{"Content-Type":"application/json"}},t.prev=1,t.next=4,f.a.post("https://project-nyx-todo.herokuapp.com/api/new_user",e,n);case 4:(r=t.sent)&&(a(g("Registration Successful","200","REGISTER_SUCCESS")),a({type:"REGISTER_SUCCESS",payload:r.data})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a(g(t.t0.response.data,t.t0.response.status,"REGISTER_FAIL")),a({type:"REGISTER_FAIL"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){return{type:"LOGOG_OUT_SUCCESS"}},j=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,f.a.post("https://project-nyx-todo.herokuapp.com/api/update_todo",e,T(n));case 4:t.sent&&a(g("Successful","200","UPDATE_TODO")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(g(t.t0.response.data,t.t0.response.status));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,f.a.post("https://project-nyx-todo.herokuapp.com/api/new_todo",e,T(n));case 4:t.sent&&a(g("Successful","200","add_todo")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(g(t.t0.response.data,t.t0.response.status));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,f.a.post("https://project-nyx-todo.herokuapp.com/api/new_cat",e,T(n));case 4:t.sent&&a(g("Successful","200","ADD_CATEGORY")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(g(t.t0.response.data,t.t0.response.status));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,f.a.get("https://project-nyx-todo.herokuapp.com/api/get_cat/".concat(e));case 4:(n=t.sent)&&a({type:"GET_CATEGORY",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(g(t.t0.response.data,t.t0.response.status));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,f.a.get("https://project-nyx-todo.herokuapp.com/api/get_todo/".concat(e));case 4:(n=t.sent)&&a({type:"get_todo",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(g(t.t0.toString(),500));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(d.a)(u.a.mark((function t(a,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("https://project-nyx-todo.herokuapp.com/api/new_cat",e,T(n));case 3:(r=t.sent)&&a({type:"ADD_CATEGORY",payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(g(t.t0.response.data,t.t0.response.status));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}()},R=function(e){return function(t){t({type:"CHOSEN",payload:e})}},T=function(e){var t=e().auth.token,a={headers:{"Content-type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},A=a(14),w=a(3),I=a(16),L=a(1),G=a.n(L);var D=Object(s.b)((function(e){return console.log(e),{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),n)((function(e){var t=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useRef)(),o=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current}(e),l=Object(w.f)();return Object(r.useEffect)((function(){n.current?(e.error!==o.error&&("LOGIN_FAIL"===e.error.id?G.a.toast({html:"".concat(e.error.msg.msg)}):"LOGIN_SUCCESS"===e.error.id&&(G.a.toast({html:"".concat(e.error.msg)}),l.push("/dashboard"))),console.log(o),console.log(e)):n.current=!0})),c.a.createElement("div",{class:"row"},c.a.createElement("form",{class:"col"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"input-field col col-sm-12 col-lg-12 col-xl-12 col-md-12"},c.a.createElement("i",{class:"material-icons prefix"},"account_circle"),c.a.createElement("input",{ref:t,id:"icon_prefix",type:"text",class:"validate"}),c.a.createElement("label",{for:"icon_prefix"},"Username"))),c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"input-field col col-sm-12 col-lg-12 col-xl-12 col-md-12"},c.a.createElement("i",{class:"material-icons prefix"},"security"),c.a.createElement("input",{ref:a,id:"pass",type:"password",class:"validate"}),c.a.createElement("label",{for:"pass"},"Password"))),c.a.createElement("div",{onClick:function(){return function(){if(t.current.value.trim()&&a.current.value.trim()){var n={username:"".concat(t.current.value.trim()),password:"".concat(a.current.value.trim())};console.log(n),e.login(n)}else G.a.toast({html:"Please Fill All Fields"})}()},class:"btn green darken-2"},"Login"),c.a.createElement("div",{onClick:function(){return e.myKey(!1)},className:"mt-3 blue-text my-link btn-link row justify-content-center"},"Register?")))}));a(71);var N=Object(s.b)((function(e){return console.log(e),{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),n)((function(e){var t=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useRef)(),o=Object(r.useRef)(),l=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current}(e),s=Object(w.f)();return Object(r.useEffect)((function(){var t;o.current?(e.error!==l.error&&("REGISTER_FAIL"===e.error.id?G.a.toast({html:"".concat(e.error.msg.msg)}):(G.a.toast({html:"".concat(e.error.msg)}),t="/dashboard",s.push(t))),console.log(l),console.log(e)):o.current=!0})),c.a.createElement("div",{class:"row"},c.a.createElement("form",{class:"col"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"input-field col col-sm-12 col-lg-12 col-xl-12 col-md-12"},c.a.createElement("i",{class:"material-icons prefix"},"account_circle"),c.a.createElement("input",{ref:t,id:"icon_prefix",type:"text",class:"validate"}),c.a.createElement("label",{for:"icon_prefix"},"Username"))),c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"input-field col col-sm-12 col-lg-12 col-xl-12 col-md-12"},c.a.createElement("i",{class:"material-icons prefix"},"email"),c.a.createElement("input",{ref:a,id:"email",type:"email",class:"validate"}),c.a.createElement("label",{for:"email"},"Email"),c.a.createElement("span",{class:"helper-text","data-error":"wrong","data-success":"right"}))),c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"input-field col col-sm-12 col-lg-12 col-xl-12 col-md-12"},c.a.createElement("i",{class:"material-icons prefix"},"security"),c.a.createElement("input",{ref:n,id:"icon_telephone",type:"password",class:"validate"}),c.a.createElement("label",{for:"icon_telephone"},"Password"))),c.a.createElement("div",{onClick:function(){return function(){if(t.current.value.trim()&&a.current.value.trim()&&n.current.value.trim()){var r={username:"".concat(t.current.value.trim()),mail:"".concat(a.current.value.trim()),password:"".concat(n.current.value.trim())};console.log(r),e.register(r)}else G.a.toast({html:"Please Fill All Fields"})}()},class:"btn green darken-2"},"Register"),c.a.createElement("div",{onClick:function(){return e.myKey(!0)},className:"mt-3 blue-text my-link row justify-content-center"},"Login?")))})),U=a(23);var F=Object(s.b)((function(e){return{auth:e.auth,error:e.error,list:e.list}}),n)((function(e){var t=Object(r.useRef)(),a=Object(r.useRef)(),n=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current}(e),o=function(){var e=document.getElementById("modal1");G.a.Modal.init(e,{dismissible:!0}).destroy()};Object(r.useEffect)((function(){a.current?(e.error!==n.error&&"ADD_CATEGORY"===e.error.id&&"Successful"===e.error.msg&&(G.a.toast({html:"Category Added"}),o(),e.getCat("".concat(e.auth.user.id||e.auth.user._id))),console.log(n),console.log(e)):a.current=!0}));var l=function(){if(""===t.current.value.trim())return G.a.toast({html:"Please Enter Category Name"});if(!e.auth.isAuthenticated)return G.a.toast({html:"Session Token Expired Please login again"});try{e.addCat({user:"".concat(e.auth.user.id||e.auth.user._id),category:[].concat(Object(U.a)(e.list.category.resp.category),[t.current.value.trim()])})}catch(a){e.addCat({user:"".concat(e.auth.user.id||e.auth.user._id),category:[t.current.value.trim()]})}};return c.a.createElement("div",{class:"card col col-md-12 col-lg-12 col-xl-12"},c.a.createElement("div",{id:"modal6",class:"modal"},c.a.createElement("div",{class:"modal-content"},c.a.createElement("h4",null,"Add Category"),c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"input-field col s12"},c.a.createElement("input",{ref:t,id:"cat",type:"text"}),c.a.createElement("label",{for:"cat"},"Category Name"))),c.a.createElement("div",{class:"d-flex justify-content-around"},c.a.createElement("div",{class:"modal-close btn bg-danger",onClick:function(){return o()}},"Cancel"),c.a.createElement("div",{class:"modal-close btn bg-success",onClick:function(){return l()}},"Add")))),c.a.createElement("div",{class:"card-title"},"Categories"),c.a.createElement("div",{class:"collection"},c.a.createElement("a",{onClick:function(){return function(){t.current.value="";var e=document.getElementById("modal6");G.a.Modal.init(e,{dismissible:!1}).open()}()},class:"collection-item"},c.a.createElement("div",{class:"center"},"Add New",c.a.createElement("a",{class:"secondary-content"},c.a.createElement("i",{class:"material-icons"},"add")))),function(){console.log(e.list.category.resp);try{return e.list.category.resp.category.map((function(t){return c.a.createElement("a",{onClick:function(){return e.chosen(t)},class:"collection-item"},t)}))}catch(t){}}()))}));var P=Object(s.b)((function(e){return{auth:e.auth}}),n)((function(e){var t=Object(w.f)(),a=null;return Object(r.useEffect)((function(){console.log(e);var t=document.querySelector(".sidenav");a=G.a.Sidenav.init(t)}),[]),c.a.createElement("div",null,c.a.createElement("ul",{id:"slide-out",className:"sidenav"},c.a.createElement("li",null,c.a.createElement("div",{className:"user-view"},c.a.createElement("div",{className:"background green darken-4"},c.a.createElement("a",{onClick:function(){return function(){if(a)a.close();else{var e=document.querySelector(".sidenav");(a=G.a.Sidenav.init(e)).close()}}()}},c.a.createElement("i",{style:{float:"right",padding:"15px"},class:"material-icons icon-white"},"close"))),c.a.createElement("a",null,c.a.createElement("span",{style:{fontSize:"large"},className:"white-text name"},"NYX TODO APP")),c.a.createElement("a",null,c.a.createElement("span",{className:"white-text email"},"".concat(e.auth.user?e.auth.user.mail:"Session Ended"))))),c.a.createElement(F,null)),c.a.createElement("nav",{class:"green darken-4"},c.a.createElement("div",{class:"nav-wrapper container"},c.a.createElement("div",{class:"show-on-small"},c.a.createElement("a",{onClick:function(){return function(){if(a)a.open();else{var e=document.querySelector(".sidenav");(a=G.a.Sidenav.init(e)).open()}}()},style:{padding:"0 35px",float:"left"},class:"brand-logo left"},c.a.createElement("i",{class:"material-icons "},"menu"))),c.a.createElement("a",{class:"brand-logo"},"Todo"),"home"===e.mode?c.a.createElement("div",null):c.a.createElement("ul",{id:"nav-mobile",class:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement("a",null,"".concat(e.auth.user?e.auth.user.mail:"Session Ended"))),c.a.createElement("li",null,c.a.createElement("a",{onClick:function(){return e.logout(),void t.push("/")}},"Logout"))))))}));var M=function(){var e=Object(r.useState)(!0),t=Object(I.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",null,c.a.createElement(P,{mode:"home"}),c.a.createElement("div",{class:"row mt-2 p-5 justify-content-center"},c.a.createElement("div",{class:"center green lighten-5 col-sm-12 col-lg-6 col-xl-4 col-md-8 mt-5 card-panel"},!0===a?c.a.createElement(D,{myKey:n}):c.a.createElement(N,{myKey:n}))))};var B=Object(s.b)((function(e){return{auth:e.auth,error:e.error,list:e.list}}),n)((function(e){var t=Object(r.useRef)(),a=Object(r.useRef)(),n=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current}(e),o=function(){var e=document.getElementById("modal1");G.a.Modal.init(e,{dismissible:!0}).destroy()};Object(r.useEffect)((function(){a.current?(e.error!==n.error&&"ADD_CATEGORY"===e.error.id&&"Successful"===e.error.msg&&(G.a.toast({html:"Category Added"}),o(),e.getCat("".concat(e.auth.user.id||e.auth.user._id))),console.log(n),console.log(e)):a.current=!0}));var l=function(){if(""===t.current.value.trim())return G.a.toast({html:"Please Enter Category Name"});if(!e.auth.isAuthenticated)return G.a.toast({html:"Session Token Expired Please login again"});try{e.addCat({user:"".concat(e.auth.user.id||e.auth.user._id),category:[].concat(Object(U.a)(e.list.category.resp.category),[t.current.value.trim()])})}catch(a){e.addCat({user:"".concat(e.auth.user.id||e.auth.user._id),category:[t.current.value.trim()]})}};return c.a.createElement("div",{class:"card col col-md-12 col-lg-12 col-xl-12"},c.a.createElement("div",{id:"modal1",class:"modal"},c.a.createElement("div",{class:"modal-content"},c.a.createElement("h4",null,"Add Category"),c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"input-field col s12"},c.a.createElement("input",{ref:t,id:"cat",type:"text"}),c.a.createElement("label",{for:"cat"},"Category Name"))),c.a.createElement("div",{class:"d-flex justify-content-around"},c.a.createElement("div",{class:"modal-close btn bg-danger",onClick:function(){return o()}},"Cancel"),c.a.createElement("div",{class:"modal-close btn bg-success",onClick:function(){return l()}},"Add")))),c.a.createElement("div",{class:"card-title"},"Categories"),c.a.createElement("div",{class:"collection"},c.a.createElement("a",{onClick:function(){return function(){t.current.value="";var e=document.getElementById("modal1");G.a.Modal.init(e,{dismissible:!1}).open()}()},class:"collection-item"},c.a.createElement("div",{class:"center"},"Add New",c.a.createElement("a",{class:"secondary-content"},c.a.createElement("i",{class:"material-icons"},"add")))),function(){console.log(e.list.category.resp);try{return e.list.category.resp.category.map((function(t){return c.a.createElement("a",{onClick:function(){return e.chosen(t)},class:"collection-item"},t)}))}catch(t){}}()))}));var Y=Object(s.b)((function(e){return{auth:e.auth,error:e.error,list:e.list}}),n)((function(e){var t=Object(r.useState)(!0),a=Object(I.a)(t,2),n=(a[0],a[1],Object(w.f)());return c.a.createElement("form",{action:"#"},(console.log(e.myTodo.status),c.a.createElement("p",{onClick:function(){return t=e.myTodo,a=e.id,void(e.auth.isAuthenticated?(e.updateTodo({id:a,todo:t}),e.getTodo("".concat(e.auth.user.id||e.auth.user._id))):(G.a.toast({html:"Session Timed Out Login Again"}),e.logout(),n.push("/")));var t,a}},c.a.createElement("label",{class:"row"},e.myTodo.status?c.a.createElement("i",{class:"green lighten-4 small material-icons"},"check"):c.a.createElement("i",{class:"small material-icons"},"crop_din"),c.a.createElement("span",{class:"ml-3 ".concat(e.myTodo.status?"done-todo":"undone-todo")},e.myTodo.item)))))}));var H=Object(s.b)((function(e){return{auth:e.auth,error:e.error,list:e.list}}),n)((function(e){var t=Object(w.f)(),a=Object(r.useRef)(),n=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current}(e);Object(r.useEffect)((function(){a.current?(e.error!==n.error&&("add_todo"===e.error.id&&"Successful"===e.error.msg&&"update"===e.list.mode?(e.getTodo("".concat(e.auth.user.id||e.auth.user._id)),G.a.toast({html:"Todo Updated"})):"DELETE_TODO"===e.error.id&&"Successful"===e.error.msg&&"delete"===e.list.mode&&(e.getTodo("".concat(e.auth.user.id||e.auth.user._id)),G.a.toast({html:"Todo Deleted"}))),console.log(n),console.log(e)):a.current=!0}));var o=Object(r.useState)(),l=Object(I.a)(o,2),s=l[0],i=l[1],u=Object(r.useRef)(),d=Object(r.useRef)();return Object(r.useEffect)((function(){try{console.log(e.list),void 0===e.list.chosen&&console.log(e.list),e.chosen(e.list.category.resp.category[0])}catch(t){console.log(t.toString()),e.chosen("Add Some Category")}}),[e.list.category.resp]),console.log(e.list.chosen),c.a.createElement("div",{style:{float:"right"},class:"card col col-md-12 col-lg-12 col-xl-12"},"Add Some Category"!==e.list.chosen?c.a.createElement("div",{class:"card-title"},e.list.chosen):c.a.createElement("div",{class:"jumbotron"},c.a.createElement("h1",{class:"display-4"},"Hello!"),c.a.createElement("p",{class:"lead"},"Usage:Add Category then add todo inside each category"),c.a.createElement("p",null,"Token Expires in 30 minutes.")),function(){var t=[],a=[],n=!1;t=e.list.todos.resp;var r=e.list.chosen;console.log(e.list);try{return t.map((function(e){e.category===r&&(n=!0)})),n?t.map((function(t){if(console.log(t),t.category===r)return a=t.todos,console.log(a),c.a.createElement("div",{class:"row m-2"},c.a.createElement("div",{class:"col s12 m6"},c.a.createElement("div",{class:"card green lighten-5"},c.a.createElement("div",{class:"card-content"},c.a.createElement("h4",{style:{padding:0,margin:0},class:"green-text"},t.title),c.a.createElement("div",{class:"pr-4 pl-4 mt-2"},function(e,t){return console.log(e),e.length>0?e.map((function(e){return console.log(e),c.a.createElement(Y,{myTodo:e,id:t})})):c.a.createElement("h5",null,"Add some todo")}(a,t._id))),c.a.createElement("div",{class:"right-align"},c.a.createElement("div",{onClick:function(){return function(e){i(e),console.log(d);var t="",a=22;e.todos.map((function(e){e.status||(t+="".concat(e.item,"\n"),a+=22)})),d.current.style.height="".concat(a,"px"),u.current.value="".concat(e.title),d.current.value=t;var n=document.getElementById("modal3");G.a.Modal.init(n,{dismissible:!1}).open()}(t)},class:"btn m-1"},"Edit"),c.a.createElement("div",{onClick:function(){e.modeAction("delete"),e.deleteTodo(t)},class:"btn m-1"},"Delete")))))})):c.a.createElement("h5",null,"Add some todo")}catch(o){return c.a.createElement("h5",null,"Add some todo")}}(),c.a.createElement("div",{id:"modal3",class:"modal"},c.a.createElement("div",{class:"modal-content"},c.a.createElement("h4",null,"Add Todo"),c.a.createElement("div",{class:"row col col-sm-12 col-md-12 col-lg-12 col-xl-12"},c.a.createElement("div",{class:"input-field col col-sm-12 col-md-12 col-lg-12 col-xl-12"},c.a.createElement("input",{ref:u,id:"cat",type:"text"}),c.a.createElement("label",{for:"cat"},"Todo Title"))),c.a.createElement("div",{class:"row col col-sm-12 col-md-12 col-lg-12 col-xl-12"},c.a.createElement("div",{class:"input-field col col-sm-12 col-md-12 col-lg-12 col-xl-12"},c.a.createElement("textarea",{ref:d,id:"textarea1",class:"materialize-textarea"}),c.a.createElement("label",{for:"textarea1"},"What do you want to todo?"))),c.a.createElement("div",{class:"d-flex justify-content-around"},c.a.createElement("div",{class:"modal-close btn bg-danger",onClick:function(){return function(){var e=document.getElementById("modal1");G.a.Modal.init(e,{dismissible:!0}).destroy()}()}},"Cancel"),c.a.createElement("div",{class:"modal-close btn bg-success",onClick:function(){return function(){if(""===u.current.value.trim()||""===d.current.value.trim())return G.a.toast({html:"Please Enter Category Name"});if(e.auth.isAuthenticated){var a=d.current.value.split("\n");console.log(a);var n=[];a.map((function(e){""!==e.trim()&&n.push({item:e,status:"false"})}));var r={category:e.list.chosen,title:u.current.value.trim(),todos:n,user:"".concat(e.auth.user.id||e.auth.user._id)};console.log(r),e.modeAction("update"),e.addTodo(r),e.deleteTodo(s)}else G.a.toast({html:"Session Timed Out Login Again"}),e.logout(),t.push("/")}()}},"Add")))))}));var q=Object(s.b)((function(e){return{auth:e.auth,error:e.error,list:e.list}}),n)((function(e){var t=Object(w.f)(),a=Object(r.useState)(!0),n=Object(I.a)(a,2),o=(n[0],n[1],Object(r.useRef)()),l=Object(r.useRef)(),s=Object(r.useRef)(),i=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current}(e),u=function(){var e=document.getElementById("modal1");G.a.Modal.init(e,{dismissible:!0}).destroy()};return Object(r.useEffect)((function(){s.current?(e.error!==i.error&&"add_todo"===e.error.id&&"Successful"===e.error.msg&&"add"===e.list.mode&&(G.a.toast({html:"Todo Added"}),u(),e.getTodo("".concat(e.auth.user.id||e.auth.user._id))),console.log(i),console.log(e)):s.current=!0})),Object(r.useEffect)((function(){if(e.auth.user)try{console.log(e.auth.user.id),console.log(e.auth.user._id),e.getCat("".concat(e.auth.user.id||e.auth.user._id)),e.getTodo("".concat(e.auth.user.id||e.auth.user._id)),console.log(e.auth.user)}catch(t){console.log(e.auth.user)}}),[e.auth.user]),c.a.createElement("div",{class:"col col-sm-12"},c.a.createElement("div",{id:"modal2",class:"modal"},c.a.createElement("div",{class:"modal-content"},c.a.createElement("h4",null,"Add Todo"),c.a.createElement("div",{class:"row col col-sm-12 col-md-12 col-lg-12 col-xl-12"},c.a.createElement("div",{class:"input-field col col-sm-12 col-md-12 col-lg-12 col-xl-12"},c.a.createElement("input",{ref:o,id:"cat",type:"text"}),c.a.createElement("label",{for:"cat"},"Todo Title"))),c.a.createElement("div",{class:"row col col-sm-12 col-md-12 col-lg-12 col-xl-12"},c.a.createElement("div",{class:"input-field col col-sm-12 col-md-12 col-lg-12 col-xl-12"},c.a.createElement("textarea",{ref:l,id:"textarea1",class:"materialize-textarea"}),c.a.createElement("label",{for:"textarea1"},"What do you want to todo?"))),c.a.createElement("div",{class:"d-flex justify-content-around"},c.a.createElement("div",{class:"modal-close btn bg-danger",onClick:function(){return u()}},"Cancel"),c.a.createElement("div",{class:"modal-close btn bg-success",onClick:function(){return function(){if(""===o.current.value.trim()||""===l.current.value.trim())return G.a.toast({html:"Please Enter Category Name"});if(e.auth.isAuthenticated){var a=l.current.value.split("\n");console.log(a);var n=[];a.map((function(e){n.push({item:e,status:"false"})}));var r={category:e.list.chosen,title:o.current.value.trim(),todos:n,user:"".concat(e.auth.user.id||e.auth.user._id)};console.log(r),e.modeAction("add"),e.addTodo(r)}else G.a.toast({html:"Session Timed Out Login Again"}),e.logout(),t.push("/")}()}},"Add")))),c.a.createElement(P,{mode:"dashboard"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{class:"hide-on-small-only col col-md-4 col-lg-3 col-xl-2"},c.a.createElement(B,null)),c.a.createElement("div",{class:"hide-on-small-only my-side-meu col col-md-4 col-lg-3 col-xl-2"},c.a.createElement(F,null)),c.a.createElement("div",{class:"col col-sm-12 col-md-8 col-lg-9 col-xl-10"},c.a.createElement(H,null)),c.a.createElement("div",{onClick:function(){return function(){l.current.style.height="44px",o.current.value="",l.current.value="";var e=document.getElementById("modal2");G.a.Modal.init(e,{dismissible:!1}).open()}()},class:"fixed-action-btn"},c.a.createElement("a",{class:"btn-floating btn-large green darken-4"},c.a.createElement("i",{class:"large material-icons"},"add")))))}));var J=Object(s.b)((function(e){}),n)((function(e){return Object(r.useEffect)((function(){e.fetchUser()}),[]),c.a.createElement(A.a,null,c.a.createElement(w.c,null,c.a.createElement(w.a,{exact:!0,path:"/"},c.a.createElement(M,null)),c.a.createElement(w.a,{exact:!0,path:"/dashboard"},c.a.createElement(q,null))))})),K=a(40),z=a(29),W=a(15),X=a(6),Q=Object(W.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!0});case"USER_LOADED":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!1,user:t.payload,isAuthenticated:!0});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(X.a)(Object(X.a)(Object(X.a)({},e),t.payload),{},{isLoading:!1,isAuthenticated:!0});case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOG_OUT_SUCCESS":case"REGISTER_FAIL":return localStorage.removeItem("token"),Object(X.a)(Object(X.a)({},e),{},{token:null,isAuthenticated:!1,isLoading:!1,user:null});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{msg:{},status:null,id:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case"LOGOG_OUT_SUCCESS":case"CLEAR_ERRORS":return{msg:{},status:null,id:null};default:return e}},list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{category:[],todos:[],mode:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORY":return Object(X.a)(Object(X.a)({},e),{},{category:t.payload});case"CHOSEN":return Object(X.a)(Object(X.a)({},e),{},{chosen:t.payload});case"get_todo":return Object(X.a)(Object(X.a)({},e),{},{todos:t.payload});case"LOGOG_OUT_SUCCESS":return{category:[],todos:[],mode:""};case"MODE":return Object(X.a)(Object(X.a)({},e),{},{mode:t.payload});default:return e}}}),V=a(41),Z=a(42),$=function(){function e(){Object(K.a)(this,e),this._store=null,this.initStore()}return Object(z.a)(e,null,[{key:"getDefaultStore",value:function(){return null===e.DefaultStore&&(e.DefaultStore=new e),e.DefaultStore}}]),Object(z.a)(e,[{key:"initStore",value:function(){var t=this;this._store=Object(W.createStore)(Q,e.loadState(),Object(Z.composeWithDevTools)(Object(W.applyMiddleware)(V.a))),this._store.subscribe((function(){e.saveState(t._store.getState())}))}},{key:"store",get:function(){return this._store}}],[{key:"loadState",value:function(){try{var t=localStorage.getItem("localData");return null===t?e.initialState():JSON.parse(t)}catch(a){return e.initialState()}}},{key:"saveState",value:function(e){try{var t=JSON.stringify(e);localStorage.setItem("localData",t)}catch(a){}}},{key:"initialState",value:function(){return{}}}]),e}();$.DefaultStore=null;var ee=$;a(72),a(73);l.a.render(c.a.createElement(s.a,{store:ee.getDefaultStore().store},c.a.createElement(J,null)),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.70726319.chunk.js.map