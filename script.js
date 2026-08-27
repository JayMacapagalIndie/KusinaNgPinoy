const menu = [
  {category:"appetizer", name:"Calamares", price:null},
  {category:"appetizer", name:"Chicken Lumpiang Shanghai", price:"24"},
  {category:"appetizer", name:"Shrimp Tempura", price:"30"},
  {category:"appetizer", name:"French Fries", price:"20"},
  {category:"appetizer", name:"Chicken Skin", price:"20"},
  {category:"appetizer", name:"Chicken Neck", price:"19"},
  {category:"appetizer", name:"Chicken Proben", price:"20"},
  {category:"appetizer", name:"Sweet Chilly Chicken Wings", price:"29"},
  {category:"appetizer", name:"Crispy Lumpiang Gulay", price:"20"},

  {category:"chicken", name:"Sizzling Chicken Sisig", price:"29"},
  {category:"chicken", name:"Adobong Manok", price:"29"},
  {category:"chicken", name:"Chicken Afritada", price:"29"},
  {category:"chicken", name:"Chicken Mechado", price:"29"},
  {category:"chicken", name:"Chicken Bicol Express", price:"29"},
  {category:"chicken", name:"Chicken Katsu", price:"29"},
  {category:"chicken", name:"Chicken Curry", price:"29"},
  {category:"chicken", name:"Chicken Dinakdakan", price:"29"},
  {category:"chicken", name:"Kusina Lechon Manok", price:"39"},
  {category:"chicken", name:"Kusina Fried Chicken", price:"38"},

  {category:"beef", name:"Beef Balbacua", price:"35"},
  {category:"beef", name:"Beef Patatim", price:"35"},
  {category:"beef", name:"Beef Bicol Express", price:"35"},
  {category:"beef", name:"Crispy Beef Pata", price:"80"},
  {category:"beef", name:"Bopis", price:"35"},
  {category:"beef", name:"Beef & Tokwa", price:"35"},
  {category:"beef", name:"Beef Kare (Tuwaya)", price:"35"},
  {category:"beef", name:"Beef Kare (Tuwaya & Laman)", price:"39"},
  {category:"beef", name:"Beef Kare (Beef Paa)", price:"39"},
  {category:"beef", name:"Beef Kare (Pata)", price:"80"},
  {category:"beef", name:"Sizzling Beef Sisig", price:"35"},
  {category:"beef", name:"Beef Dinakdakan", price:"35"},
  {category:"beef", name:"Beef Caldereta", price:"35"},
  {category:"beef", name:"Beef Mechado", price:"35"},
  {category:"beef", name:"Beef Pares", price:"35 / 55"},

  {category:"soup", name:"Nilagang Bulalo", price:"35"},
  {category:"soup", name:"Nilagang Baka", price:"35"},
  {category:"soup", name:"Sinampalukang Manok", price:"29"},
  {category:"soup", name:"Tinola Manok", price:"29"},
  {category:"soup", name:"Beef Papaitan", price:"35"},
  {category:"soup", name:"Sinigang na Manok", price:"29"},
  {category:"soup", name:"Beef Sinigang", price:"35"},
  {category:"soup", name:"Beef Sigang Ulo Panga", price:"45"},
  {category:"soup", name:"Sinigang na Bangus", price:"29"},
  {category:"soup", name:"Sinigang na Tilapia", price:"25"},
  {category:"soup", name:"Sinigang na Hipon", price:"30"},
  {category:"soup", name:"Loming Batangas", price:"29 / 55"},

  {category:"vegetable", name:"Pinakbet", price:null},
  {category:"vegetable", name:"Chopsuey", price:"25"},
  {category:"vegetable", name:"Tortang Talong", price:"25"},
  {category:"vegetable", name:"Ensaladang Talong", price:"25"},

  {category:"seafoods", name:"Crispy Fried Bangus", price:null},
  {category:"seafoods", name:"Pinaputok na Tilapia", price:"35"},
  {category:"seafoods", name:"Garlic Buttered Shrimp", price:"35"},

  {category:"inihaw", name:"Inihaw na Bangus", price:null},
  {category:"inihaw", name:"Inihaw na Tilapia", price:"30"},
  {category:"inihaw", name:"Inihaw na Hito", price:"39"},
  {category:"inihaw", name:"Inasal w/ Rice (Quarter Cut)", price:"21"},

  {category:"rice", name:"Plain Rice", price:null},
  {category:"rice", name:"Garlic Rice", price:"5"},
  {category:"rice", name:"Egg Fried Rice", price:"11"},
  {category:"rice", name:"Yang Chow", price:"15"},
  {category:"rice", name:"Vegetable Rice", price:"15"},

  {category:"tapsi", name:"Tapsilog", price:"20"},
  {category:"tapsi", name:"Sisi Silog", price:"20"},
  {category:"tapsi", name:"Chicksilog", price:"20"},
  {category:"tapsi", name:"Bangsilog", price:"20"},
  {category:"tapsi", name:"Tocilog", price:"20"},
  {category:"tapsi", name:"Bopis Silog", price:"20"},
  {category:"tapsi", name:"Hotsilog", price:"20"},
  {category:"tapsi", name:"Longsilog", price:"20"},

  {category:"dessert", name:"Leche Flan", price:null},
  {category:"dessert", name:"Halo Halo Regular", price:"20"},
  {category:"dessert", name:"Halo Halo Special", price:"22"},
  {category:"dessert", name:"Palitaw (6 pcs)", price:"15"},
  {category:"dessert", name:"Ube Halaya", price:"15"},
  {category:"dessert", name:"Maha Blanca", price:"15"},

  {category:"meryenda", name:"Pancit Bihon", price:"25 / 45"},
  {category:"meryenda", name:"Pancit Canton", price:"25 / 45"},
  {category:"meryenda", name:"Pancit Palabok", price:"25 / 45"},
  {category:"meryenda", name:"Chami", price:"29 / 45"},
  {category:"meryenda", name:"Lomi", price:null},
  {category:"meryenda", name:"Lomi Overload", price:"55"},
  {category:"meryenda", name:"Lugaw Plain", price:"25"},
  {category:"meryenda", name:"Goto with Tuwalya & Egg", price:"25"},
  {category:"meryenda", name:"Pancit Mixed", price:"25 / 45"},
  {category:"meryenda", name:"Kanto Pizza Regular", price:"25"},
  {category:"meryenda", name:"Kanto Sisig Pizza", price:"40"},
  {category:"meryenda", name:"Kanto Seafood Pizza", price:"45"},
  {category:"meryenda", name:"Kanto Vegetarian Pizza", price:"30"},
  {category:"meryenda", name:"Siopao", price:"8"},
  {category:"meryenda", name:"Pandesal", price:"1"}
];

const categoryNames = {
  appetizer:"Appetizer", chicken:"Chicken", beef:"Beef", soup:"Soup",
  vegetable:"Vegetable", seafoods:"Seafoods", inihaw:"Inihaw",
  rice:"Rice", tapsi:"Tapsi Corner", dessert:"Dessert", meryenda:"Meryenda"
};

const grid = document.getElementById("menu-grid");
const search = document.getElementById("menu-search");
const noResults = document.getElementById("no-results");
let activeCategory = "all";

function renderMenu() {
  const query = search.value.trim().toLowerCase();
  const filtered = menu.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card">
      <div class="menu-card-head">
        <h3>${item.name}</h3>
        <span class="menu-price">${item.price ? `QR ${item.price}` : "Ask"}</span>
      </div>
      <span class="menu-category">${categoryNames[item.category]}</span>
    </article>
  `).join("");

  noResults.style.display = filtered.length ? "none" : "block";
}

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderMenu();
  });
});

search.addEventListener("input", renderMenu);

const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

function updateQatarStatus() {
  const status = document.getElementById("open-status");
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Qatar",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  }).formatToParts(now);
  const hour = Number(parts.find(p => p.type === "hour").value);
  const minute = Number(parts.find(p => p.type === "minute").value);
  const current = hour * 60 + minute;
  const open = 16 * 60;
  const close = 26 * 60; // 02:00 next day
  const openNow = current >= open || current < 2 * 60;
  status.textContent = openNow ? "Open now • closes at 2:00 AM" : "Opens at 4:00 PM";
}
updateQatarStatus();
setInterval(updateQatarStatus, 60000);
renderMenu();
