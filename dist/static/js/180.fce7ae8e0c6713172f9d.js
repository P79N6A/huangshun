webpackJsonp([180],{"9XiP":function(t,e){},socx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("hRKE"),s=a.n(l),n=a("2hMI"),i=a("yclV"),o={data:function(){return{id:"",count:"",type:"",datalist:[]}},created:function(){this.id=this.$route.query.id,this.count=this.$route.query.count,console.log(s()(this.count)),this.type=this.$route.query.type,this.getInitData()},computed:{},mounted:function(){},methods:{getInitData:function(){var t=this;Object(n._161)({sg_company_manager_id:this.id,count:this.count,type:this.type}).then(function(e){1==e.data.msgNo?t.$set(t.datalist,0,e.data.payload.data):Object(i.g)("info",e.data.message)})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"cash_flow_table_box"},[t._m(0),t._v(" "),a("div",{staticClass:"cash_flow_table table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.datalist,border:"","empty-text":""}},[a("el-table-column",{attrs:{prop:"unit",label:"币种"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(1==e.row.unit?"人民币":"美元")+"\n\t\t\t\t\t")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"event",label:"事件",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type_name",label:"回款基金类别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"fund_name",label:"基金名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"back",label:"回款返本（万元）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"back_after_tax",label:"回款收益-税后（万元）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sum",label:"回款总额（万元）"}})],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cash_flow_table_title flex_between"},[e("div",{staticClass:"flex_start"},[e("span",{staticClass:"circle_blue"}),this._v(" "),e("span",{staticClass:"name"},[this._v("回款")])])])}]};var r=a("C7Lr")(o,c,!1,function(t){a("9XiP")},"data-v-26fa4a84",null);e.default=r.exports}});
//# sourceMappingURL=180.fce7ae8e0c6713172f9d.js.map