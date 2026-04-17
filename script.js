// Data
const tourPackages = [
  {
    id: 1,
    city: "Prayagraj",
    days: 3,
    title: "3 Day Tour",
    description: "Prayagraj - Vindhyachal - Varanasi - Ayodhya Tour (03 Day 02 Night)",
    image: "https://prayagrajsangam.in/wp-content/uploads/2024/11/converted_Untitled_design_17-1-1-1024x538.jpg",
    alt: "Prayagraj Tour",
    buttonText: "View Package"
  },
  {
    id: 2,
    city: "Ayodhya",
    days: 1,
    title: "Same Day Tour",
    description: "Prayagraj - Ayodhya Tour (01 Day)",
    image: "https://www.varanasi-tourism.in/img/ayodhya-temple.webp",
    alt: "Ayodhya Tour",
    buttonText: "View Package"
  },
  {
    id: 3,
    city: "Varanasi",
    days: 5,
    title: "5 Day Tour",
    description: "Varanasi - Prayagraj - Lucknow - Varanasi",
    image: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0a/be/17/41/caption.jpg",
    alt: "Varanasi Tour",
    buttonText: "View Package"
  },
  {
    id: 4,
    city: "Gorakhpur",
    days: 5,
    title: "5 Day Tour",
    description: "Varanasi - Prayagraj - Lucknow - Varanasi",
    image: "https://www.tempotravellerhire.in/jap/media/gallery/geeta-press-gorakhpur.jpg",
    alt: "Varanasi Tour",
    buttonText: "View Package"
  },
  {
    id: 5,
    city: "Lucknow",
    days: 5,
    title: "5 Day Tour",
    description: "Varanasi - Prayagraj - Lucknow - Varanasi",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-chota-imambara-lucknow-uttar-pradesh-attr-hero?qlt=82&ts=1742164819097",
    alt: "Varanasi Tour",
    buttonText: "View Package"
  },
  {
    id: 6,
    city: "Agra",
    days: 5,
    title: "5 Day Tour",
    description: "Varanasi - Prayagraj - Lucknow - Varanasi",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/t_ufs/m_activities-agra-taj-mahal_l_400_640.jpg",
    alt: "Varanasi Tour",
    buttonText: "View Package"
  }
];

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cardContainer");

  let selectedCity = "All";
  let selectedDays = "All";

  // Render Cards
  function displayTours(data) {
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<h4 class='text-center'>No tours found</h4>";
      return;
    }

    data.forEach(pkg => {
      const card = `
        <div class="col-md-4">
          <div class="card h-100">
            <img src="${pkg.image}" class="card-img-top" alt="${pkg.alt}">
            <div class="card-body">
              <h5 class="card-title">${pkg.title}</h5>
              <p class="card-text">${pkg.description}</p>
              <a href="#" class="btn btn-primary">${pkg.buttonText}</a>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  }

  // Apply Filters
  function applyFilters() {
    const filtered = tourPackages.filter(pkg => {
      const cityMatch = selectedCity === "All" || pkg.city === selectedCity;
      const daysMatch = selectedDays === "All" || pkg.days == selectedDays;
      return cityMatch && daysMatch;
    });

    displayTours(filtered);
  }

  // City Filter
  document.querySelectorAll("#cityFilter .dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
      selectedCity = this.dataset.city;
      applyFilters();
    });
  });

  // Days Filter
  document.querySelectorAll("#dayFilter .dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
      selectedDays = this.dataset.days;
      applyFilters();
    });
  });

  // Initial Load
  displayTours(tourPackages);
});

// Button click example
let button = document.querySelector(".explore-button");
button.addEventListener("click", function() {
  alert("Exploring Uttar Pradesh Tourism!");
});
