document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("qa-accordion");
    const searchInput = document.getElementById("search");
    let questionsData = [];

    // Fetch QA.json dynamically
    fetch("/api/questions")
        .then(res => res.json())
        .then(data => {
            questionsData = data;
            renderQuestions(data);
        })
        .catch(err => {
            container.innerHTML = `<div class="alert alert-danger">Failed to load questions.</div>`;
            console.error(err);
        });

    function renderQuestions(data) {
        container.innerHTML = "";
        data.forEach((item, index) => {
            // Assign color class based on question index for variety
            const colors = ["primary", "success", "warning", "info", "danger"];
            const colorClass = colors[index % colors.length];

            const card = document.createElement("div");
            card.className = "accordion-item shadow-sm";

            card.innerHTML = `
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button collapsed text-${colorClass}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
            ${item.question}
            ${item.category ? `<span class="badge bg-${colorClass} ms-2">${item.category}</span>` : ""}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#qa-accordion">
          <div class="accordion-body">${item.answer}</div>
        </div>
      `;
            container.appendChild(card);
        });
    }

    // Search functionality
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filtered = questionsData.filter(q =>
            q.question.toLowerCase().includes(query) ||
            q.answer.toLowerCase().includes(query)
        );
        renderQuestions(filtered);
    });
});
