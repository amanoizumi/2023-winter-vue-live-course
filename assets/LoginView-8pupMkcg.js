import{u as _,a as n,b as v,d as e,w as d,v as c,e as h,o as f}from"./index-K5_bRBgh.js";import{a as w}from"./axios-G2rPRu76.js";const b={class:"container"},g={class:"row"},x={class:"col-6 mx-auto"},y=e("h1",{class:"fw-bold text-center mb-3"},"請先登入",-1),k={class:"d-grid gap-4"},B={class:"form-floating"},V=e("label",{for:"floatingInput"},"Email address",-1),D={class:"form-floating"},P=e("label",{for:"floatingPassword"},"Password",-1),$=["disabled"],U={__name:"LoginView",setup(E){const u=_(),t=n("a0918233246@hotmail.com"),a=n(""),l=n(!1),i=()=>{l.value=!0;const r="https://vue3-course-api.hexschool.io/v2",s={username:t.value,password:a.value};w.post(`${r}/admin/signin`,s).then(o=>{const{token:p,expired:m}=o.data;document.cookie=`hexToken=${p};expires=${new Date(m)}; path=/`,u.push("/admin/products")}).catch(o=>{alert(o.data.message)}).finally(()=>{l.value=!1})};return(r,s)=>(f(),v("div",b,[e("div",g,[e("div",x,[y,e("div",k,[e("div",B,[d(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),placeholder:"name@example.com"},null,512),[[c,t.value,void 0,{trim:!0}]]),V]),e("div",D,[d(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=o=>a.value=o),placeholder:"Password",onKeyup:h(i,["enter"])},null,544),[[c,a.value,void 0,{trim:!0}]]),P]),e("button",{type:"button",disabled:l.value,class:"btn btn-primary py-2",onClick:i}," 登入 ",8,$)])])])]))}};export{U as default};
