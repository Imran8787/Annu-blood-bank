/* ===================== DATA ===================== */

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const DEFAULT_DATA = {
  donors: [
    { id: 1,  name: "Rahul Sharma", age: 28, gender: "Male",   bloodGroup: "O+",  phone: "9876543210", email: "", address: "", lastDonation: "2025-11-14" },
    { id: 2,  name: "Priya Patel",  age: 32, gender: "Female", bloodGroup: "A+",  phone: "9876543211", email: "", address: "", lastDonation: "2025-10-19" },
    { id: 3,  name: "Amit Kumar",   age: 25, gender: "Male",   bloodGroup: "B+",  phone: "9876543212", email: "", address: "", lastDonation: null },
    { id: 4,  name: "Sneha Reddy",  age: 30, gender: "Female", bloodGroup: "O+",  phone: "9876543213", email: "", address: "", lastDonation: "2025-09-04" },
    { id: 5,  name: "Vikram Singh", age: 35, gender: "Male",   bloodGroup: "O-",  phone: "9876543214", email: "", address: "", lastDonation: "2025-11-30" },
    { id: 6,  name: "Ananya Gupta", age: 27, gender: "Female", bloodGroup: "A-",  phone: "9876543215", email: "", address: "", lastDonation: null },
    { id: 7,  name: "Rajesh Mehta", age: 40, gender: "Male",   bloodGroup: "B-",  phone: "9876543216", email: "", address: "", lastDonation: "2025-08-09" },
    { id: 8,  name: "Kavita Nair",  age: 29, gender: "Female", bloodGroup: "AB+", phone: "9876543217", email: "", address: "", lastDonation: "2025-11-27" },
    { id: 9,  name: "imran",        age: 18, gender: "Male",   bloodGroup: "B+",  phone: "8618207131", email: "", address: "", lastDonation: "2026-06-11" },
    { id: 10, name: "annu",         age: 18, gender: "Female", bloodGroup: "B+",  phone: "8618207131", email: "", address: "", lastDonation: null }
  ],

  hospitals: [
    { id: 1, name: "City General Hospital",  contact: "Dr. Sanjay Verma", phone: "0112345678", email: "citygen@hospital.com", address: "123 Main Street, Delhi" },
    { id: 2, name: "Apollo Medical Center",  contact: "Dr. Meera Shah",   phone: "0223456789", email: "apollo@medical.com",  address: "456 Health Avenue, Mumbai" },
    { id: 3, name: "LifeCare Hospital",      contact: "Dr. Arjun Rao",    phone: "0804567890", email: "lifecare@hospital.com", address: "789 Wellness Road, Bangalore" },
    { id: 4, name: "Metro Health Institute", contact: "Dr. Lakshmi Iyer", phone: "0445678901", email: "metro@health.com",    address: "321 Care Lane, Chennai" },
    { id: 5, name: "Test Hospital",          contact: "Dr Test",          phone: "9999999999", email: "test@test.com",       address: "Test" }
  ],

  donations: [
    { id: 1, donor: "Rahul Sharma", bloodGroup: "O+", units: 1, date: "2025-11-14", status: "Approved" },
    { id: 2, donor: "Priya Patel",  bloodGroup: "A+", units: 1, date: "2025-10-19", status: "Approved" },
    { id: 3, donor: "Sneha Reddy",  bloodGroup: "O+", units: 1, date: "2025-09-04", status: "Approved" },
    { id: 4, donor: "Vikram Singh", bloodGroup: "O-", units: 1, date: "2025-11-30", status: "Approved" },
    { id: 5, donor: "Amit Kumar",   bloodGroup: "B+", units: 1, date: "2026-01-09", status: "Pending" },
    { id: 6, donor: "Ananya Gupta", bloodGroup: "A-", units: 1, date: "2026-01-14", status: "Pending" },
    { id: 7, donor: "imran",        bloodGroup: "B+", units: 1, date: "2026-06-11", status: "Approved" }
  ],

  requests: [
    { id: 1, hospital: "City General Hospital",  bloodGroup: "O+", units: 3, requestDate: "2026-01-04", requiredBy: "2026-01-07", priority: "Critical", status: "Fulfilled" },
    { id: 2, hospital: "Apollo Medical Center",  bloodGroup: "A+", units: 2, requestDate: "2026-01-09", requiredBy: "2026-01-11", priority: "Urgent",   status: "Approved" },
    { id: 3, hospital: "LifeCare Hospital",      bloodGroup: "B+", units: 1, requestDate: "2026-01-11", requiredBy: "2026-01-14", priority: "Normal",   status: "Pending" },
    { id: 4, hospital: "Metro Health Institute", bloodGroup: "O-", units: 2, requestDate: "2026-01-13", requiredBy: "2026-01-15", priority: "Critical", status: "Pending" },
    { id: 5, hospital: "City General Hospital",  bloodGroup: "B-", units: 1, requestDate: "2026-01-17", requiredBy: "2026-01-19", priority: "Normal",   status: "Pending" }
  ],

  inventory: {
    "A-":  { available: 20, used: 5,  updated: "6/12/2026, 10:14:54 PM" },
    "A+":  { available: 45, used: 12, updated: "6/12/2026, 10:14:54 PM" },
    "AB-": { available: 8,  used: 1,  updated: "6/12/2026, 10:14:54 PM" },
    "AB+": { available: 10, used: 2,  updated: "6/12/2026, 10:14:54 PM" },
    "B-":  { available: 15, used: 3,  updated: "6/12/2026, 10:14:54 PM" },
    "B+":  { available: 39, used: 8,  updated: "6/12/2026, 10:49:29 PM" },
    "O-":  { available: 25, used: 10, updated: "6/12/2026, 10:14:54 PM" },
    "O+":  { available: 60, used: 25, updated: "6/12/2026, 10:14:54 PM" }
  }
};

const LOW_STOCK_THRESHOLD = 10;
const STORAGE_KEY = "bloodBankData";

let data = loadData();

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    /* ignore */
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/* ===================== UTILS ===================== */

function nextId(arr) {
  return arr.length ? Math.max(...arr.map(x => x.id)) + 1 : 1;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(dateStr) {
  return dateStr ? dateStr : "Never";
}

function statusBadgeClass(status) {
  switch (status) {
    case "Approved":
    case "Fulfilled":
    case "Adequate":
      return status === "Fulfilled" ? "badge-blue" : "badge-green";
    case "Pending":
      return "badge-yellow";
    case "Rejected":
    case "Low Stock":
      return "badge-red";
    default:
      return "badge-green";
  }
}

function priorityBadgeClass(priority) {
  switch (priority) {
    case "Critical": return "badge-red";
    case "Urgent":   return "badge-orange";
    default:         return "badge-green";
  }
}

function bloodGroupClass(status) {
  return status === "Low Stock" ? "low-stock" : "";
}

/* ===================== LOGIN ===================== */

const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");
const loginError = document.getElementById("loginError");

document.getElementById("loginBtn").addEventListener("click", () => {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (user === "admin" && pass === "admin123") {
    loginError.classList.add("hidden");
    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
    renderAll();
  } else {
    loginError.classList.remove("hidden");
  }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  appScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
});

/* allow Enter key to submit login */
["loginUser", "loginPass"].forEach(id => {
  document.getElementById(id).addEventListener("keydown", e => {
    if (e.key === "Enter") document.getElementById("loginBtn").click();
  });
});

/* ===================== NAVIGATION ===================== */

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const page = item.dataset.page;

    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    item.classList.add("active");

    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById("page-" + page).classList.remove("hidden");

    renderAll();
  });
});

/* ===================== RENDER: DASHBOARD ===================== */

function renderDashboard() {
  const totalUnits = BLOOD_GROUPS.reduce((sum, g) => sum + data.inventory[g].available, 0);
  const pendingDonations = data.donations.filter(d => d.status === "Pending").length;
  const pendingRequests = data.requests.filter(r => r.status !== "Fulfilled" && r.status !== "Rejected").length;

  const stats = [
    { label: "ACTIVE DONORS", value: data.donors.length },
    { label: "HOSPITALS", value: data.hospitals.length },
    { label: "BLOOD UNITS", value: totalUnits },
    { label: "PENDING DONATIONS", value: pendingDonations },
    { label: "PENDING REQUESTS", value: pendingRequests }
  ];

  document.getElementById("dashboardStats").innerHTML = stats.map(s => `
    <div class="stat-card">
      <div class="stat-label">${s.label}</div>
      <div class="stat-value">${s.value}</div>
    </div>
  `).join("");

  document.getElementById("dashboardInventory").innerHTML = BLOOD_GROUPS.map(g => {
    const inv = data.inventory[g];
    return `
      <div class="inv-card">
        <div class="inv-group">${g}</div>
        <div class="inv-value">${inv.available}</div>
        <div class="inv-label">units available</div>
      </div>
    `;
  }).join("");

  const urgent = data.requests
    .filter(r => r.status !== "Fulfilled" && r.status !== "Rejected" && (r.priority === "Critical" || r.priority === "Urgent"))
    .sort((a, b) => (a.priority === "Critical" ? -1 : 1) - (b.priority === "Critical" ? -1 : 1));

  document.getElementById("urgentRequestsBody").innerHTML = urgent.map(r => `
    <tr>
      <td>${r.hospital}</td>
      <td><span class="chip">${r.bloodGroup}</span></td>
      <td>${r.units}</td>
      <td><span class="badge ${priorityBadgeClass(r.priority)}">${r.priority}</span></td>
    </tr>
  `).join("") || `<tr><td colspan="4" style="color:var(--text-muted);">No urgent requests</td></tr>`;
}

/* ===================== RENDER: DONORS ===================== */

function renderDonors() {
  document.getElementById("donorCount").textContent = `${data.donors.length} donors registered`;

  const rows = [...data.donors].sort((a, b) => b.id - a.id);

  document.getElementById("donorsBody").innerHTML = rows.map(d => `
    <tr>
      <td>${d.id}</td>
      <td>${d.name}</td>
      <td>${d.age}</td>
      <td>${d.gender}</td>
      <td><span class="chip">${d.bloodGroup}</span></td>
      <td>${d.phone}</td>
      <td>${formatDate(d.lastDonation)}</td>
      <td><button class="btn btn-sm btn-delete" data-action="delete-donor" data-id="${d.id}">Delete</button></td>
    </tr>
  `).join("");
}

/* ===================== RENDER: HOSPITALS ===================== */

function renderHospitals() {
  document.getElementById("hospitalCount").textContent = `${data.hospitals.length} hospitals registered`;

  const rows = [...data.hospitals].sort((a, b) => b.id - a.id);

  document.getElementById("hospitalsBody").innerHTML = rows.map(h => `
    <tr>
      <td>${h.id}</td>
      <td>${h.name}</td>
      <td>${h.contact}</td>
      <td>${h.phone}</td>
      <td>${h.email}</td>
      <td>${h.address}</td>
      <td><button class="btn btn-sm btn-delete" data-action="delete-hospital" data-id="${h.id}">Delete</button></td>
    </tr>
  `).join("");
}

/* ===================== RENDER: DONATIONS ===================== */

function renderDonations() {
  document.getElementById("donationCount").textContent = `${data.donations.length} donation records`;

  const rows = [...data.donations].sort((a, b) => b.id - a.id);

  document.getElementById("donationsBody").innerHTML = rows.map(d => {
    let actions = "";
    if (d.status === "Pending") {
      actions = `
        <button class="btn btn-sm btn-approve" data-action="approve-donation" data-id="${d.id}">Approve</button>
        <button class="btn btn-sm btn-reject" data-action="reject-donation" data-id="${d.id}">Reject</button>
      `;
    }
    return `
      <tr>
        <td>${d.id}</td>
        <td>${d.donor}</td>
        <td><span class="chip">${d.bloodGroup}</span></td>
        <td>${d.units}</td>
        <td>${d.date}</td>
        <td><span class="badge ${statusBadgeClass(d.status)}">${d.status}</span></td>
        <td>${actions}</td>
      </tr>
    `;
  }).join("");
}

/* ===================== RENDER: BLOOD REQUESTS ===================== */

function renderRequests() {
  document.getElementById("requestCount").textContent = `${data.requests.length} requests`;

  const rows = [...data.requests].sort((a, b) => b.id - a.id);

  document.getElementById("requestsBody").innerHTML = rows.map(r => {
    let actions = "";
    if (r.status === "Pending") {
      actions = `
        <button class="btn btn-sm btn-approve" data-action="approve-request" data-id="${r.id}">Approve</button>
        <button class="btn btn-sm btn-fulfill" data-action="fulfill-request" data-id="${r.id}">Fulfill</button>
        <button class="btn btn-sm btn-reject" data-action="reject-request" data-id="${r.id}">Reject</button>
      `;
    } else if (r.status === "Approved") {
      actions = `
        <button class="btn btn-sm btn-fulfill" data-action="fulfill-request" data-id="${r.id}">Fulfill</button>
        <button class="btn btn-sm btn-reject" data-action="reject-request" data-id="${r.id}">Reject</button>
      `;
    }
    return `
      <tr>
        <td>${r.id}</td>
        <td>${r.hospital}</td>
        <td><span class="chip">${r.bloodGroup}</span></td>
        <td>${r.units}</td>
        <td>${r.requestDate}</td>
        <td>${r.requiredBy}</td>
        <td><span class="badge ${priorityBadgeClass(r.priority)}">${r.priority}</span></td>
        <td><span class="badge ${statusBadgeClass(r.status)}">${r.status}</span></td>
        <td>${actions}</td>
      </tr>
    `;
  }).join("");
}

/* ===================== RENDER: INVENTORY ===================== */

function inventoryStatus(group) {
  const inv = data.inventory[group];
  return inv.available <= LOW_STOCK_THRESHOLD ? "Low Stock" : "Adequate";
}

function renderInventory() {
  const totalAvailable = BLOOD_GROUPS.reduce((sum, g) => sum + data.inventory[g].available, 0);
  const totalUsed = BLOOD_GROUPS.reduce((sum, g) => sum + data.inventory[g].used, 0);

  document.getElementById("inventoryStats").innerHTML = `
    <div class="stat-card">
      <div class="stat-label">TOTAL AVAILABLE</div>
      <div class="stat-value">${totalAvailable}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">TOTAL USED</div>
      <div class="stat-value">${totalUsed}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">BLOOD GROUPS</div>
      <div class="stat-value">${BLOOD_GROUPS.length}</div>
    </div>
  `;

  document.getElementById("inventoryGrid").innerHTML = BLOOD_GROUPS.map(g => {
    const inv = data.inventory[g];
    const status = inventoryStatus(g);
    return `
      <div class="inv-card ${bloodGroupClass(status)}">
        <div class="inv-group">${g}</div>
        <div class="inv-value">${inv.available}</div>
        <div class="inv-label">available</div>
        <div class="inv-used">${inv.used} used</div>
        ${status === "Low Stock" ? `<div class="low-stock-tag">LOW STOCK</div>` : ""}
      </div>
    `;
  }).join("");

  document.getElementById("inventoryDetailsBody").innerHTML = BLOOD_GROUPS.map(g => {
    const inv = data.inventory[g];
    const status = inventoryStatus(g);
    return `
      <tr>
        <td><span class="chip">${g}</span></td>
        <td>${inv.available}</td>
        <td>${inv.used}</td>
        <td>${inv.updated}</td>
        <td><span class="badge ${statusBadgeClass(status)}">${status}</span></td>
      </tr>
    `;
  }).join("");
}

/* ===================== RENDER ALL ===================== */

function renderAll() {
  renderDashboard();
  renderDonors();
  renderHospitals();
  renderDonations();
  renderRequests();
  renderInventory();
  populateDonationDonorSelect();
  populateRequestHospitalSelect();
}

/* ===================== MODAL HELPERS ===================== */

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}
function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.close));
});

document.querySelectorAll(".overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });
});

/* ===================== DONOR MODAL ===================== */

document.getElementById("openDonorModal").addEventListener("click", () => {
  document.getElementById("donorName").value = "";
  document.getElementById("donorAge").value = "";
  document.getElementById("donorGender").value = "Male";
  document.getElementById("donorBloodGroup").value = "";
  document.getElementById("donorPhone").value = "";
  document.getElementById("donorEmail").value = "";
  document.getElementById("donorAddress").value = "";
  openModal("donorModalOverlay");
});

document.getElementById("registerDonorBtn").addEventListener("click", () => {
  const name = document.getElementById("donorName").value.trim();
  const age = document.getElementById("donorAge").value.trim();
  const gender = document.getElementById("donorGender").value;
  const bloodGroup = document.getElementById("donorBloodGroup").value;
  const phone = document.getElementById("donorPhone").value.trim();
  const email = document.getElementById("donorEmail").value.trim();
  const address = document.getElementById("donorAddress").value.trim();

  if (!name || !age || !bloodGroup || !phone) {
    alert("Please fill in name, age, blood group and phone.");
    return;
  }

  data.donors.push({
    id: nextId(data.donors),
    name, age: Number(age), gender, bloodGroup, phone, email, address,
    lastDonation: null
  });

  saveData();
  closeModal("donorModalOverlay");
  renderAll();
});

/* ===================== HOSPITAL MODAL ===================== */

document.getElementById("openHospitalModal").addEventListener("click", () => {
  document.getElementById("hospitalName").value = "";
  document.getElementById("hospitalContact").value = "";
  document.getElementById("hospitalPhone").value = "";
  document.getElementById("hospitalEmail").value = "";
  document.getElementById("hospitalAddress").value = "";
  openModal("hospitalModalOverlay");
});

document.getElementById("addHospitalBtn").addEventListener("click", () => {
  const name = document.getElementById("hospitalName").value.trim();
  const contact = document.getElementById("hospitalContact").value.trim();
  const phone = document.getElementById("hospitalPhone").value.trim();
  const email = document.getElementById("hospitalEmail").value.trim();
  const address = document.getElementById("hospitalAddress").value.trim();

  if (!name) {
    alert("Please enter a hospital name.");
    return;
  }

  data.hospitals.push({ id: nextId(data.hospitals), name, contact, phone, email, address });

  saveData();
  closeModal("hospitalModalOverlay");
  renderAll();
});

/* ===================== DONATION MODAL ===================== */

function populateDonationDonorSelect() {
  const select = document.getElementById("donationDonor");
  select.innerHTML = `<option value="">Select donor</option>` +
    data.donors.map(d => `<option value="${d.name}" data-blood="${d.bloodGroup}">${d.name}</option>`).join("");
}

document.getElementById("donationDonor").addEventListener("change", e => {
  const selected = e.target.options[e.target.selectedIndex];
  const blood = selected.getAttribute("data-blood");
  if (blood) document.getElementById("donationBloodGroup").value = blood;
});

document.getElementById("openDonationModal").addEventListener("click", () => {
  populateDonationDonorSelect();
  document.getElementById("donationDonor").value = "";
  document.getElementById("donationBloodGroup").value = "";
  document.getElementById("donationUnits").value = 1;
  document.getElementById("donationDate").value = todayISO();
  document.getElementById("donationNotes").value = "";
  openModal("donationModalOverlay");
});

document.getElementById("recordDonationBtn").addEventListener("click", () => {
  const donor = document.getElementById("donationDonor").value;
  const bloodGroup = document.getElementById("donationBloodGroup").value;
  const units = Number(document.getElementById("donationUnits").value) || 1;
  const date = document.getElementById("donationDate").value || todayISO();

  if (!donor || !bloodGroup) {
    alert("Please select a donor and blood group.");
    return;
  }

  data.donations.push({
    id: nextId(data.donations),
    donor, bloodGroup, units, date, status: "Pending"
  });

  saveData();
  closeModal("donationModalOverlay");
  renderAll();
});

/* ===================== REQUEST MODAL ===================== */

function populateRequestHospitalSelect() {
  const select = document.getElementById("requestHospital");
  select.innerHTML = `<option value="">Select hospital</option>` +
    data.hospitals.map(h => `<option value="${h.name}">${h.name}</option>`).join("");
}

document.getElementById("openRequestModal").addEventListener("click", () => {
  populateRequestHospitalSelect();
  document.getElementById("requestHospital").value = "";
  document.getElementById("requestBloodGroup").value = "";
  document.getElementById("requestUnits").value = 1;
  document.getElementById("requestDate").value = todayISO();
  document.getElementById("requestRequiredBy").value = "";
  document.getElementById("requestPriority").value = "Normal";
  document.getElementById("requestNotes").value = "";
  openModal("requestModalOverlay");
});

document.getElementById("submitRequestBtn").addEventListener("click", () => {
  const hospital = document.getElementById("requestHospital").value;
  const bloodGroup = document.getElementById("requestBloodGroup").value;
  const units = Number(document.getElementById("requestUnits").value) || 1;
  const requestDate = document.getElementById("requestDate").value || todayISO();
  const requiredBy = document.getElementById("requestRequiredBy").value || requestDate;
  const priority = document.getElementById("requestPriority").value;

  if (!hospital || !bloodGroup) {
    alert("Please select a hospital and blood group.");
    return;
  }

  data.requests.push({
    id: nextId(data.requests),
    hospital, bloodGroup, units, requestDate, requiredBy, priority, status: "Pending"
  });

  saveData();
  closeModal("requestModalOverlay");
  renderAll();
});

/* ===================== TABLE ACTIONS (event delegation) ===================== */

document.addEventListener("click", e => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const action = btn.dataset.action;
  const id = Number(btn.dataset.id);

  switch (action) {
    case "delete-donor":
      data.donors = data.donors.filter(d => d.id !== id);
      break;

    case "delete-hospital":
      data.hospitals = data.hospitals.filter(h => h.id !== id);
      break;

    case "approve-donation": {
      const donation = data.donations.find(d => d.id === id);
      if (donation && donation.status === "Pending") {
        donation.status = "Approved";
        const inv = data.inventory[donation.bloodGroup];
        inv.available += donation.units;
        inv.updated = new Date().toLocaleString();

        const donor = data.donors.find(d => d.name === donation.donor);
        if (donor) donor.lastDonation = donation.date;
      }
      break;
    }

    case "reject-donation": {
      const donation = data.donations.find(d => d.id === id);
      if (donation && donation.status === "Pending") {
        donation.status = "Rejected";
      }
      break;
    }

    case "approve-request": {
      const req = data.requests.find(r => r.id === id);
      if (req && req.status === "Pending") req.status = "Approved";
      break;
    }

    case "fulfill-request": {
      const req = data.requests.find(r => r.id === id);
      if (req && (req.status === "Pending" || req.status === "Approved")) {
        const inv = data.inventory[req.bloodGroup];
        if (inv.available < req.units) {
          alert(`Not enough ${req.bloodGroup} units in stock. Available: ${inv.available}, Required: ${req.units}`);
          return;
        }
        inv.available -= req.units;
        inv.used += req.units;
        inv.updated = new Date().toLocaleString();
        req.status = "Fulfilled";
      }
      break;
    }

    case "reject-request": {
      const req = data.requests.find(r => r.id === id);
      if (req && (req.status === "Pending" || req.status === "Approved")) {
        req.status = "Rejected";
      }
      break;
    }

    default:
      return;
  }

  saveData();
  renderAll();
});

/* ===================== SEARCH (basic table filter) ===================== */

document.getElementById("globalSearch").addEventListener("input", e => {
  const term = e.target.value.trim().toLowerCase();
  const activePage = document.querySelector(".page:not(.hidden)");
  if (!activePage) return;

  activePage.querySelectorAll("tbody tr").forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(term) ? "" : "none";
  });
});

/* ===================== INIT ===================== */

renderAll();