import{d as r}from"./index-a352aac4.js";import{s as e}from"./request-a94ccf31.js";const s=(t=1)=>e({url:`/articles?page=${t}`,method:"GET"}),n=t=>e({url:`/article/${t}`,method:"GET"}),l=r("articleData",{state:()=>({articles:[],articlesItem:{},pagination:{}}),actions:{async getArticles(t=1){const{articles:a,pagination:i}=await s(t);this.articles=a,this.pagination=i}}});export{l as a,n as g};