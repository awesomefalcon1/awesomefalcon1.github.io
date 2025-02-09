(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();const l=[{img:"/img/aws-practitioner.png",alt:"AWS-CloudPractitioner-2021",title:"AWS Certified Practitioner",date:"2 January 2021"},{img:"/img/aws-developer.png",alt:"AWS-Developer",title:"AWS Certified Developer",date:"29 August 2021"},{img:"/img/aws-devops-prof.png",alt:"AWS-SysOps",title:"AWS Certified DevOps Engineer - Professional",date:"23 August 2024"}],s={text:"The greatest scientific discovery was the discovery of ignorance.",author:"Yuval Noah Harari, Homo Deus: A History of Tomorrow"};function d(){let e=document.getElementById("skills");e||(e=document.createElement("section"),e.id="skills",document.body.appendChild(e));let t=e.querySelector(".container");t||(t=document.createElement("div"),t.className="container",e.appendChild(t)),t.innerHTML=`
        <div class="text-center mb-4">
            <h2>Skills</h2>
            <h6>"${s.text}"-- ${s.author}</h6>
        </div>
        <div class="skills_wrapper">
            <div class="row justify-content-center">
                ${p()}
            </div>
        </div>
    `}function p(){const e=l.length,t=[];for(let i=0;i<e;i+=4){const n=l.slice(i,i+4);t.push(m(n))}return t.join("")}function m(e){const t=e.length,i=t===1?12:t===2?6:t===3?4:3;return`
        <div class="row justify-content-center mb-4">
            ${e.map(n=>`
                <div class="col-md-${i} text-center">
                    <div class="skills_icon delay-03s animated wow zoomIn">
                        ${n.img?`<img src="${n.img}" alt="${n.alt}" class="mx-auto d-block"/>`:"<span></span>"}
                    </div>
                    <div class="skills_block">
                        <h3 class="animated fadeInUp wow">${n.title}</h3>
                        <p class="animated fadeInDown wow">${n.date}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `}function u(){const e=document.getElementById("skills");e&&(e.style.cssText=`
            padding: 20px 0px;
            background: url("/img/spacexRocket.jpeg") no-repeat center;
            background-size: cover;
            height: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
            position: center;
        `)}const f=[{year:"2024",positions:[{title:"Software Developer Intern - DevOps (Hybrid)",company:"Open Text Corporation",location:"Ottawa, ON, Canada",companyUrl:"https://www.opentext.com/",period:"Sep.3 ~ Dec.20, 2024 (4 months)"},{title:"Cloud Engineer Intern (Remote)",company:"Sun Life Financial",location:"Toronto, ON, Canada",companyUrl:"https://www.sunlife.ca/en/",period:"May.6~ Aug.30, 2024 (4 months)"}]},{year:"2023",positions:[{title:"Site Reliability Engineer Intern (Remote)",company:"OANDA (Canada) Corporation",location:"Toronto, ON, Canada",companyUrl:"https://oanda.com/ca-en/",period:"Jan.9 ~ Apr.21, 2023 (4 Months)"}]},{year:"2022",positions:[{title:"Site Reliability Engineer Intern (Hybrid)",company:"Carta Maple Technologies Inc.",location:"Waterloo, ON, Canada",companyUrl:"https://carta.com/",period:"May.2 ~ Aug.26, 2022 (4 Months)"}]},{year:"2021",positions:[{title:"Software Development Co-op Student (Remote)",company:"VirtaMove Corp.",location:"Ottawa, ON, Canada",companyUrl:"https://www.virtamove.com/about-us",period:"May.6 ~ Aug.27, 2021 (4 Months)"}]}],g=[{text:"Knowledge = Experience x Sensitivity",author:"Yuval Noah Harari"}];function v(){return g[0]}function h(){const e=v(),t=document.querySelector("#experience .heading");t&&(t.innerHTML=`
            <h2>Work Experience</h2>
            <p>"${e.text}" — ${e.author}</p>
        `)}function y(e,t){return`
        <div class="${t==="right"?"col-sm-offset-6":""} col-sm-6 timeline-item">
            <div class="row">
                <div class="${t==="right"?"col-sm-offset-1":""} col-sm-11">
                    <div class="timeline-panel ${t==="right"?"debits":"credits"}">
                        <ul class="timeline-panel-ul">
                            <li><span class="importo">${e.title}</span></li>
                            <li><span class="causale">
                                <img src="/img/diamond.gif">
                                <a href="${e.companyUrl}">${e.company}| ${e.location}</a>
                                </span>
                            </li>
                            <li><p><small class="text-muted">${e.period}</small></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `}function w(){const e=document.getElementById("timeline");if(!e){console.error("Timeline element not found");return}const t=document.createElement("div");t.className="row timeline-movement timeline-movement-top",t.innerHTML=`
        <div class="timeline-badge timeline-filter-movement">
            <img src="/img/year.png" style="margin: 0 0 80px; position: relative">
        </div>
    `,e.appendChild(t);let i="left";f.forEach(n=>{const o=document.createElement("div");o.className="row timeline-movement",o.innerHTML=`
            <div class="timeline-badge">
                <span class="timeline-balloon-date-day"></span>
                <span class="timeline-balloon-date-month">${n.year}</span>
            </div>
        `,n.positions.forEach(a=>{o.innerHTML+=y(a,i),i=i==="left"?"right":"left"}),e.appendChild(o)})}function x(){let e=document.getElementById("experience");e||(e=document.createElement("section"),e.id="experience",e.className="experience",e.style.cssText="background: #f2f2f2; padding: 30px 0;",document.body.appendChild(e)),e.innerHTML=`
        <div class="container">
            <div class="heading text-center" style="margin: 0 0 20px">
                <h2>Work Experience</h2>
                <p>placeholder</p>
            </div>
            <div id="timeline">
                <!-- Timeline items will be generated here -->
            </div>
        </div>
    `,h(),w()}const S=[{category:"CV",title:"K-Means Algorithm for Unsupervised Learning",image:"/img/bunny.bmp",link:"/vids/K-means_V1.mp4",description:"Enhancing image understanding through the extraction of meaningful patterns from data, improving visual comprehension."}],b=[{id:"all",label:"All",filter:"*"},{id:"nengo",label:"Neuroscience",filter:".Nengo"},{id:"rl",label:"Reinforcement Learning",filter:".RL"},{id:"cv",label:"Computer Vision",filter:".CV"},{id:"swe",label:"Software Developments",filter:".SWE"},{id:"aws",label:"AWS",filter:".AWS"}],c=[{text:"Necessity is the mother of invention",author:"Plato"},{text:"Knowledge = Experience x Sensitivity",author:"Yuval Noah Harari"}];function E(){return`
        <div class="container portfolio_title">
            <div class="section-title">
                <h2>Projects</h2>
                <h6></h6>
            </div>
        </div>
    `}function C(){return`
        <div class="portfolio">
            <div id="filters" class="sixteen columns">
                <ul class="clearfix"></ul>
            </div>
        </div>
    `}function L(){return`
        <div class="isotope fadeInLeft animated wow grid" id="portfolio_wrapper">
        </div>
    `}function A(){return`
        <div id="project_container">
            <div class="clear"></div>
            <div id="project_data"></div>
        </div>
    `}function I(){let e=document.getElementById("Portfolio");e||(e=document.createElement("section"),e.id="Portfolio",e.className="content",document.body.appendChild(e)),e.innerHTML=`
        ${E()}
        <div class="portfolio-top"></div>
        ${C()}
        ${L()}
        <div class="portfolio_btm"></div>
        ${A()}
    `}function M(){I(),T(),N(),O(),k()}function T(){const e=document.querySelector("#filters ul.clearfix");e&&b.forEach(t=>{const i=document.createElement("li");i.innerHTML=`
            <a class="${t.id==="all"?"active":""}" 
               href="#" 
               data-filter="${t.filter}">
                <h5>${t.label}</h5>
            </a>
        `,e.appendChild(i)})}function N(){const e=document.getElementById("portfolio_wrapper");e&&S.forEach(t=>{const i=document.createElement("figure");i.className=`portfolio-item one-four ${t.category} isotope-item effect-oscar`,i.innerHTML=`
            <a href="${t.link}" class="fancybox">
                <div class="portfolio_img">
                    <img src="${t.image}" alt="Portfolio" />
                </div>
                <figcaption>
                    <div>
                        <h2><span>${t.title}</span></h2>
                        <p>${t.description}</p>
                    </div>
                </figcaption>
            </a>
        `,e.appendChild(i)})}function O(){const e=c[Math.floor(Math.random()*c.length)],t=document.querySelector("#Portfolio .section-title h6");t&&(t.textContent=`"${e.text}" — ${e.author}`)}function k(){const e=document.querySelector("#portfolio_wrapper");if(!e)return;const t=document.querySelectorAll("#filters a");t.forEach(i=>{i.addEventListener("click",n=>{n.preventDefault(),t.forEach(a=>a.classList.remove("active")),i.classList.add("active");const o=i.getAttribute("data-filter");$(e).isotope({filter:o})})}),$(e).isotope({layoutMode:"fitRows",animationEngine:"best-available"})}function P(){d(),u(),x(),M()}document.addEventListener("DOMContentLoaded",P);
