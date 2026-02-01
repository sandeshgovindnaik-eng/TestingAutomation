// Fetch QA data from backend
fetch('/api/questions')
    .then(res => res.json())
    .then(data => renderQA(data))
    .catch(err => console.error('Error fetching QA:', err));

function renderQA(qaList) {
    const container = document.getElementById('qa-container');
    container.innerHTML = '';

    qaList.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'accordion-item mb-2';

        card.innerHTML = `
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
          ${item.question} <span class="badge badge-category">${item.category}</span>
        </button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#qa-container">
        <div class="accordion-body">
          ${item.answer.replace(/\n/g, '<br>')}
        </div>
      </div>
    `;

        container.appendChild(card);
    });
}
