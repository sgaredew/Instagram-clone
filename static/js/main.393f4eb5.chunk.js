(this["webpackJsonpInstagram-clone"]=this["webpackJsonpInstagram-clone"]||[]).push([[0],{66:function(e,a,t){e.exports=t(93)},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),s=(t(71),t(6)),o=t(7),i=(t(72),t(117)),m=t(53),u=t.n(m),p=(t(73),t(54)),d=t.n(p),g=t(55),h=t.n(g),E=t(36),f=t.n(E),b=t(38),v=t.n(b),N=(t(74),t(75),t(77),v.a.initializeApp({apiKey:"AIzaSyAWAo2jy1cEI4g5MyENHyxAxQx9DS0xgiA",authDomain:"clone-6abca.firebaseapp.com",projectId:"clone-6abca",storageBucket:"clone-6abca.appspot.com",messagingSenderId:"27544485688",appId:"1:27544485688:web:18f4fd540f86d2ab4b4bcd",measurementId:"G-NJXTQGY3E3"}).firestore()),y=v.a.auth(),w=v.a.storage(),j=t(56),_=t.n(j),S=t(115),O=t(33),I=t.n(O);var C=function(e){var a=e.username,t=e.caption,r=e.imageUrl,c=e.postId,s=e.user,m=Object(n.useState)([]),p=Object(o.a)(m,2),g=p[0],E=p[1],b=Object(n.useState)(""),v=Object(o.a)(b,2),y=v[0],w=v[1];Object(n.useEffect)((function(){var e;return c&&(e=N.collection("posts").doc(c).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){E(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[c]);var j=[{ava:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{ava:"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{ava:"https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg"},{ava:"https://i.pinimg.com/originals/76/80/4f/76804f67ba38f85e4802d250e5b15504.jpg"},{ava:"https://i.pinimg.com/originals/34/f2/50/34f250635ed02218356595ea6d730518.jpg"}],O=Object(n.useState)(0),C=Object(o.a)(O,2),k=C[0];return C[1],l.a.createElement("div",{className:"post"},l.a.createElement("div",{className:"post__header"},l.a.createElement(i.a,{className:"post__avatar",alt:"subhampreet",src:j[k].ava}),l.a.createElement("h3",null,a),l.a.createElement("div",{className:"MoreHorizIcon"},l.a.createElement(u.a,null))),l.a.createElement("img",{className:"post__image",src:r}),l.a.createElement("div",{className:"likeShare"},l.a.createElement(d.a,{className:"likeShare-item",fontSize:"medium"}),l.a.createElement(h.a,{className:"likeShare-item",fontSize:"medium"}),l.a.createElement(f.a,{className:"likeShare-item",fontSize:"medium"}),l.a.createElement(_.a,{className:"likeShare-item-save",fontSize:"medium"})),l.a.createElement("h5",{className:"post__text"}," ",l.a.createElement("strong",null,a," "),t),l.a.createElement("div",{className:"post_comments"},g.map((function(e){return l.a.createElement("h5",{className:"comment"},l.a.createElement("strong",null,e.username)," ",e.text)}))),s&&l.a.createElement("form",{className:"postComment_Box"},l.a.createElement("input",{className:"comment_input",type:"text",placeholder:"Add a comment...",value:y,onChange:function(e){return w(e.target.value)}}),l.a.createElement(S.a,{color:"secondary",className:"comment_button",disabled:!y,type:"submit",onClick:function(e){e.preventDefault(),N.collection("posts").doc(c).collection("comments").add({text:y,username:s.displayName,timestamp:I.a.firestore.FieldValue.serverTimestamp()}),w("")}},"Post")))},k=(t(89),t(113)),x=Object(k.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:e.spacing(8),height:e.spacing(8)}}}));var A=function(){var e=x();return l.a.createElement("div",{className:"story"},l.a.createElement("div",{className:"story__item"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Solomon",src:"https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2013/12/nelson.jpg"},"className",e.large)),l.a.createElement("h6",null,"Barkot")),l.a.createElement("div",{className:"story__item"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Solomon",src:"https://solomongaredew.com/assets/images/sol.jpg"},"className",e.large)),l.a.createElement("h6",null,"Solomon")),l.a.createElement("div",{className:"story__item"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Egretshay",src:"https://egertsehay.com/assets/images/my%20photo.jpg"},"className",e.large)),l.a.createElement("h6",null,"Egretshay")),l.a.createElement("div",{className:"story__item"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Barkot",src:"https://lp-cms-production.imgix.net/2019-06/43832172.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"},"className",e.large)),l.a.createElement("h6",null,"Salem")),l.a.createElement("div",{className:"story__item"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Salem",src:"https://cdn.getyourguide.com/img/location/5a1d39a8dbf21.jpeg/88.jpg"},"className",e.large)),l.a.createElement("h6",null,"Gondar")),l.a.createElement("div",{className:"story__item"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Nobel",src:"https://cdn.britannica.com/98/20998-050-64055D2E/side-Physics-medals-Chemistry-Nobel-Prize-Literature.jpg"},"className",e.large)),l.a.createElement("h6",null,"Nobel")))},P=t(60),z=t.n(P),T=t(114),U=t(116),B=(t(90),t(57)),F=t.n(B),D=Object(k.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:e.spacing(8),height:e.spacing(8)}}}));var L=function(){var e=D();return l.a.createElement("div",{className:"instaEmbed"},l.a.createElement("img",{src:"/images/header2.png",className:"embed_image"}),l.a.createElement("div",{className:"embedText"},l.a.createElement("h4",null,"Hello Peeps \ud83d\udc4b !!!"),l.a.createElement("h4",null,"Welcome to Instagram Clone App \u26a1 !!!"),l.a.createElement("p",null,"Instagram is an American photo and video sharing social networking service owned by Facebook. This project is a Clone of the original Instagram UI. This Project provides some basic features, similar to the original application.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"P.S.")," This project has been developed for learning purposes, and it has nothing to do with the original Application.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Features : "),l.a.createElement("ul",null,l.a.createElement("li",null,"User Authentication : Sign In and Sign Up"),l.a.createElement("li",null,"Image Uploading for creating new Posts"),l.a.createElement("li",null,"User can add Comments to the Posts"),l.a.createElement("li",null,"An Awesome User-Interface")),l.a.createElement("br",null)),l.a.createElement("h4",null,"Hope you have a great time, exploring the application in and out \u270c !!!")),l.a.createElement("div",{className:"footer"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Solomon",src:"/images/avatar.jpg"},"className",e.large)),l.a.createElement("div",{className:"footer_content"},l.a.createElement("h5",null,"solomon Girma"),l.a.createElement("a",{href:"https://www.instagram.com/sgaredew/"},l.a.createElement(S.a,{variant:"contained",color:"secondary",className:"footer_follow"},"Follow")))),l.a.createElement("div",{className:"copyright"},l.a.createElement(F.a,{fontSize:"small",className:"copyright_icon"}),"2025 INSTAGRAM-CLONE BY Solomon G Garedew"))},W=(t(91),t(58)),G=t.n(W),M=Object(k.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:e.spacing(6),height:e.spacing(6)}}}));var H=function(){var e=M();return l.a.createElement("div",{className:"suggested"},l.a.createElement("h4",null," ",l.a.createElement(G.a,{className:"suggested_icon"})," Suggestions For You"),l.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus err sit voluptatem iste natus error sit voluptatem"," "),l.a.createElement("div",{className:"footer"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Donald Trump",src:"https://ichef.bbci.co.uk/news/1024/cpsprodpb/a088/live/ba4bed20-d4b2-11ef-9fd6-0be88a764111.jpg.webp"},"className",e.large)),l.a.createElement("div",{className:"footer_content"},l.a.createElement("h5",null,"Donald Trump")),l.a.createElement("a",{href:"https://www.instagram.com/potus/"},l.a.createElement(S.a,{size:"small",color:"secondary",className:"footer_follow"},"Follow"))),l.a.createElement("div",{className:"footer"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Phil Wickham",src:"https://www.learnreligions.com/thmb/n3hCxPOt1FRlRIpu99Y_-USuQUA=/2273x1516/filters:fill(auto,1)/Phil-Wickham-56a14e083df78cf772697099.jpg"},"className",e.large)),l.a.createElement("div",{className:"footer_content"},l.a.createElement("h5",null,"Phil Wickham")),l.a.createElement("a",{href:"https://www.instagram.com/philwickham/"},l.a.createElement(S.a,{size:"small",color:"secondary",className:"footer_follow"},"Follow"))),l.a.createElement("div",{className:"footer"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Abiy Ahmed\r ",src:"https://cdn.britannica.com/91/212491-050-67D8CC34/Ethiopia-Prime-Minister-Abiy-Ahmed-2018.jpg"},"className",e.large)),l.a.createElement("div",{className:"footer_content"},l.a.createElement("h5",null,"Abiy Ahmed")),l.a.createElement("a",{href:"https://www.instagram.com/pmabiyahmed/"},l.a.createElement(S.a,{size:"small",color:"secondary",className:"footer_follow"},"Follow"))),l.a.createElement("div",{className:"footer"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"durjoydatta",src:"https://i0.wp.com/sportytell.com/wp-content/uploads/2018/12/Lionel-Messi-of-FC-Barcelona.jpg?fit=1920%2C1080&ssl=1"},"className",e.large)),l.a.createElement("div",{className:"footer_content"},l.a.createElement("h5",null,"Lionel Messi")),l.a.createElement("a",{href:"https://www.instagram.com/leomessi/"},l.a.createElement(S.a,{size:"small",color:"secondary",className:"footer_follow"},"Follow"))),l.a.createElement("div",{className:"footer"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"cristiano",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuZfZq9tllEgk_3z9bFGx-NLTS2vRcpSdB0Q&usqp=CAU"},"className",e.large)),l.a.createElement("div",{className:"footer_content"},l.a.createElement("h5",null,"cristiano")),l.a.createElement("a",{href:"https://www.instagram.com/cristiano/"},l.a.createElement(S.a,{size:"small",color:"secondary",className:"footer_follow"},"Follow"))),l.a.createElement("div",{className:"footer"},l.a.createElement(i.a,Object(s.a)({className:"avatar",alt:"Teddy Afro",src:"https://myownwalkman.files.wordpress.com/2018/01/teddy-afro-e1533905846822.jpg"},"className",e.large)),l.a.createElement("div",{className:"footer_content"},l.a.createElement("h5",null,"Teddy Afro")),l.a.createElement("a",{href:"https://www.instagram.com/teddyafromuzika/"},l.a.createElement(S.a,{size:"small",color:"secondary",className:"footer_follow"},"Follow"))),l.a.createElement("a",{href:"https://www.instagram.com/"},l.a.createElement(S.a,{size:"small",color:"primary",className:"footer_follow_main"},"See All")))},R=t(61),Q=t.n(R),q=t(62),Y=t.n(q),J=t(63),V=t.n(J),Z=(t(92),t(59)),K=t.n(Z),X=Object(k.a)((function(e){return{button:{margin:e.spacing(1)},large:{width:e.spacing(6),height:e.spacing(6)}}}));function $(e){var a=e.username,t=Object(n.useState)(null),r=Object(o.a)(t,2),c=r[0],m=r[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),d=(p[0],p[1]),g=Object(n.useState)(0),h=Object(o.a)(g,2),E=h[0],f=h[1],b=Object(n.useState)(""),v=Object(o.a)(b,2),y=v[0],j=v[1],_=Object(n.useState)(""),O=Object(o.a)(_,2),C=O[0],k=O[1],x=X(),A=l.a.createRef();return l.a.createElement("div",{className:"upload"},l.a.createElement("div",{className:"upload_first"},l.a.createElement(i.a,Object(s.a)({className:"post__avatar",alt:"Solomon Girma",src:"./images/sol.jpg"},"className",x.large)),l.a.createElement("input",{type:"text",placeholder:"What's on your mind?",value:C,onChange:function(e){return k(e.target.value)},className:"upload_caption"})),l.a.createElement("div",{className:"upload_content"},l.a.createElement(S.a,{onClick:function(){return A.current.click()},startIcon:l.a.createElement(K.a,null),className:x.button,color:"primary",variant:"contained"},"Upload Photo"),l.a.createElement("input",{type:"file",onChange:function(e){var a=e.target.files[0];if(a){var t=a.type;["image/gif","image/jpeg","image/png"].includes(t)?(j(""),m(a)):(console.log("error"),j("error please upload a image file"))}},hidden:!0,ref:A}),l.a.createElement(S.a,{variant:"contained",onClick:function(){c?w.ref("images/".concat(c.name)).put(c).on("state_changed",(function(e){var a=Math.round(e.bytesTransferred/e.totalBytes*100);f(a)}),(function(e){console.log(e),j(e)}),(function(){w.ref("images").child(c.name).getDownloadURL().then((function(e){d(e),N.collection("posts").add({timestamp:I.a.firestore.FieldValue.serverTimestamp(),caption:C,imageUrl:e,username:a}),f(0),k(""),m(null)}))})):j("Error please choose an image to upload")},color:"secondary",className:x.button},"Create Post")),l.a.createElement("br",null),l.a.createElement("p",{style:{color:"red"}},y),E>0?l.a.createElement("center",null,l.a.createElement("progress",{value:E,max:"100"})):"")}function ee(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var ae=Object(k.a)((function(e){return{paper:{position:"absolute",width:280,height:360,backgroundColor:e.palette.background.paper,border:"1px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var te=function(){var e=ae(),a=Object(n.useState)(ee),t=Object(o.a)(a,1)[0],r=Object(n.useState)(!1),c=Object(o.a)(r,2),i=c[0],m=c[1],u=Object(n.useState)([]),p=Object(o.a)(u,2),d=p[0],g=p[1],h=Object(n.useState)(!1),E=Object(o.a)(h,2),b=E[0],v=E[1],w=Object(n.useState)(""),j=Object(o.a)(w,2),_=j[0],O=j[1],I=Object(n.useState)(""),k=Object(o.a)(I,2),x=k[0],P=k[1],B=Object(n.useState)(""),F=Object(o.a)(B,2),D=F[0],W=F[1],G=Object(n.useState)(null),M=Object(o.a)(G,2),R=M[0],q=M[1];return Object(n.useEffect)((function(){var e=y.onAuthStateChanged((function(e){e?(console.log(e),q(e)):q(null)}));return function(){e()}}),[R,_]),Object(n.useEffect)((function(){N.collection("posts").onSnapshot((function(e){g(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(T.a,{open:b,onClose:function(){return v(!1)}},l.a.createElement("div",{style:t,className:e.paper},l.a.createElement("form",{className:"app__signup"},l.a.createElement("center",null,l.a.createElement("img",{className:"modal__headerImage",src:"/images/logo.png",alt:"instagram"})),l.a.createElement(U.a,{type:"text",placeholder:"Username",value:_,onChange:function(e){return O(e.target.value)},className:"signup_input"}),l.a.createElement(U.a,{type:"text",placeholder:"Email",value:D,onChange:function(e){return W(e.target.value)},className:"signup_input"}),l.a.createElement(U.a,{type:"password",placeholder:"Password",value:x,onChange:function(e){return P(e.target.value)},className:"signup_input"}),l.a.createElement(S.a,{type:"submit",onClick:function(e){e.preventDefault(),y.createUserWithEmailAndPassword(D,x).then((function(e){return e.user.updateProfile({displayName:_})})).catch((function(e){return alert(e.message)}))},variant:"contained",color:"secondary"},"Sign Up"),l.a.createElement("div",{className:"signInLabel"},l.a.createElement("img",Object(s.a)({className:"modal__headerImage",src:"https://i.pinimg.com/originals/8a/77/05/8a770507298d728a1e3e039a0507dd8e.png",alt:"instagram"},"className","signInLabelImg")),l.a.createElement("p",{className:"signInLabelText"},"Sed ut perspiciatis unde omnis iste natus error sit voluptatem Sed ut perspiciatis unde omnis iste natus error ut perspiciatis unde omnis iste natus error "))))),l.a.createElement(T.a,{open:i,onClose:function(){return m(!1)}},l.a.createElement("div",{style:t,className:e.paper},l.a.createElement("form",{className:"app__signup"},l.a.createElement("center",null,l.a.createElement("img",{className:"modal__headerImage",src:"/images/logo.png",alt:"instagram"})),l.a.createElement(U.a,{type:"text",placeholder:"Email ID",value:D,onChange:function(e){return W(e.target.value)},className:"signup_input"}),l.a.createElement(U.a,{type:"password",placeholder:"Password",value:x,onChange:function(e){return P(e.target.value)},className:"signup_input"}),l.a.createElement(S.a,{type:"submit",onClick:function(e){e.preventDefault(),y.signInWithEmailAndPassword(D,x).catch((function(e){return alert(e.message)})),m(!1)},variant:"contained",color:"secondary"},"Sign In"),l.a.createElement("div",{className:"signInLabel"},l.a.createElement("img",Object(s.a)({className:"modal__headerImage",src:"https://i.pinimg.com/originals/8a/77/05/8a770507298d728a1e3e039a0507dd8e.png",alt:"instagram"},"className","signInLabelImg")),l.a.createElement("p",{className:"signInLabelText"},"Sed ut perspiciatis unde omnis iste natus error sit voluptatem Sed ut perspiciatis unde omnis iste natus error ut perspiciatis unde omnis iste natus error "))))),l.a.createElement("div",{className:"app__header"},l.a.createElement("img",{className:"app__headerImage",src:"/images/logo.png",alt:"instagram"}),l.a.createElement("div",{className:"searchForm"},l.a.createElement("form",null,l.a.createElement(z.a,{className:"searchIcon",fontSize:"small"}),l.a.createElement("input",{type:"text",id:"filter",placeholder:"Search",className:"searchBarInput"}))),l.a.createElement("div",{className:"header_icons"},l.a.createElement(Q.a,{fontSize:"large",className:"header_icon"}),l.a.createElement(f.a,{fontSize:"large",className:"header_icon"}),l.a.createElement(Y.a,{fontSize:"large",className:"header_icon"}),l.a.createElement(V.a,{fontSize:"large",className:"header_icon"})),l.a.createElement("div",{className:"signupButton"},R?l.a.createElement(S.a,{onClick:function(){return y.signOut()},variant:"contained",color:"secondary",className:"signOutButton"},"Logout"):l.a.createElement("div",{className:"app__loginContainer"},l.a.createElement(S.a,{onClick:function(){return m(!0)},className:"signInButton"},"Sign In"),l.a.createElement(S.a,{onClick:function(){return v(!0)},variant:"contained",color:"secondary"},"Sign Up")))),l.a.createElement(L,null),l.a.createElement(H,null),l.a.createElement(A,null),(null===R||void 0===R?void 0:R.displayName)?l.a.createElement($,{username:R.displayName}):l.a.createElement("div",{className:"upload_message"},l.a.createElement("h3",null,"Login to Create a Post \ud83d\ude80 !!!"),l.a.createElement("p",null,l.a.createElement("b",null,"Welcome to Instagram Clone App!"),' To Create a new Post, the user has to sign up for the apllication first using any mail ID (Works with an Invalid Mail ID too). For example : "xyz@gmail.com". User can Sign-In using the same credentials again and again. ',l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"For Creating a Post"),' you need to sign-in first. Then click the "UPLOAD PHOTO" Button. Select a Photo from your device, add a suitable caption to the Post, and then click "CREATE POST" Button. Wait till the photo gets uploaded. And then BOOM!!! Your Post has been created(Scroll a bit if you don\'t find your post at the top).',l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Hope you have a Great time exploring the Application \ud83d\udc96 !!!")),l.a.createElement(S.a,{onClick:function(){return m(!0)},className:"upload_signInButton",color:"secondary",variant:"contained"},"Sign In")),d.map((function(e){var a=e.id,t=e.post;return l.a.createElement(C,{key:a,postId:a,username:t.username,caption:t.caption,imageUrl:t.imageUrl,avatar:t.avatar,user:R})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.393f4eb5.chunk.js.map