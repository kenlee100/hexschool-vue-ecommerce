import{_ as j,a as E,m as N,r as h,o as n,c as d,e as a,b as e,F as b,g as v,i as m,t as c,n as i,w as _,f,k as P,v as U}from"./index-a352aac4.js";import{P as F}from"./PageHeader-ffb7cc6f.js";import{C as L,c as q}from"./order-ebf801a2.js";import{a as y}from"./common-10f7587a.js";import{c as V}from"./cartStore-794f6400.js";import{t as D}from"./request-a94ccf31.js";const B="/hexschool-vue-ecommerce/assets/page_order-746d77b9.jpg",I={基隆市:{仁愛區:"200",信義區:"201",中正區:"202",中山區:"203",安樂區:"204",暖暖區:"205",七堵區:"206"},臺北市:{中正區:"100",大同區:"103",中山區:"104",松山區:"105",大安區:"106",萬華區:"108",信義區:"110",士林區:"111",北投區:"112",內湖區:"114",南港區:"115",文山區:"116"},新北市:{萬里區:"207",金山區:"208",板橋區:"220",汐止區:"221",深坑區:"222",石碇區:"223",瑞芳區:"224",平溪區:"226",雙溪區:"227",貢寮區:"228",新店區:"231",坪林區:"232",烏來區:"233",永和區:"234",中和區:"235",土城區:"236",三峽區:"237",樹林區:"238",鶯歌區:"239",三重區:"241",新莊區:"242",泰山區:"243",林口區:"244",蘆洲區:"247",五股區:"248",八里區:"249",淡水區:"251",三芝區:"252",石門區:"253"},宜蘭縣:{宜蘭市:"260",頭城鎮:"261",礁溪鄉:"262",壯圍鄉:"263",員山鄉:"264",羅東鎮:"265",三星鄉:"266",大同鄉:"267",五結鄉:"268",冬山鄉:"269",蘇澳鎮:"270",南澳鄉:"272"},新竹市:{東區:"300",北區:"300",香山區:"300"},新竹縣:{竹北市:"302",湖口鄉:"303",新豐鄉:"304",新埔鎮:"305",關西鎮:"306",芎林鄉:"307",寶山鄉:"308",竹東鎮:"310",五峰鄉:"311",橫山鄉:"312",尖石鄉:"313",北埔鄉:"314",峨眉鄉:"315"},桃園市:{中壢區:"320",平鎮區:"324",龍潭區:"325",楊梅區:"326",新屋區:"327",觀音區:"328",桃園區:"330",龜山區:"333",八德區:"334",大溪區:"335",復興區:"336",大園區:"337",蘆竹區:"338"},苗栗縣:{竹南鎮:"350",頭份市:"351",三灣鄉:"352",南庄鄉:"353",獅潭鄉:"354",後龍鎮:"356",通霄鎮:"357",苑裡鎮:"358",苗栗市:"360",造橋鄉:"361",頭屋鄉:"362",公館鄉:"363",大湖鄉:"364",泰安鄉:"365",銅鑼鄉:"366",三義鄉:"367",西湖鄉:"368",卓蘭鎮:"369"},臺中市:{中區:"400",東區:"401",南區:"402",西區:"403",北區:"404",北屯區:"406",西屯區:"407",南屯區:"408",太平區:"411",大里區:"412",霧峰區:"413",烏日區:"414",豐原區:"420",后里區:"421",石岡區:"422",東勢區:"423",和平區:"424",新社區:"426",潭子區:"427",大雅區:"428",神岡區:"429",大肚區:"432",沙鹿區:"433",龍井區:"434",梧棲區:"435",清水區:"436",大甲區:"437",外埔區:"438",大安區:"439"},彰化縣:{彰化市:"500",芬園鄉:"502",花壇鄉:"503",秀水鄉:"504",鹿港鎮:"505",福興鄉:"506",線西鄉:"507",和美鎮:"508",伸港鄉:"509",員林市:"510",社頭鄉:"511",永靖鄉:"512",埔心鄉:"513",溪湖鎮:"514",大村鄉:"515",埔鹽鄉:"516",田中鎮:"520",北斗鎮:"521",田尾鄉:"522",埤頭鄉:"523",溪州鄉:"524",竹塘鄉:"525",二林鎮:"526",大城鄉:"527",芳苑鄉:"528",二水鄉:"530"},南投縣:{南投市:"540",中寮鄉:"541",草屯鎮:"542",國姓鄉:"544",埔里鎮:"545",仁愛鄉:"546",名間鄉:"551",集集鎮:"552",水里鄉:"553",魚池鄉:"555",信義鄉:"556",竹山鎮:"557",鹿谷鄉:"558"},嘉義市:{東區:"600",西區:"600"},嘉義縣:{番路鄉:"602",梅山鄉:"603",竹崎鄉:"604",阿里山鄉:"605",中埔鄉:"606",大埔鄉:"607",水上鄉:"608",鹿草鄉:"611",太保市:"612",朴子市:"613",東石鄉:"614",六腳鄉:"615",新港鄉:"616",民雄鄉:"621",大林鎮:"622",溪口鄉:"623",義竹鄉:"624",布袋鎮:"625"},雲林縣:{斗南鎮:"630",大埤鄉:"631",虎尾鎮:"632",土庫鎮:"633",褒忠鄉:"634",東勢鄉:"635",臺西鄉:"636",崙背鄉:"637",麥寮鄉:"638",斗六市:"640",林內鄉:"643",古坑鄉:"646",莿桐鄉:"647",西螺鎮:"648",二崙鄉:"649",北港鎮:"651",水林鄉:"652",口湖鄉:"653",四湖鄉:"654",元長鄉:"655"},臺南市:{中西區:"700",東區:"701",南區:"702",北區:"704",安平區:"708",安南區:"709",永康區:"710",歸仁區:"711",新化區:"712",左鎮區:"713",玉井區:"714",楠西區:"715",南化區:"716",仁德區:"717",關廟區:"718",龍崎區:"719",官田區:"720",麻豆區:"721",佳里區:"722",西港區:"723",七股區:"724",將軍區:"725",學甲區:"726",北門區:"727",新營區:"730",後壁區:"731",白河區:"732",東山區:"733",六甲區:"734",下營區:"735",柳營區:"736",鹽水區:"737",善化區:"741",大內區:"742",山上區:"743",新市區:"744",安定區:"745"},高雄市:{新興區:"800",前金區:"801",苓雅區:"802",鹽埕區:"803",鼓山區:"804",旗津區:"805",前鎮區:"806",三民區:"807",楠梓區:"811",小港區:"812",左營區:"813",仁武區:"814",大社區:"815",岡山區:"820",路竹區:"821",阿蓮區:"822",田寮區:"823",燕巢區:"824",橋頭區:"825",梓官區:"826",彌陀區:"827",永安區:"828",湖內區:"829",鳳山區:"830",大寮區:"831",林園區:"832",鳥松區:"833",大樹區:"840",旗山區:"842",美濃區:"843",六龜區:"844",內門區:"845",杉林區:"846",甲仙區:"847",桃源區:"848",那瑪夏區:"849",茂林區:"851",茄萣區:"852"},屏東縣:{屏東市:"900",三地門鄉:"901",霧臺鄉:"902",瑪家鄉:"903",九如鄉:"904",里港鄉:"905",高樹鄉:"906",鹽埔鄉:"907",長治鄉:"908",麟洛鄉:"909",竹田鄉:"911",內埔鄉:"912",萬丹鄉:"913",潮州鎮:"920",泰武鄉:"921",來義鄉:"922",萬巒鄉:"923",崁頂鄉:"924",新埤鄉:"925",南州鄉:"926",林邊鄉:"927",東港鎮:"928",琉球鄉:"929",佳冬鄉:"931",新園鄉:"932",枋寮鄉:"940",枋山鄉:"941",春日鄉:"942",獅子鄉:"943",車城鄉:"944",牡丹鄉:"945",恆春鎮:"946",滿州鄉:"947"},臺東縣:{臺東市:"950",綠島鄉:"951",蘭嶼鄉:"952",延平鄉:"953",卑南鄉:"954",鹿野鄉:"955",關山鎮:"956",海端鄉:"957",池上鄉:"958",東河鄉:"959",成功鎮:"961",長濱鄉:"962",太麻里鄉:"963",金峰鄉:"964",大武鄉:"965",達仁鄉:"966"},花蓮縣:{花蓮市:"970",新城鄉:"971",秀林鄉:"972",吉安鄉:"973",壽豐鄉:"974",鳳林鎮:"975",光復鄉:"976",豐濱鄉:"977",瑞穗鄉:"978",萬榮鄉:"979",玉里鎮:"981",卓溪鄉:"982",富里鄉:"983"},金門縣:{金沙鎮:"890",金湖鎮:"891",金寧鄉:"892",金城鎮:"893",烈嶼鄉:"894",烏坵鄉:"896"},連江縣:{南竿鄉:"209",北竿鄉:"210",莒光鄉:"211",東引鄉:"212"},澎湖縣:{馬公市:"880",西嶼鄉:"881",望安鄉:"882",七美鄉:"883",白沙鄉:"884",湖西鄉:"885"}},O={data(){return{selectCounty:"",form:{user:{name:"",email:"",tel:"",address:"",county:"",district:"",paidMethod:"線上刷卡"},message:""},pageImage:B,twzipcode:I}},components:{PageHeader:F,CartStep:L},methods:{...E(V,["getCartList","updateCart","deleteCartItem","clearCartItem","goNextStep","goBackStep","checkStep"]),isPhone(t){return/^(09)[0-9]{8}$/.test(t)?!0:"請填入正確的手機號碼"},async createOrder(){y().isProcessing=!0;const t=this.form,s=await q({data:t}),{orderId:k}=s;await D.fire({icon:"success",title:"訂單已送出"}).then(()=>{y().isProcessing=!1,this.$refs.form.resetForm(),this.form.message="",y().isLoading=!0,setTimeout(async()=>{await this.getCartList(),this.goNextStep(3,`/checkout/${k}`)},2e3)})}},computed:{...N(V,["cart","currentStep","cartCoupon"]),filterDistrict(){const t=this.twzipcode[this.form.user.county]||{};return Object.keys(t)}},watch:{"form.user.county":{handler(){this.form.user.district=this.filterDistrict[0]},deep:!0}},created(){this.getCartList(),y().isLoading=!0,this.checkStep(2)}},T={class:"container"},z={key:0,class:"flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8"},A={class:"lg:w-1/2 space-y-6"},H={class:"flex flex-col space-y-4"},G={class:"flex flex-col md:flex-row md:items-center md:justify-between w-full space-y-4 md:space-y-0"},J={class:"w-full md:w-auto md:flex-1 md:pr-4"},K={class:"font-bold ch-heading-3 line-clamp-2"},Q={class:"flex flex-1 items-center md:justify-end md:flex-shrink-0"},R={class:"ml-auto en-caption-01 whitespace-nowrap"},W={class:"flex items-center justify-end flex-shrink-0 min-w-[120px] space-x-4"},X={class:"flex flex-col items-end min-w-[50px] space-y-1"},Y={class:"en-body text-right text-secondary-secondary-200"},Z={class:"flex items-center justify-end"},$={key:0,class:"flex space-x-4 ch-heading-4 font-bold text-netural-netural-300"},ee=e("span",null,"共",-1),te={class:"en-body text-secondary-secondary-200"},se=e("span",null,"件商品",-1),oe={class:"space-y-8"},le={class:"flex flex-col p-4 md:p-6 space-y-4 bg-netural-netural-200"},ae={class:"flex flex-col space-y-2 pb-3"},re={class:"flex justify-between"},ne=e("p",{class:"font-bold ch-body"},"小計：",-1),de={key:0,class:"flex justify-between"},ce=e("p",{class:"font-bold ch-body"},"折扣後：",-1),ie={class:"flex-shrink-0 en-caption-01"},ue={key:1,class:"flex justify-between"},me=e("p",{class:"font-bold ch-body"},"優惠券：",-1),fe={class:"font-bold ch-body text-netural-netural-300"},pe={class:"flex justify-between"},he=e("p",{class:"font-bold ch-heading-4"},"總計:",-1),_e={class:"flex-shrink-0 en-body text-secondary-secondary-200"},be={class:"flex items-center justify-between"},ye={key:0},xe={class:"flex flex-col lg:w-1/2"},ge={class:"space-y-2"},ve=e("label",{for:"email",class:"flex items-center text-heading-4 font-bold"},[e("span",{class:"text-red-700 mr-1 mt-2"},"*"),f("Email")],-1),ke={class:"space-y-2"},Ve=e("label",{for:"name",class:"flex items-center text-heading-4 font-bold"},[e("span",{class:"text-red-700 mr-1 mt-2"},"*"),f("收件人姓名")],-1),we={class:"space-y-2"},Ce=e("label",{for:"phone",class:"flex items-center text-heading-4 font-bold"},[e("span",{class:"text-red-700 mr-1 mt-2"},"*"),f("收件人手機")],-1),Se={class:"space-y-2"},Me=e("label",{for:"county",class:"flex items-center text-heading-4 font-bold"},[e("span",{class:"text-red-700 mr-1 mt-2"},"*"),f("縣市")],-1),je={class:"form-select"},Ee=e("option",{value:"",selected:"",disabled:""},"請選擇縣市",-1),Ne=["value"],Pe={class:"space-y-2"},Ue=e("label",{for:"district",class:"flex items-center text-heading-4 font-bold"},[e("span",{class:"text-red-700 mr-1 mt-2"},"*"),f("地區")],-1),Fe={class:"form-select"},Le=e("option",{value:"",selected:"",disabled:""},"請選擇地區",-1),qe=["value"],De={class:"space-y-2"},Be=e("label",{for:"address",class:"flex items-center text-heading-4 font-bold"},[e("span",{class:"text-red-700 mr-1 mt-2"},"*"),f("地址")],-1),Ie={class:"space-y-2"},Oe=e("label",{for:"paid",class:"text-heading-4 font-bold"},"付款方式",-1),Te={class:"form-select"},ze=e("option",{value:"線上刷卡"},"線上刷卡",-1),Ae=e("option",{value:"ATM轉帳"},"ATM轉帳",-1),He={class:"space-y-2"},Ge=e("label",{for:"message",class:"text-heading-4 font-bold"},"留言",-1),Je=e("button",{type:"submit",class:"btn-base w-full bg-secondary-secondary-200 text-netural-netural-100"}," 確認付款 ",-1);function Ke(t,s,k,Qe,l,x){const w=h("PageHeader"),C=h("CartStep"),S=h("router-link"),u=h("VField"),p=h("ErrorMessage"),M=h("VForm");return n(),d(b,null,[a(w,{"image-url":l.pageImage},null,8,["image-url"]),e("div",T,[a(C,{"current-step":t.currentStep},null,8,["current-step"]),t.currentStep===2?(n(),d("div",z,[e("div",A,[e("div",H,[t.cart.carts?(n(!0),d(b,{key:0},v(t.cart.carts,r=>(n(),d("div",{class:"flex items-center p-4 bg-netural-netural-200",key:r.id},[e("div",G,[e("div",J,[e("h3",K,[a(S,{to:`/product/${r.product.id}`},{default:_(()=>[f(c(r.product.title),1)]),_:2},1032,["to"])])]),e("div",Q,[e("div",R," x "+c(r.qty),1),e("div",W,[e("div",X,[r.final_total!==r.total?(n(),d("div",{key:0,class:i(["en-caption-02 text-right",{"line-through":t.cartCoupon.code}])}," $"+c(t.$filters.currency(Math.round(r.total))),3)):m("",!0),e("div",Y," $"+c(t.$filters.currency(Math.round(r.final_total))),1)])])])])]))),128)):m("",!0),e("div",Z,[t.cart.carts&&t.cart.carts.length>0?(n(),d("div",$,[ee,e("p",te,c(t.cart.carts.length),1),se])):m("",!0)])]),e("div",oe,[e("div",le,[e("div",ae,[e("div",re,[ne,e("p",{class:i(["flex-shrink-0 en-caption-01",{"line-through":t.cartCoupon.code}])}," $"+c(t.$filters.currency(t.cart.total)),3)]),t.cart.final_total!==t.cart.total?(n(),d("div",de,[ce,e("p",ie," $"+c(t.$filters.currency(Math.round(t.cart.final_total))),1)])):m("",!0),t.cartCoupon.code?(n(),d("div",ue,[me,e("p",fe,c(t.cartCoupon.code),1)])):m("",!0)]),e("div",pe,[he,e("p",_e," $"+c(t.$filters.currency(Math.round(t.cart.final_total))),1)])])]),e("div",be,[t.cart.carts&&t.cart.carts.length>0?(n(),d("div",ye,[e("button",{class:"btn-outline",type:"button",onClick:s[0]||(s[0]=r=>t.goBackStep(1,"/cart"))}," 返回上一步 ")])):m("",!0)])]),e("div",xe,[a(M,{ref:"form",class:"flex flex-col p-4 md:p-6 bg-netural-netural-200 space-y-6",onSubmit:x.createOrder},{default:_(({errors:r})=>[e("div",ge,[ve,a(u,{id:"email",name:"Email",type:"email",class:i(["form-input",{"border-2 border-red-700":r.Email}]),modelValue:l.form.user.email,"onUpdate:modelValue":s[1]||(s[1]=o=>l.form.user.email=o),placeholder:"請輸入 Email",rules:"required|email"},null,8,["class","modelValue"]),a(p,{name:"Email",class:"block ch-body font-bold text-red-700"})]),e("div",ke,[Ve,a(u,{id:"name",name:"name",label:"姓名",type:"text",class:i(["form-input",{"border-2 border-red-700":r.name}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[2]||(s[2]=o=>l.form.user.name=o)},null,8,["class","modelValue"]),a(p,{name:"name",class:"block ch-body font-bold text-red-700"})]),e("div",we,[Ce,a(u,{id:"tel",name:"tel",label:"手機",type:"tel",class:i(["form-input",{"border-2 border-red-700":r.tel}]),placeholder:"請輸入手機",rules:x.isPhone,modelValue:l.form.user.tel,"onUpdate:modelValue":s[3]||(s[3]=o=>l.form.user.tel=o)},null,8,["class","rules","modelValue"]),a(p,{name:"tel",class:"block ch-body font-bold text-red-700"})]),e("div",Se,[Me,e("div",je,[a(u,{id:"county",name:"county",label:"縣市",class:i({"border-2 border-red-700":r.county}),rules:"required",as:"select",modelValue:l.form.user.county,"onUpdate:modelValue":s[4]||(s[4]=o=>l.form.user.county=o)},{default:_(()=>[Ee,(n(!0),d(b,null,v(l.twzipcode,(o,g)=>(n(),d("option",{value:g,key:g},c(g),9,Ne))),128))]),_:2},1032,["class","modelValue"])]),a(p,{name:"county",class:"block ch-body font-bold text-red-700"})]),e("div",Pe,[Ue,e("div",Fe,[a(u,{id:"district",name:"district",label:"地區",class:i({"border-2 border-red-700":r.district}),rules:"required",as:"select",modelValue:l.form.user.district,"onUpdate:modelValue":s[5]||(s[5]=o=>l.form.user.district=o)},{default:_(()=>[Le,(n(!0),d(b,null,v(x.filterDistrict,o=>(n(),d("option",{value:o,key:o},c(o),9,qe))),128))]),_:2},1032,["class","modelValue"])]),a(p,{name:"district",class:"block ch-body font-bold text-red-700"})]),e("div",De,[Be,a(u,{id:"address",name:"address",label:"地址",type:"text",class:i(["form-input",{"border-2 border-red-700":r.address}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[6]||(s[6]=o=>l.form.user.address=o)},null,8,["class","modelValue"]),a(p,{name:"address",class:"block ch-body font-bold text-red-700"})]),e("div",Ie,[Oe,e("div",Te,[a(u,{id:"paid",name:"paid",label:"付款",as:"select",modelValue:l.form.user.paidMethod,"onUpdate:modelValue":s[7]||(s[7]=o=>l.form.user.paidMethod=o)},{default:_(()=>[ze,Ae]),_:1},8,["modelValue"])])]),e("div",He,[Ge,P(e("textarea",{id:"message",class:"form-input",cols:"30",rows:"6","onUpdate:modelValue":s[8]||(s[8]=o=>l.form.message=o)},null,512),[[U,l.form.message]])]),Je]),_:1},8,["onSubmit"])])])):m("",!0)])],64)}const et=j(O,[["render",Ke]]);export{et as default};
