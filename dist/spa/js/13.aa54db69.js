(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{a85f:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{staticClass:"bg-blue-grey-9"},[e("div",{staticClass:"row justify-evenly items-center content-around"},t._l(t.productsData,(function(i,a){return e("div",{key:a,staticClass:"q-pa-md col-xs-12 col-sm-6 col-md-4",staticStyle:{"min-width":"300px"}},[e("q-card",[e("q-img",{staticClass:"zoom",attrs:{src:i.photos}},[e("div",{staticClass:"absolute-bottom text-right",staticStyle:{"max-height":"35px"}},[t._v("\n            "+t._s(i.title)+"\n          ")]),e("q-card-section",{staticClass:"absolute-bottom-left",staticStyle:{"max-height":"35px","background-color":"transparent","font-size":"16px"}},[t._v("\n            "+t._s(i.price)+"$\n          ")])],1),e("q-card-actions",{staticStyle:{"background-color":"#232830","max-height":"50px"},attrs:{align:"right"}},[e("q-btn",{attrs:{flat:"",round:"",label:"add to cart",color:"primary",icon:"shopping_cart"},on:{click:function(e){return t.addItemToCart(i)}}})],1)],1)],1)})),0),e("div",{staticClass:" text-amber-8 flex-center flex",staticStyle:{padding:"40px"},attrs:{padding:""}},[e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet consequatur culpa deleniti deserunt, excepturi exercitationem facere illum in ipsa magni molestiae mollitia pariatur porro quas rem saepe sit!")]),e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eum inventore magnam modi molestiae quae quo, voluptatum! Accusamus architecto at blanditiis commodi consectetur debitis laudantium saepe ut vel voluptates? Perspiciatis!")]),e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum cupiditate delectus esse, explicabo fuga fugiat ipsa laboriosam maiores molestiae nihil nobis nostrum pariatur praesentium, qui quidem, quisquam sit voluptas!")]),e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur dignissimos distinctio error esse, explicabo laboriosam modi molestias nemo odio perferendis quaerat quam similique sint sit? Blanditiis dignissimos neque quidem?")]),e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis cum cumque ea exercitationem, expedita illum in, laboriosam laborum minus odio possimus quaerat quo reiciendis repellendus unde ut veniam voluptate.")]),e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iusto modi nemo nihil repudiandae ut! Assumenda, aut consectetur consequatur cum fuga fugit iste iure molestias perspiciatis provident qui rem ullam!")]),e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti dolor doloribus earum eligendi et ex hic ipsa iure modi nostrum odio, placeat quam quo, repudiandae ullam vel veniam voluptatem.")]),e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos eveniet laudantium non nostrum obcaecati perspiciatis reiciendis sapiente tempore. Accusantium dolore doloribus hic iure quia, quidem ut voluptate voluptates voluptatum?")]),e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio dolore dolorem doloremque earum eveniet excepturi quaerat sed? Deserunt doloremque earum eius fuga fugit hic necessitatibus quas qui tenetur unde?")]),e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur, delectus dolorum earum eveniet, expedita itaque labore magnam molestias necessitatibus nemo nihil officiis pariatur perferendis quos ratione tenetur ullam, veniam.")])])])},s=[],o=(e("e6cf"),{name:"Inspiration",data(){return{productsData:[],cartLength:0}},methods:{addItemToCart(t){this.$addToCart(t),this.getItemInCartQuantity()},getItemInCartQuantity(){this.cartLength=this.$localstorageGetCart().length}},async beforeCreate(){const t=await this.$axios.get("products/");this.productsData=t.data,this.$localstorageGetCart()&&(this.cartLength=this.$localstorageGetCart().length)}}),u=o,r=e("2877"),n=e("9989"),c=e("f09f"),m=e("068f"),l=e("a370"),d=e("4b7e"),p=e("9c40"),g=e("eebe"),v=e.n(g),q=Object(r["a"])(u,a,s,!1,null,null,null);i["default"]=q.exports;v()(q,"components",{QPage:n["a"],QCard:c["a"],QImg:m["a"],QCardSection:l["a"],QCardActions:d["a"],QBtn:p["a"]})}}]);