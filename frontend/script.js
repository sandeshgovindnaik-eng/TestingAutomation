async function loadQA() {
    try {
        const res = await fetch("/qa"); // fetch from Node backend
        const qaList = await res.json();

        const container = document.getElementById("qa-container");
        container.innerHTML = "";

        qaList.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("accordion-item");

            card.innerHTML = `
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse${index}"
                  aria-expanded="false"
                  aria-controls="collapse${index}">
            ${item.question}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse"
             aria-labelledby="heading${index}"
             data-bs-parent="#qa-container">
          <div class="accordion-body">
            ${item.answer}
          </div>
        </div>
      `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Failed to load Q&A:", error);
    }
}

window.addEventListener("DOMContentLoaded", loadQA);
