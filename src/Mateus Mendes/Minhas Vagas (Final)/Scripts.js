// Array para armazenar as vagas
let vagas = [
    {
        id: 1,
        title: 'Vaga 1',
        address: 'Rua A, 123',
        priceHourly: '',
        priceDaily: '10',
        priceMonthly: '',
        size: 15,
        status: 'Ativa',
        hoursType: '24',
        openTime: '',
        closeTime: ''
    },
    {
        id: 2,
        title: 'Vaga 2',
        address: 'Rua B, 456',
        priceHourly: '15',
        priceDaily: '',
        priceMonthly: '',
        size: 20,
        status: 'Ativa',
        hoursType: 'specific',
        openTime: '08:00',
        closeTime: '20:00'
    },
    {
        id: 3,
        title: 'Vaga 3',
        address: 'Rua C, 789',
        priceHourly: '12',
        priceDaily: '250',
        priceMonthly: '',
        size: 25,
        status: 'Inativa',
        hoursType: '24',
        openTime: '',
        closeTime: ''
    }
];

// Função para renderizar as vagas na lista
function renderVagas() {
    const vagaList = document.getElementById('vagaList');
    vagaList.innerHTML = ''; // Limpar lista antes de renderizar

    if (vagas.length === 0) {
        const noVagasMessage = document.createElement('div');
        noVagasMessage.className = 'alert alert-info text-center';
        noVagasMessage.textContent = 'Você Não Possui Vagas';
        vagaList.appendChild(noVagasMessage);
        return;
    }

    vagas.forEach(vaga => {
        const newVagaItem = document.createElement('div');
        newVagaItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        newVagaItem.innerHTML = `
            <div>
                <h5>${vaga.title}</h5>
                <p><strong>Endereço:</strong> ${vaga.address}</p>
                <p><strong>Preço:</strong> ${vaga.priceHourly ? `R$${vaga.priceHourly}/Hora` : ''} ${vaga.priceDaily ? `R$${vaga.priceDaily}/Dia` : ''}</p>
                <p><strong>Tamanho:</strong> ${vaga.size} m²</p>
                <p><strong>Status de Ocupação:</strong> Vago</p>
                <p><strong>Status de Funcionamento:</strong> <span class="status">${vaga.status}</span></p>
                <p><strong>Horário de Funcionamento:</strong> ${vaga.hoursType === '24' ? '24 Horas' : `${vaga.openTime} - ${vaga.closeTime}`}</p>
            </div>
            <div>
                <button class="btn btn-primary me-2" onclick="openEditModal(${vaga.id})">Editar</button>
                <button class="btn btn-primary me-2" onclick="toggleStatus(${vaga.id})">${vaga.status === 'Ativa' ? 'Desativar' : 'Ativar'}</button>
                <button class="btn btn-primary" onclick="confirmDelete(${vaga.id})">Excluir</button>
            </div>
        `;
        vagaList.appendChild(newVagaItem);
    });
}

// Chama a função para renderizar as vagas na inicialização
document.addEventListener('DOMContentLoaded', renderVagas);

function openAddModal() {
    document.getElementById('addVagaForm').reset();
    toggleHourInputs(); // Resetar a exibição dos campos de horário
    const addVagaModal = new bootstrap.Modal(document.getElementById('addVagaModal'));
    addVagaModal.show();
}

function openEditModal(vagaId) {
    const vaga = vagas.find(v => v.id === vagaId);
    document.getElementById('editVagaTitle').value = vaga.title;
    document.getElementById('editVagaAddress').value = vaga.address;
    document.getElementById('editPriceHourlyInput').value = vaga.priceHourly;
    document.getElementById('editPriceDailyInput').value = vaga.priceDaily;
    document.getElementById('editPriceMonthlyInput').value = vaga.priceMonthly;
    document.getElementById('editVagaSize').value = vaga.size;
    document.getElementById('editVagaHoursType').value = vaga.hoursType;
    document.getElementById('editVagaOpenTime').value = vaga.openTime;
    document.getElementById('editVagaCloseTime').value = vaga.closeTime;

    toggleEditHourInputs(); // Mostrar ou ocultar campos específicos
    const editVagaModal = new bootstrap.Modal(document.getElementById('editVagaModal'));
    editVagaModal.show();
}

function addVaga() {
    const title = document.getElementById('vagaTitle').value;
    const address = document.getElementById('vagaAddress').value;
    const priceHourly = document.getElementById('vagaPriceHourly').value;
    const priceDaily = document.getElementById('vagaPriceDaily').value;
    const priceMonthly = document.getElementById('vagaPriceMonthly').value;
    const size = document.getElementById('vagaSize').value;
    const hoursType = document.getElementById('vagaHoursType').value;
    const openTime = document.getElementById('vagaOpenTime').value;
    const closeTime = document.getElementById('vagaCloseTime').value;

    const newVaga = {
        id: vagas.length + 1, // Simples incremento, pode ser melhorado
        title,
        address,
        priceHourly,
        priceDaily,
        priceMonthly,
        size,
        status: 'Ativa',
        hoursType,
        openTime,
        closeTime
    };

    vagas.push(newVaga);
    renderVagas(); // Atualiza a lista
    const addVagaModal = bootstrap.Modal.getInstance(document.getElementById('addVagaModal'));
    addVagaModal.hide();
}

function updateVaga() {
    const vagaId = vagas.findIndex(v => v.id === parseInt(document.getElementById('editVagaTitle').dataset.id));
    if (vagaId < 0) return;

    const updatedVaga = {
        id: vagas[vagaId].id,
        title: document.getElementById('editVagaTitle').value,
        address: document.getElementById('editVagaAddress').value,
        priceHourly: document.getElementById('editPriceHourlyInput').value,
        priceDaily: document.getElementById('editPriceDailyInput').value,
        priceMonthly: document.getElementById('editPriceMonthlyInput').value,
        size: document.getElementById('editVagaSize').value,
        status: vagas[vagaId].status, // Mantém o status atual
        hoursType: document.getElementById('editVagaHoursType').value,
        openTime: document.getElementById('editVagaOpenTime').value,
        closeTime: document.getElementById('editVagaCloseTime').value
    };

    vagas[vagaId] = updatedVaga;
    renderVagas(); // Atualiza a lista
    const editVagaModal = bootstrap.Modal.getInstance(document.getElementById('editVagaModal'));
    editVagaModal.hide();
}

function toggleHourInputs() {
    const specificHours = document.getElementById('specificHours');
    specificHours.style.display = document.getElementById('vagaHoursType').value === 'specific' ? 'block' : 'none';
}

function toggleEditHourInputs() {
    const editSpecificHours = document.getElementById('editSpecificHours');
    editSpecificHours.style.display = document.getElementById('editVagaHoursType').value === 'specific' ? 'block' : 'none';
}

function toggleStatus(vagaId) {
    const vaga = vagas.find(v => v.id === vagaId);
    vaga.status = vaga.status === "Ativa" ? "Inativa" : "Ativa";
    renderVagas(); // Atualiza a lista
}

function confirmDelete(vagaId) {
    const confirmDeleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    confirmDeleteModal.show();

    document.getElementById('confirmDeleteButton').onclick = function() {
        deleteVaga(vagaId);
        confirmDeleteModal.hide();
    };
}

function deleteVaga(vagaId) {
    vagas = vagas.filter(v => v.id !== vagaId);
    renderVagas(); // Atualiza a lista
}
