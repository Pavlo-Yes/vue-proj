(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3,1],{c2c6:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpr fff"}},[a("q-header",{staticClass:"col bg-blue-grey-9 text-amber-8",attrs:{reveal:"",bordered:"","height-hint":"50"}},[a("q-toolbar",{staticClass:"q-pt-sm"},[a("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.left=!t.left}}}),a("q-space"),this.currentUser?t._e():a("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",round:"",dense:"",icon:"login",size:"lg",to:{name:"login"}}},[a("q-tooltip",[t._v("\n          Login\n        ")])],1),this.currentUser?a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",round:"",dense:"",icon:"account_circle",size:"lg"},on:{click:function(e){t.confirm=!0}}},[a("q-tooltip",[t._v("\n            Logout\n          ")])],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[a("q-card",{staticClass:"bg-blue-grey-9"},[a("q-card-section",{staticClass:"row items-center"},[a("q-avatar",{attrs:{icon:"account_circle",color:"amber-8","text-color":"white"}}),a("span",{staticClass:"q-ml-sm text-amber-8"},[t._v("\n                "+t._s(this.currentUser.username)+" do you really want to logout?\n              ")])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"amber-8"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Logout",color:"amber-8"},on:{click:t.logout}})],1)],1)],1)],1):t._e(),a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",dense:"",icon:"local_mall",size:"lg",to:{name:"cart"}}},[a("q-tooltip",[t._v("\n          Cart\n        ")]),this.cartLength?a("q-badge",{attrs:{color:"primary",floating:"",transparent:""}},[t._v("\n          "+t._s(this.cartLength)+"\n        ")]):t._e()],1)],1),a("q-toolbar",[a("q-toolbar-title",{attrs:{align:"center"}},[a("q-btn",{staticStyle:{"font-size":"20px"},attrs:{flat:"",to:"/",dense:""}},[t._v("\n          NECKLACE\n        ")])],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",side:"left",overlay:"",behavior:"mobile",elevated:""},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[a("q-tabs",{staticClass:"text-amber-8 bg-blue-grey-9 column items-center",staticStyle:{height:"60vh"},attrs:{vertical:""}},[a("q-btn",{staticClass:"q-ma-md fixed-top-right",attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:function(e){t.left=!t.left}}}),a("br"),a("br"),a("br"),a("q-route-tab",{attrs:{to:"/gallery",label:"Галерея"}}),a("q-route-tab",{attrs:{to:"/how_to_buy",label:"Як придбати"}}),a("q-route-tab",{attrs:{to:"/about",label:"Про нас"}}),a("q-route-tab",{attrs:{to:"/blog",label:"Блог"}}),a("q-route-tab",{attrs:{to:"/inspiration",label:"Для натхнення"}}),this.currentUser&&this.currentUser.is_superuser?a("q-route-tab",{attrs:{to:"/add_product",label:"Add or edit products"}}):t._e()],1),a("div",{staticClass:"text-amber-8 bg-blue-grey-9 row justify-center items-start",staticStyle:{height:"40vh"}},[this.currentUser&&this.currentUser.is_superuser?a("q-btn",[a("a",{staticClass:"text-amber-9",staticStyle:{"text-decoration":"none"},attrs:{href:"http://localhost:8000/admin/"}},[t._v("\n          Admin\n        ")])]):t._e()],1)],1),a("q-page-container",{staticClass:"col bg-blue-grey-9 text-amber-8",staticStyle:{"padding-bottom":"50px"}},[a("form",{staticClass:"row q-pt-xs",staticStyle:{"padding-left":"50px"},on:{submit:[function(t){t.preventDefault()},t.newSearch]}},[a("q-input",{staticClass:"q-mr-sm",attrs:{filled:"",type:"search",placeholder:"Type here","aria-required":"true",dense:"",required:"","bg-color":"blue-grey-6",color:"amber-8",rules:[function(t){return!!t||"Field is required"}],"lazy-rules":""},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}}),a("div",{staticClass:"search-wrapper"},[a("q-btn",{attrs:{type:"submit",color:"blue-grey-8",label:"Search","text-color":"amber-8"}})],1)],1),t.isSearchValid?t._e():a("div",{staticStyle:{padding:"10px 0 0 50px"}},[t._v("No results found")]),a("Main",{attrs:{prop:this.productsFromSearch}})],1),a("q-footer",{staticClass:"bg-blue-grey-9 text-amber-8",attrs:{reveal:"",bordered:""}},[a("div",{staticClass:"q-pa-sm row justify-center"},[a("div",{staticClass:"q-gutter-md material-icons-round",staticStyle:{"font-size":"2em"}},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.facebook.com/jewellery/",target:"_blank",rel:"nofollow noreferrer noopener"}},[a("q-icon",{staticClass:"text-amber-8",attrs:{name:"fab fa-facebook"}})],1),a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.instagram.com/jewelry/",target:"_blank",rel:"nofollow noreferrer noopener"}},[a("q-icon",{staticClass:"text-amber-8",attrs:{name:"fab fa-instagram"}})],1),a("span",{staticStyle:{"font-size":"large"}},[t._v("\n          ©  Necklace\n        ")])])])])],1)},s=[],o=(a("e01a"),a("c975"),a("e6cf"),a("e5ee")),i={components:{Main:o["default"]},data(){return{left:!1,searchWord:"",isSearchValid:!1,productsFromSearch:[],cartLength:null,confirm:!1,currentUser:null}},methods:{logout(){this.$removeTokens(),this.currentUser=null,location.reload()},setCurrentUserFromMain(){setTimeout((async()=>{this.currentUser=await this.$getCurrentUser()}),300)},async newSearch(){await this.$router.push("").catch((t=>console.log(t))),await this.$router.push({query:{searchRequest:this.searchWord}});const t=this.searchWord.toUpperCase(),e=(await this.$axios.get("products/")).data;this.productsFromSearch=[];for(let a=0;a<e.length;a++){const r=e[a].title||e[a].description;r.toUpperCase().indexOf(t)>-1?(this.productsFromSearch.push(e[a]),this.isSearchValid=!0):this.isSearchValid=!1}this.productsFromSearch.length>0&&(this.isSearchValid=!0)}},beforeMount(){this.$getCurrentUser()&&(this.currentUser=this.$getCurrentUser()),localStorage.getItem("access")&&(this.$axiosCheckAccessToken().then((t=>{this.currentUser=t.data,this.$setCurrentUser(t.data)})).catch((t=>{401===t.request.status&&this.$axiosCheckRefreshToken().then((t=>{const{access:e,refresh:a}=t.data;this.$setTokens(e,a),this.$axiosCheckAccessToken().then((t=>{console.log("second scenario"),this.$setCurrentUser(t.data),this.currentUser=t.data})).catch((t=>{console.log(t,"error in second scenario")}))})).catch((t=>{this.$removeTokens(),console.log(t,"none of tokens is valid")}))})).catch((t=>{console.log(t,"last catch")})),this.setCurrentUserFromMain())},created(){this.searchWord=this.$route.query.searchRequest,this.newSearch(),this.$root.$on("cartLength",(t=>{this.cartLength=t,console.log("updated search layout")})),this.$localstorageGetCart()&&(this.cartLength=this.$localstorageGetCart().length)}},n=i,c=a("2877"),l=a("4d5a"),u=a("e359"),d=a("65c6"),h=a("9c40"),p=a("2c91"),m=a("05c0"),g=a("24e8"),b=a("f09f"),f=a("a370"),C=a("cb32"),q=a("4b7e"),y=a("58a81"),v=a("6ac5"),x=a("9404"),_=a("429b"),S=a("7867"),w=a("09e3"),k=a("27f9"),$=a("7ff0"),Q=a("0016"),T=a("7f67"),D=a("eebe"),F=a.n(D),U=Object(c["a"])(n,r,s,!1,null,null,null);e["default"]=U.exports;F()(U,"components",{QLayout:l["a"],QHeader:u["a"],QToolbar:d["a"],QBtn:h["a"],QSpace:p["a"],QTooltip:m["a"],QDialog:g["a"],QCard:b["a"],QCardSection:f["a"],QAvatar:C["a"],QCardActions:q["a"],QBadge:y["a"],QToolbarTitle:v["a"],QDrawer:x["a"],QTabs:_["a"],QRouteTab:S["a"],QPageContainer:w["a"],QInput:k["a"],QFooter:$["a"],QIcon:Q["a"]}),F()(U,"directives",{ClosePopup:T["a"]})},e5ee:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-blue-grey-9\n        text-amber-8",attrs:{padding:""}},[!t.productsData||t.prop||this.isLoading?t._e():a("div",{staticClass:"row justify-center"},[a("q-carousel",{staticClass:"col-xs-12 col-sm-6 col-md-5 col-xl-4",staticStyle:{"min-width":"320px","min-height":"450px"},attrs:{animated:"",navigation:"",infinite:"",autoplay:!0,arrows:"","transition-prev":"slide-right","transition-next":"slide-left"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("q-carousel-slide",{key:t.productsData[0].title,staticClass:"zoomForCart",attrs:{name:1,"img-src":t.productsData[0].photos},on:{click:function(e){return t.toSingleProductFromCarousel(t.productsData[0])}}},[a("q-tooltip",[t._v(t._s(t.productsData[0].title))])],1),a("q-carousel-slide",{key:t.productsData[1].title,staticClass:"zoomForCart",attrs:{name:2,"img-src":t.productsData[1].photos},on:{click:function(e){return t.toSingleProductFromCarousel(t.productsData[1])}}},[a("q-tooltip",[t._v(t._s(t.productsData[1].title))])],1),a("q-carousel-slide",{key:t.productsData[2].title,staticClass:"zoomForCart",attrs:{name:3,"img-src":t.productsData[2].photos},on:{click:function(e){return t.toSingleProductFromCarousel(t.productsData[2])}}},[a("q-tooltip",[t._v(t._s(t.productsData[2].title))])],1),a("q-carousel-slide",{key:t.productsData[3].title,staticClass:"zoomForCart",attrs:{name:4,"img-src":t.productsData[3].photos},on:{click:function(e){return t.toSingleProductFromCarousel(t.productsData[3])}}},[a("q-tooltip",[t._v(t._s(t.productsData[3].title))])],1)],1)],1),t.prop?t._e():a("div",{staticClass:"row justify-evenly items-center content-around"},t._l(t.productsData,(function(e,r){return a("div",{key:r,staticClass:"q-pa-md col-xs-12 col-sm-6 col-md-4",staticStyle:{"min-width":"300px"}},[a("q-card",[a("q-img",{staticClass:"zoom",attrs:{src:e.photos},on:{click:function(a){return t.toSingleProductFromMain(e)}}},[a("div",{staticClass:"absolute-bottom text-right",staticStyle:{"max-height":"35px"}},[t._v("\n            "+t._s(e.title)+"\n          ")]),a("q-card-section",{staticClass:"absolute-bottom-left",staticStyle:{"max-height":"35px","background-color":"transparent","font-size":"16px"}},[t._v("\n            "+t._s(e.price)+"$\n          ")])],1),a("q-card-actions",{staticStyle:{"background-color":"#232830","max-height":"50px"},attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",round:"",label:t.changeBtnOnAddToCart(e).label,color:t.changeBtnOnAddToCart(e).color,icon:t.changeBtnOnAddToCart(e).icon},on:{click:function(a){return t.addToCart(e)}}})],1)],1)],1)})),0),t.prop?a("div",{staticClass:"row justify-evenly items-center content-around"},t._l(t.prop,(function(e,r){return a("div",{key:r,staticClass:"q-pa-md col-xs-12 col-sm-6 col-md-4",staticStyle:{"min-width":"300px"}},[a("q-card",[a("q-img",{staticClass:"zoom",attrs:{src:e.photos},on:{click:function(a){return t.toSingleProductFromSearch(e)}}},[a("div",{staticClass:"absolute-bottom text-right",staticStyle:{"max-height":"35px"}},[t._v("\n            "+t._s(e.title)+"\n          ")]),a("q-card-section",{staticClass:"absolute-bottom-left",staticStyle:{"max-height":"35px","background-color":"transparent","font-size":"16px"}},[t._v("\n            "+t._s(e.price)+"$\n          ")])],1),a("q-card-actions",{staticStyle:{"background-color":"#232830","max-height":"50px"},attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",round:"",label:t.changeBtnOnAddToCart(e).label,color:t.changeBtnOnAddToCart(e).color,icon:t.changeBtnOnAddToCart(e).icon},on:{click:function(a){return t.addToCart(e)}}})],1)],1)],1)})),0):t._e()])},s=[],o=(a("e6cf"),{name:"Main",props:{prop:Array},data(){return{productsData:[],slide:1,isLoading:!1,isAdded:!1}},methods:{toSingleProductFromCarousel(t){this.$router.push({path:`product/${t.id}`})},toSingleProductFromMain(t){this.$router.push({path:`product/${t.id}`,params:{id:`${t.id}`}})},toSingleProductFromSearch(t){this.$router.push({name:"main"}),this.$router.push({path:`product/${t.id}`,params:{id:`${t.id}`}})},addToCart(t){this.$addToCart(t),this.setItemInCartQuantity()},setItemInCartQuantity(){this.$root.$emit("cartLength",this.$localstorageGetCart().length)},changeBtnOnAddToCart(t){return this.$changeBtnOnAddToCart(t)}},async beforeMount(){this.isLoading=!0;const t=await this.$axios.get("products/");this.productsData=t.data,this.isLoading=!1}}),i=o,n=a("2877"),c=a("9989"),l=a("880c"),u=a("62cd"),d=a("05c0"),h=a("f09f"),p=a("068f"),m=a("a370"),g=a("4b7e"),b=a("9c40"),f=a("eebe"),C=a.n(f),q=Object(n["a"])(i,r,s,!1,null,null,null);e["default"]=q.exports;C()(q,"components",{QPage:c["a"],QCarousel:l["a"],QCarouselSlide:u["a"],QTooltip:d["a"],QCard:h["a"],QImg:p["a"],QCardSection:m["a"],QCardActions:g["a"],QBtn:b["a"]})}}]);