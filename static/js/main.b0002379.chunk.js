(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),l=n.n(r),i=(n(12),n(3)),o=n(4),u=n(6),s=n(5),b=(n(13),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={activeTitle:"Tab 1"},t.handleChange=function(e){t.setState({activeTitle:e})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.activeTitle,n=this.props.tabs,a=n.find((function(t){return t.title===e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,n.map((function(n){return c.a.createElement("button",{className:e===n.title?"tab active":"tab",key:n.title,type:"button",onClick:function(){t.handleChange(n.title)}},n.title)}))),c.a.createElement("div",{className:"content"},a.content))}}]),n}(c.a.Component)),m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(b,{tabs:m}))};l.a.render(c.a.createElement(f,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.b0002379.chunk.js.map