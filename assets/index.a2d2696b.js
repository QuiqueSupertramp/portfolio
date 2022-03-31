import{j as _,r as n,R as q,a as E}from"./vendor.607369a9.js";const C=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}};C();var A="/portfolio/assets/bienvenidos.b2d25817.png",k="/portfolio/assets/github.e9fd16a1.svg",N="/portfolio/assets/linkedin.8e188bca.svg",x="/portfolio/assets/instagram.32cab093.svg";const e=_.exports.jsx,r=_.exports.jsxs,M=()=>r("div",{className:"avatarMenu",children:[e("div",{className:"header__circle"}),r("div",{className:"socials",children:[e("a",{href:"https://github.com/QuiqueSupertramp",className:"social",target:"_blank",rel:"noreferrer",children:e("img",{src:k,alt:"github"})}),e("a",{href:"https://linkedin.com/in/quiquesupertramp",className:"social social1",target:"_blank",rel:"noreferrer",children:e("img",{src:N,alt:"linkedin"})}),e("a",{href:"https://instagram.com/quiquesupertramp",className:"social social2",target:"_blank",rel:"noreferrer",children:e("img",{src:x,alt:"instagram"})})]}),e("img",{className:"header__emoji",src:A,alt:"Quique Supertramp Avatar"})]}),R="<",F=" />",w=()=>r("div",{className:"header__text",children:[e("span",{className:"header__span",children:"const NAME = "}),e("h1",{children:"Quique Supertramp"}),r("h2",{children:[e("span",{className:"orange",children:R}),"DesarrolladorWeb",e("span",{className:"orange",children:F})]}),r("div",{className:"header__buttons",children:[e("a",{href:"#about",className:"btn btn--filled",children:"About Me"}),e("button",{className:"btn btn--ghost",children:"Resume"})]})]}),B=()=>r("header",{className:"header",children:[e(w,{}),e(M,{})]});const u=({text:a,number:s})=>r("div",{className:"title",children:[r("span",{className:"orange",children:[s,"."]}),e("h2",{children:a})]});function m(a="0px 0px -150px 0px"){const s=n.exports.useRef();return n.exports.useEffect(()=>{const o=new IntersectionObserver(([i],t)=>{i.isIntersecting&&(s.current.classList.add("showOn"),t.unobserve(s.current))},{rootMargin:a});return s.current&&o.observe(s.current),()=>{o.unobserve(s.current)}},[]),{ref:s}}var L="/portfolio/assets/quique1.bc161d1a.png";const P=()=>r("div",{className:"about__sidebar",children:[e("div",{className:"photo",children:e("img",{src:L,alt:"foto portfolio"})}),r("div",{className:"about__links",children:[e("a",{className:"btn btn--filled",href:"#softSkills",children:"Soft Skills"}),e("a",{className:"btn btn--filled",href:"#skills",children:"Hard Skills"}),e("a",{className:"btn btn--filled",href:"#projects",children:"Projects"})]})]}),V=()=>r("div",{className:"about__text",children:[e("h3",{children:"Bienvenido!"}),r("p",{children:["Mi nombre es Quique, tengo 37 a\xF1os y soy de Barcelona. Hace un a\xF1o que empec\xE9 a estudiar programaci\xF3n y he descubierto que tiene mucho que ver con el mundo del que vengo.",e("br",{}),e("br",{}),"Soy entrenador de baloncesto y los \xFAltimos 6 a\xF1os he estado dirigiendo un club de casi 200 familias, lo que me ha permitido desarrolllar habilidades personales, metodologicas y de gesti\xF3n muy valiosas para cualquier trabajo en equipo.",e("br",{}),e("br",{}),"Ahora busco mi primera oportunidad laboral en el mundo del desarrollo web. Llevo un a\xF1o prepar\xE1ndome de forma autodidacta y el siguiente paso que necesito es convivir y trabajar a diario con profesionales.",e("br",{}),e("br",{})]})]}),z=()=>{const{ref:a}=m();return e("section",{id:"about",children:r("div",{ref:a,className:"about",children:[e(u,{text:"About Me",number:"1"}),r("div",{className:"about__main",children:[e(P,{}),e(V,{})]})]})})};const $=({view:a,setView:s})=>{const o=n.exports.useRef(null),i=t=>{s(Number(t.target.dataset.view))};return n.exports.useEffect(()=>{a===1&&(o.current.style.transform="translateY(0rem)"),a===2&&(o.current.style.transform="translateY(2.5rem)"),a===3&&(o.current.style.transform="translateY(5rem)"),a===4&&(o.current.style.transform="translateY(7.5rem)")},[a]),e("nav",{className:"skills__menu",children:r("ul",{children:[e("div",{className:"skills__bar",ref:o}),e("li",{children:e("button",{"data-view":"1",onClick:i,className:a===1?"active":null,children:"Frontend"})}),e("li",{children:e("button",{"data-view":"2",onClick:i,className:a===2?"active":null,children:"Backend"})}),e("li",{children:e("button",{"data-view":"3",onClick:i,className:a===3?"active":null,children:"Tools"})}),e("li",{children:e("button",{"data-view":"4",onClick:i,className:a===4?"active":null,children:"Scrum"})})]})})};var T="/portfolio/assets/html.281ad198.svg",I="/portfolio/assets/css.02005660.svg",O="/portfolio/assets/js.40a27a1f.svg",D="/portfolio/assets/react.03ddbe0e.svg",H="/portfolio/assets/vue.ce689462.svg",Q="/portfolio/assets/node.b7d12c95.svg",Y="/portfolio/assets/express.0d654bbb.svg",J="/portfolio/assets/mongo.bda78459.svg",U="/portfolio/assets/vite.45c31588.svg",W="/portfolio/assets/git.cf84b451.svg",G="/portfolio/assets/npm.5ff4574a.svg",K="/portfolio/assets/eslint.63904ad1.svg",X="/portfolio/assets/scrum.6b48b949.svg";const d={1:{title:"Frontend",desc:"Me atrae porque es el \xE1rea que tiene relaci\xF3n directa con el cliente. Me gusta dominar CSS y JavaScript Vanilla. En cuanto a frameworks, empec\xE9 con Vue y ahora me estoy especializando en React.",imgs:[T,I,O,D,H]},2:{title:"Backend",desc:"He desarrollado una API REST para una lista de tareas con Node y MongoDB y sin duda es un \xE1rea en la que tambi\xE9n me gustar\xEDa seguir form\xE1ndome.",imgs:[Q,Y,J]},3:{title:"Tools",desc:"He trabajado con varias de las herramientas que se entienden como b\xE1sicas, pero me falta aprender a utilizarlas en una experiencia real.",imgs:[W,U,G,K]},4:{title:"Scrum",desc:"He le\xEDdo mucho sobre metodolog\xEDas \xE1giles y dada mi experiencia en el deporte son formas de organizar equipos que me resultan familiares. SCRUM, por ejemplo, es una metodolog\xEDa que viene del rugby.",imgs:[X]}},Z=({skill:a})=>e("div",{className:"skills__wrapper",children:r("article",{className:"skills__main",children:[e("h3",{className:"skills__h3",children:d[a].title}),e("p",{className:"skills__p",children:d[a].desc}),e("div",{className:"skills__logos",children:d[a].imgs.map(s=>e("img",{src:s,alt:"",className:"skills__img"},s))})]})});var ee="/portfolio/assets/down.146719de.svg";const p=({skill:a})=>{const s=n.exports.useRef(),o=i=>{var t;i.target.classList.toggle("skills__reverse"),(t=s.current)==null||t.classList.toggle("skills__toggle")};return e("div",{className:"skills__wrapper",children:r("article",{className:"skills__main",children:[r("div",{className:"skills__title",children:[e("h3",{className:"skills__h3",children:d[a].title}),e("img",{onClick:o,src:ee,alt:""})]}),r("div",{className:"skills__text skills__toggle",ref:s,children:[e("p",{className:"skills__p",children:d[a].desc}),e("div",{className:"skills__logos",children:d[a].imgs.map(i=>e("img",{src:i,alt:"",className:"skills__img"},i))})]})]})})},ae=()=>{const[a,s]=n.exports.useState(1),{ref:o}=m();return e("section",{id:"skills",children:r("div",{className:"skills",ref:o,children:[e(u,{text:"Hard Skills",number:"3"}),r("div",{className:"skills__container skills__container--desktop",children:[e($,{view:a,setView:s}),e(Z,{skill:a})]}),r("div",{className:"skills__container skills__container--mobile",children:[e(p,{skill:"1"}),e(p,{skill:"2"}),e(p,{skill:"3"}),e(p,{skill:"4"})]})]})})};var se="/portfolio/assets/todoVue.d3e244a0.png",re="/portfolio/assets/todoVue-tb.31738912.png",te="/portfolio/assets/todoVue-mb.cc9cb72f.png",oe="/portfolio/assets/landing.9875ca0f.png",ie="/portfolio/assets/landing-tb.9a806de7.png",le="/portfolio/assets/landing-mb.633eacf9.png";const ne={todoApp:{title:"Todo App",images:[{img:se,class:"project__img project__img--desktop"},{img:re,class:"project__img project__img--tablet"},{img:te,class:"project__img project__img--mobile"}],desc:"Aplicaci\xF3n fullstack responsive con login de usuario. Frontend desarrollado con Vue 3 y Vue-Router. Backend con Node y Express. Base de datos MongoDB.",links:{code:"https://github.com/QuiqueSupertramp/todoList-Vue3",code2:"https://github.com/QuiqueSupertramp/API-todoList-Node",web:"https://todolistvue3.netlify.app/"}},landingPage:{title:"Landing Page",images:[{img:oe,class:"project__img project__img--desktop"},{img:ie,class:"project__img project__img--tablet"},{img:le,class:"project__img project__img--mobile"}],desc:"P\xE1gina de producto responsive, multilenguaje y con gesti\xF3n de opiniones. Frontend desarrollado con React, CSS modules y Context API para el estado global.",links:{code:"https://github.com/QuiqueSupertramp/landing-product-page-react",web:"https://quiquesupertramp.github.io/landing-product-page-react/"}}},f=({project:a})=>{const s=ne[a];return r("div",{className:"project",children:[e("div",{className:"project__images",children:s.images.map((o,i)=>e("img",{src:o.img,alt:"",className:o.class},i))}),e("h3",{className:"project__h3",children:s.title}),e("p",{className:"project__description",children:s.desc}),r("div",{className:"project__links",children:[e("a",{href:s.links.web,target:"_blank",rel:"noreferrer",className:"btn btn--filled",children:"Web"}),e("a",{href:s.links.code,target:"_blank",rel:"noreferrer",className:"btn btn--filled",children:s.links.code2?"Frontend Code":"Code"}),s.links.code2&&e("a",{href:s.links.code2,target:"_blank",rel:"noreferrer",className:"btn btn--filled",children:"Backend Code"})]})]})},ce=()=>{const{ref:a}=m();return e("section",{id:"projects",children:r("div",{className:"projects",ref:a,children:[e(u,{text:"Projects",number:"4"}),r("div",{className:"projects__main",children:[e(f,{project:"todoApp"}),e(f,{project:"landingPage"})]})]})})};const v=a=>{const[s,o]=n.exports.useState(""),[i,t]=n.exports.useState(!1),[l,c]=n.exports.useState(!1),h=y=>o(y.target.value),g=()=>o(""),j=()=>c(!0),S=()=>c(!1);return n.exports.useEffect(()=>{if(!!a){if(s.length===0)return t(!1);a.test(s)?t(!1):t(!0)}},[s]),{value:s,error:i,active:l,onChange:h,onFocus:j,onBlur:S,reset:g}},de="https://formspree.io/f/xnqwvpbo",ue=async a=>await(await fetch(de,{method:"POST",body:JSON.stringify(a),headers:{Accept:"application/json"}})).json(),me=({validations:a,email:s})=>r("div",{className:"contact__email",children:[e("input",{type:"email",className:["contact__emailInput",s.active?"blur":null].join(" "),placeholder:"Email...",value:s.value,onChange:s.onChange,onFocus:s.onFocus,onBlur:s.onBlur,required:!0}),e("div",{className:"contact__emailError",children:s.error&&r("p",{children:["* ",a.email.errorMessage]})})]}),pe=({comment:a})=>e("textarea",{className:["contact__comment",a.active?"blur":null].join(" "),rows:"6",placeholder:"Mensaje...",value:a.value,onChange:a.onChange,onFocus:a.onFocus,onBlur:a.onBlur,required:!0}),he=({submitError:a})=>e("div",{className:"contact__error",children:e("h4",{children:a===!1?"Mensaje enviado correctamente":"No se ha podido enviar"})}),b={email:{regularExp:/^[a-zñÑ0-9_-]+(?:\.[a-zñÑ0-9_-]+)*@(?:[a-z0-9](?:[a-z0-9-_]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/,errorMessage:"El email es incorrecto"}},ge=()=>{const a=v(b.email.regularExp),s=v(),[o,i]=n.exports.useState(null),t=()=>{i(!1),a.reset(),s.reset()};return r("form",{className:"contact__form",onSubmit:c=>{if(c.preventDefault(),!a.error&&s.value.length!==0){const h={email:a.value,comment:s.value};ue(h).then(g=>{g.ok===!0?t():i(!0),setTimeout(()=>i(null),4e3)})}},children:[e(me,{validations:b,email:a}),e(pe,{comment:s}),o!==null&&e(he,{submitError:o}),e("input",{type:"submit",className:"btn btn--filled contact__submitBtn",value:"Enviar"})]})},fe=()=>{const{ref:a}=m();return e("section",{id:"contact",children:r("div",{className:"contact",ref:a,children:[e(u,{text:"Say Hello!",number:"5"}),r("div",{className:"contact__container",children:[r("div",{className:"contact__sidebar",children:[r("div",{className:"contact__text",children:[e("p",{children:"Gracias por llegar hasta aqu\xED. Espero que este portfolio, hecho con mucho cari\xF1o, haya sido de tu agrado."}),e("br",{}),e("p",{children:"Contacta conmigo a trav\xE9s del correo electr\xF3nico, redes sociales o rellenando el formulario. Hasta pronto!"})]}),r("div",{className:"contact__social",children:[e("a",{href:"mailto:quiquesupertramp@gmail.com",children:e("p",{children:"quiquesupertramp@gmail.com"})}),r("div",{className:"contact__links",children:[e("a",{href:"https://linkedin.com/in/quiquesupertramp",target:"_blank",rel:"noreferrer",children:e("img",{src:N,alt:"linkedin"})}),e("a",{href:"https://github.com/QuiqueSupertramp",target:"_blank",rel:"noreferrer",children:e("img",{src:k,alt:"github"})}),e("a",{href:"https://instagram.com/quiquesupertramp",target:"_blank",rel:"noreferrer",children:e("img",{src:x,alt:"instagram"})})]})]})]}),e(ge,{})]})]})})};var ve="/portfolio/assets/results.1ec91b32.svg",be="/portfolio/assets/teamwork.6b6ec656.svg",_e="/portfolio/assets/conflicts.ab8ce17a.svg",ke="/portfolio/assets/changes.f4244f10.svg",Ne="/portfolio/assets/pressure.91996bc9.svg",xe="/portfolio/assets/xxx.0f92bf89.svg";const je=[{img:be,title:"Trabajo en equipo",desc:"Llevo a\xF1os creando sinergias, poniendo el foco en la responsabilidad individual y proyectando hacia el colectivo. La herramienta clave es la asertividad."},{img:Ne,title:"Tolerancia a la presi\xF3n",desc:"Acostumbrado a trabajar bajo presi\xF3n, tanto en el d\xEDa a d\xEDa como en la toma de decisiones. La herramiento clave es la preparaci\xF3n."},{img:ke,title:"Adaptaci\xF3n al cambio",desc:"Vengo de un mundo d\xF3nde el primero en adaptarse juega con ventaja. Las herramientas clave son la curiosidad y poner el foco en los detalles"},{img:_e,title:"Resoluci\xF3n de conflictos",desc:"Son parte del d\xEDa a d\xEDa y la semilla del crecimiento de un equipo. Es clave escuchar, buena comunicaci\xF3n y cierta creatividad."},{img:ve,title:"Orientado a resultados",desc:"Estoy acostumbrado a trabajar con objetivos a corto y largo plazo. Serenidad y una buena planificaci\xF3n son los ingredientes del \xE9xito."},{img:xe,title:"Formaci\xF3n continuada",desc:"Conozco el camino y los m\xE9todos de aprendizaje eficientes, lo que me permite ser autodidacta y tener facilidad para formar a otras personas."}],Se=({softSkill:a})=>r("div",{className:"softSkills__wrapper",children:[r("div",{className:"softSkills__title",children:[e("img",{src:a.img,alt:""}),e("h4",{children:a.title})]}),e("p",{children:a.desc})]}),ye=()=>{const{ref:a}=m();return e("section",{id:"softSkills",children:r("div",{className:"softSkills",ref:a,children:[e(u,{number:"2",text:"Soft Skills"}),e("div",{className:"softSkills__container",children:je.map((s,o)=>e(Se,{softSkill:s},o))})]})})};function qe(){return r("div",{className:"App",children:[e(B,{}),r("main",{children:[e(z,{}),e(ye,{}),e(ae,{}),e(ce,{}),e(fe,{})]})]})}q.render(e(E.StrictMode,{children:e(qe,{})}),document.getElementById("root"));