(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"0b18":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"bg-blue-grey-9 text-amber-8",attrs:{padding:""}},[t.currentUser?s("div",{staticClass:"row justify-evenly items-center content-around"},[s("div",{staticClass:"q-pa-md col-xs-12 col-sm-6 col-md-4"},[s("div",{staticClass:"column justify-evenly items-center content-around q-pa-md",staticStyle:{"background-color":"#282f3b"}},[s("div",{staticClass:"q-pa-sm",staticStyle:{color:"white"}},[t._v("Your username: "+t._s(t.currentUser.username))]),s("div",{staticClass:"q-pa-sm",staticStyle:{color:"white"}},[t._v("Your email: "+t._s(t.currentUser.email))]),s("q-btn",{attrs:{color:"white","text-color":"blue"},on:{click:t.logout}},[t._v("Logout")])],1)])]):t._e()])},a=[],o={name:"CustomerPage",data(){return{currentUser:null}},methods:{logout(){this.$store.commit("logout"),this.$router.push({name:"main"})}},created(){this.currentUser=this.$store.getters.getCurrentUser}},n=o,c=s("2877"),l=s("9989"),i=s("9c40"),u=s("eebe"),m=s.n(u),d=Object(c["a"])(n,r,a,!1,null,null,null);e["default"]=d.exports;m()(d,"components",{QPage:l["a"],QBtn:i["a"]})}}]);