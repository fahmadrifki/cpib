(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231077"],{ef99:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("CRow",{staticClass:"justify-content-center"},[i("CCol",{attrs:{md:"6"}},[i("CCard",[i("CCardHeader",[i("strong",[t._v("Edit Stimulasi")])]),i("CCardBody",[i("CForm",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.updateStimulasi(e)}}},[i("CInput",{attrs:{label:"Embed Video",horizontal:"",autocomplete:"name",required:""},model:{value:t.stimulasiUpdate.video_embed,callback:function(e){t.$set(t.stimulasiUpdate,"video_embed",e)},expression:"stimulasiUpdate.video_embed"}}),i("CButton",{staticClass:"mr-2",attrs:{type:"submit",size:"sm",color:"primary"}},[i("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" SAVE")],1)],1)],1)],1)],1)],1)],1)},s=[],o=i("bc3a"),n=i.n(o),u={name:"EditStimulation",data:function(){return{stimulasiUpdate:{stimulasi_judul:"",image_name:"",video_embed:""},stimulations:[]}},methods:{setStimulation:function(t){this.stimulations=t},updateStimulasi:function(t){var e=this;this.stimulations=t;var i={admin_user_id:localStorage.getItem("admin_id"),stimulasi_judul:this.stimulasiUpdate.stimulasi_judul,image_name:this.stimulasiUpdate.image_name,video_embed:this.stimulasiUpdate.video_embed};n.a.post("http://103.151.215.74/api/admin/stimulasi/detail/update/"+localStorage.getItem("stimulasiId"),i,{headers:{Authorization:localStorage.getItem("token")}}).then((function(t){localStorage.removeItem("stimulasiId"),e.$router.push("/menus/stimulasi")})).catch((function(t){}))}},mounted:function(){var t=this,e={admin_user_id:localStorage.getItem("admin_id")};n.a.post("http://103.151.215.74/api/admin/stimulasi/detail/edit/"+localStorage.getItem("stimulasiId"),e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){t.setStimulation(e.data.json_data)}))}},m=u,l=i("2877"),d=Object(l["a"])(m,a,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d231077.a0f3c630.js.map