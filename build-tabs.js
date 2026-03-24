const fs = require('fs');
const root = 'd:/My Projects/white-house';

// 1. UPDATE index.html
let html = fs.readFileSync(`${root}/index.html`, 'utf8');
const materialsStart = html.indexOf('<!-- MATERIALS -->');
const materialsEnd = html.indexOf('<!-- PROJECTS -->');

const replacement = `<!-- MATERIALS / CATEGORIES -->
  <section class="materials" id="materials">
    <div class="container">
      <div class="materials-header">
        <span class="section-label">Our Categories</span>
        <h2 class="section-title">Everything You Need</h2>
        <p class="section-subtitle">From structural foundations to industrial safety, we stock a comprehensive range of premium supplies.</p>
      </div>

      <div class="tabs-wrapper">
        <div class="tabs-header">
          <button class="tab-btn active" data-tab="building">Building Materials</button>
          <button class="tab-btn" data-tab="hotel">Hotel Supplies</button>
          <button class="tab-btn" data-tab="trading">General Trading</button>
          <button class="tab-btn" data-tab="safety">Industrial &amp; Safety</button>
        </div>

        <!-- TAB CONTENT: Building Materials -->
        <div class="tab-content materials-grid active" id="tab-building">
          <a href="construction-materials.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80" alt="Construction Materials" loading="lazy"></div>
            <div class="material-name">Construction Materials</div><span class="material-tag">Building</span>
          </a>
          <a href="steel-structural.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1530635835626-6d60914ed0dc?w=400&q=80" alt="Steel & Structural" loading="lazy"></div>
            <div class="material-name">Steel &amp; Structural</div><span class="material-tag">Building</span>
          </a>
          <a href="tiles-flooring.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1581850518616-bcb8077a2336?w=400&q=80" alt="Tiles & Flooring" loading="lazy"></div>
            <div class="material-name">Tiles &amp; Flooring</div><span class="material-tag">Building</span>
          </a>
          <a href="plumbing-materials.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1607548812686-25f385ccefc0?w=400&q=80" alt="Plumbing Materials" loading="lazy"></div>
            <div class="material-name">Plumbing Materials</div><span class="material-tag">Building</span>
          </a>
          <a href="electrical-materials.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=400&q=80" alt="Electrical Materials" loading="lazy"></div>
            <div class="material-name">Electrical Materials</div><span class="material-tag">Building</span>
          </a>
          <a href="paint-chemicals.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80" alt="Paint & Chemicals" loading="lazy"></div>
            <div class="material-name">Paint &amp; Chemicals</div><span class="material-tag">Building</span>
          </a>
          <a href="tools-hardware.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80" alt="Tools & Hardware" loading="lazy"></div>
            <div class="material-name">Tools &amp; Hardware</div><span class="material-tag">Building</span>
          </a>
        </div>

        <!-- TAB CONTENT: Hotel Supplies -->
        <div class="tab-content materials-grid" id="tab-hotel">
          <a href="kitchen-equipment.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1556910103-1c02745a872f?w=400&q=80" alt="Kitchen Equipment" loading="lazy"></div>
            <div class="material-name">Kitchen Equipment</div><span class="material-tag">Hotel</span>
          </a>
          <a href="buffet-equipment.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" alt="Buffet Equipment" loading="lazy"></div>
            <div class="material-name">Buffet Equipment</div><span class="material-tag">Hotel</span>
          </a>
          <a href="hotel-room-supplies.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=80" alt="Hotel Room Supplies" loading="lazy"></div>
            <div class="material-name">Hotel Room Supplies</div><span class="material-tag">Hotel</span>
          </a>
          <a href="housekeeping.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1584820927498-cafecedd6eb6?w=400&q=80" alt="Housekeeping" loading="lazy"></div>
            <div class="material-name">Housekeeping</div><span class="material-tag">Hotel</span>
          </a>
        </div>

        <!-- TAB CONTENT: General Trading -->
        <div class="tab-content materials-grid" id="tab-trading">
          <a href="office-supplies.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?w=400&q=80" alt="Office Supplies" loading="lazy"></div>
            <div class="material-name">Office Supplies</div><span class="material-tag">Trading</span>
          </a>
          <a href="cleaning-materials.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" alt="Cleaning Materials" loading="lazy"></div>
            <div class="material-name">Cleaning Materials</div><span class="material-tag">Trading</span>
          </a>
          <a href="packaging-materials.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1605600659929-e58f000b200b?w=400&q=80" alt="Packaging Materials" loading="lazy"></div>
            <div class="material-name">Packaging Materials</div><span class="material-tag">Trading</span>
          </a>
          <a href="electrical-small-items.html" class="material-card fade-up">
             <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=400&q=80" alt="Electrical Items" loading="lazy"></div>
            <div class="material-name">Electrical &amp; Small Items</div><span class="material-tag">Trading</span>
          </a>
        </div>

        <!-- TAB CONTENT: Industrial & Safety -->
        <div class="tab-content materials-grid" id="tab-safety">
          <a href="personal-safety.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=400&q=80" alt="Personal Safety" loading="lazy"></div>
            <div class="material-name">Personal Safety</div><span class="material-tag">Safety</span>
          </a>
          <a href="site-safety.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" alt="Site Safety" loading="lazy"></div>
            <div class="material-name">Site Safety</div><span class="material-tag">Safety</span>
          </a>
          <a href="fire-safety.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1612270928929-eb8f2abdd365?w=400&q=80" alt="Fire Safety" loading="lazy"></div>
            <div class="material-name">Fire Safety</div><span class="material-tag">Safety</span>
          </a>
          <a href="industrial-items.html" class="material-card fade-up">
            <div class="cat-img-wrap"><img src="https://images.unsplash.com/photo-1530635835626-6d60914ed0dc?w=400&q=80" alt="Industrial Items" loading="lazy"></div>
            <div class="material-name">Industrial Items</div><span class="material-tag">Safety</span>
          </a>
        </div>
      </div>
    </div>
  </section>
`;
html = html.substring(0, materialsStart) + replacement.trim() + '\n\n  ' + html.substring(materialsEnd);
fs.writeFileSync(`${root}/index.html`, html);

// 2. UPDATE style.css
let css = fs.readFileSync(`${root}/assets/css/style.css`, 'utf8');
if (!css.includes('CATEGORY TABS & IMAGES')) {
  css += `
    /* ===== CATEGORY TABS & IMAGES ===== */
    .tabs-wrapper { margin-top: 40px; }
    .tabs-header { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 40px; }
    .tab-btn { background: var(--white); border: 2px solid var(--gray-100); padding: 12px 24px; font-family: var(--font-display); font-weight: 700; font-size: 16px; letter-spacing: .05em; text-transform: uppercase; color: var(--gray-700); border-radius: 30px; cursor: pointer; transition: var(--transition); }
    .tab-btn:hover { border-color: var(--blue-light); color: var(--blue); }
    .tab-btn.active { background: var(--blue); border-color: var(--blue); color: var(--white); box-shadow: var(--shadow-sm); }
    .tab-content { display: none; animation: fadeIn 0.4s ease-in-out; }
    .tab-content.active { display: grid; }
    
    .cat-img-wrap {
      width: 100%;
      height: 180px;
      margin-bottom: 20px;
      border-radius: var(--radius-sm);
      overflow: hidden;
    }
    .cat-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .material-card:hover .cat-img-wrap img {
      transform: scale(1.08);
    }
    .material-card {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
`;
  fs.writeFileSync(`${root}/assets/css/style.css`, css);
}

// 3. UPDATE main.js
let js = fs.readFileSync(`${root}/main.js`, 'utf8');
if (!js.includes('CATEGORY TABS')) {
  js += `
// CATEGORY TABS
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + targetId).classList.add('active');
        
        // Re-trigger fade-up animation for elements within the active tab
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            });
        }, { threshold: 0.12 });
        document.getElementById('tab-' + targetId).querySelectorAll('.fade-up').forEach(el => io.observe(el));
    });
});
`;
  fs.writeFileSync(`${root}/main.js`, js);
}

// 4. GENERATE 19 SUBPAGES
const termsHtml = fs.readFileSync(`${root}/terms.html`, 'utf8');
const headerEnd = termsHtml.indexOf('<!-- TERMS HEADER -->');
const footerStart = termsHtml.indexOf('<!-- FOOTER -->');

const pages = [
  {file: 'construction-materials.html', name: 'Construction Materials'},
  {file: 'steel-structural.html', name: 'Steel & Structural'},
  {file: 'tiles-flooring.html', name: 'Tiles & Flooring'},
  {file: 'plumbing-materials.html', name: 'Plumbing Materials'},
  {file: 'electrical-materials.html', name: 'Electrical Materials'},
  {file: 'paint-chemicals.html', name: 'Paint & Chemicals'},
  {file: 'tools-hardware.html', name: 'Tools & Hardware'},
  
  {file: 'kitchen-equipment.html', name: 'Kitchen Equipment'},
  {file: 'buffet-equipment.html', name: 'Buffet Equipment'},
  {file: 'hotel-room-supplies.html', name: 'Hotel Room Supplies'},
  {file: 'housekeeping.html', name: 'Housekeeping'},
  
  {file: 'office-supplies.html', name: 'Office Supplies'},
  {file: 'cleaning-materials.html', name: 'Cleaning Materials'},
  {file: 'packaging-materials.html', name: 'Packaging Materials'},
  {file: 'electrical-small-items.html', name: 'Electrical & Small Items'},
  
  {file: 'personal-safety.html', name: 'Personal Safety'},
  {file: 'site-safety.html', name: 'Site Safety'},
  {file: 'fire-safety.html', name: 'Fire Safety'},
  {file: 'industrial-items.html', name: 'Industrial Items'}
];

pages.forEach(p => {
   const content = `  <!-- PAGE HEADER -->
  <header class="page-header">
    <div class="container">
      <h1>${p.name}</h1>
      <p>Explore our premium ${p.name} products</p>
    </div>
  </header>

  <section class="materials" style="padding: 80px 0;">
    <div class="container">
      <h2 style="font-family: var(--font-display); font-weight: 700; font-size: 28px; margin-bottom: 24px;">Products List</h2>
      <div class="materials-grid">
          <!-- Placeholder product cards -->
          <div class="material-card fade-up">
              <div class="cat-img-wrap" style="background:var(--gray-100);"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" alt="Product" loading="lazy"></div>
              <h3 style="font-family:var(--font-display); font-size:18px;">Product Example 1</h3>
              <p style="color:var(--gray-500); font-size:14px; margin-top:8px;">High quality ${p.name.toLowerCase()} for your needs.</p>
              <button class="btn btn-outline" style="margin-top:16px; padding: 8px 16px; font-size:12px;">Get Quote</button>
          </div>
          <div class="material-card fade-up">
              <div class="cat-img-wrap" style="background:var(--gray-100);"><img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80" alt="Product" loading="lazy"></div>
              <h3 style="font-family:var(--font-display); font-size:18px;">Product Example 2</h3>
              <p style="color:var(--gray-500); font-size:14px; margin-top:8px;">Premium range available in stock to order.</p>
              <button class="btn btn-outline" style="margin-top:16px; padding: 8px 16px; font-size:12px;">Get Quote</button>
          </div>
          <div class="material-card fade-up">
              <div class="cat-img-wrap" style="background:var(--gray-100);"><img src="https://images.unsplash.com/photo-1530635835626-6d60914ed0dc?w=400&q=80" alt="Product" loading="lazy"></div>
              <h3 style="font-family:var(--font-display); font-size:18px;">Product Example 3</h3>
              <p style="color:var(--gray-500); font-size:14px; margin-top:8px;">Reliable and standard verified materials.</p>
              <button class="btn btn-outline" style="margin-top:16px; padding: 8px 16px; font-size:12px;">Get Quote</button>
          </div>
      </div>
    </div>
  </section>
`;

   // Ensure page uses its own title/OG tags to avoid duplicate
   let newHead = termsHtml.substring(0, headerEnd);
   newHead = newHead.replace(/<title>.*<\/title>/, `<title>${p.name} - WHITE HOMES BUILDING MATERIALS L.L.C</title>`);
   newHead = newHead.replace(/<meta property="og:title" content=".*" \/>/, `<meta property="og:title" content="${p.name} - WHITE HOMES BUILDING MATERIALS L.L.C" />`);
   
   const newFileHTML = newHead + content + termsHtml.substring(footerStart);
   fs.writeFileSync(`${root}/${p.file}`, newFileHTML);
});

console.log("Migration complete!");
