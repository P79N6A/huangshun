webpackJsonp([25],{"/iYC":function(t,e){},Rnp0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("3cXf"),a=i.n(s),l=i("a3Yh"),o=i.n(l),n=i("yclV"),r=i("2hMI"),c=i("wQFd"),d=i("ksh9"),p=i("405r"),h=i.n(p),u={data:function(){var t;return t={id:"",routeList:[],template_id:2,edittype:1,type:1,showright:!1,allVisibleStr:[],proList:[{id:1,name:"测试"},{id:2,name:"测试1"}],proId:[],fundList:[],fundId:[]},o()(t,"fundList",[]),o()(t,"chooseConditionDialog",!1),o()(t,"typeList",[{id:1,name:"发起人"},{id:2,name:"项目"},{id:4,name:"基金"}]),o()(t,"typeIdList",[1,2,4]),o()(t,"dialogTypeIdList",[1,2,4]),o()(t,"applierItem",{name:"",class:1,pattern:1,uid:[],uidList:[]}),o()(t,"applierList",[]),o()(t,"conditionList",[]),o()(t,"copierVisibleDialog",!1),o()(t,"copierList",[]),o()(t,"copierIdList",[]),o()(t,"fqVisibleDialog",!1),o()(t,"fqList",[]),o()(t,"fqIdList",[]),o()(t,"operatorVisibleDialog",!1),o()(t,"operatorList",[]),o()(t,"operatorIdList",[]),t},created:function(){var t=this;if(this.getProOrfund(),0!=this.routeList.length||(this.routeList=this.$route.meta.routeList),void 0!=this.$route.query.edittype&&void 0!=this.$route.query.type&&void 0!=this.$route.query.template_id&&""!=this.$route.query.edittype&&""!=this.$route.query.type&&""!=this.$route.query.template_id?(this.edittype=this.$route.query.edittype,this.type=this.$route.query.type,this.template_id=this.$route.query.template_id):this.$router.push({name:"applytempList"}),1==this.edittype);else{var e=JSON.parse(Object(n.m)("htcx_applyCondition"));for(var i in this.id=e.id,this.applierList=e.sp,e.condition)switch(i){case"1":this.fqIdList=this.changeArrayString(e.condition[i]);break;case"2":this.proId=this.changeArrayString(e.condition[i]);break;case"4":this.fundId=this.changeArrayString(e.condition[i])}this.operatorList=[],this.operatorIdList=[],void 0==e.handle.user||0==e.handle.user.length||(this.operatorList=e.handle.user,this.operatorList.forEach(function(e){t.operatorIdList.push(e.id)}))}this.getUserRule()},components:{applyTempRight:c.a,draggable:h.a,addPeopleModal:d.a},computed:{},mounted:function(){},watch:{filterText:function(t){this.$refs.tree.filter(t)}},methods:{commitCondition:function(){var t=this,e={},i=[],s={};if(0!=this.typeIdList.length)if(this.typeIdList.forEach(function(e){1==e?0!=t.fqIdList.length&&(s[1]=t.fqIdList.toString(),i.push(1)):2==e?0!=t.proId.length&&(s[2]=t.proId.toString(),i.push(2)):4==e&&0!=t.fundId.length&&(s[4]=t.fundId.toString(),i.push(4))}),0!=i.length){var l=[];this.applierList.forEach(function(t){var e={};e.name=t.name,e.uid=t.uid.toString(),e.class=t.class,e.pattern=t.pattern,l.push(e)}),e.sp=l,2!=this.type&&3!=this.type||(e.handle=this.operatorIdList.toString()),e.condition=s,e.type=i.toString(),2==this.edittype?Object(r.S)({id:this.id,data:a()(e)}).then(function(e){1==e.data.msgNo?(Object(n.g)("success","提交成功"),t.$router.push({name:"applytempProcessNew",query:{template_id:t.template_id,type:t.type}})):Object(n.g)("fail",e.data.message)}):1==this.edittype&&Object(r.U)({tid:this.template_id,data:a()(e)}).then(function(e){1==e.data.msgNo?(Object(n.g)("success","提交成功"),t.$router.push({name:"applytempProcessNew",query:{template_id:t.template_id,type:t.type}})):Object(n.g)("fail",e.data.message)})}else Object(n.g)("info","条件不能为空");else Object(n.g)("info","条件不能为空")},changeArrayString:function(t){var e=[];return t.toString().split(",").forEach(function(t){e.push(parseInt(t))}),e},getUserRule:function(){var t=this;Object(r._235)({is_all:1}).then(function(e){if(1==e.data.msgNo){var i=[];e.data.payload.forEach(function(t){void 0!=t.children&&t.children.forEach(function(t){i.push(t)})}),t.fqList=i.filter(function(e){return-1!=t.fqIdList.indexOf(e.id)}),t.allVisibleStr=i}else Object(n.g)("fail",e.data.message)})},commitChooseCondition:function(){var t=this;this.chooseConditionDialog=!1,this.typeIdList=this.dialogTypeIdList;[1,2,4].filter(function(e){return-1==t.typeIdList.indexOf(e)}).forEach(function(e){t.clearCondition(e)})},deleteCondition:function(t){this.typeIdList.splice(this.typeIdList.indexOf(t),1),this.clearCondition(t)},clearCondition:function(t){1==t?(this.fqList=[],this.fqIdList=[]):2==t?this.proId=[]:4==t&&(this.fundId=[])},chooseCondition:function(){this.chooseConditionDialog=!0,this.dialogTypeIdList=this.typeIdList},getProOrfund:function(){var t=this;Object(r.L)({type:1}).then(function(e){1==e.data.msgNo&&(t.proList=e.data.payload.data)}),Object(r.L)({type:2}).then(function(e){1==e.data.msgNo&&(t.fundList=e.data.payload.data)})},addApplyPeople:function(){this.showright=!0,this.applierItem={rightType:1,name:"",class:1,pattern:2,uid:[],user:[]}},editApplyPeople:function(t,e){this.applierItem=e,this.applierItem.rightType=2,this.applierItem.rightIndex=t,this.showright=!0},deleteApplyPeople:function(t){this.applierList.splice(t,1)},changerightshow:function(t){this.showright=t},setApplyData:function(t){var e={};e.class=t.class,e.name=t.name,e.pattern=t.pattern,e.uid=t.uid,e.user=t.user,1==t.rightType?this.applierList.push(e):this.applierList[t.rightIndex]=e,this.showright=!1},addOperatorPeople:function(){this.operatorVisibleDialog=!0},addSpPeople:function(){this.fqVisibleDialog=!0},deleteUser:function(t,e,i){var s=t+"IdList";this[t+"List"].splice(i,1),this[s]=this[s].filter(function(t){return t!=e})},changeModalShow:function(t,e){this[e+"VisibleDialog"]=t},getModaldata:function(t,e){this[t]=e},getImgurl:function(t){t.currentTarget.src="../../static/images/header_userimg.png",t.onerror=null}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personal-content-body"},[s("div",{staticClass:"applytempbox"},[s("div",{staticClass:"table-content",class:{"table-content-hide":t.showright}},[s("div",{staticClass:"clear table-content-title"},[1==t.edittype?s("div",{staticClass:"left"},[t._v("新增审批条件")]):s("div",{staticClass:"left"},[t._v("修改审批条件")])]),t._v(" "),s("div",{staticClass:"table-group"},[s("div",{staticClass:"table-group-content"},[s("div",{staticClass:"clear table-group-title"},[s("div",{staticClass:"left breadcrumb"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.routeList,function(e,i){return s("el-breadcrumb-item",{key:i,attrs:{to:{name:e.name,query:e.query}}},[t._v(t._s(e.name_str))])}))],1),t._v(" "),s("div",{staticClass:"line"})]),t._v(" "),s("div",{staticClass:"applytemppro_box"},[s("div",{attrs:{classs:"atp_group"}},[s("div",{staticClass:"atp_group_title"},[t._v("\n                当审批同时满足以下条件时\n              ")]),t._v(" "),s("div",{staticClass:"atp_group_content"},[s("div",{staticClass:"atp_peoplelist"},[-1!=t.typeIdList.indexOf(1)?s("div",{staticClass:"atp_peopleitem marginb_30"},[s("div",{staticClass:"atp_peopleitem_left"},[t._v("发起人")]),t._v(" "),s("div",{staticClass:"atp_peopleitem_right atp_peopleitem_right_hasdelete"},[t._l(t.fqList,function(e,i){return 0!=t.fqList.length?s("div",{staticClass:"atp_peopleitem_addeditem marginr_10"},[s("span",{staticClass:"iconfont icon-guanbi",on:{click:function(s){t.deleteUser("fq",e.id,i)}}}),t._v(" "),s("div",{staticClass:"atp_peopleitem_addeditem_top"},[s("div",{staticClass:"atp_peopleitem_peoplebox"},[s("img",{attrs:{src:e.url},on:{error:t.getImgurl}}),t._v(" "),s("span",[t._v(t._s(e.name))])])])]):t._e()}),t._v(" "),s("div",{staticClass:"atp_peopleitem_text alink",on:{click:t.addSpPeople}},[t._v("编辑")])],2),t._v(" "),s("div",{staticClass:"atp_peopleitem_deletelink",on:{click:function(e){t.deleteCondition(1)}}},[t._v("删除该条件")])]):t._e(),t._v(" "),-1!=t.typeIdList.indexOf(2)?s("div",{staticClass:"atp_peopleitem marginb_30"},[s("div",{staticClass:"atp_peopleitem_left"},[t._v("项目")]),t._v(" "),s("div",{staticClass:"atp_peopleitem_right atp_peopleitem_right_hasdelete"},[s("div",{staticClass:"atp_peopleitem_inputbox"},[s("el-select",{attrs:{placeholder:"请选择",size:"small",multiple:""},model:{value:t.proId,callback:function(e){t.proId=e},expression:"proId"}},t._l(t.proList,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),s("div",{staticClass:"atp_peopleitem_deletelink",on:{click:function(e){t.deleteCondition(2)}}},[t._v("删除该条件")])])]):t._e(),t._v(" "),-1!=t.typeIdList.indexOf(4)?s("div",{staticClass:"atp_peopleitem marginb_30"},[s("div",{staticClass:"atp_peopleitem_left"},[t._v("基金")]),t._v(" "),s("div",{staticClass:"atp_peopleitem_right atp_peopleitem_right_hasdelete"},[s("div",{staticClass:"atp_peopleitem_inputbox"},[s("el-select",{attrs:{placeholder:"请选择",size:"small",multiple:""},model:{value:t.fundId,callback:function(e){t.fundId=e},expression:"fundId"}},t._l(t.fundList,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),s("div",{staticClass:"atp_peopleitem_deletelink",on:{click:function(e){t.deleteCondition(4)}}},[t._v("删除该条件")])])]):t._e(),t._v(" "),s("div",{staticClass:"atp_peopleitem marginb_30"},[s("div",{staticClass:"atp_peopleitem_left"}),t._v(" "),s("div",{staticClass:"atp_peopleitem_right"},[s("div",{staticClass:"atp_peopleitem_right_link",on:{click:t.chooseCondition}},[s("span",{staticClass:"fsize_18"},[t._v("+")]),t._v("更多条件")])])])])])]),t._v(" "),s("div",{attrs:{classs:"atp_group"}},[s("div",{staticClass:"atp_group_title"},[t._v("对应审批人")]),t._v(" "),s("div",{staticClass:"atp_group_content"},[s("div",{staticClass:"atp_peoplelist"},[s("div",{staticClass:"atp_peopleitem"},[s("div",{staticClass:"atp_peopleitem_left"},[t._v("审批人")]),t._v(" "),s("div",{staticClass:"atp_peopleitem_right"},[s("draggable",{attrs:{options:{group:{name:"control"}}},model:{value:t.applierList,callback:function(e){t.applierList=e},expression:"applierList"}},[s("transition-group",{staticClass:"flex flex_wrap",attrs:{tag:"div",id:"apply"}},t._l(t.applierList,function(e,a){return s("div",{key:a,staticClass:"flex"},[s("div",{staticClass:"atp_peopleitem_addeditem",on:{click:function(i){t.editApplyPeople(a,e)}}},[s("span",{staticClass:"iconfont icon-guanbi",on:{click:function(e){e.stopPropagation(),t.deleteApplyPeople(a)}}}),t._v(" "),s("div",{staticClass:"atp_peopleitem_addeditem_top"},[1==e.class?s("div",{staticClass:"atp_peopleitem_peoplebox"},[s("img",{attrs:{src:i("0IK3")}}),t._v(" "),s("span",[t._v("主管理员")])]):t._e(),t._v(" "),t._l(e.user,function(a){return 2==e.class||3==e.class?s("div",{staticClass:"atp_peopleitem_peoplebox"},[2==e.class?s("img",{attrs:{src:a.url}}):s("img",{attrs:{src:i("0IK3")}}),t._v(" "),s("span",[t._v(t._s(a.name))])]):t._e()})],2),t._v(" "),""!=e.name?s("div",{staticClass:"atp_peopleitem_addeditem_bottom"},[t._v("\n                                "+t._s(e.name)+"\n                              ")]):t._e()]),t._v(" "),s("div",{staticClass:"atp_peopleitem_icon marginlr_10"},[s("span",{staticClass:"iconfont icon-xiajiantou"})]),t._v(" "),a==t.applierList.length-1?s("div",{staticClass:"atp_peopleitem_icon",on:{click:t.addApplyPeople}},[s("div",{staticClass:"atp_peopleitem_addicon"})]):t._e()])}))],1),t._v(" "),0==t.applierList.length?s("div",{staticClass:"atp_peopleitem_icon",on:{click:t.addApplyPeople}},[s("div",{staticClass:"atp_peopleitem_addicon"})]):t._e()],1)]),t._v(" "),2==t.type||3==t.type?s("div",{staticClass:"atp_peopleitem"},[s("div",{staticClass:"atp_peopleitem_left"},[t._v("经办人")]),t._v(" "),s("div",{staticClass:"atp_peopleitem_right"},[t._l(t.operatorList,function(e,i){return 0!=t.operatorList.length?s("div",{staticClass:"atp_peopleitem_addeditem marginr_10"},[s("span",{staticClass:"iconfont icon-guanbi",on:{click:function(s){t.deleteUser("operator",e.id,i)}}}),t._v(" "),s("div",{staticClass:"atp_peopleitem_addeditem_top"},[s("div",{staticClass:"atp_peopleitem_peoplebox"},[s("img",{attrs:{src:e.url},on:{error:t.getImgurl}}),t._v(" "),s("span",[t._v(t._s(e.name))])])])]):t._e()}),t._v(" "),s("div",{staticClass:"atp_peopleitem_icon",on:{click:t.addOperatorPeople}},[s("div",{staticClass:"atp_peopleitem_addicon"})])],2)]):t._e()])])]),t._v(" "),s("div",{staticClass:"full_line"}),t._v(" "),s("div",{staticClass:"btn_box"},[s("div",{staticClass:"btn-blue",on:{click:t.commitCondition}},[t._v("保存")])])])])]),t._v(" "),s("add-people-modal",{attrs:{visibleDialog:t.fqVisibleDialog,name:"fq",title:"选择发起人",selectedId:t.fqIdList},on:{changeshow:t.changeModalShow,setData:t.getModaldata}}),t._v(" "),s("add-people-modal",{attrs:{visibleDialog:t.operatorVisibleDialog,name:"operator",title:"选择经办人",selectedId:t.operatorIdList},on:{changeshow:t.changeModalShow,setData:t.getModaldata}})],1),t._v(" "),s("apply-temp-right",{attrs:{showright:t.showright,data:t.applierItem},on:{changeshow:t.changerightshow,setData:t.setApplyData}}),t._v(" "),s("el-dialog",{staticClass:"choosePeopleDialog",attrs:{title:"选择条件",visible:t.chooseConditionDialog,width:"600px",center:"","append-to-body":!0},on:{"update:visible":function(e){t.chooseConditionDialog=e}}},[s("div",{staticClass:"dialog_content"},[s("div",{staticClass:"marginb_20"},[t._v("请选择用来区分审批流程的条件字段")]),t._v(" "),s("el-checkbox-group",{model:{value:t.dialogTypeIdList,callback:function(e){t.dialogTypeIdList=e},expression:"dialogTypeIdList"}},t._l(t.typeList,function(e){return s("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.name))])}))],1),t._v(" "),s("div",{staticClass:"dialog_footer clear",attrs:{slot:"footer"},slot:"footer"},[s("button",{staticClass:"dialog-btn-submit btn-blue",on:{click:t.commitChooseCondition}},[t._v("确定")]),t._v(" "),s("button",{staticClass:"dialog-btn-submit btn-blue-border ",on:{click:function(e){t.chooseConditionDialog=!1}}},[t._v("取消")])])])],1)])},staticRenderFns:[]};var v=i("C7Lr")(u,_,!1,function(t){i("cUub")},"data-v-67925cd0",null);e.default=v.exports},cUub:function(t,e){},o35S:function(t,e,i){"use strict";var s=i("2hMI"),a=i("yclV"),l={name:"draglist",data:function(){return{template_id:"",filterText:"",visibleList:[],defaultProps:{children:"children",label:"name"},visibleCheckedall:!1,checkedVisibleStr:[],defaultChechedArr:[],allVisibleStr:[]}},props:["visibleDialog","selectedId","name","title"],watch:{filterText:function(t){this.$refs.tree.filter(t)},visibleDialog:function(){this.getUserRule(this.selectedId)}},mounted:function(){},methods:{addUnionId:function(t){for(var e in t)t[e].children?(this.$set(t[e],"disabled",!0),this.addUnionId(t[e].children)):t[e].is_user?t[e].id=t[e].id+"-"+t[e].one_department_id:this.$set(t[e],"disabled",!0);return t},changeshow:function(t){this.$emit("changeshow",t,this.name)},getImgurl:function(t){t.currentTarget.src="../../static/images/header_userimg.png",t.onerror=null},getUserRule:function(t){var e=this;Object(s._149)({type:2}).then(function(i){if(1==i.data.msgNo){var s=e.addUnionId(i.data.payload);e.visibleList=s;var l=s,o=[];l.forEach(function(i){i.id=-i.id,void 0!=i.children&&0!=i.children.length||(i.disabled=!0),void 0!=i.children&&(i.children.forEach(function(t){o.push(t.id)}),e.checkedVisibleStr=i.children.filter(function(e){return-1!=t.indexOf(e.id)}))}),e.allVisibleStr=o,e.visibleList=l,0!=t.length?(t.length==o.length?e.visibleCheckedall=!0:e.visibleCheckedall=!1,e.setCheckedKeyStr(t),e.$refs.tree.setCheckedKeys(t)):(e.visibleCheckedall=!1,e.$refs.tree.setCheckedKeys([]))}else Object(a.g)("fail",i.data.message)})},filterNode:function(t,e){return!t||-1!==e.name.toString().indexOf(t)},changeVisibleCheckedall:function(t){t?(this.$refs.tree.setCheckedKeys(this.allVisibleStr),this.setCheckedKeyStr(this.allVisibleStr)):(this.$refs.tree.setCheckedKeys([]),this.setCheckedKeyStr([]))},visivleListChange:function(t,e){var i=[];e.checkedNodes.forEach(function(t){if(void 0==t.children){var e={};e.id=t.id,e.url=t.url,e.name=t.name,i.push(e)}}),this.checkedVisibleStr=i,this.checkedVisibleStr.length==this.allVisibleStr.length?this.visibleCheckedall=!0:this.visibleCheckedall=!1},setCheckedKeyStr:function(t){var e=[];this.visibleList.forEach(function(i){void 0!=i.children&&(e=e.concat(i.children.filter(function(e){return-1!=t.indexOf(e.id.toString())||-1!=t.indexOf(e.id)})))}),this.checkedVisibleStr=e},compare:function(t){return function(e,i){return e[t]-i[t]}},deleteCheckedVisivle:function(t){var e=this;this.checkedVisibleStr.forEach(function(i,s){t==i.id&&e.checkedVisibleStr.splice(s,1)});var i=[];this.checkedVisibleStr.forEach(function(t,e){i.push(t.id)}),this.checkedVisibleStr.length==this.allVisibleStr.length?this.visibleCheckedall=!0:this.visibleCheckedall=!1,this.$refs.tree.setCheckedKeys(i)},commitVisible:function(){var t=[];this.checkedVisibleStr=this.decodeSelectedId(this.checkedVisibleStr),this.checkedVisibleStr.forEach(function(e){t.push(e.id)}),this.$emit("setData",this.name+"List",this.checkedVisibleStr),this.$emit("setData",this.name+"IdList",t),this.$emit("getData",this.checkedVisibleStr,t),this.filterText="",this.changeshow(!1)},decodeSelectedId:function(t){var e=[];for(var i in t)e=t[i].id.split("-"),t[i].id=e[0];return t},visibleClose:function(){this.template_id="",this.checkedVisibleStr=[],this.$refs.tree.setCheckedKeys([]),this.visibleCheckedall=!1,this.changeshow(!1)}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{staticClass:"choosePeopleDialog",attrs:{title:t.title,visible:t.visibleDialog,width:"800px",center:"","append-to-body":!0,"before-close":t.visibleClose},on:{"update:visible":function(e){t.visibleDialog=e}}},[i("div",{staticClass:"dialog_content flex"},[i("div",{staticClass:"dialog_content_content"},[i("div",{staticClass:"dialog_content_content_title"},[t._v("选择人员")]),t._v(" "),i("div",[i("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}},[i("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),i("el-tree",{ref:"tree",staticClass:"dialog_content_content_tree",attrs:{data:t.visibleList,"show-checkbox":"","node-key":"id","default-checked-keys":t.defaultChechedArr,"filter-node-method":t.filterNode,"check-on-click-node":!0,props:t.defaultProps},on:{check:t.visivleListChange},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.node;return e.data,i("span",{staticClass:"custom_tree_node flex"},[void 0!=s.data.url?i("img",{attrs:{src:s.data.url},on:{error:t.getImgurl}}):t._e(),t._v("\n              \t\t\t"+t._s(s.data.name)+"\n           \t \t\t")])}}])})],1),t._v(" "),i("div",{staticClass:"dialog_content_content"},[i("div",{staticClass:"dialog_content_content_title"},[t._v("已选人员")]),t._v(" "),i("div",{staticClass:"selected_list"},t._l(t.checkedVisibleStr,function(e){return i("div",{staticClass:"selected_item"},[i("img",{staticClass:"selected_item_headimg",attrs:{src:e.url},on:{error:t.getImgurl}}),t._v(t._s(e.name)+"\n\t\t\t\t\t\t"),i("i",{staticClass:"el-icon-error",on:{click:function(i){t.deleteCheckedVisivle(e.id)}}})])}))])]),t._v(" "),i("div",{staticClass:"dialog_footer clear",attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"dialog-btn-submit btn-blue",on:{click:t.commitVisible}},[t._v("确定")]),t._v(" "),i("button",{staticClass:"dialog-btn-submit btn-blue-border ",on:{click:t.visibleClose}},[t._v("取消")])])])},staticRenderFns:[]};var n=i("C7Lr")(l,o,!1,function(t){i("zsTu")},"data-v-60c1ad58",null);e.a=n.exports},wQFd:function(t,e,i){"use strict";var s=i("3cXf"),a=i.n(s),l=i("o35S"),o=i("yclV"),n=i("2hMI"),r={name:"draglist",data:function(){return{radio2:"",currentApplierItem:{name:"",class:1,pattern:2,uid:[],uidList:[]},roleid:"",userList:[],userIdList:[],userVisibleDialog:!1,applierTypeId:1,applierTypeList:[{id:1,name:"主管"},{id:2,name:"指定成员"},{id:3,name:"角色"}],roleList:[{id:1,name:"主管"},{id:2,name:"指定成员"},{id:3,name:"角色"}],applyTypeId:2,applyTypeList:[{id:2,name:"会签（须所有审批人同意）"},{id:3,name:"或签（一名审批人同意或拒绝即可）"}]}},props:["showright","data"],components:{addPeopleModal:l.a},watch:{showright:function(){this.currentApplierItem=JSON.parse(a()(this.data)),2==this.data.class?(this.userIdList=this.data.uid.toString().split(","),this.userList=this.data.user):(this.userIdList=[],this.userList=[]),3==this.data.class?this.roleid=parseInt(this.data.uid):this.roleid="",this.initData()}},methods:{initData:function(){var t=this;Object(n._144)().then(function(e){1==e.data.msgNo&&(t.roleList=e.data.payload,0==t.roleList.length?t.roleid="":""==t.roleid&&(t.roleid=t.roleList[0].id))})},changeshow:function(t){this.$emit("changeshow",t)},commitData:function(){var t=this,e=JSON.parse(a()(this.currentApplierItem));if(1==e.class)e.user=[],e.uid=[];else if(2==e.class){if(0==this.userIdList.length)return void Object(o.g)("info","指定成员不能为空～");e.uid=this.userIdList,e.user=this.userList}else{if(""==this.roleid||null==this.roleid)return void Object(o.g)("info","角色不能为空～");e.uid=this.roleid,e.user=this.roleList.filter(function(e){return e.id==t.roleid})}this.$emit("setData",e),this.changeshow(!1)},clearApplier:function(){this.userIdList=[],this.userList=[]},addCopyPeople:function(){this.userVisibleDialog=!0},changeModalShow:function(t,e){this[e+"VisibleDialog"]=t},getModaldata:function(t,e){this[t]=e},getImgurl:function(t){t.currentTarget.src="../../static/images/header_userimg.png",t.onerror=null}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"foldbox"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showright,expression:"showright"}],staticClass:"table_right"},[i("div",{staticClass:"table_right_cover",on:{click:function(e){t.changeshow(!1)}}}),t._v(" "),i("transition",{attrs:{name:"fold"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showright,expression:"showright"}],staticClass:"table_right_body"},[i("div",{staticClass:"table_right_title"},[t._v("\n\t\t\t\t\t\t设置审批人\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"full_line marginb_30"}),t._v(" "),i("div",{staticClass:"table_right_content"},[i("div",{staticClass:"atp_peoplelist"},[i("div",{staticClass:"atp_peopleitem"},[i("div",{staticClass:"atp_peopleitem_left"},[t._v("审批名称")]),t._v(" "),i("div",{staticClass:"atp_peopleitem_right"},[i("div",{staticClass:"atp_peopleitem_inputbox marginb_20"},[i("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.currentApplierItem.name,callback:function(e){t.$set(t.currentApplierItem,"name",e)},expression:"currentApplierItem.name"}})],1)])]),t._v(" "),i("div",{staticClass:"full_line marginb_20"}),t._v(" "),i("div",{staticClass:"atp_peopleitem marginb_30"},[i("div",{staticClass:"atp_peopleitem_left"},[t._v("审批人类别")]),t._v(" "),i("div",{staticClass:"atp_peopleitem_right"},[i("div",{staticClass:"marginb_20"},[i("el-radio-group",{staticClass:"atp_radiogroup flex",model:{value:t.currentApplierItem.class,callback:function(e){t.$set(t.currentApplierItem,"class",e)},expression:"currentApplierItem.class"}},t._l(t.applierTypeList,function(e,s){return i("el-radio",{key:s,staticClass:"atp_radioitem",attrs:{label:e.id}},[t._v(t._s(e.name))])}))],1),t._v(" "),1!=t.currentApplierItem.class?i("div",{staticClass:"full_line marginb_20"}):t._e(),t._v(" "),2==t.currentApplierItem.class?i("div",{staticClass:"flex"},[0!=t.userList.length?i("div",{staticClass:"atp_peopleitem_addeditem marginr_10"},[i("span",{staticClass:"iconfont icon-guanbi",on:{click:t.clearApplier}}),t._v(" "),i("div",{staticClass:"atp_peopleitem_addeditem_top"},t._l(t.userList,function(e){return i("div",{staticClass:"atp_peopleitem_peoplebox"},[i("img",{attrs:{src:e.url},on:{error:t.getImgurl}}),t._v(" "),i("span",[t._v(t._s(e.name))])])}))]):t._e(),t._v(" "),i("div",{staticClass:"atp_btnbox flex_shrink"},[0==t.userList.length?i("div",{staticClass:"btn-blue",on:{click:t.addCopyPeople}},[t._v("添加成员")]):i("div",{staticClass:"btn-blue",on:{click:t.addCopyPeople}},[t._v("修改成员")])])]):t._e(),t._v(" "),3==t.currentApplierItem.class?i("div",{staticClass:"atp_peopleitem_inputbox"},[i("el-select",{attrs:{placeholder:"请选择角色",size:"small"},model:{value:t.roleid,callback:function(e){t.roleid=e},expression:"roleid"}},t._l(t.roleList,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1):t._e()])]),t._v(" "),i("div",{staticClass:"full_line marginb_20"}),t._v(" "),i("div",{staticClass:"atp_peopleitem marginb_30"},[i("div",{staticClass:"atp_peopleitem_left"},[t._v("审批方式\n\t\t\t\t\t\t\t\t\t"),i("el-tooltip",{staticClass:"atp_group_title_tip",attrs:{effect:"dark",content:"当审批人含有多人时的审批方式",placement:"top"}},[i("i",{staticClass:"el-icon-question"})])],1),t._v(" "),i("div",{staticClass:"atp_peopleitem_right"},[i("div",[i("el-radio-group",{staticClass:"atp_radiogroup_column flex_column",model:{value:t.currentApplierItem.pattern,callback:function(e){t.$set(t.currentApplierItem,"pattern",e)},expression:"currentApplierItem.pattern"}},t._l(t.applyTypeList,function(e,s){return i("el-radio",{key:s,staticClass:"atp_radioitem",attrs:{label:e.id}},[t._v(t._s(e.name))])}))],1)])])])]),t._v(" "),i("div",{staticClass:"table_right_bottom flex"},[i("div",{staticClass:"btn-blue",on:{click:t.commitData}},[t._v("确定")]),t._v(" "),i("div",{staticClass:"btn-blue-border",on:{click:function(e){t.changeshow(!1)}}},[t._v("取消")])])])])],1)]),t._v(" "),i("add-people-modal",{attrs:{visibleDialog:t.userVisibleDialog,name:"user",selectedId:t.userIdList,title:"选择指定成员"},on:{changeshow:t.changeModalShow,setData:t.getModaldata}})],1)},staticRenderFns:[]};var d=i("C7Lr")(r,c,!1,function(t){i("/iYC")},"data-v-0c205c46",null);e.a=d.exports},zsTu:function(t,e){}});
//# sourceMappingURL=25.cbe93127f07f8c1a5a33.js.map