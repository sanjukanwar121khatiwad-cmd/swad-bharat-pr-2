
const AUTHORIZED_OWNER_EMAILS = ["praveen121khatiward@gmail.com", "9257813359"];
const AUTHORIZED_OWNER_PASSCODES = ["9257813359", "925781"];

const INDIAN_RESTAURANT_NAMES = [
    "Shri Balaji Rasoi", "Rajputana Dhaba", "Bikaner Sweets & Bhojnalaya", "Jaipur Royal Kitchen", 
    "Mewar Food Court", "Marwar Delicacies", "Delhi Darbar Express", "Punjab Di Rasoi"
];

let RESTAURANTS = [];
let ALL_FOOD_ITEMS = [];

// Category-wise accurate food images mapping
const DISH_IMAGES = {
    "Rajasthani": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=60",
    "North Indian": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=60",
    "South Indian": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=60",
    "Chinese": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
    "Fast Food": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60",
    "Desserts": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=60",
    "Beverages": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&auto=format&fit=crop&q=60"
};

for (let r = 1; r <= 50; r++) {
    const restName = `${INDIAN_RESTAURANT_NAMES[(r - 1) % INDIAN_RESTAURANT_NAMES.length]} #${r}`;
    let restItems = [];
    const dishTypes = [
        { name: "Dal Baati Churma", cat: "Rajasthani", basePrice: 250, desc: "Panchmel dal with pure ghee baati." },
        { name: "Paneer Butter Masala", cat: "North Indian", basePrice: 220, desc: "Rich tomato gravy with paneer." },
        { name: "Masala Dosa", cat: "South Indian", basePrice: 140, desc: "Crispy rice crepe with potato." },
        { name: "Veg Hakka Noodles", cat: "Chinese", basePrice: 160, desc: "Wok-tossed noodles with veggies." },
        { name: "Crispy Samosa Plate", cat: "Fast Food", basePrice: 60, desc: "Deep-fried pastry with potato." },
        { name: "Gulab Jamun", cat: "Desserts", basePrice: 80, desc: "Sweet milk solids in rose syrup." },
        { name: "Badam Milk Shake", cat: "Beverages", basePrice: 90, desc: "Chilled almond milk with saffron." }
    ];

    for (let i = 1; i <= 20; i++) {
        const dt = dishTypes[(i - 1) % dishTypes.length];
        restItems.push({
            id: `r${r}_i${i}`,
            name: `${dt.name} Special`,
            category: dt.cat,
            price: dt.basePrice + ((i * 7) % 150),
            restaurant: restName,
            image: DISH_IMAGES[dt.cat] || DISH_IMAGES["North Indian"],
            ingredients: `Fresh ingredients: ${dt.desc}, spices, oil, herbs.`
        });
    }
    RESTAURANTS.push({ id: r, name: restName, items: restItems });
    ALL_FOOD_ITEMS.push(...restItems);
}

// 100 MEDICINES WITH DISTINCT MEDICAL & PHARMACY PICTURES (Palasna & Jaipur Sourced)
const MEDICAL_ITEMS = [];
const medCatalog = [
    { name: "Paracetamol Tablet (Fever Care)", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60", use: "Used for reducing fever and body pain." },
    { name: "Azithromycin Capsule (Antibiotic)", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60", use: "Antibiotic used for bacterial infections." },
    { name: "Pantoprazole Capsule (Acidity)", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=500&auto=format&fit=crop&q=60", use: "Treats stomach acidity and ulcers." },
    { name: "Cetirizine Syrup (Allergy Care)", img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&auto=format&fit=crop&q=60", use: "Antihistamine for cold and allergies." },
    { name: "Ibuprofen Pain Reliever", img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60", use: "Anti-inflammatory pain relief tablet." },
    { name: "Amoxicillin Broad Spectrum", img: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=500&auto=format&fit=crop&q=60", use: "Fights major bacterial infections." },
    { name: "Metformin Diabetes Care", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=60", use: "Controls blood sugar levels safely." },
    { name: "Vitamin C Immunity Booster", img: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=500&auto=format&fit=crop&q=60", use: "Boosts immunity and skin health." },
    { name: "Cough Relief Syrup", img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format&fit=crop&q=60", use: "Soothes throat irritation and cough." },
    { name: "ORS Hydration Salts", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=500&auto=format&fit=crop&q=60", use: "Quick recovery from dehydration and weakness." }
];

for (let m = 1; m <= 100; m++) {
    const medItem = medCatalog[(m - 1) % medCatalog.length];
    const sourceLocation = m <= 50 ? "📍 Palasna Medical Hub (Local Stock)" : "🏥 Jaipur Pharma Distributor (Regional Hub)";
    
    MEDICAL_ITEMS.push({
        id: `med_${m}`,
        name: `${medItem.name} #${m}`,
        category: "Medicines",
        price: 35 + ((m * 4) % 300),
        location: sourceLocation,
        image: medItem.img,
        usage: `${medItem.use} Sourced directly from ${sourceLocation}.`
    });
}

const CATEGORIES = ["All", "Rajasthani", "North Indian", "South Indian", "Chinese", "Fast Food", "Desserts", "Beverages"];
let cart = [], activeCategory = "All", activePriceRange = "all", searchQuery = "", currentUser = null;
let activeOrderTimer = null, orderStartTime = null;
let currentMode = "food";

window.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderGrid();
    openLoginModal();
});

function toggleOwnerField() {
    const role = document.getElementById('userRoleSelect').value;
    document.getElementById('passcodeContainer').classList.toggle('hidden', role !== 'owner');
}

function handleUserLogin(e) {
    e.preventDefault();
    const role = document.getElementById('userRoleSelect').value;
    const loginInput = document.getElementById('loginEmail').value.trim().toLowerCase();
    
    if (role === 'owner') {
        const passcode = document.getElementById('loginPasscode').value.trim();
        const isEmailValid = AUTHORIZED_OWNER_EMAILS.includes(loginInput);
        const isPasscodeValid = AUTHORIZED_OWNER_PASSCODES.includes(passcode) || AUTHORIZED_OWNER_PASSCODES.includes(loginInput);

        if (!isEmailValid && !isPasscodeValid) {
            alert("🔒 Access Denied!\nOnly authorized admin (Praveen: praveen121khatiward@gmail.com / 9257813359) can access Admin Panel.");
            return;
        }

        currentUser = { role: 'owner', email: loginInput, name: 'Praveen (Admin)' };
        alert("Welcome Praveen! Admin Authority Activated.");
    } else {
        if(!loginInput) {
            alert("Please enter a valid email or mobile number.");
            return;
        }
        currentUser = { role: 'customer', email: loginInput, name: loginInput.split('@')[0] };
        alert(`Welcome ${currentUser.name}! You can browse food or the Medical Menu.`);
    }

    updateUserRoleUI();
    closeLoginModal();
}

function updateUserRoleUI() {
    if (!currentUser) return;
    document.getElementById('userAuthBtn').innerText = currentUser.name;
    document.getElementById('ownerPanelBtn').classList.toggle('hidden', currentUser.role !== 'owner');
    renderGrid();
}

function openLoginModal() { document.getElementById('loginModal').classList.remove('hidden'); }
function closeLoginModal() { document.getElementById('loginModal').classList.add('hidden'); }

function switchTab(mode) {
    currentMode = mode;
    if(mode === 'food') {
        document.getElementById('categoryFilterBar').classList.remove('hidden');
        document.getElementById('view-menu').classList.remove('hidden');
        document.getElementById('view-medical').classList.add('hidden');
        document.getElementById('view-owner').classList.add('hidden');
        document.getElementById('btnFood').className = "px-4 py-2 text-xs font-bold rounded-full bg-orange-500 text-white";
        document.getElementById('btnMed').className = "px-4 py-2 text-xs font-bold rounded-full bg-slate-100 text-slate-700";
        renderGrid();
    } else if(mode === 'medical') {
        document.getElementById('categoryFilterBar').classList.add('hidden');
        document.getElementById('view-medical').classList.remove('hidden');
        document.getElementById('view-menu').classList.add('hidden');
        document.getElementById('view-owner').classList.add('hidden');
        document.getElementById('btnMed').className = "px-4 py-2 text-xs font-bold rounded-full bg-emerald-600 text-white";
        document.getElementById('btnFood').className = "px-4 py-2 text-xs font-bold rounded-full bg-slate-100 text-slate-700";
        renderMedicalGrid();
    } else if(mode === 'owner') {
        document.getElementById('categoryFilterBar').classList.add('hidden');
        ['view-menu', 'view-medical'].forEach(v => document.getElementById(v).classList.add('hidden'));
        document.getElementById('view-owner').classList.remove('hidden');
    }
}

function setPriceRange(range) { activePriceRange = range; renderGrid(); }

function renderCategories() {
    document.getElementById('categoriesContainer').innerHTML = CATEGORIES.map(cat => `
        <button onclick="filterCategory('${cat}')" class="px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${activeCategory === cat ? 'bg-orange-500 text-white' : 'bg-white text-slate-700 border'}">${cat}</button>
    `).join('');
}

function filterCategory(cat) { 
    activeCategory = cat; 
    renderCategories(); 
    renderGrid(); 
}

function renderGrid() {
    if (currentMode !== 'food') return;
    const grid = document.getElementById('foodGrid');
    const isAdmin = currentUser && currentUser.role === 'owner';

    let items = ALL_FOOD_ITEMS.filter(item => {
        let matchPrice = true;
        if (activePriceRange === '0-100') matchPrice = item.price <= 100;
        else if (activePriceRange === '100-200') matchPrice = item.price >= 100 && item.price <= 200;
        else if (activePriceRange === '200-300') matchPrice = item.price >= 200 && item.price <= 300;
        else if (activePriceRange === '300-500') matchPrice = item.price >= 300 && item.price <= 500;
        else if (activePriceRange === '500-1000') matchPrice = item.price >= 500 && item.price <= 1000;
        
        const matchCat = (activeCategory === "All" || item.category === activeCategory);
        const matchSearch = searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.restaurant.toLowerCase().includes(searchQuery.toLowerCase());
        return matchPrice && matchCat && matchSearch;
    });

    grid.innerHTML = items.slice(0, 100).map(item => {
        const cartItem = cart.find(c => c.id === item.id), qty = cartItem ? cartItem.qty : 0;
        return `
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col relative">
            ${isAdmin ? `<button onclick="editPriceByAdmin('${item.id}')" class="absolute top-2 right-2 bg-amber-400 text-slate-950 px-2 py-1 text-[10px] font-extrabold rounded-lg shadow z-10">✏️ Edit</button>` : ''}
            <div class="relative h-36 bg-slate-100"><img src="${item.image}" class="w-full h-full object-cover"></div>
            <div class="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                    <span class="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md"><i class="fa-solid fa-shop mr-1"></i>${item.restaurant}</span>
                    <h4 class="font-extrabold text-slate-900 text-sm mt-1">${item.name}</h4>
                    <p class="text-[11px] text-slate-500 line-clamp-2">${item.ingredients}</p>
                </div>
                <div class="pt-2">
                    <button onclick="showDetails('${item.name}', '${item.ingredients}')" class="text-xs text-blue-600 font-bold hover:underline mb-2 block">ℹ️ View Ingredients</button>
                    <div class="flex items-center justify-between pt-2 border-t">
                        <div class="text-base font-black text-slate-900">₹${item.price}</div>
                        ${qty === 0 ? `<button onclick="addToCart('${item.id}')" class="px-4 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-xl">+ ADD</button>` :
                        `<div class="flex items-center space-x-2 bg-orange-50 p-1 rounded-xl border border-orange-200">
                            <button onclick="updateQty('${item.id}', -1)" class="w-6 h-6 bg-orange-500 text-white font-bold rounded-lg">-</button>
                            <span class="text-xs font-black w-4 text-center">${qty}</span>
                            <button onclick="updateQty('${item.id}', 1)" class="w-6 h-6 bg-orange-500 text-white font-bold rounded-lg">+</button>
                        </div>`}
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

function renderMedicalGrid() {
    const grid = document.getElementById('medicalGrid');
    grid.innerHTML = MEDICAL_ITEMS.map(med => {
        const cartItem = cart.find(c => c.id === med.id), qty = cartItem ? cartItem.qty : 0;
        return `
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col relative">
            <div class="relative h-36 bg-slate-100"><img src="${med.image}" class="w-full h-full object-cover"></div>
            <div class="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                    <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md"><i class="fa-solid fa-location-dot mr-1"></i>${med.location}</span>
                    <h4 class="font-extrabold text-slate-900 text-sm mt-1">${med.name}</h4>
                    <p class="text-[11px] text-slate-500 line-clamp-2">${med.usage}</p>
                </div>
                <div class="pt-2">
                    <button onclick="showDetails('${med.name}', '${med.usage}')" class="text-xs text-blue-600 font-bold hover:underline mb-2 block">ℹ️ What is this medicine for? (Details)</button>
                    <div class="flex items-center justify-between pt-2 border-t">
                        <div class="text-base font-black text-slate-900">₹${med.price}</div>
                        ${qty === 0 ? `<button onclick="addToCart('${med.id}')" class="px-4 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-xl">+ ADD MED</button>` :
                        `<div class="flex items-center space-x-2 bg-emerald-50 p-1 rounded-xl border border-emerald-200">
                            <button onclick="updateQty('${med.id}', -1)" class="w-6 h-6 bg-emerald-600 text-white font-bold rounded-lg">-</button>
                            <span class="text-xs font-black w-4 text-center">${qty}</span>
                            <button onclick="updateQty('${med.id}', 1)" class="w-6 h-6 bg-emerald-600 text-white font-bold rounded-lg">+</button>
                        </div>`}
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

function showDetails(title, info) {
    alert(`📋 Details for "${title}":\n\n${info}`);
}

function addToCart(id) {
    let item = ALL_FOOD_ITEMS.find(f => f.id === id) || MEDICAL_ITEMS.find(m => m.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) existing.qty++; else cart.push({ ...item, qty: 1 });
    updateCartUI();
    if(currentMode === 'food') renderGrid(); else renderMedicalGrid();
}

function updateQty(id, delta) {
    const idx = cart.findIndex(c => c.id === id);
    if (idx !== -1) { cart[idx].qty += delta; if (cart[idx].qty <= 0) cart.splice(idx, 1); }
    updateCartUI();
    if(currentMode === 'food') renderGrid(); else renderMedicalGrid();
}

function updateCartUI() {
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById('cartBadge').innerText = totalQty;
    const sub = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    document.getElementById('cartTotal').innerText = `₹${sub}`;
    document.getElementById('cartItemsList').innerHTML = cart.length === 0 ? `<div class="text-center text-xs text-slate-400">Your basket is empty</div>` :
        cart.map(i => `<div class="flex justify-between items-center p-2 bg-slate-50 border rounded-xl"><span class="text-xs font-bold">${i.name} (x${i.qty})</span><span class="text-xs text-orange-600 font-bold">₹${i.price * i.qty}</span></div>`).join('');
}

function toggleCartDrawer() {
    const d = document.getElementById('cartDrawer'), p = document.getElementById('cartDrawerPanel');
    d.classList.toggle('invisible');
    p.classList.toggle('translate-x-full');
}

function handleCheckout() {
    if (cart.length === 0) { alert("Cart is empty!"); return; }
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custMobile').value.trim();
    const addr = document.getElementById('custAddress').value.trim();
    if (!name || !phone || !addr) { alert("Please enter Name, Mobile & Address!"); return; }

    const mode = document.getElementById('paymentModeSelect').value;
    toggleCartDrawer();

    if (mode === 'cod') {
        finalizeOrderAndStartTimer('Cash on Delivery (COD)');
    } else {
        const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
        document.getElementById('qrImage').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`upi://pay?pa=9257813359@ptyes&pn=Sanju&am=${total}&cu=INR`)}`;
        document.getElementById('paymentModal').classList.remove('hidden');
    }
}

function closePaymentModal() { document.getElementById('paymentModal').classList.add('hidden'); }

function finalizeOrderAndStartTimer(paymentType) {
    closePaymentModal();
    const totalItemsCount = cart.reduce((s, i) => s + i.qty, 0);
    let targetMinutes = totalItemsCount === 1 ? 5 : (totalItemsCount === 2 ? 10 : 15);

    cart = [];
    updateCartUI();
    if(currentMode === 'food') renderGrid(); else renderMedicalGrid();

    alert(`✅ Order Placed Successfully via ${paymentType}!\n⏱️ Target Timer: ${targetMinutes} Minutes (${totalItemsCount} items).`);

    orderStartTime = Date.now();
    if (activeOrderTimer) clearInterval(activeOrderTimer);

    activeOrderTimer = setInterval(() => {
        const elapsedMinutes = (Date.now() - orderStartTime) / 60000;
        if (elapsedMinutes >= (targetMinutes + 10)) {
            playFirecrackerSound();
            alert(`🚨 LATE DELIVERY ALERT!\nThis order took ${Math.round(elapsedMinutes)} mins instead of ${targetMinutes} mins. It is now 100% FREE for the customer!`);
            clearInterval(activeOrderTimer);
        }
    }, 5000);
}

function playFirecrackerSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const bufferSize = audioCtx.sampleRate * 2;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) { data[i] = Math.random() * 2 - 1; }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, audioCtx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 2);
        noise.connect(filter);
        filter.connect(audioCtx.destination);
        noise.start();
    } catch(e) { console.log("Audio not supported"); }
}

function requestFoodReturn() {
    const reason = prompt("Enter reason for return/refund (e.g. damaged medicine, bad food):");
    if (!reason) return;
    const custUPI = prompt("Please enter your UPI ID or paste your QR code for instant refund:");
    if (custUPI) {
        alert(`✅ Return Request Submitted!\nAdmin (Praveen) will transfer your refund to UPI: ${custUPI}.\nSupport: Praveen (9257813359) / Rajat (8742025889)`);
    }
}

function handleAddNewFood(e) {
    e.preventDefault();
    if (currentUser?.role !== 'owner') { alert("Only Admin can add items!"); return; }
    ALL_FOOD_ITEMS.unshift({
        id: `custom_${Date.now()}`,
        name: document.getElementById('newFoodName').value,
        category: document.getElementById('newFoodCategory').value,
        price: parseInt(document.getElementById('newFoodPrice').value),
        restaurant: "Praveen Special Kitchen",
        image: document.getElementById('newFoodImage').value,
        ingredients: "Special freshly prepared ingredients by Admin."
    });
    alert("New item added successfully!");
    renderGrid();
    switchTab('food');
}

function editPriceByAdmin(id) {
    if (currentUser?.role !== 'owner') return;
    const item = ALL_FOOD_ITEMS.find(f => f.id === id);
    if (!item) return;
    const newPrice = prompt(`[Admin Control] Enter new price for "${item.name}":`, item.price);
    if (newPrice && !isNaN(newPrice)) {
        item.price = parseInt(newPrice);
        renderGrid();
        alert("Price updated successfully!");
    }
}