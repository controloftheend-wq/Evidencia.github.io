/* =========================================================
   HugoShop — script principal (vanilla JS, sin frameworks)
========================================================= */
const CART_KEY = 'hugoshop_cart_v1';

const HERO_SLIDES = [
  { theme:'a', tag:'Envíos gratis desde hoy', title:'Todo lo que buscas, a la velocidad del rayo', desc:'Miles de productos en tecnología, moda, hogar y más, con modelos nuevos cada semana.', cta:'Ver tecnología', href:'#/categoria/tecnologia' },
  { theme:'b', tag:'Nueva colección', title:'Renueva tu clóset sin salir de casa', desc:'Ropa y calzado con variantes de talla y color para encontrar tu ajuste perfecto.', cta:'Explorar ropa', href:'#/categoria/ropa' },
  { theme:'a', tag:'Hazlo tú mismo', title:'Herramientas y hogar para cada proyecto', desc:'Desde un taladro hasta la cafetera del domingo, aquí encuentras todo.', cta:'Ver hogar y herramientas', href:'#/categoria/herramientas' },
];

let pdState = { productId:null, variantIndex:0, qty:1 };
let toastTimer = null;

/* ---------- utilidades ---------- */
function findProduct(id){ return PRODUCTS.find(p => p.id === Number(id)); }
function findCategory(key){ return CATEGORIES.find(c => c.key === key); }
function formatPrice(n){ return n.toLocaleString('es-MX', { style:'currency', currency:'MXN', maximumFractionDigits:0 }); }
function normalize(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); }
function starString(rating){ const full = Math.round(rating); return '★'.repeat(full) + '☆'.repeat(5-full); }

function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }catch(e){ return []; } }
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartCount(); }
function addToCart(id, variantIndex, qty){
  const cart = getCart();
  const existing = cart.find(c => c.id === id && c.variantIndex === variantIndex);
  if(existing){ existing.qty += qty; } else { cart.push({ id, variantIndex, qty }); }
  saveCart(cart);
}
function removeFromCart(id, variantIndex){
  saveCart(getCart().filter(c => !(c.id === id && c.variantIndex === variantIndex)));
  renderCartView();
}
function cartCountTotal(){ return getCart().reduce((s,c) => s + c.qty, 0); }
function updateCartCount(){ document.getElementById('cart-count').textContent = cartCountTotal(); }

/* ---------- tarjeta de producto ---------- */
function productCardHTML(p){
  const cat = findCategory(p.category);
  return `
  <a href="#/producto/${p.id}" class="product-card">
    <div class="thumb">
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <img src="${p.variants[0].images[0]}" alt="${p.name}" loading="lazy">
    </div>
    <div class="body">
      <span class="cat">${cat ? cat.name : ''}</span>
      <span class="nm">${p.name}</span>
      <span class="rating"><b>${p.rating}</b> ${starString(p.rating)} (${p.reviews})</span>
      <span class="variants-hint">${p.variants.length} modelos · elige color/talla</span>
      <span class="price">${formatPrice(p.price)}</span>
    </div>
  </a>`;
}

function renderGrid(containerId, list){
  const el = document.getElementById(containerId);
  if(!list.length){
    el.innerHTML = `<div class="empty-state"><h2>No encontramos productos</h2><p>Prueba con otra palabra o explora las categorías desde el inicio.</p><a href="#/" class="btn btn-primary">Volver al inicio</a></div>`;
    return;
  }
  el.innerHTML = list.map(productCardHTML).join('');
}

function pickFeatured(){
  const badged = PRODUCTS.filter(p => p.badge === 'Más vendido');
  const rest = PRODUCTS.filter(p => !badged.includes(p)).sort((a,b) => b.rating - a.rating);
  return badged.concat(rest).slice(0, 10);
}
function pickNew(){
  const badged = PRODUCTS.filter(p => p.badge === 'Nuevo');
  const rest = PRODUCTS.filter(p => !badged.includes(p));
  return badged.concat(rest).slice(0, 10);
}

/* ---------- navegación / categorías (construcción única) ---------- */
function buildCategoryNav(){
  document.getElementById('category-bar').innerHTML =
    `<a href="#/" class="category-pill" data-key="">Inicio</a>` +
    CATEGORIES.map(c => `<a href="#/categoria/${c.key}" class="category-pill" data-key="${c.key}">${c.icon} ${c.name}</a>`).join('');

  document.getElementById('category-grid').innerHTML = CATEGORIES.map(c => `
    <a href="#/categoria/${c.key}" class="category-tile">
      <span class="ic">${c.icon}</span>
      <span class="nm">${c.name}</span>
    </a>`).join('');

  document.getElementById('footer-categories').innerHTML =
    CATEGORIES.slice(0,6).map(c => `<li><a href="#/categoria/${c.key}">${c.name}</a></li>`).join('');

  document.getElementById('mobile-menu').innerHTML =
    `<a href="#/">Inicio</a>` +
    CATEGORIES.map(c => `<a href="#/categoria/${c.key}">${c.icon} ${c.name}</a>`).join('') +
    `<a href="#/carrito">🛒 Carrito</a>`;
}

function updateActivePill(key){
  document.querySelectorAll('.category-pill').forEach(p => p.classList.toggle('active', p.dataset.key === key));
}

/* ---------- hero ---------- */
function buildHero(){
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <div class="hero-track">
      ${HERO_SLIDES.map((s,i) => `
      <div class="hero-slide theme-${s.theme} ${i===0?'active':''}">
        <div class="hero-copy">
          <p class="tag">${s.tag}</p>
          <h2>${s.title}</h2>
          <p class="desc">${s.desc}</p>
          <a class="hero-cta" href="${s.href}">${s.cta}</a>
        </div>
      </div>`).join('')}
    </div>
    <div class="hero-dots">${HERO_SLIDES.map((_,i) => `<button data-i="${i}" class="${i===0?'active':''}" aria-label="Diapositiva ${i+1}"></button>`).join('')}</div>`;

  const slides = hero.querySelectorAll('.hero-slide');
  const dots = hero.querySelectorAll('.hero-dots button');
  let idx = 0, timer = null;
  function show(i){ idx = i; slides.forEach((s,j) => s.classList.toggle('active', j===i)); dots.forEach((d,j) => d.classList.toggle('active', j===i)); }
  function tick(){ show((idx+1) % slides.length); }
  function start(){ timer = setInterval(tick, 5000); }
  dots.forEach(d => d.addEventListener('click', () => show(Number(d.dataset.i))));
  hero.addEventListener('mouseenter', () => clearInterval(timer));
  hero.addEventListener('mouseleave', start);
  start();
}

function attachCarouselNav(){
  document.querySelectorAll('.carousel-nav').forEach(nav => {
    const target = document.getElementById(nav.dataset.target);
    nav.querySelector('.prev').addEventListener('click', () => target.scrollBy({ left:-480, behavior:'smooth' }));
    nav.querySelector('.next').addEventListener('click', () => target.scrollBy({ left:480, behavior:'smooth' }));
  });
}

/* ---------- vistas ---------- */
function hideAllViews(){ document.querySelectorAll('.view').forEach(v => v.hidden = true); }
function showView(id){ document.getElementById(id).hidden = false; }

function renderCategoryView(key){
  const cat = findCategory(key);
  const list = PRODUCTS.filter(p => p.category === key);
  document.getElementById('category-crumb').textContent = cat ? cat.name : 'Categoría';
  document.getElementById('category-icon').textContent = cat ? cat.icon : '❓';
  document.getElementById('category-title').textContent = cat ? cat.name : 'Categoría no encontrada';
  document.getElementById('category-count').textContent = `${list.length} producto${list.length===1?'':'s'}`;
  renderGrid('category-products', list);
}

function renderSearchView(q){
  const nq = normalize(q.trim());
  const list = nq ? PRODUCTS.filter(p => {
    const cat = findCategory(p.category);
    return normalize(p.name).includes(nq) || normalize(p.description).includes(nq) || (cat && normalize(cat.name).includes(nq));
  }) : [];
  document.getElementById('search-title').textContent = q ? `Resultados para "${q}"` : 'Escribe algo para buscar';
  document.getElementById('search-input').value = q;
  renderGrid('search-products', list);
}

function renderGallery(p){
  const variant = p.variants[pdState.variantIndex];
  const main = document.getElementById('pd-main-image');
  main.src = variant.images[0];
  main.alt = `${p.name} - ${variant.label}`;
  const thumbs = document.getElementById('pd-thumbs');
  thumbs.innerHTML = variant.images.map((src,i) => `<img src="${src}" class="${i===0?'active':''}" alt="Vista ${i+1} de ${p.name}">`).join('');
  thumbs.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      main.src = img.src;
      thumbs.querySelectorAll('img').forEach(t => t.classList.remove('active'));
      img.classList.add('active');
    });
  });
}

function renderProductView(idParam){
  const id = Number(idParam);
  const p = findProduct(id);
  if(!p){ location.hash = '#/'; return; }
  if(pdState.productId !== id){ pdState = { productId:id, variantIndex:0, qty:1 }; }

  const cat = findCategory(p.category);
  document.getElementById('pd-breadcrumb').innerHTML =
    `<a href="#/">Inicio</a> <span>/</span> <a href="#/categoria/${p.category}">${cat ? cat.name : ''}</a> <span>/</span> <span>${p.name}</span>`;
  document.getElementById('pd-name').textContent = p.name;
  document.getElementById('pd-rating').innerHTML = `<b>${p.rating}</b> ${starString(p.rating)} · ${p.reviews} reseñas`;
  document.getElementById('pd-price').textContent = formatPrice(p.price);
  document.getElementById('pd-description').textContent = p.description;

  const badgeEl = document.getElementById('pd-badge');
  if(p.badge){ badgeEl.hidden = false; badgeEl.textContent = p.badge; } else { badgeEl.hidden = true; }

  document.getElementById('pd-variants').innerHTML = p.variants.map((v,i) =>
    `<button type="button" class="variant-btn ${i===pdState.variantIndex?'active':''}" data-i="${i}">${v.label}</button>`).join('');
  document.getElementById('pd-variant-name').textContent = ': ' + p.variants[pdState.variantIndex].label;
  document.querySelectorAll('#pd-variants .variant-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      pdState.variantIndex = Number(btn.dataset.i);
      renderProductView(id);
    });
  });

  renderGallery(p);
  document.getElementById('pd-qty').textContent = pdState.qty;

  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 10);
  renderGrid('related-carousel', related);
}

function renderCartView(){
  const cart = getCart();
  const container = document.getElementById('cart-items');
  if(!cart.length){
    container.innerHTML = `<div class="empty-state"><h2>Tu carrito está vacío</h2><p>Agrega productos para verlos aquí.</p><a href="#/" class="btn btn-primary">Ir a comprar</a></div>`;
    document.getElementById('cart-subtotal').textContent = formatPrice(0);
    document.getElementById('cart-total').textContent = formatPrice(0);
    return;
  }
  let subtotal = 0;
  container.innerHTML = cart.map(c => {
    const p = findProduct(c.id);
    if(!p) return '';
    const v = p.variants[c.variantIndex];
    const lineTotal = p.price * c.qty;
    subtotal += lineTotal;
    return `
    <div class="cart-row-item" data-id="${p.id}" data-vi="${c.variantIndex}">
      <img src="${v.images[0]}" alt="${p.name}">
      <div class="info">
        <div class="nm">${p.name}</div>
        <div class="vr">Modelo: ${v.label}</div>
        <div class="qty-control">
          <button type="button" class="qminus" aria-label="Restar">−</button>
          <span>${c.qty}</span>
          <button type="button" class="qplus" aria-label="Sumar">+</button>
        </div>
      </div>
      <div class="line-price">${formatPrice(lineTotal)}</div>
      <button type="button" class="cart-remove">Quitar</button>
    </div>`;
  }).join('');

  document.getElementById('cart-subtotal').textContent = formatPrice(subtotal);
  document.getElementById('cart-total').textContent = formatPrice(subtotal);

  container.querySelectorAll('.cart-row-item').forEach(row => {
    const id = Number(row.dataset.id), vi = Number(row.dataset.vi);
    row.querySelector('.qminus').addEventListener('click', () => {
      const c = getCart(); const item = c.find(x => x.id===id && x.variantIndex===vi);
      if(item){ item.qty = Math.max(1, item.qty - 1); saveCart(c); renderCartView(); }
    });
    row.querySelector('.qplus').addEventListener('click', () => {
      const c = getCart(); const item = c.find(x => x.id===id && x.variantIndex===vi);
      if(item){ item.qty += 1; saveCart(c); renderCartView(); }
    });
    row.querySelector('.cart-remove').addEventListener('click', () => removeFromCart(id, vi));
  });
}

/* ---------- router ---------- */
function parseHash(){
  let h = location.hash.slice(1) || '/';
  if(!h.startsWith('/')) h = '/' + h;
  return h.split('/').filter(Boolean).map(decodeURIComponent);
}

function router(){
  const parts = parseHash();
  hideAllViews();
  if(parts[0] === 'categoria'){
    renderCategoryView(parts[1]); showView('view-category'); updateActivePill(parts[1] || '');
  } else if(parts[0] === 'buscar'){
    renderSearchView(parts[1] || ''); showView('view-search'); updateActivePill('');
  } else if(parts[0] === 'producto'){
    renderProductView(parts[1]); showView('view-product'); updateActivePill('');
  } else if(parts[0] === 'carrito'){
    renderCartView(); showView('view-cart'); updateActivePill('');
  } else {
    showView('view-home'); updateActivePill('');
  }
  window.scrollTo(0, 0);
}

/* ---------- modal / toast ---------- */
function openCheckoutModal(){ document.getElementById('checkout-modal').hidden = false; document.body.style.overflow = 'hidden'; }
function closeCheckoutModal(){ document.getElementById('checkout-modal').hidden = true; document.body.style.overflow = ''; }

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.hidden = false;
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.hidden = true, 250); }, 2200);
}

/* ---------- eventos estáticos (se registran una sola vez) ---------- */
function attachStaticEvents(){
  document.getElementById('search-form').addEventListener('submit', e => {
    e.preventDefault();
    const q = document.getElementById('search-input').value.trim();
    if(q) location.hash = '#/buscar/' + encodeURIComponent(q);
  });

  document.getElementById('cart-button').addEventListener('click', () => { location.hash = '#/carrito'; });

  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    const open = !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', open);
    mobileMenu.hidden = !open;
  });
  mobileMenu.addEventListener('click', e => {
    if(e.target.tagName === 'A'){ mobileMenu.classList.remove('open'); mobileMenu.hidden = true; }
  });

  document.getElementById('pd-qty-minus').addEventListener('click', () => {
    pdState.qty = Math.max(1, pdState.qty - 1);
    document.getElementById('pd-qty').textContent = pdState.qty;
  });
  document.getElementById('pd-qty-plus').addEventListener('click', () => {
    pdState.qty += 1;
    document.getElementById('pd-qty').textContent = pdState.qty;
  });
  document.getElementById('pd-add-cart').addEventListener('click', () => {
    addToCart(pdState.productId, pdState.variantIndex, pdState.qty);
    showToast('Agregado al carrito ✓');
  });
  document.getElementById('pd-buy-now').addEventListener('click', () => {
    addToCart(pdState.productId, pdState.variantIndex, pdState.qty);
    openCheckoutModal();
  });

  document.getElementById('checkout-btn').addEventListener('click', () => {
    if(!getCart().length){ showToast('Tu carrito está vacío'); return; }
    openCheckoutModal();
  });

  document.getElementById('modal-close').addEventListener('click', closeCheckoutModal);
  document.getElementById('checkout-modal').addEventListener('click', e => {
    if(e.target.id === 'checkout-modal') closeCheckoutModal();
  });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeCheckoutModal(); });

  window.addEventListener('hashchange', router);
}

/* ---------- init ---------- */
function init(){
  buildCategoryNav();
  buildHero();
  renderGrid('featured-carousel', pickFeatured());
  renderGrid('new-carousel', pickNew());
  attachCarouselNav();
  attachStaticEvents();
  updateCartCount();
  router();
}

document.addEventListener('DOMContentLoaded', init);
