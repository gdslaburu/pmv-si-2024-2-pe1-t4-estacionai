// Array para armazenar os estacionamentos
let estacionamentos = [
    {
        id: 1,
        title: 'Estacionamento 1',
        address: 'Rua A, 123',
        priceHourly: '',
        priceDaily: '10',
        priceMonthly: '',
        size: 15,
        vagas: 5,
        ocupadas: 3,
        image: 'images/ImagemEstacionamento.png',
        status: 'Ativo',
        hoursType: '24',
        openTime: '',
        closeTime: ''
    },
    {
        id: 2,
        title: 'Estacionamento 2',
        address: 'Rua B, 456',
        priceHourly: '15',
        priceDaily: '',
        priceMonthly: '',
        size: 20,
        vagas: 10,
        ocupadas: 0, // nova propriedade
        image: 'images/ImagemEstacionamento.png',
        status: 'Ativo',
        hoursType: 'specific',
        openTime: '08:00',
        closeTime: '20:00'
    },
    {
        id: 3,
        title: 'Estacionamento 3',
        address: 'Rua C, 789',
        priceHourly: '12',
        priceDaily: '250',
        priceMonthly: '',
        size: 25,
        vagas: 15,
        ocupadas: 5, // exemplo de vagas ocupadas
        image: 'images/ImagemEstacionamento.png',
        status: 'Inativo',
        hoursType: '24',
        openTime: '',
        closeTime: ''
    }
];

// Função para renderizar os estacionamentos na lista
function renderEstacionamentos() {
    const estacionamentoList = document.getElementById('estacionamentoList');
    estacionamentoList.innerHTML = ''; // Limpar lista antes de renderizar

    if (estacionamentos.length === 0) {
        const noEstacionamentosMessage = document.createElement('div');
        noEstacionamentosMessage.className = 'alert alert-info text-center';
        noEstacionamentosMessage.textContent = 'Você Não Possui Estacionamentos';
        estacionamentoList.appendChild(noEstacionamentosMessage);
        return;
    }

    estacionamentos.forEach(estacionamento => {
        const newEstacionamentoItem = document.createElement('div');
        newEstacionamentoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        newEstacionamentoItem.innerHTML = `
            <div>
                <h5>${estacionamento.title}</h5>
                <p><strong>Endereço:</strong> ${estacionamento.address}</p>
                <p><strong>Preço:</strong> ${estacionamento.priceHourly ? `R$${estacionamento.priceHourly}/Hora` : ''} ${estacionamento.priceDaily ? `R$${estacionamento.priceDaily}/Dia` : ''}</p>
                <p><strong>Tamanho das Vagas:</strong> ${estacionamento.size} m²</p>
                <p><strong>Número de Vagas:</strong> ${estacionamento.vagas}</p>
                <p><strong>Número de Vagas Livres:</strong> ${estacionamento.vagas - estacionamento.ocupadas}</p>
                <p><strong>Status de Funcionamento:</strong> <span class="status">${estacionamento.status}</span></p>
                <p><strong>Horário de Funcionamento:</strong> ${estacionamento.hoursType === '24' ? '24 Horas' : `${estacionamento.openTime} - ${estacionamento.closeTime}`}</p>
            </div>
            <div>
                <button class="btn btn-primary me-2" onclick="openEditModal(${estacionamento.id})">Editar</button>
                <button class="btn btn-primary me-2" onclick="toggleStatus(${estacionamento.id})">${estacionamento.status === 'Ativo' ? 'Desativar' : 'Ativar'}</button>
                <button class="btn btn-primary" onclick="confirmDelete(${estacionamento.id})">Excluir</button>
            </div>
        `;
        estacionamentoList.appendChild(newEstacionamentoItem);
    });
}

// Chama a função para renderizar os estacionamentos na inicialização
document.addEventListener('DOMContentLoaded', renderEstacionamentos);

function openAddModal() {
    document.getElementById('addEstacionamentoForm').reset();
    toggleHourInputs(); // Resetar a exibição dos campos de horário
    const addEstacionamentoModal = new bootstrap.Modal(document.getElementById('addEstacionamentoModal'));
    addEstacionamentoModal.show();
}

function openEditModal(estacionamentoId) {
    const estacionamento = estacionamentos.find(e => e.id === estacionamentoId);
    document.getElementById('editEstacionamentoTitle').value = estacionamento.title;
    document.getElementById('editEstacionamentoAddress').value = estacionamento.address;
    document.getElementById('editPriceHourlyInput').value = estacionamento.priceHourly;
    document.getElementById('editPriceDailyInput').value = estacionamento.priceDaily;
    document.getElementById('editPriceMonthlyInput').value = estacionamento.priceMonthly;
    document.getElementById('editEstacionamentoSize').value = estacionamento.size;
    document.getElementById('editEstacionamentoVagas').value = estacionamento.vagas;
    document.getElementById('editEstacionamentoHoursType').value = estacionamento.hoursType;
    document.getElementById('editEstacionamentoOpenTime').value = estacionamento.openTime;
    document.getElementById('editEstacionamentoCloseTime').value = estacionamento.closeTime;

    // Exibir a imagem atual
    const imageElement = document.querySelector('#editEstacionamentoModal img');
    imageElement.src = estacionamento.image;

    toggleEditHourInputs(); // Resetar a exibição dos campos de horário
    const editEstacionamentoModal = new bootstrap.Modal(document.getElementById('editEstacionamentoModal'));
    editEstacionamentoModal.show();
}

function toggleHourInputs() {
    const hoursType = document.getElementById('estacionamentoHoursType').value;
    document.getElementById('specificHours').style.display = hoursType === 'specific' ? 'block' : 'none';
}

function toggleEditHourInputs() {
    const hoursType = document.getElementById('editEstacionamentoHoursType').value;
    document.getElementById('editSpecificHours').style.display = hoursType === 'specific' ? 'block' : 'none';
}

function addEstacionamento() {
    const newEstacionamento = {
        id: estacionamentos.length ? estacionamentos[estacionamentos.length - 1].id + 1 : 1,
        title: document.getElementById('estacionamentoTitle').value,
        address: document.getElementById('estacionamentoAddress').value,
        priceHourly: document.getElementById('priceHourly').checked ? document.getElementById('estacionamentoPriceHourly').value : '',
        priceDaily: document.getElementById('priceDaily').checked ? document.getElementById('estacionamentoPriceDaily').value : '',
        priceMonthly: document.getElementById('priceMonthly').checked ? document.getElementById('estacionamentoPriceMonthly').value : '',
        size: document.getElementById('estacionamentoSize').value,
        vagas: document.getElementById('estacionamentoVagas').value,
        ocupadas: 0, // inicializa como 0
        image: document.getElementById('estacionamentoImage').files[0] ? URL.createObjectURL(document.getElementById('estacionamentoImage').files[0]) : 'images/ImagemEstacionamento.png',
        status: 'Ativo',
        hoursType: document.getElementById('estacionamentoHoursType').value,
        openTime: document.getElementById('estacionamentoOpenTime').value,
        closeTime: document.getElementById('estacionamentoCloseTime').value
    };

    estacionamentos.push(newEstacionamento);
    renderEstacionamentos();
    const addEstacionamentoModal = bootstrap.Modal.getInstance(document.getElementById('addEstacionamentoModal'));
    addEstacionamentoModal.hide();
}

function updateEstacionamento() {
    const estacionamentoId = estacionamentos.findIndex(e => e.title === document.getElementById('editEstacionamentoTitle').value);
    if (estacionamentoId !== -1) {
        estacionamentos[estacionamentoId] = {
            id: estacionamentos[estacionamentoId].id,
            title: document.getElementById('editEstacionamentoTitle').value,
            address: document.getElementById('editEstacionamentoAddress').value,
            priceHourly: document.getElementById('editPriceHourlyInput').value,
            priceDaily: document.getElementById('editPriceDailyInput').value,
            priceMonthly: document.getElementById('editPriceMonthlyInput').value,
            size: document.getElementById('editEstacionamentoSize').value,
            vagas: document.getElementById('editEstacionamentoVagas').value,
            ocupadas: estacionamentos[estacionamentoId].ocupadas, // mantém o número de vagas ocupadas
            image: document.getElementById('editEstacionamentoImage').files[0] ? URL.createObjectURL(document.getElementById('editEstacionamentoImage').files[0]) : estacionamentos[estacionamentoId].image,
            status: estacionamentos[estacionamentoId].status,
            hoursType: document.getElementById('editEstacionamentoHoursType').value,
            openTime: document.getElementById('editEstacionamentoOpenTime').value,
            closeTime: document.getElementById('editEstacionamentoCloseTime').value
        };

        renderEstacionamentos();
        const editEstacionamentoModal = bootstrap.Modal.getInstance(document.getElementById('editEstacionamentoModal'));
        editEstacionamentoModal.hide();
    }
}

function toggleStatus(estacionamentoId) {
    const estacionamento = estacionamentos.find(e => e.id === estacionamentoId);
    estacionamento.status = estacionamento.status === 'Ativo' ? 'Inativo' : 'Ativo';
    renderEstacionamentos();
}

function confirmDelete(estacionamentoId) {
    const confirmDeleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    confirmDeleteModal.show();

    document.getElementById('confirmDeleteButton').onclick = function() {
        deleteEstacionamento(estacionamentoId);
        confirmDeleteModal.hide();
    };
}

function deleteEstacionamento(estacionamentoId) {
    estacionamentos = estacionamentos.filter(e => e.id !== estacionamentoId);
    renderEstacionamentos();
}
