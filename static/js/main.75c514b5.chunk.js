(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=(n(12),n(3)),i=n(4),s=n(6),u=n(5),h=(n(13),n(14),n(15),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"RoboImg",src:"https://robohash.org/".concat(e.robo.id,"?set=set2&size=180x180")}),o.a.createElement("h2",null," ",e.robo.name," "),o.a.createElement("p",null,e.robo.email))}),m=function(e){return o.a.createElement("div",{className:"Card-list"},e.Robo.map((function(e){return o.a.createElement(h,{key:e.id,robo:e})})))},d=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("div",null,o.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n}))}),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchFields:t.target.value})},e.state={Robo:[],searchFields:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({Robo:t})}))}},{key:"render",value:function(){var e=this.state,t=e.Robo,n=e.searchFields,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"  RObo Monster "),o.a.createElement(d,{placeholder:"Search Robo",handleChange:this.handleChange}),o.a.createElement(m,{Robo:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.75c514b5.chunk.js.map