(this.webpackJsonprecipe2=this.webpackJsonprecipe2||[]).push([[0],{53:function(t,n,e){"use strict";e.r(n);var r=e(2),i=e(3),c=e.n(i),a=e(34),o=e.n(a),s=e(12),d=e(31);e(46);d.a.initializeApp({apiKey:"AIzaSyAk_2-jENzJaj1IHHjX6nI_-S6Mdel-S2s",authDomain:"recipe-a6889.firebaseapp.com",databaseURL:"https://recipe-a6889.firebaseio.com",projectId:"recipe-a6889",storageBucket:"recipe-a6889.appspot.com",messagingSenderId:"139072848251",appId:"1:139072848251:web:fc412f30c60625c0067dde"});var l=d.a,u=e(6),j=e(7);function p(){var t=Object(u.a)(["  \n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    font-family: 'Questrial', sans-serif;\n    position: relative;\n}\na{\n    text-decoration:none;\n    font-size:large;\n    color:#555555;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n}\na:focus{\n    text-decoration:none;\n    color:#555555;\n}\n  textarea{\n      width:70%;\n      outline:none;\n    border:2px solid #fb1970;\n    height:30px;\n    border-radius:0.5rem;\n  }  \nbutton {\n  padding:0.5rem;\n  outline:none;\n  border:none;\n  border-radius:0.5rem;\n  cursor:pointer;\n}\n"]);return p=function(){return t},t}var b=Object(j.a)(p()),x=e(17),h=e(10),f=e(20),g=e(21);function m(){var t=Object(u.a)(["\n\theight: 5px;\n\twidth: 50px;\n\topacity: 0;\n\tmargin-top: 5px;\n"]);return m=function(){return t},t}function O(){var t=Object(u.a)(["\n\theight: 5px;\n\tbackground-color: #fb1970;\n\twidth: 50px;\n\tmargin-top: 5px;\n"]);return O=function(){return t},t}function v(){var t=Object(u.a)(["\n\twidth: 50%;\n\tpadding-right: 5%;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\t@media (max-width: 700px) {\n\t\twidth: 90%;\n\t\tmargin: auto;\n\t\tpadding-right: 0;\n\t}\n"]);return v=function(){return t},t}function w(){var t=Object(u.a)(["\n\twidth: 100%;\n\theight: 80px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-bottom: 1px #555555 solid;\n\tposition: fixed;\n\tbackground-color: white;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 20;\n\t@media (max-width: 700px) {\n\t\tflex-direction: column;\n\t\ttext-align: center;\n\t}\n\n\th1 {\n\t\tfont-family: 'Pacifico', cursive;\n\t\tcolor: #fb1970;\n\t\tpadding-left: 10%;\n\t\t@media (max-width: 700px) {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n"]);return w=function(){return t},t}var y=function(){var t=Object(h.g)();return Object(r.jsxs)(k,{children:[Object(r.jsx)("h1",{children:"FoodieFile"}),Object(r.jsxs)(C,{children:[Object(r.jsxs)(x.b,{to:"/",children:["Home ","/"===t.pathname?Object(r.jsx)(S,{}):Object(r.jsx)(E,{})]}),Object(r.jsxs)(x.b,{to:"/mains",children:["Mains","/mains"===t.pathname?Object(r.jsx)(S,{}):Object(r.jsx)(E,{})]}),Object(r.jsxs)(x.b,{to:"desserts",children:["Desserts","/desserts"===t.pathname?Object(r.jsx)(S,{}):Object(r.jsx)(E,{})]}),Object(r.jsxs)(x.b,{to:"/search",children:["Search ","/search"===t.pathname?Object(r.jsx)(S,{}):Object(r.jsx)(E,{})]}),Object(r.jsxs)(x.b,{to:"/upload",children:[Object(r.jsx)(f.a,{icon:g.c,color:"#fb1970"}),"/upload"===t.pathname?Object(r.jsx)(S,{}):Object(r.jsx)(E,{})]})]})]})},k=j.b.div(w()),C=j.b.div(v()),S=j.b.div(O()),E=j.b.div(m());function D(){var t=Object(u.a)(["\n\tposition: absolute;\n\n\tz-index: 10;\n\twidth: 100%;\n\ttop: 30%;\n\theight: auto;\n\tbackground-color: #fb1970;\n\tpadding: 5% 0%;\n\tcolor: white;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\th3 {\n\t\tpadding: 3% 5%;\n\t}\n\tbutton {\n\t\tbackground-color: white;\n\t\tcolor: #555555;\n\t}\n"]);return D=function(){return t},t}var z=function(t){var n=t.recipe,e=t.setDeleteDisplay;return Object(r.jsxs)(I,{children:[Object(r.jsx)("h3",{children:"Are you sure you want to delete this recipe?"}),Object(r.jsx)("button",{onClick:function(){l.firestore().collection("recipes").doc(n.id).delete().catch((function(t){console.error("Error writing document: ",t)})),e(!1)},children:"Delete?"}),Object(r.jsx)("button",{onClick:function(){e(!1)},children:"Cancel?"})]})},I=j.b.div(D());function M(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\theight: 100%;\n\talign-items: center;\n\t@media (max-width: 750px) {\n\t\tpadding: 10%;\n\t}\n\ta {\n\t\tcolor: #fb1970;\n\t\tflex-direction: row;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\tmargin-bottom: 20px;\n\t\th3 {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t}\n"]);return M=function(){return t},t}function A(){var t=Object(u.a)(["\n\tposition: fixed;\n\twidth: 84%;\n\tleft: 8%;\n\ttop: 20%;\n\theight: fit-content;\n\tbackground-color: white;\n\tcolor: #fb1970;\n\tz-index: 10;\n\tbox-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\talign-items: auto;\n\toverflow: hidden;\n\tborder-radius: 0.5rem;\n\t@media (max-width: 750px) {\n\t\tgrid-template-columns: 1fr;\n\t\th1 {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\th3 {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t}\n\timg {\n\t\twidth: 90%;\n\t\theight: auto;\n\t\tborder-radius: 0.5rem;\n\t\tmargin: 2%;\n\t}\n\t@media (max-width: 450px) {\n\t\toverflow: scroll;\n\t\ttop: 0%;\n\t\twidth: 100%;\n\t\tpadding: 10% 0%;\n\t\tmargin: 0;\n\t\tleft: 0;\n\t\tz-index: 30;\n\t}\n"]);return A=function(){return t},t}var L=function(t){var n=t.recipe,e=t.setDetailDisplay;return Object(r.jsxs)(F,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:n.image,alt:n.title})}),Object(r.jsxs)(R,{children:[Object(r.jsx)("h1",{children:n.title}),Object(r.jsx)("h3",{children:n.description}),Object(r.jsxs)("a",{href:n.link,children:[Object(r.jsx)(f.a,{icon:g.a})," ",Object(r.jsx)("h3",{children:"Link to Recipe"})]}),Object(r.jsx)("h3",{onClick:function(){e(!1)},children:"Click here to close Info box.."})]})]})},F=j.b.div(A()),R=j.b.div(M());function B(){var t=Object(u.a)(["\n\twidth: 90%;\n\tmargin: 0 5%;\n\theight: 20%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);return B=function(){return t},t}function H(){var t=Object(u.a)(["\n\theight: auto;\n\twidth: 300px;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmargin: 3%;\n\tbox-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);\n\tborder-radius: 0.5rem;\n\t@media (max-width: 600px) {\n\t\twidth: 100%;\n\t\tmargin: 5% auto;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 280px;\n\t\toverflow: hidden;\n\t\tborder-top-left-radius: 0.5rem;\n\t\tborder-top-right-radius: 0.5rem;\n\t\t@media (max-width: 450px) {\n\t\t\theight: 330px;\n\t\t}\n\t}\n\th4 {\n\t\tpadding: 5px;\n\t}\n"]);return H=function(){return t},t}var J=function(t){var n=t.recipe,e=Object(i.useState)(!1),c=Object(s.a)(e,2),a=c[0],o=c[1],d=Object(i.useState)(!1),l=Object(s.a)(d,2),u=l[0],j=l[1];return Object(r.jsxs)(N,{children:[Object(r.jsx)("img",{src:n.image,alt:n.title}),Object(r.jsxs)(P,{children:[Object(r.jsx)(f.a,{color:"#fb1970",icon:g.b,onClick:function(){j(!0)}}),Object(r.jsx)("h4",{children:n.title}),Object(r.jsx)(f.a,{color:"#fb1970",icon:g.d,onClick:function(){o(!0)}})]}),a?Object(r.jsx)(z,{recipe:n,setDeleteDisplay:o}):"",u?Object(r.jsx)(L,{recipe:n,setDetailDisplay:j}):""]},n.id)},N=j.b.div(H()),P=j.b.div(B());function T(){var t=Object(u.a)(["\n\tmargin-top: 80px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-evenly;\n\tpadding: 50px;\n\t@media (max-width: 420px) {\n\t\tpadding: 0;\n\t}\n"]);return T=function(){return t},t}var _=function(t){var n=t.recipes;return Object(r.jsx)(K,{children:n?n.map((function(t){return Object(r.jsx)(J,{recipe:t},t.id)})):""})},K=j.b.div(T());function Q(){var t=Object(u.a)(["\n\tmargin-top: 80px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-evenly;\n\tpadding: 50px;\n\t@media (max-width: 420px) {\n\t\tpadding: 0;\n\t}\n"]);return Q=function(){return t},t}var U=function(t){var n=t.recipes.filter((function(t){return!0===t.course}));return Object(r.jsx)(X,{children:n.map((function(t){return Object(r.jsx)(J,{recipe:t},t.id)}))})},X=j.b.div(Q());function q(){var t=Object(u.a)(["\n\tmargin-top: 80px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-evenly;\n\tpadding: 50px;\n\t@media (max-width: 420px) {\n\t\tpadding: 0;\n\t}\n"]);return q=function(){return t},t}var G=function(t){var n=t.recipes.filter((function(t){return!1===t.course}));return Object(r.jsx)(V,{children:n.map((function(t){return Object(r.jsx)(J,{recipe:t},t.id)}))})},V=j.b.div(q());function W(){var t=Object(u.a)(["\n\twidth: 50%;\n\tbackground-color: lightgray;\n\tcolor: #555555;\n\topacity: 0.5;\n\tfont-size: larger;\n\tmargin: auto;\n"]);return W=function(){return t},t}function Y(){var t=Object(u.a)(["\n\twidth: 50%;\n\tbackground-color: #fb1970;\n\tcolor: white;\n\tmargin: auto;\n\tfont-size: larger;\n"]);return Y=function(){return t},t}function Z(){var t=Object(u.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-row-gap: 20px;\n\tgrid-template-columns: repeat(auto, 1fr);\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tmargin: 2%;\n\tpadding: 1%;\n\ttextarea {\n\t\tmargin: auto;\n\t\ttext-align: center;\n\t\tfont-size: larger;\n\t}\n\tp {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\topacity: 0.5;\n\t}\n\t@media (max-width: 750px) {\n\t\tgrid-template-columns: 1fr;\n\t\tmargin: 10% 0%;\n\t}\n"]);return Z=function(){return t},t}function $(){var t=Object(u.a)(["\n\tmargin: 10% auto;\n\tpadding: 3%;\n\twidth: 80%;\n\theight: auto;\n\tbox-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);\n\tborder-radius: 0.5rem;\n\ttext-align: center;\n\tcolor: #fb1970;\n\t@media (max-width: 800px) {\n\t\tmargin-top: 15%;\n\t}\n\t@media (max-width: 600px) {\n\t\tmargin-top: 20%;\n\t}\n"]);return $=function(){return t},t}var tt=function(){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),e=n[0],c=n[1],a=Object(i.useState)(""),o=Object(s.a)(a,2),d=o[0],u=o[1],j=Object(i.useState)(""),p=Object(s.a)(j,2),b=p[0],x=p[1],f=Object(i.useState)(""),g=Object(s.a)(f,2),m=g[0],O=g[1],v=Object(i.useState)(""),w=Object(s.a)(v,2),y=w[0],k=w[1],C=Object(i.useState)({titleError:"",descriptionError:"",linkError:"",imageError:""}),S=Object(s.a)(C,2),E=S[0],D=S[1],z=function(){c(!e)},I=Object(h.f)();return Object(r.jsxs)(nt,{children:[Object(r.jsx)("h3",{children:"Add your latest Recipe here..."}),Object(r.jsxs)(et,{children:[Object(r.jsx)("h3",{children:"Title :"}),Object(r.jsx)("textarea",{cols:"20",rows:"1",value:d,onChange:function(t){u(t.target.value),t.target.value.length<5||t.target.value.length>50?D({titleError:"Must be between 5 and 20 characters"}):D({})}}),Object(r.jsx)("p",{}),Object(r.jsx)("p",{children:E.titleError}),Object(r.jsx)("h3",{children:"Description :"}),Object(r.jsx)("textarea",{cols:"20",rows:"1",value:m,onChange:function(t){O(t.target.value),t.target.value.length<5||t.target.value.length>100?D({descriptionError:"Must be between 5 and 100 characters"}):D({})}}),Object(r.jsx)("p",{}),Object(r.jsx)("p",{children:E.descriptionError}),Object(r.jsx)("h3",{children:"Link :"}),Object(r.jsx)("textarea",{cols:"20",rows:"1",value:b,onChange:function(t){x(t.target.value),t.target.value.length<20?D({linkError:"Must be a valid url"}):D({})}}),Object(r.jsx)("p",{}),Object(r.jsx)("p",{children:E.linkError}),Object(r.jsx)("h3",{children:"Image link :"}),Object(r.jsx)("textarea",{cols:"20",rows:"1",value:y,onChange:function(t){k(t.target.value),t.target.value.length<20?D({imageError:"Must be a valid image link"}):D({})}}),Object(r.jsx)("p",{}),Object(r.jsx)("p",{children:E.imageError}),e?Object(r.jsx)(rt,{children:"Mains"}):Object(r.jsx)(it,{onClick:z,children:"Mains"}),e?Object(r.jsx)(it,{onClick:z,children:"Dessert"}):Object(r.jsx)(rt,{children:"Dessert"})]}),Object(r.jsx)(rt,{onClick:function(){l.firestore().collection("recipes").add({title:d.toLowerCase(),description:m,link:b,image:y,course:e});I.push("/")},children:"Add Recipe"})]})},nt=j.b.div($()),et=j.b.div(Z()),rt=j.b.button(Y()),it=j.b.button(W());function ct(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-evenly;\n\tpadding: 50px;\n\t@media (max-width: 420px) {\n\t\tpadding: 0;\n\t}\n"]);return ct=function(){return t},t}function at(){var t=Object(u.a)(["\n\twidth: 100%;\n\theight: auto;\n\tmargin-top: 10%;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t@media (max-width: 1000px) {\n\t\tmargin-top: 15%;\n\t}\n\t@media (max-width: 750px) {\n\t\tmargin-top: 20%;\n\t}\n\t@media (max-width: 500px) {\n\t\tmargin-top: 25%;\n\t}\n\ttextarea {\n\t\ttext-align: center;\n\t\tfont-size: large;\n\t\tpadding: 5px;\n\t\twidth: 50%;\n\t}\n\tbutton {\n\t\tbackground-color: #fb1970;\n\t\tcolor: white;\n\t\twidth: 150px;\n\t\tmargin-top: 50px;\n\t}\n\th3 {\n\t\tmargin-top: 10%;\n\t\tcolor: #555555;\n\t\topacity: 0.75;\n\t}\n"]);return at=function(){return t},t}var ot=function(t){var n=t.recipes,e=Object(i.useState)(""),c=Object(s.a)(e,2),a=c[0],o=c[1],d=Object(i.useState)(n),l=Object(s.a)(d,2),u=l[0],j=l[1];return Object(r.jsxs)(st,{children:[Object(r.jsx)("textarea",{placeholder:"Search",value:a,cols:"30",rows:"1",onChange:function(t){o(t.target.value.toLowerCase());var e=n.filter((function(t){return t.title.includes(a)}));return j(e),u}}),Object(r.jsx)("button",{onClick:function(){j(n),o("")},children:"Clear Search"}),0===u.length?Object(r.jsx)("h3",{children:"No Recipes match your search, sorry"}):Object(r.jsx)(dt,{children:u.map((function(t){return Object(r.jsx)(J,{recipe:t},t.id)}))})]})},st=j.b.div(at()),dt=j.b.div(ct());var lt=function(){var t=Object(i.useState)(),n=Object(s.a)(t,2),e=n[0],c=n[1],a=l.firestore().collection("recipes");return Object(i.useEffect)((function(){a.onSnapshot((function(t){var n=[];t.forEach((function(t){var e=t.data();e.id=t.id,n.push(e)})),n.sort((function(t,n){return t.title>n.title?1:-1})),c(n)}))}),[]),Object(r.jsx)(x.a,{basename:"/",children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(y,{}),Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{exact:!0,path:"/",render:function(){return Object(r.jsx)(_,{recipes:e})}}),Object(r.jsx)(h.a,{path:"/mains",render:function(){return Object(r.jsx)(U,{recipes:e})}}),Object(r.jsx)(h.a,{path:"/desserts",render:function(){return Object(r.jsx)(G,{recipes:e})}}),Object(r.jsx)(h.a,{path:"/search",render:function(){return Object(r.jsx)(ot,{recipes:e})}}),Object(r.jsx)(h.a,{path:"/upload",render:function(){return Object(r.jsx)(tt,{})}})]}),Object(r.jsx)(b,{})]})})},ut=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,54)).then((function(n){var e=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;e(t),r(t),i(t),c(t),a(t)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(lt,{})}),document.getElementById("root")),ut()}},[[53,1,2]]]);
//# sourceMappingURL=main.c4df71ee.chunk.js.map