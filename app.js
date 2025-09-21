// Places that show pins and pictures
const PLACES = [
  {
    name: "Boston, USA",
    left: 29,
    top: 32,
    photos: [
      "images/3.JPEG",
      "images/9.JPEG",
      "images/5.JPG",
      "images/6.JPG",
      "images/7.JPG",
      "images/10.jpg",
      "images/11.JPG",
      "images/13.JPG",
      "images/20.JPG",
      "images/21.jpg",
      "images/22.JPG",
      "images/23.JPG",
      "images/24.jpg",
    ],
  },
  {
    name: "Paris, France",
    left: 48,
    top: 32,
    photos: [
      "images/1.JPEG",
      "images/2.JPEG",
      "images/4.JPEG",
      "images/8.JPG",
      "images/25.JPG",
      "images/26.jpg",
      "images/27.JPG",
      "images/28.JPG",
    ],
  },
  {
    name: "Suzhou, China",
    left: 82,
    top: 37,
    photos: [
      "images/29.JPG",
      "images/30.JPG",
      "images/31.JPG",
      "images/32.JPG",
      "images/33.JPG",
    ],
  },

  {
    name: "Tokyo, Japan",
    left: 87,
    top: 34,
    photos: [
      "images/12.JPG",
      "images/14.JPG",
      "images/15.JPG",
      "images/16.JPG",
      "images/17.JPG",
      "images/18.JPG",
      "images/19.JPG",
    ],
  },
];

// DOM references
const pins = document.getElementById("pins");
const elName = document.getElementById("location-name");
const elGallery = document.getElementById("gallery");
const elClear = document.getElementById("clear-btn");

// Render pins as <button>
function renderPins() {
  pins.innerHTML = "";
  const frag = document.createDocumentFragment();

  PLACES.forEach((p, idx) => {
    const btn = document.createElement("button");
    btn.className = "pin";
    btn.type = "button";
    btn.style.left = `${p.left}%`;
    btn.style.top = `${p.top}%`;
    btn.title = p.name;
    btn.setAttribute("aria-label", p.name);
    btn.dataset.index = String(idx);
    btn.addEventListener("click", () => showLocation(p));
    frag.appendChild(btn);
  });

  pins.appendChild(frag);
}

// Function that clears the gallery
function clearGallery() {
  elGallery.innerHTML = "";
}

// Function that shows the photos
function renderPhotos(urls = []) {
  clearGallery();
  const frag = document.createDocumentFragment();
  urls.forEach((src, i) => {
    const a = document.createElement("a");
    a.href = src;
    a.target = "_blank";
    a.rel = "noopener";

    // create <img>
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Photo ${i + 1}`;
    img.loading = "lazy";

    a.appendChild(img);
    frag.appendChild(a);
  });
  elGallery.appendChild(frag);
}

// Function that shows the location and pictures when clicking
function showLocation(place) {
  elName.textContent = place.name;
  renderPhotos(place.photos || []);
}

// Clear state
elClear.addEventListener("click", () => {
  elName.textContent = "Click a location";
  clearGallery();
});

// Init
renderPins();
