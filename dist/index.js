!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports.Suggest=t(require("React"),require("ReactDOM")):e.Suggest=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(10);var c=n(5),f=r(c),p=n(11),d=r(p),h=n(6),g=r(h),y=n(1),b=r(y),v=function(){},m=function(e){function t(e){s(this,t);var n=a(this,Object.getPrototypeOf(t).call(this));return n.state={show:!1,value:e.value||e.defaultValue,focus:-1},n._handleInputChange=n._handleInputChange.bind(n),n._handleSuggestClick=n._handleSuggestClick.bind(n),n._handleFocus=n._handleFocus.bind(n),n._handleDocClick=n._handleDocClick.bind(n),n._handleItemMouseEnter=n._handleItemMouseEnter.bind(n),n._handleItemMouseLeave=n._handleItemMouseLeave.bind(n),n._handleKeyPress=n._handleKeyPress.bind(n),n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this._handleDocClick,!1)}},{key:"componentWillReceiveProps",value:function(e){null!=e.value&&this.setState({value:e.value})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this._handleDocClick)}},{key:"_handleInputChange",value:function(e){var t=e.target.value;this.setState({value:t,show:!0,focus:-1}),this.props.onChange(t)}},{key:"_handleSuggestClick",value:function(e){var t=parseInt(e.target.getAttribute("data-index")),n=this.props.suggests[t];this.setState({show:!1,value:n}),this._focus=!1,this.props.onChange(n),this.props.onBlur(n)}},{key:"_handleDocClick",value:function(e){var t=null;try{t=d["default"].findDOMNode(this)}catch(e){return}e.target!==t.querySelector(".ra-input")&&this._focus&&(this._focus=!1,this.setState({show:!1}),this.props.onBlur(this.state.value))}},{key:"_handleFocus",value:function(){this.props.disabled||this.props.readOnly||(this._focus=!0,this.setState({show:!0}),this.props.onFocus(this.state.value))}},{key:"_getSuggests",value:function(){var e=this,t=this.state.focus,n=0;return this.props.suggests.map(function(r,o){var s=e.props.useFilter?-1!==r.indexOf(e.state.value):!0,a=(0,b["default"])({"ra-suggest-item":!0,selected:r===e.state.value,focus:s&&0===t});return s&&t--,s?f["default"].createElement("li",{className:a,"data-findex":n++,"data-index":o,key:r+"-"+o,onMouseDown:e._handleSuggestClick,onMouseEnter:e._handleItemMouseEnter,onMouseLeave:e._handleItemMouseLeave},r):null}).filter(function(e){return!!e})}},{key:"_handleItemMouseEnter",value:function(e){var t=parseInt(e.target.getAttribute("data-findex"));this.setState({focus:t})}},{key:"_handleItemMouseLeave",value:function(){this.setState({focus:-1})}},{key:"_handleKeyPress",value:function(e){var t=this,n=this.state.focus,r=this.props.suggests.filter(function(e){return t.props.useFilter?-1!==e.indexOf(t.state.value):!0});38===e.which||40===e.which?(e.preventDefault(),n=-1===n?38===e.which?r.length-1:0:38===e.which?(n-1+r.length)%r.length:(n+1)%r.length,this.setState({focus:n})):13===e.which&&-1!==n&&(this.setState({show:!1,value:r[n],focus:-1}),this._focus=!1,this.props.onChange(r[n]),this.props.onBlur(r[n]))}},{key:"render",value:function(){var e,t=this._getSuggests(),n=this.state.show&&t.length>0,r=(0,b["default"])((e={},o(e,this.props.className,!0),o(e,"show",n),e));return f["default"].createElement("div",{className:r,style:{width:this.props.width}},f["default"].createElement(g["default"],u({ref:"input"},this.props,{className:this.props.inputClassName,onBlur:v,onChange:this._handleInputChange,onFocus:this._handleFocus,onKeyDown:this._handleKeyPress,placeholder:this.props.placeholder,type:"text",value:this.state.value})),f["default"].createElement("ul",{className:"ra-suggest-list",ref:"suggest",style:{maxHeight:this.props.maxHeight}},t))}}]),t}(f["default"].Component);m.displayName="Suggest",m.defaultProps={defaultValue:"",useFilter:!0,disabled:!1,name:null,skin:"default",onChange:v,onFocus:v,onBlur:v,className:"ra-suggest",inputClassName:"ra-input",width:280,maxHeight:160,suggests:[],placeholder:""},m.propTypes={className:f["default"].PropTypes.string,defaultValue:f["default"].PropTypes.string,disabled:f["default"].PropTypes.bool,inputClassName:f["default"].PropTypes.string,maxHeight:f["default"].PropTypes.number,name:f["default"].PropTypes.string,onBlur:f["default"].PropTypes.func,onChange:f["default"].PropTypes.func,onFocus:f["default"].PropTypes.func,placeholder:f["default"].PropTypes.string,readOnly:f["default"].PropTypes.bool,skin:f["default"].PropTypes.oneOf(["success","error","default"]),suggests:f["default"].PropTypes.arrayOf(f["default"].PropTypes.string),useFilter:f["default"].PropTypes.bool,value:f["default"].PropTypes.string,width:f["default"].PropTypes.number},e.exports=m},function(e,t,n){var r,o,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r="undefined"==typeof n?"undefined":s(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=a:"object"===s(n(4))&&n(4)?(r=[],o=function(){return a}.apply(t,r),!(void 0!==o&&(e.exports=o))):window.classNames=a}()},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(l(r.parts[s],t))}else{for(var a=[],s=0;s<r.parts.length;s++)a.push(l(r.parts[s],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],s=o[0],a=o[1],i=o[2],u=o[3],l={css:a,media:i,sourceMap:u};n[s]?n[s].parts.push(l):t.push(n[s]={id:s,parts:[l]})}return t}function s(e,t){var n=y(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var s=v++;n=b||(b=i(t)),r=c.bind(null,n,s,!1),o=c.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function f(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var s=[],a=0;a<n.length;a++){var i=n[a],u=d[i.id];u.refs--,s.push(u)}if(e){var l=o(e);r(l,t)}for(var a=0;a<s.length;a++){var u=s[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){(function(t){e.exports=t}).call(t,{})},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),n(9);var f=n(5),p=r(f),d=n(1),h=r(d),g=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).call(this))}return u(t,e),c(t,[{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.skin,a=t.style,i=s(t,["className","skin","style"]),u=(0,h["default"])((e={},o(e,n,!0),o(e,r,!0),o(e,"disabled",this.props.disabled),e));return a.width=this.props.width,p["default"].createElement("input",l({className:u,style:a},i))}}]),t}(p["default"].Component);g.displayName="Input",g.propTypes={className:p["default"].PropTypes.string,disabled:p["default"].PropTypes.bool,skin:p["default"].PropTypes.oneOf(["success","error","default"]),style:p["default"].PropTypes.object,width:p["default"].PropTypes.number},g.defaultProps={className:"ra-input",skin:"default",disabled:!1,width:280,style:{}},t["default"]=g},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".ra-input{display:inline-block;width:280px;height:40px;padding:10px 16px;font-size:12px;font-family:Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\\\5B8B\\4F53,sans-serif;line-height:20px;color:#55606e;border:2px solid #fff;border-radius:2px;background-color:#fff;box-sizing:border-box}.ra-input:focus{border:2px solid #24afb2;color:#24afb2;outline:none}.ra-input.success{border:2px solid #26ae90;color:#26ae90}.ra-input.error{border:2px solid #cd4237;color:#cd4237}.ra-input.disabled{border:2px solid #d2d4d8;color:#d2d4d8;cursor:not-allowed}",""])},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".ra-suggest{position:relative;display:inline-block;color:#55606e}.ra-suggest.show .ra-suggest-list{display:block}.ra-suggest .ra-suggest-list{display:none;position:absolute;margin:0;padding:0;list-style:none;background-color:#fff;z-index:9999;width:100%;box-sizing:border-box;overflow-y:auto}.ra-suggest .ra-suggest-list .ra-suggest-item{box-sizing:border-box;height:40px;line-height:20px;padding:10px 16px;font-size:12px;cursor:pointer}.ra-suggest .ra-suggest-list .ra-suggest-item.focus{background-color:#24afb2;color:#fff}",""])},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t}])});
//# sourceMappingURL=index.js.map