let contentData = [];

fetch('/api/content')
    .then(res => res.json())
    .then(data => {
        contentData = data;
        populateSections();
        renderSections(contentData);
    });

function populateSections() {
    const select = document.getElementById('categoryFilter');
    const sections = [...new Set(contentData.map(c => c.section))];
    sections.forEach(sec => {
        const option = document.createElement('option');
        option.value = sec;
        option.textContent = sec;
        select.appendChild(option);
    });
}

function renderSections(list) {
    const container = document.getElementById('sections-container');
    container.innerHTML = '';

    const sections = [...new Set(list.map(c => c.section))];

    sections.forEach(section => {
        const cards = list.filter(c => c.section === section);

        const sectionHTML = document.createElement('div');
        sectionHTML.className = 'mb-5';
        sectionHTML.innerHTML = `<h3 class="mb-3">${section}</h3><div class="row" id="row-${section}"></div>`;
        container.appendChild(sectionHTML);

        const row = document.getElementById(`row-${section}`);

        cards.forEach(item => {
            const card = document.createElement('div');
            card.className = 'col-md-4 mb-4';
            card.setAttribute('data-aos', 'fade-up');
            card.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text text-truncate">${item.description}</p>
                        <a href="details.html?id=${item.id}" class="mt-auto btn btn-primary">Read More</a>
                    </div>
                </div>
            `;
            row.appendChild(card);
            gsap.from(card, {opacity:0, y:50, duration:0.5, delay: Math.random()*0.5});
        });
    });
}

document.getElementById('searchBox').addEventListener('input', filterContent);
document.getElementById('categoryFilter').addEventListener('change', filterContent);

function filterContent() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const section = document.getElementById('categoryFilter').value;

    const filtered = contentData.filter(c => {
        const matchSection = section ? c.section === section : true;
        const matchSearch = c.title.toLowerCase().includes(searchTerm) || c.description.toLowerCase().includes(searchTerm);
        return matchSection && matchSearch;
    });

    renderSections(filtered);
}
