(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{8936:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"bg-blue-grey-9 text-amber-8",attrs:{padding:""}},[t.product?o("div",{staticClass:"row justify-evenly items-center content-around"},[o("div",{staticClass:"q-pa-md col-xs-12 col-sm-6 col-md-4",staticStyle:{"min-width":"300px"}},[o("q-card",[o("q-img",{attrs:{src:t.product.photos}}),o("div",{staticClass:"column justify-evenly items-center content-around",staticStyle:{"background-color":"#232830"}},[o("q-form",{on:{submit:function(e){return t.editProduct()}}},[o("div",[t._v("Id "+t._s(t.product.id))]),o("q-input",{attrs:{label:"Title",rules:[function(t){return t&&t.length>0||"This field is required"}]},model:{value:t.product.title,callback:function(e){t.$set(t.product,"title",e)},expression:"product.title"}}),o("q-input",{attrs:{label:"Description",rules:[function(t){return t&&t.length>0||"This field is required"}]},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}}),o("q-input",{attrs:{label:"Price",type:"number"},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}}),o("q-input",{attrs:{label:"Color",rules:[function(t){return t&&t.length>0||"This field is required"}]},model:{value:t.product.color,callback:function(e){t.$set(t.product,"color",e)},expression:"product.color"}}),o("q-input",{attrs:{label:"Likes",type:"number"},model:{value:t.product.likes,callback:function(e){t.$set(t.product,"likes",e)},expression:"product.likes"}}),o("q-input",{attrs:{label:"Sold Out",type:"checkbox"},model:{value:t.product.sold_out,callback:function(e){t.$set(t.product,"sold_out",e)},expression:"product.sold_out"}}),o("q-file",{attrs:{value:"FileList",label:"Edit photo",filled:"","use-chips":"",clearable:"",accept:".jpg, .png, image/*",multiple:"",append:""},model:{value:t.photoModel,callback:function(e){t.photoModel=e},expression:"photoModel"}}),o("q-btn",{attrs:{type:"submit",label:"Edit Product"}})],1)],1)],1)],1)]):t._e()])},r=[],i=(o("e01a"),{name:"SingleProductEdit",data(){return{photoModel:null,product:{title:null,description:null,price:0,color:null,likes:0,sold_out:!1}}},methods:{editProduct(){const{title:t,description:e,price:o,color:s,sold_out:r,likes:i}=this.product,l=new FormData;l.append("title",t),l.append("description",e),l.append("price",o),l.append("color",s),l.append("sold_out",r),l.append("likes",i),console.log("adding photo model"),l.append("photos",this.photoModel[0],this.photoModel[0].name),this.$axios({method:"patch",url:`products/edit_add_or_list/${this.product.id}/`,data:l,headers:{Authorization:`Bearer ${localStorage.getItem("access")}`}}).then((t=>console.log(t.data))).catch((t=>{401===t.response.status&&this.$axiosCheckRefreshToken().then((t=>{const{access:e,refresh:o}=t.data;this.$setTokens(e,o),this.$axios({method:"get",url:`products/edit_add_or_list/${this.product.id}/`,data:l,headers:{Authorization:`Bearer ${localStorage.getItem("access")}`}}).then((t=>console.log(t.data))).catch((t=>console.log(t,"error in refresh token")))})).catch((t=>{this.$removeTokens(),console.log(t,"none of tokens is valid")}))})),location.reload()}},beforeMount(){this.product=this.$store.getters.getSingleProduct,this.$axios({method:"get",url:`products/edit_add_or_list/${this.$route.params.id}/`,headers:{Authorization:`Bearer ${localStorage.getItem("access")}`}}).then((t=>{this.product=t.data})).catch((t=>{401===t.response.status&&this.$axiosCheckRefreshToken().then((t=>{const{access:e,refresh:o}=t.data;this.$setTokens(e,o),this.$axios({method:"get",url:`products/edit_add_or_list/${this.$route.params.id}/`,headers:{Authorization:`Bearer ${localStorage.getItem("access")}`}}).then((t=>this.product=t.data)).catch((t=>console.log(t,"error in refresh token, before mount")))})).catch((t=>{this.$removeTokens(),console.log(t,"none of tokens is valid in before mount")}))}))}}),l=i,a=o("2877"),c=o("9989"),n=o("f09f"),d=o("068f"),u=o("0378"),p=o("27f9"),h=o("7d53"),m=o("9c40"),f=o("eebe"),g=o.n(f),b=Object(a["a"])(l,s,r,!1,null,null,null);e["default"]=b.exports;g()(b,"components",{QPage:c["a"],QCard:n["a"],QImg:d["a"],QForm:u["a"],QInput:p["a"],QFile:h["a"],QBtn:m["a"]})}}]);