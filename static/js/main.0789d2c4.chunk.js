(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),l=(n(12),n(1)),o=n(2),i=n(4),s=n(3),h=(n(13),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={character:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.dev/api/people/1").then((function(e){return e.json()})).then((function(t){return e.setState({character:t})}))}},{key:"render",value:function(){return r.a.createElement("main",{className:"content"},r.a.createElement("div",null,this.state.character.name))}}]),n}(a.Component)),m=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",{className:"content"}," This is the footer ! ")}}]),n}(a.Component),f=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleClick=function(){e.setState((function(e){return{count:e.count+1}}))},e.countNumber=function(e){return e>0?e:"zero"},e.state={count:0},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("p",null,"This is the header!"),r.a.createElement("p",null,this.countNumber(this.state.count)),r.a.createElement("button",{style:{margin:10},onClick:this.handleClick},"Cart"))}}]),n}(a.Component),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"nothing")}}]),n}(a.Component),v=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={somevar:"Hello World"},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(h,null),r.a.createElement(m,null),r.a.createElement(p,null),this.state.somevar)}}]),n}(a.Component);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0789d2c4.chunk.js.map