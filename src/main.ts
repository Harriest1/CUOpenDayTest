// Utility to fetch and display Open Day data from public/OpenDay14.json
import './style.css'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwindcss-mark.svg'
import typeScriptLogo from '/typescript.svg'
import cuLogo from '/cu-logo.svg'

async function loadOpenDay() {
  const base = import.meta.env.BASE_URL || '/';
  const res = await fetch(`${base}api/OpenDay.json`)
  const data = await res.json()
  return data
}

// Filter topics against their names
;(window as any).filterTopics = function () {
  const input = (document.getElementById("topic-filter") as HTMLInputElement).value.toLowerCase();
  const cards = document.querySelectorAll("[data-topic-card]");

  cards.forEach((card) => {
    const name = card.getAttribute("data-topic-name")?.toLowerCase() || "";
    card.classList.toggle("hidden", !name.includes(input));
  });
};

function renderOpenDay(data: any) {
  const app = document.querySelector<HTMLDivElement>('#app')!
  if (!data.topics) {
    app.innerHTML = '<p class="text-red-600">No Open Day data found.</p>'
    return
  }

  app.innerHTML = `
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src="${viteLogo}" alt="Vite Logo" class="h-8 w-auto" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="${tailwindLogo}" alt="Tailwind CSS Logo" class="h-8 w-auto" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <img src="${typeScriptLogo}" alt="TypeScript Logo" class="h-8 w-auto" />
        </a>
      </div>
    </div>

    <section id="top-nav">
      <nav class="w-full bg-gray-800 px-10 py-5" aria-label="Utility navigation">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
          <div class="flex items-center gap-4"></div>
          <div class="flex items-center gap-4">
            <a href="#" class="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Teaching excellence</a>
            <a href="#" class="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Alumni</a>
            <a href="#" class="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Donate</a>
            <a href="#" class="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">News</a>
            <a href="#" class="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Events</a>
            <a href="#" class="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Search</a>
          </div>
        </div>
      </nav>
    </section>

    <section id="main-nav">
      <nav class="w-full bg-white border-b border-gray-200 px-4 py-10" aria-label="Main navigation">
        <div class="max-w-7xl mx-auto flex items-left gap-10 text-lg">
          <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer" aria-label="Cardiff University homepage">
            <img src="${cuLogo}" alt="Cardiff University Logo" class="h-20 w-auto" />
          </a>
          <div class="hidden md:flex items-center gap-6 text-lg">
            <a href="#" class="text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Study</a>
            <a href="#" class="text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Research</a>
            <a href="#" class="text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Work with us</a>
            <a href="#" class="text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Community</a>
            <a href="#" class="text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">Global</a>
            <a href="#" class="text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red rounded">About</a>
          </div>
        </div>
      </nav>
    </section>

    <div class="min-h-screen bg-cardiff-white font-sans px-2 py-6">

    <section id="main-banner" aria-label="Main banner and filter search" class="w-full bg-cardiff-red text-white py-10 px-5 text-center">
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-3">Open Day Events</h1>
      <p class="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
        Explore a range of events for Schools and more to learn all about what we can offer you.</p>
      <div class="bg-white rounded-xl shadow-md max-w-xl mx-auto p-4">
        <label>
        <input id="topic-filter" aria-label="search bar" type="text" name = "filter" placeholder="Search a topic (ie. chemistry)..." oninput="filterTopics()"
          class="w-full p-2 border border-grey-300 rounded-md text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cardiff-red"/>
        </label>
      </div>
    </section>
    <br>

    <section id="event-cards" aria-label="events by topic">
      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        ${data.topics.map((topic: any) => topic && topic.name ? `
          <div class="bg-cardiff-light rounded-lg shadow p-6 flex flex-col"
            data-topic-card
            data-topic-name="${topic.name}">
            <img src="${topic.cover_image || cuLogo}" alt="${topic.name}" class="h-32 w-full object-cover rounded mb-4" />
            <h2 class="text-xl font-bold text-cardiff-red mb-2">${topic.name}</h2>
            <p class="text-cardiff-dark mb-2">${topic.description || ''}</p>
            ${topic.programs && topic.programs.length ? `
              <div class="mt-2">
                <h3 class="font-semibold text-cardiff-dark mb-1">Events:</h3>
                <ul class="list-disc list-inside text-sm text-cardiff-dark">
                  ${topic.programs.map((prog: any) => prog && prog.title ? `
                    <li>
                      <span class="font-semibold text-cardiff-dark">${prog.title}</span>
                      ${prog.start_time ? `
                        <span class="text-xs text-cardiff-dark">
                          (${new Date(prog.start_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          ${prog.end_time ? ' - ' + new Date(prog.end_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''}
                          )
                        </span>` 
                      : ''}
                      ${prog.room ? `, <span class="text-xs">${prog.room}</span>` : ''}
                    </li>
                  ` : '').join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        ` : '').join('')}
      </div>
    </section>                      
    </div>
  `
}

loadOpenDay().then(renderOpenDay)

