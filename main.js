// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON file
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Populate Info Cards
        const cardContainer = document.getElementById("card-container");
        data.infoCards.forEach(card => {
          const cardHTML = `
            <div class="col-md-4">
              <div class="card">
                <img src="${card.image}" class="card-img-top" alt="${card.title}">
                <div class="card-body">
                  <h5 class="card-title">${card.title}</h5>
                  <p class="card-text">${card.description}</p>
                </div>
              </div>
            </div>
          `;
          cardContainer.innerHTML += cardHTML;
        });
  
        // Populate Footer Links (Optional)
        const footerLinks = document.getElementById("footer-links");
        data.footerLinks.forEach(link => {
          const linkHTML = `<a href="${link.url}" class="text-white me-3">${link.text}</a>`;
          footerLinks.innerHTML += linkHTML;
        });
      })
      .catch(error => console.error("Error loading JSON:", error));
  });