webpackJsonp([183],{By70:function(t,e){},eG4n:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3cXf"),l=a.n(i),s=a("2hMI"),r=a("lzZH"),d=a("yclV"),n={inject:["reload"],data:function(){return{id:"",is_add_page:"",count:"",isEditDetailShow:!0,datalistDetail:[],datalistTotal:[{event_name:"",plan_receive_date:"",quit_date:"",quit_method:null,distribute_capital:0,distribute_profit:0,distribute_rate:0,distribute_method:"现金分配",quit_times:0,unit:decodeURIComponent(this.$route.query.unit),remark:"",event_count:""}],currentIndex:-1,currentIndexDetail:-1,typeList:[{value:1,label:"境内上市"},{value:2,label:"境外上市"},{value:3,label:"新三板挂牌"},{value:4,label:"协议转让"},{value:5,label:"整体收购"},{value:6,label:"企业回购"},{value:7,label:"清算"},{value:8,label:"被投企业分红"}],editorTotalData:null,editorDetailData:null,fp_time:""}},created:function(){this.id=this.$route.query.id,this.$route.query.add?(this.is_add_page=this.$route.query.add,this.getAddInfo()):(this.count=this.$route.query.count,this.getInitData())},mounted:function(){this.calculate()},methods:{getAddInfo:function(){var t=this;Object(r.Y)({direct_invest_id:this.id}).then(function(e){if(1==e.data.msgNo){var a=e.data.payload.data;t.fp_time=e.data.payload.total+1,a.forEach(function(t,e){t.accumulation_distribute=parseFloat(t.accumulation_distribute),t.index=e+1,t.capital_distribute=0,t.profit_distribute_b=0,t.profit_distribute_a=0,t.distribute_amount=0,t.all_distribute_amount=t.accumulation_distribute,t.all_distribute_rate=0}),t.datalistDetail=a}else Object(d.g)("info",e.data.message)})},deleteDetailItem:function(t,e){this.datalistDetail.splice(t,1),this.calculate()},saveAddInfo:function(){var t=this,e=JSON.parse(l()(this.datalistTotal[0]));this.is_add_page||(e.distribute_rate=e.distribute_rate),e.direct_invest_id=this.id;var a=[];JSON.parse(l()(this.datalistDetail)).forEach(function(e,i){var l={fund_name:e.name,real_amount:e.paied,real_rate:e.paied_rate/100,capital_distribute:e.capital_distribute,profit_distribute_b:e.profit_distribute_b,profit_distribute_a:e.profit_distribute_a,distribute_amount:e.distribute_amount,all_distribute_amount:e.all_distribute_amount,all_distribute_rate:e.all_distribute_rate,detail_quit_date:e.detail_quit_date};t.is_add_page?(l.p_id=e.p_id,l.sub_fund_type=parseInt(e.sub_fund_type)):(l.id=e.id,l.sub_fund_type=parseInt(e.sub_fund_type)),a.push(l)}),e.distribute_detail_infos=l()(a),Object(r._16)(e).then(function(e){1==e.data.msgNo?(Object(d.g)("success","保存成功"),t.$router.push({name:"directInvestProjectRunCashFlowHome",query:{id:t.id,unit:t.$route.query.unit,name:t.$route.query.name}})):Object(d.g)("info",e.data.message)})},addCancel:function(){this.$router.push({name:"directInvestProjectRunCashFlowHome",query:{id:this.id,unit:this.$route.query.unit,name:this.$route.query.name}})},getInitData:function(){var t=this;Object(r.X)({id:this.$route.query.jkId,c_type:this.$route.query.c_type}).then(function(e){if(1==e.data.msgNo){var a=e.data.payload[0];t.datalistDetail=a.sub_funds,t.datalistDetail.forEach(function(t,e){t.index=e+1,t.name=t.fund_name,t.paied=t.real_amount,t.paied_rate=100*t.real_rate}),t.datalistTotal=e.data.payload,delete t.datalistTotal[0].sub_funds}else Object(d.g)("info",e.data.message)})},editTotal:function(t,e){this.currentIndex=t,this.editorTotalData=JSON.parse(l()(e))},editCancelTotal:function(t,e){this.currentIndex=-1,this.datalistTotal[t]=JSON.parse(l()(this.editorTotalData))},editSaveTotal:function(t,e){this.currentIndex=-1},editDetail:function(t,e){this.currentIndexDetail=t,this.editorDetailData=JSON.parse(l()(e))},editCancelDetail:function(t,e){this.currentIndexDetail=-1,this.datalistDetail[t]=JSON.parse(l()(this.editorDetailData)),this.calculate()},editSaveDetail:function(t,e){this.currentIndexDetail=-1},calculate:function(t){void 0!=t&&parseFloat(this.datalistDetail[t].paied)<parseFloat(this.datalistDetail[t].capital_distribute)&&(Object(d.g)("info","分配本金应小于或等于实缴出资!"),this.datalistDetail[t].capital_distribute=0);this.datalistDetail,this.datalistTotal[0];var e=0,a=0,i=0;this.datalistDetail.forEach(function(t,l){""==t.capital_distribute&&(t.capital_distribute=0),""==t.profit_distribute_a&&(t.profit_distribute_a=0),""==t.distribute_amount&&(t.distribute_amount=0),0!==t.paied&&"0"!==t.paied&&"0.0"!==t.paied&&"0.00"!==t.paied||(t.paied=0),t.distribute_amount=parseFloat(t.capital_distribute)+parseFloat(t.profit_distribute_a),t.all_distribute_amount=parseFloat(t.distribute_amount)+parseFloat(t.accumulation_distribute),t.paied?(t.all_distribute_rate=(parseFloat(t.capital_distribute)+parseFloat(t.profit_distribute_b))/parseFloat(t.paied)*100,t.all_distribute_rate=t.all_distribute_rate.toFixed(3)):t.all_distribute_rate=0,e+=parseFloat(t.capital_distribute),a+=parseFloat(t.profit_distribute_b),i+=parseFloat(t.distribute_amount)}),this.datalistTotal[0].distribute_capital=e,this.datalistTotal[0].distribute_profit=a,this.datalistTotal[0].distribute_amount=i},chooseDate:function(t){if(!t)return this.datalistTotal[0].event_name="",void(this.datalistTotal[0].event_count="");this.getEventCountData()},getEventCountData:function(){var t=this,e=this.datalistTotal[0].plan_receive_date;if(this.is_add_page)var a="";else a=this.datalistTotal[0].id;Object(s._169)({type:5,id:this.id,cash_type:1,date:e,fund_type:"",fund_id:"",event_id:a}).then(function(e){1==e.data.msgNo?(t.datalistTotal[0].event_name=e.data.payload.event_name,t.datalistTotal[0].event_count=e.data.payload.event_count):Object(d.g)("info",e.data.message)})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("div",{staticClass:"cash_flow_table_box"},[t._m(0),t._v(" "),i("div",{staticClass:"cash_flow_table table"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.datalistTotal,border:"","empty-text":"","max-height":"350"}},[i("el-table-column",{attrs:{prop:"plan_receive_date",label:"计划到账日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-date-picker",{attrs:{disabled:e.$index!=t.currentIndex&&!t.is_add_page,type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",editable:!1},on:{change:t.chooseDate},model:{value:e.row.plan_receive_date,callback:function(a){t.$set(e.row,"plan_receive_date",a)},expression:"scope.row.plan_receive_date"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"event_name",label:"事件",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"项目名称-第N次分配",disabled:e.$index!=t.currentIndex&&!t.is_add_page,clearable:""},model:{value:e.row.event_name,callback:function(a){t.$set(e.row,"event_name",a)},expression:"scope.row.event_name"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"quit_date",label:"退出日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-date-picker",{attrs:{editable:!1,disabled:e.$index!=t.currentIndex&&!t.is_add_page,type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.row.quit_date,callback:function(a){t.$set(e.row,"quit_date",a)},expression:"scope.row.quit_date"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"quit_method",label:"退出方式",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-select",{attrs:{placeholder:"请选择",clearable:"",disabled:e.$index!=t.currentIndex&&!t.is_add_page},model:{value:e.row.quit_method,callback:function(a){t.$set(e.row,"quit_method",a)},expression:"scope.row.quit_method"}},t._l(t.typeList,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"distribute_capital",label:"分配本金(万元)",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"distribute_profit",label:"分配收益(万元)(税前)",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"distribute_amount",label:"分配总额(万元)",width:"150"}}),t._v(" "),t.is_add_page?t._e():i("el-table-column",{attrs:{prop:"distribute_rate",label:"本金占比",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"flex_between"},[i("el-input",{attrs:{placeholder:"请填写",disabled:e.$index!=t.currentIndex&&!t.is_add_page,clearable:""},model:{value:e.row.distribute_rate,callback:function(a){t.$set(e.row,"distribute_rate",a)},expression:"scope.row.distribute_rate"}}),t._v("\n\t\t\t\t\t\t\t  %\n\t\t\t\t\t\t")],1)]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"distribute_method",label:"分配方式",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.distribute_method))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"unit",label:"币种",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.unit))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"remark",label:"备注",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"请输入内容",disabled:e.$index!=t.currentIndex&&!t.is_add_page,clearable:""},model:{value:e.row.remark,callback:function(a){t.$set(e.row,"remark",a)},expression:"scope.row.remark"}})]}}])}),t._v(" "),t.is_add_page?t._e():i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.$index!=t.currentIndex?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editTotal(e.$index,e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),e.$index==t.currentIndex?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editSaveTotal(e.$index,e.row)}}},[t._v("保存")]):t._e(),t._v(" "),e.$index==t.currentIndex?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editCancelTotal(e.$index,e.row)}}},[t._v("取消")]):t._e()]}}])}),t._v(" "),i("template",{slot:"empty"},[i("div",{staticClass:"table-nodata"},[i("img",{attrs:{src:a("urJZ")}}),t._v(" 没有对应数据\n\t\t\t\t\t")])])],2)],1)]),t._v(" "),i("div",{staticClass:"cash_flow_table_box"},[t._m(1),t._v(" "),i("div",{staticClass:"cash_flow_table"},[i("div",{staticClass:"table"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.datalistDetail,border:"","empty-text":"",sortable:"","max-height":"350"}},[i("el-table-column",{attrs:{prop:"index",label:"序号",width:"100",sortable:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"认购基金名称",width:"250",sortable:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"paied",label:"实缴出资(万元)",width:"150",sortable:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"paied_rate",label:"实缴占比",width:"150",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.paied_rate)+" %\n\t\t\t\t\t\t")]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"detail_quit_date",label:"到账日期",width:"180",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",disabled:e.$index!=t.currentIndexDetail&&!t.is_add_page,clearable:"",editable:!1},model:{value:e.row.detail_quit_date,callback:function(a){t.$set(e.row,"detail_quit_date",a)},expression:"scope.row.detail_quit_date"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"capital_distribute",label:"分配本金(万元)",width:"180",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"请输入内容",disabled:e.$index!=t.currentIndexDetail&&!t.is_add_page,clearable:""},on:{input:function(a){t.calculate(e.$index)}},model:{value:e.row.capital_distribute,callback:function(a){t.$set(e.row,"capital_distribute",t._n(a))},expression:"scope.row.capital_distribute"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"profit_distribute_b",label:"分配收益(万元)(税前)",width:"180",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"请输入内容",disabled:e.$index!=t.currentIndexDetail&&!t.is_add_page,clearable:""},on:{input:function(e){t.calculate()}},model:{value:e.row.profit_distribute_b,callback:function(a){t.$set(e.row,"profit_distribute_b",t._n(a))},expression:"scope.row.profit_distribute_b"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"profit_distribute_a",label:"分配收益(万元)(税后)",width:"180",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"请输入内容",disabled:e.$index!=t.currentIndexDetail&&!t.is_add_page,clearable:""},on:{input:function(e){t.calculate()}},model:{value:e.row.profit_distribute_a,callback:function(a){t.$set(e.row,"profit_distribute_a",t._n(a))},expression:"scope.row.profit_distribute_a"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"distribute_amount",label:"分配总额(万元)",width:"150",sortable:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"all_distribute_amount",label:"累计分配金额(万元)",width:"180",sortable:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"all_distribute_rate",label:"累计分配率",width:"180",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.all_distribute_rate)+" %\n\t\t\t\t\t\t")]}}])}),t._v(" "),t.is_add_page?t._e():i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{},[e.$index!=t.currentIndexDetail?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editDetail(e.$index,e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),e.$index==t.currentIndexDetail?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editSaveDetail(e.$index,e.row)}}},[t._v("保存")]):t._e(),t._v(" "),e.$index==t.currentIndexDetail?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editCancelDetail(e.$index,e.row)}}},[t._v("取消")]):t._e()],1)]}}])}),t._v(" "),i("template",{slot:"empty"},[i("div",{staticClass:"table-nodata"},[i("img",{attrs:{src:a("urJZ")}}),t._v(" 没有对应数据\n\t\t\t\t\t\t")])])],2)],1),t._v(" "),i("div",{staticClass:"submit_btn_box flex_center"},[i("button",{staticClass:"hover_btn",on:{click:t.addCancel}},[t._v("取消")]),t._v(" "),i("button",{staticClass:"blue_btn",on:{click:t.saveAddInfo}},[t._v("保存")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cash_flow_table_title flex_between"},[e("div",{staticClass:"flex_start"},[e("span",{staticClass:"circle_blue"}),this._v(" "),e("span",{staticClass:"name"},[this._v("分配")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cash_flow_table_title flex_between"},[e("div",{staticClass:"flex_start"},[e("span",{staticClass:"circle_blue"}),this._v(" "),e("span",{staticClass:"name"},[this._v("明细")])])])}]};var u=a("C7Lr")(n,o,!1,function(t){a("By70")},"data-v-238664ac",null);e.default=u.exports}});
//# sourceMappingURL=183.16fff49a34044d226278.js.map