(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),l=n.n(o),s=n(4),i=n(5),c=n(7),u=n(6),p=n(1),m=n.n(p),h=r.a.memo((function(e){var t=e.goods;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e},e)})))}));h.propTypes={goods:m.a.PropTypes.arrayOf(m.a.string).isRequired};n(15);var g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isStarted:!1,goods:g,lengthLimit:1,isReversed:!1,sortBy:""},e.startApp=function(){e.setState({isStarted:!0})},e.reverseList=function(){e.setState({isReversed:!0})},e.sortAlphabetically=function(){e.setState({sortBy:"name"})},e.reset=function(){e.setState({lengthLimit:1,isReversed:!1,sortBy:""})},e.sortByLength=function(){e.setState({sortBy:"length"})},e.handleChange=function(t){e.setState({lengthLimit:t.target.value})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isStarted,n=e.goods,a=e.lengthLimit,o=e.sortBy,l=e.isReversed,s=n.filter((function(e){return e.length>=a}));return s.sort((function(e,t){switch(o){case"name":return e.localeCompare(t);case"length":return e[o]-t[o];default:return 0}})),!0===l&&s.reverse(),r.a.createElement("div",{className:"App"},!1===t?r.a.createElement("button",{type:"button",onClick:this.startApp},"Start"):r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{goods:s}),r.a.createElement("button",{type:"button",onClick:this.reverseList},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),r.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),r.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),r.a.createElement("select",{value:a,onChange:this.handleChange},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6"),r.a.createElement("option",null,"7"),r.a.createElement("option",null,"8"),r.a.createElement("option",null,"9"),r.a.createElement("option",null,"10"))))}}]),n}(r.a.PureComponent);l.a.render(r.a.createElement(y,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a9d79649.chunk.js.map