import{m as y,_ as b,o as a,c as n,b as t,n as l,s as c,F as d,g as v,t as _,i as k,a as A,r as g,e as f,h as P}from"./index-8dc51b0a.js";import{p as w}from"./productsStore-98b05915.js";import{P as j}from"./PageHeader-6a365377.js";import{A as I}from"./ArticleItem-8961f848.js";import{a as L}from"./common-0df46e94.js";import{a as h}from"./articlesStore-771fbc1d.js";import"./cartStore-b76d7477.js";import"./toast-7bff71d1.js";const S={props:{pages:{type:Object,default:()=>{}},getList:{type:Function,default:()=>{}},category:{type:String,default:""}},emits:["change-page"],computed:{...y(w,["currentCategory"])}},$={key:0,class:"flex items-center justify-center"},B={class:"py-8"},V={class:"flex items-center justify-center space-x-2"},F=t("span",{class:"material-symbols-outlined"}," chevron_left ",-1),H=[F],N={key:0,class:"flex items-center justify-center w-12 h-12 rounded bg-netural-netural-200 text-netural-netural-300 group-[.active]:bg-secondary-secondary-200 group-[.active]:text-netural-netural-100 font-semibold ch-heading-4"},z=["onClick"],D=t("span",{class:"material-symbols-outlined"}," chevron_right ",-1),E=[D];function M(o,r,e,x,u,C){return e.pages.total_pages>1?(a(),n("div",$,[t("nav",B,[t("ul",V,[t("li",{class:l(["group",{disabled:!e.pages.has_pre}])},[t("a",{class:"flex items-center justify-center w-12 h-12 rounded bg-netural-netural-200 text-netural-netural-400 group-[.disabled]:opacity-30 group-[.disabled]:cursor-not-allowed font-semibold ch-heading-4",href:"#",onClick:r[0]||(r[0]=c(s=>e.getList(e.pages.current_page-1),["prevent"]))},H)],2),(a(!0),n(d,null,v(e.pages.total_pages,(s,i)=>(a(),n("li",{class:l(["group",{active:e.pages.current_page===s}]),key:i},[e.pages.current_page===s?(a(),n("span",N,_(i+1),1)):(a(),n("a",{key:1,class:"flex items-center justify-center w-12 h-12 rounded bg-netural-netural-200 text-netural-netural-400 font-semibold ch-heading-4",href:"#",onClick:c(p=>o.$emit("change-page",s),["prevent"])},_(i+1),9,z))],2))),128)),t("li",{class:l(["group",{disabled:!e.pages.has_next}])},[t("a",{class:"flex items-center justify-center w-12 h-12 rounded bg-netural-netural-200 text-netural-netural-400 group-[.disabled]:opacity-30 group-[.disabled]:cursor-not-allowed font-semibold ch-heading-4",href:"#",onClick:r[1]||(r[1]=c(s=>e.getList(e.pages.current_page+1),["prevent"]))},E)],2)])])])):k("",!0)}const O=b(S,[["render",M]]),q="/hexschool-vue-ecommerce/assets/page_article-b107d7f3.jpg",G={data(){return{pageImage:q}},components:{PageHeader:j,PaginationComponent:O,ArticleItem:I},methods:{...A(h,["getArticles","getArticleItem"])},computed:{...y(h,["articles","pagination"])},async mounted(){L().isLoading=!0,await this.getArticles()}},J={class:"container"},K={class:"grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6"};function Q(o,r,e,x,u,C){const s=g("PageHeader"),i=g("ArticleItem"),p=g("PaginationComponent");return a(),n(d,null,[f(s,{"image-url":u.pageImage},null,8,["image-url"]),t("div",J,[t("div",K,[(a(!0),n(d,null,v(o.articles,m=>(a(),P(i,{key:m.id,"article-data":m,"text-content-class":"!ml-4"},null,8,["article-data"]))),128))]),f(p,{pages:o.pagination,onChangePage:o.getArticles,"get-list":o.getArticles},null,8,["pages","onChangePage","get-list"])])],64)}const te=b(G,[["render",Q]]);export{te as default};