webpackJsonp([178],{n8hK:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("yclV"),n=i("2hMI"),a={data:function(){return{applyTypelist:[{name:"出勤休假",isPermissions:!1,child:[]},{name:"用印申请",isPermissions:!1,child:[]},{name:"签字申请",isPermissions:!1,child:[]},{name:"被投",isPermissions:!1,child:[]}],permissionsManageList:{name:"系统管理",isPermissions:!0,child:[]}}},created:function(){var e=this;Object(n._135)({}).then(function(t){1==t.data.msgNo&&t.data.payload.forEach(function(t){t.icon="../../static/images"+t.icon,e.applyTypelist[parseInt(t.type)-1].child.push(t)})}),Object(n._238)({user_id:Object(s.m)("htcx_uid"),specMenuId:20}).then(function(t){1==t.data.msgNo?e.permissionsManageList.child=t.data.payload:e.permissionsManageList.child=[]})},components:{},computed:{},mounted:function(){},methods:{beforeRouteEnter:function(e,t,i){i(function(t){t.realList=e.meta.routeList})},gotoCreateApply:function(e){this.$router.push({name:"applyList",query:{template_id:e.id,aType:e.type,aName:e.name,from:3}})},getImgurl:function(e){e.currentTarget.src="../../static/images/header_userimg.png",e.onerror=null},goPermissionsMoudle:function(e){this.$router.push({name:e.name,query:{from:3}})}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"personal-content-body"},[i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("div",{staticClass:"content-body"},[e._l(e.applyTypelist,function(t){return 0!=t.child.length?i("div",{staticClass:"createapply-home-icongroup"},[i("div",{staticClass:"createapply-home-icongroup-title"},[e._v("\n          "+e._s(t.name)+"\n        ")]),e._v(" "),i("div",{staticClass:"createapply-home-icon-itemlist"},e._l(t.child,function(t){return i("div",{staticClass:"createapply-home-iconitem",on:{click:function(i){e.gotoCreateApply(t)}}},[i("img",{attrs:{src:t.icon}}),e._v(" "),i("div",[e._v(e._s(t.name))]),e._v(" "),t.num>0?i("span"):e._e()])}))]):e._e()}),e._v(" "),0!=e.permissionsManageList.child.length?i("div",{staticClass:"createapply-home-icongroup"},[i("div",{staticClass:"createapply-home-icongroup-title"},[e._v("\n          "+e._s(e.permissionsManageList.name)+"\n        ")]),e._v(" "),i("div",{staticClass:"createapply-home-icon-itemlist"},e._l(e.permissionsManageList.child,function(t){return i("div",{staticClass:"createapply-home-iconitem",on:{click:function(i){e.goPermissionsMoudle(t)}}},[i("img",{attrs:{src:"../static/images/adminhomepage_"+t.name+".png"}}),e._v(" "),i("div",[e._v(e._s(t.node_name))])])}))]):e._e()],2)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-title clear"},[t("div",{staticClass:"left"},[this._v("行政管理")])])}]};var o=i("C7Lr")(a,c,!1,function(e){i("ya4D")},"data-v-286c0ca9",null);t.default=o.exports},ya4D:function(e,t){}});
//# sourceMappingURL=178.b4eefb5d7010bd76344c.js.map