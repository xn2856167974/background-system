(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-self-self"],{"22b1":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 添加一个flex布局的混编方法 */\n/* 全局系统样式定义 */uni-page-body[data-v-41b029e3]{background-color:#f5f5f5}body.?%PAGE?%[data-v-41b029e3]{background-color:#f5f5f5}.my-header[data-v-41b029e3]{position:relative;padding-bottom:%?30?%}.my-header .my-header-background[data-v-41b029e3]{position:absolute;top:0;right:0;left:0;bottom:0;opacity:.3;-webkit-filter:blur(%?16?%);filter:blur(%?16?%)}.my-header .my-header-background uni-image[data-v-41b029e3]{width:100%;height:100%}.my-header .my-header-logo[data-v-41b029e3]{display:flex;align-items:center;justify-content:flex-start;flex-wrap:nowrap;flex-direction:column;align-items:center;padding-top:%?60?%;position:relative;z-index:10}.my-header .my-header-logo .my-header-logo-box[data-v-41b029e3]{width:%?120?%;height:%?120?%;border-radius:50%;overflow:hidden}.my-header .my-header-logo .my-header-logo-box uni-image[data-v-41b029e3]{width:100%;height:100%}.my-header .my-header-logo .user-name[data-v-41b029e3]{margin-top:%?30?%;font-size:%?32?%;font-weight:700}.my-header .my-header-info[data-v-41b029e3]{margin-top:%?30?%;display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row}.my-header .my-header-info .my-header-info-box[data-v-41b029e3]{width:100%;display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:column;font-size:%?24?%;color:#999}.my-header .my-header-info .my-header-info-box .my-header-info-title[data-v-41b029e3]{font-size:%?28?%;color:#333}.my-content .my-content-list[data-v-41b029e3]{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row;padding:%?30?%;margin-bottom:%?20?%;background-color:#fff;color:#333;font-size:%?28?%}.my-content .my-content-list .my-content-list-title[data-v-41b029e3]{display:flex;align-items:center;flex-grow:1\n  /*版本样式 */}.my-content .my-content-list .my-content-list-title .icons[data-v-41b029e3]{margin-right:%?10?%}.my-content .my-content-list .my-content-list-title .version-container[data-v-41b029e3]{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row;flex-grow:1}.my-content .my-content-list .my-content-list-title .version-container .version[data-v-41b029e3]{margin-right:%?40?%;color:#888;font-weight:700}.my-content .my-content-list .my-content-list-title .version-container .new-version-tip[data-v-41b029e3]{font-size:%?20?%;color:#f25037}.my-content .sign-out[data-v-41b029e3]{margin:%?120?% %?20?% 0}.my-content .company-logo[data-v-41b029e3]{width:%?100?%;height:%?100?%;border-radius:50%;margin-right:%?40?%}',""]),e.exports=t},"2b88":function(e,t,n){"use strict";var i=n("d948"),a=n.n(i);a.a},"6bf3":function(e,t,n){e.exports=n.p+"static/img/login_bg.20f588f5.png"},8198:function(e,t,n){"use strict";n.r(t);var i=n("9fac"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"9fac":function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("1da1")),o={onLoad:function(){},data:function(){return{currentVersion:"1.0.0",haveNewVersion:!1}},methods:{changeAvatar:function(){var e=this;uni.chooseImage({count:1,success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUpload(n.tempFilePaths[0],n.tempFiles[0].name);case 2:i=t.sent,e.updateAvatar(i);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})},getUpload:function(t,n){return(0,a.default)(regeneratorRuntime.mark((function i(){var a,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.uploadFile({filePath:t,cloudPath:n});case 2:return a=i.sent,o=a.fileID,i.abrupt("return",o);case 5:case"end":return i.stop()}}),i)})))()},updateAvatar:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.update_user_avatar({file:e,userId:t.userInfo._id});case 2:i=n.sent,a=i.msg,o=i.user,uni.showToast({title:a}),t.upDataUserInfo(o);case 7:case"end":return n.stop()}}),n)})))()},goMessageBack:function(){uni.navigateTo({url:"/pages/messageBack/messageBack"})},goMyself:function(){uni.navigateTo({url:"/pages/myArticle/myArticle"})},goLoginPage:function(){uni.navigateTo({url:"/pages/login/login"})},siginOut:function(){this.$store.commit("upDataUserInfo",null),uni.navigateTo({url:"/pages/index/index"})},_checkVersion:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get_current_version();case 2:n=t.sent,i=n.version,a=n.downLoadLinkUrl,i>e.currentVersion&&(e.haveNewVersion=!0,e.downLoadLinkUrl=a);case 6:case"end":return t.stop()}}),t)})))()},_getNewVersion:function(){uni.showLoading({title:"下载中，请稍后"});var e=plus.downloader.createDownload(this.downLoadLinkUrl,{},(function(e,t){uni.hideLoading({}),200==t?plus.runtime.install(plus.io.convertLocalFileSystemURL(e.filename),{},{},(function(e){uni.showToast({title:"安装失败",duration:1500,icon:"none"})})):uni.showToast({title:"更新失败",duration:1500,icon:"none"})}));e.start()}}};t.default=o}).call(this,n("a9ff")["default"])},cce3:function(e,t,n){"use strict";n.r(t);var i=n("f2bb"),a=n("8198");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("2b88");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"41b029e3",null,!1,i["a"],void 0);t["default"]=s.exports},d948:function(e,t,n){var i=n("22b1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("1a909604",i,!0,{sourceMap:!1,shadowMode:!1})},f2bb:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("551e").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[e.userInfo?i("v-uni-view",{staticClass:"my-header"},[i("v-uni-view",{staticClass:"my-header-background"},[i("v-uni-image",{attrs:{src:e.userInfo.avatar,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"my-header-logo"},[i("v-uni-view",{staticClass:"my-header-logo-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeAvatar.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:e.userInfo.avatar,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"user-name"},[e._v(e._s(e.userInfo.author_name))])],1),i("v-uni-view",{staticClass:"my-header-info"},[i("v-uni-view",{staticClass:"my-header-info-box"},[i("v-uni-text",{staticClass:"my-header-info-title"},[e._v("被关注")]),i("v-uni-text",[e._v(e._s(e.userInfo.follow_count))])],1),i("v-uni-view",{staticClass:"my-header-info-box"},[i("v-uni-text",{staticClass:"my-header-info-title"},[e._v("粉丝")]),i("v-uni-text",[e._v(e._s(e.userInfo.fans_count))])],1),i("v-uni-view",{staticClass:"my-header-info-box"},[i("v-uni-text",{staticClass:"my-header-info-title"},[e._v("积分")]),i("v-uni-text",[e._v(e._s(e.userInfo.fans_count?e.userInfo.fans_count:0))])],1)],1)],1):e._e(),i("v-uni-view",{staticClass:"my-content"},[e.userInfo?e._e():i("v-uni-view",{staticClass:"my-content-list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLoginPage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"my-content-list-title"},[i("v-uni-image",{staticClass:"company-logo",attrs:{src:n("6bf3"),mode:"aspectFill"}}),i("v-uni-text",[e._v("HI，您尚未登录,请点击登录")])],1),i("uni-icons",{attrs:{type:"arrowright",size:"14",color:"#666"}})],1),i("v-uni-view",{staticClass:"my-content-list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goMyself.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"my-content-list-title"},[i("uni-icons",{staticClass:"icons",attrs:{type:"contact",size:"16",color:"#666"}}),i("v-uni-text",[e._v("我的文章")])],1),i("uni-icons",{attrs:{type:"arrowright",size:"14",color:"#666"}})],1),i("v-uni-view",{staticClass:"my-content-list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goMessageBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"my-content-list-title"},[i("uni-icons",{staticClass:"icons",attrs:{type:"help",size:"16",color:"#666"}}),i("v-uni-text",[e._v("意见反馈")])],1),i("uni-icons",{attrs:{type:"arrowright",size:"14",color:"#666"}})],1),e.userInfo?i("v-uni-button",{staticClass:"sign-out",attrs:{type:"warn"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.siginOut.apply(void 0,arguments)}}},[e._v("退出")]):e._e()],1)],1)},o=[]}}]);