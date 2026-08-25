const root=document.documentElement;
const themeKey='harsha-portfolio-theme';
const nav=document.querySelector('.nav');
const menuBtn=document.querySelector('[data-menu]');
const themeBtn=document.querySelector('[data-theme-toggle]');

function applyTheme(theme){root.setAttribute('data-theme',theme);localStorage.setItem(themeKey,theme);if(themeBtn){themeBtn.innerHTML=theme==='dark'?'<i data-lucide="sun"></i>':'<i data-lucide="moon"></i>';window.lucide?.createIcons()}}
const saved=localStorage.getItem(themeKey);applyTheme(saved||'dark');

themeBtn?.addEventListener('click',()=>applyTheme(root.getAttribute('data-theme')==='dark'?'light':'dark'));
menuBtn?.addEventListener('click',()=>nav?.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

document.querySelectorAll('a[data-transition]').forEach(a=>a.addEventListener('click',e=>{const href=a.getAttribute('href');if(!href||href.startsWith('#')||a.target==='_blank')return;e.preventDefault();document.body.classList.add('page-exit');setTimeout(()=>location.href=href,210)}));
document.body.classList.add('page-enter');

window.openProject=(title,type,src,desc)=>{const modal=document.querySelector('#projectModal');const media=document.querySelector('#modalMedia');document.querySelector('#modalTitle').textContent=title;document.querySelector('#modalType').textContent=type;document.querySelector('#modalDesc').textContent=desc||'';if(src.endsWith('.pdf'))media.innerHTML=`<iframe src="${src}#toolbar=0&navpanes=0"></iframe>`;else media.innerHTML=`<img src="${src}" alt="${title}">`;modal.classList.add('open');document.body.style.overflow='hidden'};
window.closeProject=()=>{document.querySelector('#projectModal')?.classList.remove('open');document.body.style.overflow=''};
document.addEventListener('keydown',e=>{if(e.key==='Escape')window.closeProject?.()});

document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('[data-project]').forEach(card=>{card.style.display=(f==='all'||card.dataset.project.includes(f))?'':'none'})}));

const contactForm=document.querySelector('#contactForm');
contactForm?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(contactForm);const subject=encodeURIComponent(`Portfolio Enquiry — ${fd.get('project')||'New Project'}`);const body=encodeURIComponent(`Hi Harsha,\n\nName: ${fd.get('name')}\nEmail: ${fd.get('email')}\nService: ${fd.get('service')}\nBudget: ${fd.get('budget')}\n\nProject details:\n${fd.get('message')}\n\nThanks!`);window.location.href=`mailto:harsha.m.weerakkody@gmail.com?subject=${subject}&body=${body}`;});

window.copyEmail=()=>{navigator.clipboard?.writeText('harsha.m.weerakkody@gmail.com');const t=document.querySelector('#copyToast');if(t){t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}};
window.lucide?.createIcons();
