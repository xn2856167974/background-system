(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/self/self"],{"0266":function(t,e,n){"use strict";(function(t){n("496b"),n("a9ff");r(n("66fd"));var e=r(n("cce3"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"1cc0":function(t,e,n){"use strict";var r=n("6616"),o=n.n(r);o.a},"1e0c":function(t,e,n){"use strict";(function(t,n){function r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f={};function h(){}function d(){}function p(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(k([])));y&&y!==e&&n.call(y,i)&&(v=y);var m=p.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){(function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)})(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function L(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=p,u(m,"constructor",p),u(p,"constructor",d),d.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function o(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,u,"next",t)}function u(t){o(a,r,i,c,u,"throw",t)}c(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={onLoad:function(){},data:function(){return{currentVersion:"1.0.0",haveNewVersion:!1}},methods:{changeAvatar:function(){var e=this;t.chooseImage({count:1,success:function(){var t=i(r().mark((function t(n){var o;return r().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(n.tempFiles[0].name),t.next=3,e._uploadFile(n.tempFilePaths[0],n.tempFiles[0].name||Date.now().toString()+n.tempFilePaths[0].substr(n.tempFilePaths[0].lastIndexOf(".")));case 3:o=t.sent,e._updateUserAvatar(o);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})},getUpload:function(t,e){return i(r().mark((function o(){var i,a;return r().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.uploadFile({filePath:t,cloudPath:e});case 2:return i=r.sent,a=i.fileID,r.abrupt("return",a);case 5:case"end":return r.stop()}}),o)})))()},updateAvatar:function(e){var n=this;return i(r().mark((function o(){var i,a,c;return r().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$http.update_user_avatar({file:e,userId:n.userInfo._id});case 2:i=r.sent,a=i.msg,c=i.user,t.showToast({title:a}),n.upDataUserInfo(c);case 7:case"end":return r.stop()}}),o)})))()},goMessageBack:function(){t.navigateTo({url:"/pages/messageBack/messageBack"})},goMyself:function(){t.navigateTo({url:"/pages/myArticle/myArticle"})},goLoginPage:function(){t.navigateTo({url:"/pages/login/login"})},siginOut:function(){this.$store.commit("upDataUserInfo",null),t.navigateTo({url:"/pages/index/index"})},_checkVersion:function(){var t=this;return i(r().mark((function e(){var n,o,i;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get_current_version();case 2:n=e.sent,o=n.version,i=n.downLoadLinkUrl,o>t.currentVersion&&(t.haveNewVersion=!0,t.downLoadLinkUrl=i);case 6:case"end":return e.stop()}}),e)})))()},_getNewVersion:function(){t.showLoading({title:"下载中，请稍后"});var e=plus.downloader.createDownload(this.downLoadLinkUrl,{},(function(e,n){t.hideLoading({}),200==n?plus.runtime.install(plus.io.convertLocalFileSystemURL(e.filename),{},{},(function(e){t.showToast({title:"安装失败",duration:1500,icon:"none"})})):t.showToast({title:"更新失败",duration:1500,icon:"none"})}));e.start()}}};e.default=a}).call(this,n("543d")["default"],n("a9ff")["default"])},"62c2":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"551e"))}},o=function(){var t=this.$createElement;this._self._c},i=[]},6616:function(t,e,n){},8198:function(t,e,n){"use strict";n.r(e);var r=n("1e0c"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},cce3:function(t,e,n){"use strict";n.r(e);var r=n("62c2"),o=n("8198");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("1cc0");var a=n("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=c.exports}},[["0266","common/runtime","common/vendor"]]]);