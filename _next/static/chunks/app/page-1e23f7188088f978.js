(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9667:function(e,t,i){Promise.resolve().then(i.bind(i,890))},890:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return R}});var s=i(9268),a=i(6006),l=e=>{let[t,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let s=window.matchMedia(e);s.matches!==t&&i(s.matches);let a=()=>i(s.matches);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[t,e]),t},r=i(8662),n=i.n(r),o=i(3754),c=i.n(o),d=i(1033),x=i(5846),m=i.n(x),h=i(4646);let u=e=>{let{page:t,selectedPage:i,setSelectedPage:a,setIsMenuToggled:l,isMenuToggled:r}=e,n=t.toLowerCase(),o=e=>{a(e),l&&l(!r)};return(0,s.jsx)(m(),{className:"".concat(i===n?"text-[#facc15]":"","  hover:scale-125 transition duration-300"),href:"/web#".concat(n),onClick:()=>o(n),children:t})};var p=e=>{let{isTopOfPage:t,selectedPage:i,setSelectedPage:r}=e,[o,x]=(0,a.useState)(!1),p=l("(min-width: 768px)"),b=(0,a.useRef)(null);return(0,s.jsx)("nav",{className:"".concat(t?"":"bg-blue"," z-40 w-full fixed top-0 py-6"),children:(0,s.jsxs)("div",{className:"flex items-center justify-between mx-auto w-5/6",children:[(0,s.jsx)(m(),{href:"/web#home",children:(0,s.jsx)("h4",{className:"".concat(n().className," text-3xl font-bold"),children:"Vasil Vasilev"})}),p?(0,s.jsxs)("div",{className:"".concat(c().className," flex justify-between gap-16 text-base font-semibold"),children:[(0,s.jsx)(u,{page:"Home",selectedPage:i,setSelectedPage:r}),(0,s.jsx)(u,{page:"Projects",selectedPage:i,setSelectedPage:r}),(0,s.jsx)(u,{page:"Articles",selectedPage:i,setSelectedPage:r}),(0,s.jsx)(u,{page:"Qualifications",selectedPage:i,setSelectedPage:r}),(0,s.jsx)(u,{page:"Contact",selectedPage:i,setSelectedPage:r})]}):(0,s.jsx)("button",{className:"rounded-full bg-red p-2",onClick:()=>x(!o),"aria-label":"Open mobile menu",children:(0,s.jsx)(d.qTj,{size:24})}),!p&&o&&(0,s.jsx)("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80",onClick:e=>{e.stopPropagation(),e.target==b.current&&x(!o)},ref:b,children:(0,s.jsxs)(h.E.div,{className:"fixed right-0 bottom-0 h-full bg-blue w-[300px]",initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{duration:.3},variants:{hidden:{opacity:0,x:50},visible:{opacity:1,x:0}},children:[(0,s.jsx)("div",{className:"flex justify-end p-12",children:(0,s.jsx)("button",{onClick:()=>x(!o),"aria-label":"Close Mobile Menu",children:(0,s.jsx)(d.oHP,{size:24})})}),(0,s.jsxs)("div",{className:"flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue",children:[(0,s.jsx)(u,{page:"Home",selectedPage:i,setSelectedPage:r,setIsMenuToggled:x,isMenuToggled:o}),(0,s.jsx)(u,{page:"Projects",selectedPage:i,setSelectedPage:r,setIsMenuToggled:x,isMenuToggled:o}),(0,s.jsx)(u,{page:"Articles",selectedPage:i,setSelectedPage:r,setIsMenuToggled:x,isMenuToggled:o}),(0,s.jsx)(u,{page:"Qualifications",selectedPage:i,setSelectedPage:r,setIsMenuToggled:x,isMenuToggled:o}),(0,s.jsx)(u,{page:"Contact",selectedPage:i,setSelectedPage:r,setIsMenuToggled:x,isMenuToggled:o})]})]})})]})})},b=i(6758),f=()=>(0,s.jsxs)("div",{className:"flex justify-center md:justify-start my-10 gap-7",children:[(0,s.jsx)(m(),{className:"hover:opacity-50 transition duration-300",href:"https://github.com/VasilGVasilev",target:"_blank",rel:"noreferrer","aria-label":"Github Link",children:(0,s.jsx)(d.RrF,{size:30})}),(0,s.jsx)(m(),{className:"hover:opacity-50 transition duration-300",href:"https://uk.linkedin.com/in/vasil-vasilev-28621b178",target:"_blank",rel:"noreferrer","aria-label":"Linkedin Link",children:(0,s.jsx)(d._iD,{size:30})}),(0,s.jsx)(m(),{className:"hover:opacity-50 transition duration-300",href:"mailto:vgvmail97@gmail.com",target:"_blank",rel:"noreferrer","aria-label":"Gmail Link",children:(0,s.jsx)(b.usP,{size:30})}),(0,s.jsx)(m(),{className:"hover:opacity-50 transition duration-300",href:"tel:+359884336793",target:"_blank",rel:"noreferrer","aria-label":"Phone Link",children:(0,s.jsx)(b.jIu,{size:30})})]}),v=i(4537),j=i(2801),g=()=>(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"".concat(n().className," md:text-xl"),children:"Main Tech Stack"}),(0,s.jsxs)("div",{className:"flex justify-center gap-1 md:gap-3",children:[(0,s.jsx)(v.vl3,{size:28,title:"Javascript"}),(0,s.jsx)(j.huN,{size:28,title:"React"}),(0,s.jsx)(v.YnA,{size:28,title:"Tailwind"}),(0,s.jsx)(j.jPo,{size:28,title:"Node.js"}),(0,s.jsx)(v.Xou,{size:28,title:"Next.js"}),(0,s.jsx)(v.t$b,{size:28,title:"MongoDB"}),(0,s.jsx)(v.WZi,{size:28,title:"Typescript"})]})]}),w=i(8214);let N=e=>{let{src:t,width:i,quality:s}=e;return"https://vasilgvasilev.github.io/web/".concat(t)};var y=i(6394),V=i.n(y),k=()=>{let e=l("(min-width: 1060px)");return(0,w.Z)(e=>e.openModal),(0,s.jsxs)("section",{id:"home",className:"md:flex md:justify-between md:items-center gap-16 md:h-full py-10",children:[(0,s.jsx)(h.E.div,{className:"basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2",initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{duration:.7,delay:.3},variants:{hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1}},children:e?(0,s.jsx)("div",{className:"relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:bg-neutral-100 before:opacity-20 before:h-full before:border-2 before:border-blue before:z-[-1]",children:(0,s.jsx)(V(),{className:"hover:filter hover:saturate-150 transition duration-500 z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]",loader:N,src:"/assets/profile-image.webp",alt:"profile",width:1035,height:977})}):(0,s.jsx)(V(),{className:"hover:filter hover:saturate-200 transition duration-500 z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]",loader:N,src:"/assets/profile-image.webp",alt:"profile",width:1035,height:977})}),(0,s.jsxs)("div",{className:"z-30 basis-2/5 mt-12 md:mt-32",children:[(0,s.jsxs)(h.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{duration:.5},variants:{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},children:[(0,s.jsxs)("p",{className:"text-6xl ".concat(n().className," z-10 text-center md:text-start"),children:["Vasil ","",(0,s.jsx)("span",{className:"xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[15px] before:-top-[10px] before:z-[-1]",children:"Vasilev"})]}),(0,s.jsx)("p",{className:"mt-20 mb-7 text-center md:text-start",children:"Hey, my name is Vasil Vasilev and my passion is Web Development. \uD83D\uDC4B"})]}),(0,s.jsxs)(h.E.div,{className:"flex mt-5 justify-center md:justify-start",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{delay:.2,duration:.5},variants:{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},children:[(0,s.jsx)("div",{className:"bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-300",children:"About me"}),(0,s.jsx)(m(),{className:"rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5",href:"/VasilVasilevCV.pdf",download:"CV-Document",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("div",{className:"".concat(n().className," bg-deep-blue hover:text-red transition duration-300 w-full h-full flex items-center justify-center px-10"),children:"My CV"})})]}),(0,s.jsx)(h.E.div,{className:"flex mt-5 justify-center md:justify-start",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{delay:.4,duration:.5},variants:{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},children:(0,s.jsx)(f,{})}),(0,s.jsx)(h.E.div,{className:"flex mt-5 justify-center md:justify-start",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{delay:.6,duration:.5},variants:{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},children:(0,s.jsx)(g,{})})]})]})},E=e=>{let{selectedPage:t,setSelectedPage:i}=e,a="relative bg-[#facc15] before:absolute before:w-6 before:h-6 before:rounded-full\n    before:border-2 before:border-[#facc15] before:left-[-50%] before:top-[-50%]",l="bg-dark-grey hover:bg-[#facc15] transition duration-200 hover:scale-110 active:scale-110 ";return(0,s.jsxs)("div",{className:"flex flex-col gap-6 fixed top-[60%] right-7 z-50",children:[(0,s.jsx)(m(),{href:"/web#home",className:"".concat("home"===t?a:l," w-3 h-3 rounded-full"),onClick:()=>i("home")}),(0,s.jsx)(m(),{href:"/web#projects",className:"".concat("projects"===t?a:l," w-3 h-3 rounded-full"),onClick:()=>i("projects")}),(0,s.jsx)(m(),{href:"/web#articles",className:"".concat("articles"===t?a:l," w-3 h-3 rounded-full"),onClick:()=>i("articles")}),(0,s.jsx)(m(),{href:"/web#qualifications",className:"".concat("qualifications"===t?a:l," w-3 h-3 rounded-full"),onClick:()=>i("qualifications")}),(0,s.jsx)(m(),{href:"/web#contact",className:"".concat("contact"===t?a:l," w-3 h-3 rounded-full"),onClick:()=>i("contact")})]})},I=e=>{let{width:t="w-full"}=e;return(0,s.jsx)("div",{className:"h-0.5 ".concat(t," bg-gradient-rainblue")})};let S=e=>{let{number:t,bgColor:i,projectBorder:a,pictureLinkBorder:l,url:r,altLink:o,srcImg:c,imgW:d,imgH:x,projectName:u,projectDesc:p,githubLink:b}=e;return(0,s.jsxs)(h.E.div,{className:"mt-10 relative z-0 p-10 xl:p-16 before:absolute before:bottom-10 before:right-10\n  before:w-full before:h-full before:border-4 ".concat(a," before:z-[-1]"),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{delay:.4,duration:.5},variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0}},children:[(0,s.jsxs)("div",{className:"relative h-32",children:[(0,s.jsx)("div",{className:"z-10 absolute",children:(0,s.jsxs)(m(),{href:r,children:[(0,s.jsxs)("p",{className:"".concat(n().className," font-semibold text-4xl hover:scale-125 transition"),children:["0",t]}),(0,s.jsx)("p",{className:"".concat(n().className," font-semibold text-2xl mt-3 hover:scale-125 transition"),children:u})]})}),(0,s.jsx)("div",{className:"w-full h-36 ".concat(i," absolute right-5 top-0 z-[1]")})]}),(0,s.jsx)("p",{className:"mt-10 mr-5 text-justify text-neutral-300",children:p}),(0,s.jsx)("br",{}),(0,s.jsx)(m(),{href:b,className:"text-neutral-400 hover:text-white",children:"See Github Code"}),(0,s.jsx)("div",{className:"w-full h-fit border-t-4 border-r-4 ".concat(l," m-5 overflow-hidden mx-auto"),children:(0,s.jsx)(m(),{href:r,children:(0,s.jsx)(V(),{className:"transition-transform duration-700 ease-in-out hover:scale-150",loader:N,src:c,alt:o,width:d,height:x})})})]})};var C=()=>{let e=l("(min-width: 1060px)");return(0,s.jsxs)("section",{id:"projects",className:"pt-10 pb-24",children:[(0,s.jsxs)("div",{className:"md:flex md:justify-between md:gap-16 mt-32",children:[(0,s.jsxs)(h.E.div,{className:"md:w-1/3",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{duration:.5},variants:{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},children:[(0,s.jsxs)("p",{className:"".concat(n().className," font-semibold text-4xl mb-5"),children:[(0,s.jsx)("span",{className:"text-red",children:"PRO"}),"JECTS"]}),(0,s.jsx)(I,{width:"w-1/3"}),(0,s.jsx)("p",{className:"mt-10 mb-7 text-neutral-300",children:"A few of my latest projects..."})]}),(0,s.jsx)(h.E.div,{className:"mt-16 md:mt-0",initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{duration:.7,delay:.3},variants:{hidden:{opacity:0,translateY:20,skewX:-80,rotateY:50},visible:{opacity:1,translateY:0,skewX:0,rotateY:0}},children:e?(0,s.jsx)("div",{className:"relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]",children:(0,s.jsx)(V(),{className:"z-10 max-w-[700px] max-h-[400px]",loader:N,src:"/assets/coding-image.webp",width:3554,height:1999,alt:"coding-image"})}):(0,s.jsx)(s.Fragment,{})})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:justify-between mt-16 gap-10",children:[(0,s.jsx)(S,{number:"1",bgColor:"bg-red",projectBorder:"before:border-red",pictureLinkBorder:"border-red",url:"https://tiliabg.com/",altLink:"tilia-img",srcImg:"/assets/project-tilia.webp",imgW:"5000",imgH:"2813",projectName:"Tilia Residence",projectDesc:"A SSG website for a freelance project about sell of apartments developed via Next.js, Tailwind, React and Framer Motion. ",githubLink:"https://github.com/VasilGVasilev/tilia"}),(0,s.jsx)(S,{number:"2",bgColor:"bg-blue",projectBorder:"before:border-blue",pictureLinkBorder:"border-blue",url:"https://ixorabg.com/",altLink:"ixora-img",srcImg:"/assets/project-ixora.webp",imgW:"5000",imgH:"2813",projectName:"Ixora Residence",projectDesc:"A SSG website for a freelance project about sell of apartments developed via Next.js, Tailwind, React and Framer Motion. ",githubLink:"https://github.com/VasilGVasilev/nextJS/tree/ixoraInter"}),(0,s.jsx)(S,{number:"3",bgColor:"bg-red",projectBorder:"before:border-red",pictureLinkBorder:"border-red",url:"http://creativestudiobg.com/",altLink:"chat-img",srcImg:"/assets/project-creativestudio.webp",imgW:"1804",imgH:"1087",projectName:"Creative Studio",projectDesc:"A SSG website for a freelance project about a firm portfolio developed via Next.js, Tailwind, React and Framer Motion.",githubLink:"https://github.com/VasilGVasilev/creativestudio-portfolio"}),(0,s.jsx)(S,{number:"4",bgColor:"bg-yellow",projectBorder:"before:border-yellow",pictureLinkBorder:"border-yellow",url:"https://vgv-rental.vercel.app/",altLink:"airbnb-img",srcImg:"/assets/project-airbnb.webp",imgW:"2522",imgH:"1237",projectName:"Airbnb clone",projectDesc:"A fullstack application developed via Typescript, Next.js, React, Tailwind, Prisma, MongoDB, Zustand, Next-Auth, brypt, axios.",githubLink:"https://github.com/VasilGVasilev/airbnb"})]})]})};let P={hidden:{},visible:{transition:{staggerChildren:.2}}},T={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},z=e=>{let{title:t,subtitle:i,url:a}=e,l=t.split(" ").join("-").toLowerCase();return(0,s.jsxs)(h.E.div,{variants:T,className:"relative",viewport:{once:!0},children:[(0,s.jsxs)(m(),{href:a,className:"absolute h-full w-full opacity-0 hover:opacity-100 transition duration-700\n    bg-deep-blue z-30 flex flex-col justify-center items-center text-center p-10 text-white",children:[(0,s.jsx)("p",{className:"".concat(n().className," text-3xl"),children:t}),(0,s.jsx)("p",{className:"mt-7 font-extrabold text-2xl",children:i})]}),(0,s.jsx)("div",{className:"bg-white flex flex-col justify-center items-center w-[400px] h-[400px] p-10",children:(0,s.jsx)(V(),{loader:N,src:"/assets/".concat(l,".webp"),alt:l,width:1298,height:828})})]})};var L=()=>(0,s.jsxs)("section",{id:"articles",className:"pt-48 pb-48",children:[(0,s.jsxs)(h.E.div,{className:"md:w-2/5 mx-auto text-center",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{duration:.5},variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0}},children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"".concat(n().className," font-semibold text-4xl"),children:[(0,s.jsx)("span",{className:"text-red",children:"ART"}),"ICLES"]}),(0,s.jsx)("div",{className:"flex justify-center mt-5",children:(0,s.jsx)(I,{width:"w-2/3"})})]}),(0,s.jsx)("p",{className:"mt-10 mb-10",children:"The following articles represent some brief explanations and solutions to fundamental problems I incurred during the development of my projects."})]}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)(h.E.div,{className:"grid sm:grid-cols-2 lg:grid-cols-3",variants:P,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:[(0,s.jsx)("div",{className:"".concat(n().className," flex justify-center text-center items-center p-10 bg-red\n            max-w-[400px] max-h-[400px] text-2xl font-semibold"),children:"EVERY CONCEPT IS FEASIBLE"}),(0,s.jsx)(z,{title:"Article 1",subtitle:"Javascript is single or multi-threaded?",url:"https://dev.to/vasilgvasilev/javascript-is-single-or-multi-threaded-486e"}),(0,s.jsx)(z,{title:"Article 2",subtitle:"Loose Coupling and Dependency Injection (DI) principle ",url:"https://dev.to/vasilgvasilev/loose-coupling-and-dependency-injection-di-principle-3i8c"}),(0,s.jsx)(z,{title:"Article 3",subtitle:"Copying an Array in Javascript ",url:"https://dev.to/vasilgvasilev/copying-an-array-in-javascript-2dg3"}),(0,s.jsx)(z,{title:"Article 4",subtitle:"Mutable And Immutable Values in Javascript",url:"https://dev.to/vasilgvasilev/mutable-and-immutable-values-in-javascript-1eho"}),(0,s.jsx)(z,{title:"Article 5",subtitle:"Currying Step-By-Step",url:"https://dev.to/vasilgvasilev/currying-step-by-step-5eb2"}),(0,s.jsx)(z,{title:"Article 6",subtitle:"Why You Should Understand Closures To Master .reduce()",url:"https://dev.to/vasilgvasilev/why-you-need-to-understand-closures-to-fully-master-reduce-7ac"}),(0,s.jsx)(z,{title:"Article 7",subtitle:"Understanding the useCallback hook",url:"https://dev.to/vasilgvasilev/understanding-the-usecallback-hook-4d5b"}),(0,s.jsx)("div",{className:"".concat(n().className," flex justify-center text-center items-center p-10 bg-blue\n            max-w-[400px] max-h-[400px] text-2xl font-semibold"),children:"IF YOU UNDERSTAND WHAT IS UNDER THE HOOD"})]})})]}),A=()=>(0,s.jsxs)("section",{id:"qualifications",className:"pt-32 pb-16",children:[(0,s.jsxs)(h.E.div,{className:"md:w-1/3 text-center md:text-left",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{duration:.5},variants:{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},children:[(0,s.jsx)("p",{className:"".concat(n().className," font-semibold text-4xl mb-5 text-red"),children:"QUALIFICATIONS"}),(0,s.jsx)(I,{width:"mx-auto w-2/5"}),(0,s.jsx)("p",{className:"mt-10",children:"Prior to web development, I have studied English law and German law culminating in my First Class Master of Laws degree."})]}),(0,s.jsxs)("div",{className:"md:flex md:justify-between gap-8",children:[(0,s.jsxs)(h.E.div,{className:"qualification-kings",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{delay:.2,duration:.6},variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},children:[(0,s.jsx)("p",{className:"".concat(n().className," text-6xl"),children:"“"}),(0,s.jsx)("p",{className:"text-center text-lg",children:"English Law & German Law"})]}),(0,s.jsxs)(h.E.div,{className:"qualification-humboldt",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{delay:.4,duration:.6},variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},children:[(0,s.jsx)("p",{className:"".concat(n().className," text-6xl"),children:"“"}),(0,s.jsx)("p",{className:"text-center text-lg",children:"Master of Laws (LL.M.)"})]}),(0,s.jsxs)(h.E.div,{className:"qualification-softuni",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{duration:.6},variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},children:[(0,s.jsx)("p",{className:"".concat(n().className," text-6xl"),children:"“"}),(0,s.jsx)("p",{className:"text-center text-lg",children:"JS Web Developer"})]})]})]}),M=()=>(0,s.jsx)("section",{id:"contact",className:"contact py-48",children:(0,s.jsx)(h.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{duration:.5},variants:{hidden:{opacity:0,x:50},visible:{opacity:1,x:0}},className:"flex justify-end w-full",children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-playfair font-semibold text-4xl",children:[(0,s.jsx)("span",{className:"text-yellow cursor-pointer",children:"CONTACT ME"})," TO GET STARTED"]}),(0,s.jsx)("div",{className:"flex md:justify-end my-5",children:(0,s.jsx)(I,{width:"w-1/2"})}),(0,s.jsx)(h.E.div,{className:"flex mt-5 justify-end",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},transition:{delay:.4,duration:.5},variants:{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},children:(0,s.jsx)(f,{})})]})})}),D=()=>(0,s.jsx)("footer",{className:"h-60 bg-blue pt-10 ",children:(0,s.jsxs)("div",{className:"w-10/12 mx-auto",children:[(0,s.jsx)(f,{}),(0,s.jsxs)("div",{className:"md:flex justify-center md:justify-between text-center ",children:[(0,s.jsx)("p",{className:"font-playfair font-semibold text-2xl text-white",children:"Vasil Vasilev"}),(0,s.jsx)("p",{className:"font-playfair text-md text-white",children:"\xa92023 VGV. All Rights Reserved."})]})]})});function R(){let[e,t]=(0,a.useState)("home"),[i,r]=(0,a.useState)(!0),n=l("(min-width: 1060px)");return(0,a.useEffect)(()=>{let e=()=>{0===window.scrollY&&(r(!0),t("home")),0!==window.scrollY&&r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,s.jsxs)("div",{className:"bg-deep-blue",children:[(0,s.jsx)(p,{isTopOfPage:i,selectedPage:e,setSelectedPage:t}),(0,s.jsxs)("div",{className:"w-5/6 mx-auto md:h-full",children:[n&&(0,s.jsx)(E,{selectedPage:e,setSelectedPage:t}),(0,s.jsx)("div",{className:"mt-50",onViewportEnter:()=>t("home"),children:(0,s.jsx)(k,{setSelectedPage:t})})]}),(0,s.jsx)(I,{}),(0,s.jsx)("div",{className:"w-5/6 mx-auto md:h-full ",children:(0,s.jsx)("div",{className:"mt-50",onViewportEnter:()=>t("projects"),children:(0,s.jsx)(C,{})})}),(0,s.jsx)(I,{}),(0,s.jsx)("div",{className:"w-5/6 mx-auto",children:(0,s.jsx)("div",{className:"mt-50",amount:"all",onViewportEnter:()=>t("articles"),children:(0,s.jsx)(L,{})})}),(0,s.jsx)(I,{}),(0,s.jsx)("div",{className:"w-5/6 mx-auto md:h-full",children:(0,s.jsx)("div",{className:"mt-50",onViewportEnter:()=>t("qualifications"),children:(0,s.jsx)(A,{})})}),(0,s.jsx)(I,{}),(0,s.jsx)("div",{className:"w-5/6 mx-auto md:h-full",children:(0,s.jsx)("div",{className:"mt-50",onViewportEnter:()=>t("contact"),children:(0,s.jsx)(M,{})})}),(0,s.jsx)(D,{})]})}},8214:function(e,t,i){"use strict";var s=i(2561);let a=(0,s.Ue)(e=>({modalStatus:!1,openModal:()=>e(e=>({modalStatus:!0})),closeModal:()=>e({modalStatus:!1})}));t.Z=a}},function(e){e.O(0,[776,615,132,855,95,122,667,488,744],function(){return e(e.s=9667)}),_N_E=e.O()}]);