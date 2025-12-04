(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const o="/CUOpenDayTest/vite.svg",c="/CUOpenDayTest/tailwindcss-mark.svg",d="/CUOpenDayTest/typescript.svg",n="/CUOpenDayTest/cu-logo.svg";async function f(){return await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json()}function m(i){const r=document.querySelector("#app");if(!i.topics){r.innerHTML='<p class="text-red-600">No Open Day data found.</p>';return}r.innerHTML=`
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src="${o}" alt="Vite Logo" class="h-8 w-auto" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="${c}" alt="Tailwind CSS Logo" class="h-8 w-auto" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <img src="${d}" alt="TypeScript Logo" class="h-8 w-auto" />
        </a>
      </div>
    </div>
    <section id="top-nav">
    <nav class="w-full bg-gray-800 px-10 py-5">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
        <div class="flex items-center gap-4">
        </div>
        <div class="flex items-center gap-4">
          <a href="#" class="text-white">Teaching excellence</a>
          <a href="#" class="text-white">Alumni</a>
          <a href="#" class="text-white">Donate</a>
          <a href="#" class="text-white">News</a>
          <a href="#" class="text-white">Events</a>
          <a href="#" class="text-white">Search</a>
        </div>
      </div>
    </nav>
    </section>
    <section id="main-nav">
    <nav class="w-full bg-white border-b border-gray-200 px-4 py-10">
      <div class="max-w-7xl mx-auto flex items-left gap-10 text-lg">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${n}" alt="Cardiff University Logo" class="h-12 w-auto" />
        </a>
        <div class="hidden md:flex items-center gap-6 text-lg">
          <a href="#" class="text-black">Study</a>
          <a href="#" class="text-black">Research</a>
          <a href="#" class="text-black">Work with us</a>
          <a href="#" class="text-black">Community</a>
          <a href="#" class="text-black">Global</a>
          <a href="#" class="text-black">About</a>
        </div>
      </div>
    </nav>
    </section>
    <div class="min-h-screen bg-cardiff-white font-sans px-2 py-6">
    <section id="main-banner" class="w-full bg-cardiff-red text-white py-10 px-5 text-center">
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-3">Open Day Events</h1>
      <p class="text-lg sm:text-xl max-w-2xl mx-auto">Explore a range of events for Schools and more to learn all about what we can offer you.</p>
    </section>
    <br>
    <ul class="list-disc list-inside text-cardiff-dark text-sm space-y-1">
      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        ${i.topics.map(t=>t&&t.name?`
          <div class="bg-cardiff-light rounded-lg shadow p-6 flex flex-col">
            <img src="${t.cover_image||n}" alt="${t.name}" class="h-32 w-full object-cover rounded mb-4" />
            <h2 class="text-xl font-bold text-cardiff-red mb-2">${t.name}</h2>
            <p class="text-cardiff-dark mb-2">${t.description||""}</p>
            ${t.programs&&t.programs.length?`
              <div class="mt-2">
                <h3 class="font-semibold text-cardiff-dark mb-1">Events:</h3>
                <ul class="list-disc list-inside text-sm">
                  ${t.programs.map(s=>s&&s.title?`<li><span class="font-semibold">${s.title}</span>${s.start_time?` <span class='text-xs text-cardiff-dark'>(${new Date(s.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}${s.end_time?" - "+new Date(s.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""})</span>`:""}${s.room?`, <span class='text-xs'>${s.room}</span>`:""}</li>`:"").join("")}
                </ul>
              </div>
            `:""}
          </div>
        `:"").join("")}
      </div>
    </div>
  `}f().then(m);
