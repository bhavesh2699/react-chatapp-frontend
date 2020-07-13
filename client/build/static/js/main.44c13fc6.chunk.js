(this.webpackJsonpproject_chat_application=this.webpackJsonpproject_chat_application||[]).push([[0],{155:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},159:function(e,t,a){e.exports=a(318)},199:function(e,t){},202:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},311:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(151),o=a.n(s),l=a(158),i=a(16),m=a(152),u=a.n(m),p=a(153),f=a.n(p),E=a(49),h=a.n(E),d=(a(202),function(e){var t=e.users;return r.a.createElement("div",{className:"textContainer"},t?r.a.createElement("div",null,r.a.createElement("h1",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,t.map((function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"activeItem"},t,r.a.createElement("img",{alt:"Online Icon",src:h.a}))}))))):null)}),A=a(154),g=a.n(A),v=(a(238),a(90)),C=a.n(v),b=function(e){var t=e.message,a=t.text,n=t.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},C.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},C.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},y=(a(239),function(e){var t=e.messages,a=e.name;return r.a.createElement(g.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(b,{message:e,name:a}))})))}),N=a(155),O=a.n(N),j=a(50),x=a(51),S=a(54),I=a(53),k=a(55),w=a(91),M=a.n(w),R=function(e){Object(S.a)(a,e);var t=Object(I.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"componentWillMount",value:function(){this.setState({isMenuOpened:!1})}},{key:"render",value:function(){var e=this.props&&this.props.users.length>0?this.props.users.map((function(e){var t=e.name;return r.a.createElement("li",{key:t,style:{color:"white",padding:"2px"}},r.a.createElement("b",null,t))})):r.a.createElement("span",null);return r.a.createElement("div",{className:"sidebar"},r.a.createElement(k.OffCanvas,{width:110,transitionDuration:300,effect:"parallax",isMenuOpened:this.state.isMenuOpened,position:"right"},r.a.createElement(k.OffCanvasBody,{className:M.a.bodyClass,style:{fontSize:"30px"}},r.a.createElement("a",{href:"#",style:{fontSize:"0.8em"},onClick:this.handleClick.bind(this)},r.a.createElement("img",{src:"https://img.icons8.com/ios-filled/26/000000/menu.png"}))),r.a.createElement(k.OffCanvasMenu,{className:M.a.menuClass,style:{background:"#23262b",height:"100%"}},r.a.createElement("a",{href:"/"},r.a.createElement("button",{style:{fontSize:"24px",margin:"2px"}},r.a.createElement("i",{className:"fa fa-sign-out"}),"Leave")),r.a.createElement("h3",{style:{color:"white",textAlign:"center"}},r.a.createElement("u",null,"Online")),r.a.createElement("ul",null,e))))}},{key:"handleClick",value:function(){this.setState({isMenuOpened:!this.state.isMenuOpened})}}]),a}(c.Component),B=(a(311),function(e){Object(S.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).inputChangedHandler=function(e){e.target.value},n.copyCodeToClipboard=function(){n.textArea.select(),document.execCommand("copy"),n.saveChanges()},n.saveChanges=function(){n.setState({copySuccess:!0},(function(){setTimeout((function(){n.setState({copySuccess:!1})}),2e3)}))},n.state={copySuccess:!1,keyword:"test"},n}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{style:{width:"0px",height:"0px",opacity:"0",resize:"none"},ref:function(t){return e.textArea=t},value:"Your friend "+this.props.name+" has created a dynamic chat room and has invited you to join.\nLogin with the following credentials on the given link. \n*Room ID:* "+this.props.room+"\n*Link*: https://angry-raman-dfeeeb.netlify.app/",onChange:function(t){return e.inputChangedHandler(t)}})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.copyCodeToClipboard()},style:{fontSize:"24px",margin:"2px"}},r.a.createElement("i",{className:"fa fa-share"})," Invite"),this.state.copySuccess&&r.a.createElement("div",{className:"timer",style:{color:"green",position:"absolute",marginTop:"20px"}},"Invite Link Copied!")))}}]),a}(c.Component)),U=(a(312),function(e){var t=e.users,a=e.room,n=e.name;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:h.a,alt:"online icon"}),r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"centerContainer"},r.a.createElement(B,{room:a,name:n})),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement(R,{users:t}),r.a.createElement("a",{className:"close",href:"/"},r.a.createElement("img",{src:O.a,alt:"close Icon"}))))}),T=(a(313),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type message...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"Send"))}),Y=(a(314),function(e){var t=e.location,a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],m=s[1],p=Object(c.useState)(""),E=Object(i.a)(p,2),h=E[0],A=E[1],g=Object(c.useState)(""),v=Object(i.a)(g,2),C=v[0],b=v[1],N=Object(c.useState)(""),O=Object(i.a)(N,2),j=O[0],x=O[1],S=Object(c.useState)([]),I=Object(i.a)(S,2),k=I[0],w=I[1],M="https://chat-backend-app.herokuapp.com/";Object(c.useEffect)((function(){var e=u.a.parse(t.search),a=e.name,c=e.room;n=f()(M,{transports:["websocket"],upgrade:!1}),A(c),m(a),n.emit("join",{name:a,room:c},(function(e){e&&alert(e)}))}),[M,t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){w((function(t){return[].concat(Object(l.a)(t),[e])}))})),n.on("roomData",(function(e){var t=e.users;b(t)}))}),[]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(U,{room:h,name:o,users:C}),r.a.createElement(y,{messages:k,name:o}),r.a.createElement(T,{message:j,setMessage:x,sendMessage:function(e){e.preventDefault(),j&&n.emit("sendMessage",j,(function(){return x("")}))}})),r.a.createElement(d,{users:C}))}),D=a(52),L=(a(315),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],m=o[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"JOIN"),r.a.createElement("div",null,r.a.createElement("input",{className:"joinInput",placeholder:"Name",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{className:"joinInput mt-20",placeholder:"Room",type:"text",onChange:function(e){return m(e.target.value)}})),r.a.createElement(D.b,{onClick:function(e){return a&&l?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(l)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Create Room"))))}),Q=a(19),J=function(){return r.a.createElement(D.a,null,r.a.createElement(Q.a,{path:"/",exact:!0,component:L}),r.a.createElement(Q.a,{path:"/chat",component:Y}))};o.a.render(r.a.createElement(J,null),document.getElementById("root"))},49:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},91:function(e,t,a){}},[[159,1,2]]]);
//# sourceMappingURL=main.44c13fc6.chunk.js.map