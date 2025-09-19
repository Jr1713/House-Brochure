const modal = document.getElementById("featureModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const features = {
  living: {
    title: "Spacious Living Room",
    slides: [
      { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", caption: "Bright and open living area with modern design." },
      { img: "https://images.unsplash.com/photo-1505692794403-34d4982f88d3", caption: "Elegant decor perfect for family gatherings." }
    ]
  },
  kitchen: {
    title: "Modern Kitchen",
    slides: [
      { img: "https://images.unsplash.com/photo-1600566753190-17f9a4c0c34c", caption: "Fully equipped modern kitchen with premium appliances." },
      { img: "https://images.unsplash.com/photo-1616627988858-8b2f3e5d9e6d", caption: "Sleek design for cooking and entertaining." }
    ]
  },
  bedroom: {
    title: "Peaceful Bedrooms",
    slides: [
      { img: "https://images.unsplash.com/photo-1600607686806-975b28b0b64d", caption: "Cozy bedrooms designed for relaxation." },
      { img: "https://images.unsplash.com/photo-1615874959474-d609b8f4b7e3", caption: "Spacious layout with warm tones." }
    ]
  }
};

let currentFeature = null;
let currentSlide = 0;

document.querySelectorAll(".feature-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentFeature = btn.dataset.feature;
    currentSlide = 0;
    openModal();
  });
});

function openModal() {
  modal.style.display = "flex";
  updateSlide();
}

function closeModal() {
  modal.style.display = "none";
}

function updateSlide() {
  const slide = features[currentFeature].slides[currentSlide];
  modalTitle.textContent = features[currentFeature].title;
  modalImage.src = slide.img;
  modalCaption.textContent = slide.caption;
}

function showNext() {
  currentSlide = (currentSlide + 1) % features[currentFeature].slides.length;
  updateSlide();
}

function showPrev() {
  currentSlide = (currentSlide - 1 + features[currentFeature].slides.length) % features[currentFeature].slides.length;
  updateSlide();
}

closeBtn.addEventListener("click", closeModal);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

window.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
