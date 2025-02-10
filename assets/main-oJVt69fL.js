(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();class r{constructor(i,s,n=null,t=!1){this.id=i,this.label=s,this.cssClass=n||`.${i}`,this.active=t}toHTML(){return`
            <li>
                <a ${this.id?`id="${this.id}"`:""} 
                   href="#" 
                   data-filter="${this.id==="all"?"*":this.cssClass}" 
                   class="${this.active?"active":""}">
                    <h5>${this.label}</h5>
                </a>
            </li>`}}class o{constructor(i,s,n,t,a){this.category=i,this.href=s,this.imageUrl=n,this.title=t,this.description=a}toHTML(){return`
            <figure class="portfolio-item one-four ${this.category} isotope-item effect-oscar">
                <a href="${this.href}" class="fancybox">
                    <div class="portfolio_img">
                        <img src="${this.imageUrl}" alt="${this.title}" />
                    </div>
                    <figcaption>
                        <div>
                            <h2><span>${this.title}</span></h2>
                            <p>${this.description}</p>
                        </div>
                    </figcaption>
                </a>
            </figure>
        `}static fromObject(i){return new o(i.category,i.href,i.imageUrl,i.title,i.description)}}const m=[new o("CV","/vids/K-means_V1.mp4","/img/bunny.bmp","K-Means Algorithm for Unsupervised Learning","Enhancing image understanding through the extraction of meaningful patterns from data, improving visual comprehension."),new o("CV","/vids/Hurricane.mp4","/img/damage_no_damage.png","CNN for Hurricane Damage Classification","Utilized Convolutional Neural Networks for classifying the existence of hurricane damage. This advanced model provides nuanced insights, aiding disaster response planning by allocating resources more precisely based on detected severity levels in the visual data."),new o("CV","/vids/PanoramicStich_1.mp4","/img/ImageStitching.png","Panoramic Image Stitching","Implemented homographies with Scikit libraries for panoramic image stitching, seamlessly blending visual elements. This technique enhances the creation of panoramic images, ensuring a cohesive and visually pleasing result by aligning and combining multiple images through geometric transformations."),new o("Nengo","/vids/Real-Time Online Learning with PES Rule.mp4","/img/nengo/RTRL.png","Real-Time Online Learning with PES Rule","Executed in the Neural Engineering Framework, the project enables adaptive connection weight adjustments, demonstrating effective online learning. It dynamically masters the square function, aligning output closely with input after initial seconds. Rigorous testing includes systematic variations of hyperparameters, such as functions, learning rates, and training times."),new o("RL","/vids/CartpoleRenforcementLearning_1.mp4","/img/RL_CartPole.png","Tackling CartPole with OpenAI Gym","Designed a resilient reinforcement learning model for CartPole-v1 in OpenAI Gym. Implemented a Proximal Policy Optimization (PPO) algorithm to train the agent in maintaining optimal balance on the cart-mounted pole."),new o("Nengo","/vids/ParlovDog.mp4","/img/nengo/classical_conditioning.png","Pavlov's Dog Conditional Stimulus Simulation",'Utilized Nengo simulation, applying PBS learning rule for dynamic stimuli-response weight adjustments. Successfully replicated Pavlovian behavior, offering nuanced insights. Demonstrated "neurons that fire together wire together" principle, showcasing emergent neural connectivity patterns.'),new o("Nengo","/vids/Accumulate-to-Threshold Decision Making Model.mp4","/img/nengo/accumulator.png","Decision Making Model with Nengo Neural Simulator","Utilized Nengo 3.2.0 to simulate a neuro accumulator, integrating input functions. Implemented synaptic connections for binary decisions, assessing diverse ensembles to capture biological relevance in decision-making."),new o("CV","/vids/Django_Object_detection_1.mp4","/img/DJ+TF-obj-det.png","Django+TensorFL Hub:Object Detection","Developed a robust Django web application and seamlessly integrated TensorFlow Hub's Inception ResNet V2 model, enhancing capabilities in image analysis and object detection."),new o("AWS","/pdfs/WildRydeReport.pdf","/img/wildrydes-architecture.jpeg","Wild Rydes","SERVERLESS! Perform version control in the deployment code of static webpage, used AWS amplify to host the static webpage frontend and DynamoDB hold user data. Utilized tools: Codecommit, DynamoDB, Amplify, AWS CLI, AWS API gateway, Cognito"),new o("AWS","/pdfs/DevSecOpsReport.pdf","/img/TrendMicroControlPanel.png","Trend Micro One","Security + DevOps. Used Trend Micro to add security checks and block targeted attacks on the site. It can visualise attacks in the cloud infrastructure."),new o("AWS","/#","/img/DevSecOps.JPG","DevSecOps",""),new o("AWS","https://catalog.us-east-1.prod.workshops.aws/v2/workshops/44d3e2a0-ec6f-44df-9397-bcfdf129cadf/en-US/","img/devmlops.png","DEVMLOPS","DevOps + Machine Learning"),new o("SWE","https://github.com/codejedi-ai/Nationstate-LLM","img/Nationstates-LLM.png","Analyze progressive bias in the GPT-4 model: Nationstates-LLM","Utilized the nationstates API to access data and make decisions in the game. Drafted a virtual nation constitution, enabling GPT-4 to read and select the most appropriate decision according to my constitution. Evaluation revealed minimal progressive bias, affirming GPT-4's alignment to constitutional values."),new o("SWE","https://github.com/codejedi-ai/GMM-Segmentation","img/SegmanticPic.png","GMM-Segmentation","Implemented the Gaussian mixture model (GMM) for image segmentation, effectively distinguishing foreground and background. This segmentation facilitated the identification of prominent features, thereby enhancing overall image comprehension and visual understanding.")];function p(e){return`
        <figure class="portfolio-item one-four ${e.category} isotope-item effect-oscar">
            <a href="${e.videoUrl}" class="fancybox">
                <div class="portfolio_img">
                    <img src="${e.imageUrl}" alt="${e.title}" />
                </div>
                <figcaption>
                    <div>
                        <h2><span>${e.title}</span></h2>
                        <p>${e.description}</p>
                    </div>
                </figcaption>
            </a>
        </figure>
    `}function g(e){return e.map(i=>p(i)).join(`
`)}const u=[new r("all","All","*",!0),new r("Nengo","Neuroscience"),new r("RL","Reinforcement Learning"),new r("CV","Computer Vision"),new r("SWE","Software Developments"),new r("AWS","AWS")],d=u.map(e=>e.toHTML()).join(`
`);console.log(d);document.querySelector("#Portfolio").innerHTML=`
        <!-- Container -->
        <div class="container portfolio_title">
            <!-- Title -->
            <div class="section-title">
                <h2>Projects</h2>
                <h6>Necessity is the mother of invention</h6>
            </div>
        </div>
        <!-- Container -->

        <div class="portfolio-top"></div>

        <!-- Portfolio Filters -->
        <div class="portfolio">
            <div id="filters" class="sixteen columns">
                <ul class="clearfix">

                    ${d}

                </ul>
            </div>
            <!--/Portfolio Filters -->

            <!-- Portfolio Wrapper -->
            <div class="isotope fadeInLeft animated wow grid" id="portfolio_wrapper">
            ${g(m)}


                <!--/Portfolio Item -->

            </div>
            <!--/Portfolio Wrapper -->
        </div>
        <!--/Portfolio Filters -->

        <div class="portfolio_btm"></div>

        <div id="project_container">
            <div class="clear"></div>
            <div id="project_data"></div>
        </div>
`;const f=[{img:"/img/aws-practitioner.png",alt:"AWS-CloudPractitioner-2021",title:"AWS Certified Practitioner",date:"2 January 2021"},{img:"/img/aws-developer.png",alt:"AWS-Developer",title:"AWS Certified Developer",date:"29 August 2021"},{img:"/img/aws-devops-prof.png",alt:"AWS-SysOps",title:"AWS Certified DevOps Engineer - Professional",date:"23 August 2024"}],c={text:"The greatest scientific discovery was the discovery of ignorance.",author:"Yuval Noah Harari, Homo Deus: A History of Tomorrow"};function h(){let e=document.getElementById("skills");e||(e=document.createElement("section"),e.id="skills",document.body.appendChild(e));let i=e.querySelector(".container");i||(i=document.createElement("div"),i.className="container",e.appendChild(i)),i.innerHTML=`
        <div class="text-center mb-4">
            <h2>Skills</h2>
            <h6>"${c.text}"-- ${c.author}</h6>
        </div>
        <div class="skills_wrapper">
            <div class="row justify-content-center">
                ${v(f)}
            </div>
        </div>
    `}function v(e){const i=e.length,s=[];for(let n=0;n<i;n+=4){const t=e.slice(n,n+4);s.push(y(t))}return s.join("")}function y(e){const i=e.length,s=i===1?12:i===2?6:i===3?4:3;return`
        <div class="row justify-content-center mb-4">
            ${e.map(n=>`
                <div class="col-md-${s} text-center">
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
    `}function w(){const e=document.getElementById("skills");e&&(e.style.cssText=`
            padding: 20px 0px;
            background: url("/img/spacexRocket.jpeg") no-repeat center;
            background-size: cover;
            height: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
            position: center;
        `)}const b=[{year:"2024",positions:[{title:"Software Developer Intern - DevOps (Hybrid)",company:"Open Text Corporation",location:"Ottawa, ON, Canada",companyUrl:"https://www.opentext.com/",period:"Sep.3 ~ Dec.20, 2024 (4 months)"},{title:"Cloud Engineer Intern (Remote)",company:"Sun Life Financial",location:"Toronto, ON, Canada",companyUrl:"https://www.sunlife.ca/en/",period:"May.6~ Aug.30, 2024 (4 months)"}]},{year:"2023",positions:[{title:"Site Reliability Engineer Intern (Remote)",company:"OANDA (Canada) Corporation",location:"Toronto, ON, Canada",companyUrl:"https://oanda.com/ca-en/",period:"Jan.9 ~ Apr.21, 2023 (4 Months)"}]},{year:"2022",positions:[{title:"Site Reliability Engineer Intern (Hybrid)",company:"Carta Maple Technologies Inc.",location:"Waterloo, ON, Canada",companyUrl:"https://carta.com/",period:"May.2 ~ Aug.26, 2022 (4 Months)"}]},{year:"2021",positions:[{title:"Software Development Co-op Student (Remote)",company:"VirtaMove Corp.",location:"Ottawa, ON, Canada",companyUrl:"https://www.virtamove.com/about-us",period:"May.6 ~ Aug.27, 2021 (4 Months)"}]}],S=[{text:"Knowledge = Experience x Sensitivity",author:"Yuval Noah Harari"}];function C(e){return e[0]}function P(){const e=C(S),i=document.querySelector("#experience .heading");i&&(i.innerHTML=`
            <h2>Work Experience</h2>
            <p>"${e.text}" — ${e.author}</p>
        `)}function T(e,i){return`
        <div class="${i==="right"?"col-sm-offset-6":""} col-sm-6 timeline-item">
            <div class="row">
                <div class="${i==="right"?"col-sm-offset-1":""} col-sm-11">
                    <div class="timeline-panel ${i==="right"?"debits":"credits"}">
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
    `}function $(){const e=document.getElementById("timeline");if(!e){console.error("Timeline element not found");return}const i=document.createElement("div");i.className="row timeline-movement timeline-movement-top",i.innerHTML=`
        <div class="timeline-badge timeline-filter-movement">
            <img src="/img/year.png" style="margin: 0 0 80px; position: relative">
        </div>
    `,e.appendChild(i);let s="left";b.forEach(n=>{const t=document.createElement("div");t.className="row timeline-movement",t.innerHTML=`
            <div class="timeline-badge">
                <span class="timeline-balloon-date-day"></span>
                <span class="timeline-balloon-date-month">${n.year}</span>
            </div>
        `,n.positions.forEach(a=>{t.innerHTML+=T(a,s),s=s==="left"?"right":"left"}),e.appendChild(t)})}function L(){let e=document.getElementById("experience");e||(e=document.createElement("section"),e.id="experience",e.className="experience",e.style.cssText="background: #f2f2f2; padding: 30px 0;",document.body.appendChild(e)),e.innerHTML=`
        <div class="container">
            <div class="heading text-center" style="margin: 0 0 20px">
                <h2>Work Experience</h2>
                <p>placeholder</p>
            </div>
            <div id="timeline">
                <!-- Timeline items will be generated here -->
            </div>
        </div>
    `,P(),$()}function M(){h(),w(),L()}document.addEventListener("DOMContentLoaded",M);
