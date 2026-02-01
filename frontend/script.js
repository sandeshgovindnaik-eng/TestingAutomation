let qaData = [];

// Fetch QA data from backend
fetch('/api/questions')
    .then(res => res.json())
    .then(data => {
        qaData = data;
        populateCategories();
        renderQA(qaData);
    })
    .catch(err => console.error('Error fetching QA:', err));

// Render Q&A cards
function renderQA(list) {
    const container = document.getElementById('qa-container');
    container.innerHTML = '';

    if(list.length === 0) {
        container.innerHTML = `<p class="text-center text-muted">No questions found.</p>`;
        return;
    }

    list.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'accordion-item mb-3';

        card.innerHTML = `
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
          ${item.question} <span class="badge badge-category">${item.category}</span>
        </button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#qa-container">
        <div class="accordion-body">
          ${item.answer.replace(/\n/g, '<br>')}
          ${item.video ? `
            <div class="mt-3 video-container">
              <iframe src="${item.video}" title="Video" frameborder="0" allowfullscreen></iframe>
            </div>` : ''}
        </div>
      </div>
    `;

        container.appendChild(card);
    });
}

// Populate categories in filter dropdown
function populateCategories() {
    const select = document.getElementById('categoryFilter');
    const categories = [...new Set(qaData.map(q => q.category))];
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
}

// Search and filter
document.getElementById('searchBox').addEventListener('input', filterQA);
document.getElementById('categoryFilter').addEventListener('change', filterQA);

function filterQA() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filtered = qaData.filter(q => {
        const matchCategory = category ? q.category === category : true;
        const matchSearch = q.question.toLowerCase().includes(searchTerm) || q.answer.toLowerCase().includes(searchTerm);
        return matchCategory && matchSearch;
    });

    renderQA(filtered);
}
