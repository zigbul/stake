const body = document.querySelector('body');
const amount = document.querySelector('.amount');
const input = document.querySelector('input');
const button = document.querySelector('button');
const sum = document.querySelector('#sum');
const table = document.querySelector('table');
const select = document.querySelector('select');

function addCoin(e) {
    if (e.keyCode === 68) {
        amount.innerText = +amount.innerText + 1;
    }
}

function addToStake() {
    if (input.value === '') {
        alert('Сначала введите кол-во монет для добавления в стейк');
    } else if (+input.value > +amount.innerText) {
        alert('Недостаточно монет');
    } else {
        alert(`В стейк добавлено ${input.value} монет`);
        sum.innerText = +sum.innerText + +input.value;
        input.value = '';
    }
}

function addRow() {
    const tableRow = document.createElement('tr');

    if (input.value === '') {
        alert('Сначала введите кол-во монет для добавления в стейк');
        return;

    } else if (+input.value > +amount.innerText) {
        alert('Недостаточно монет');
        return;

    } else {
        // for (let i = 0; i < 4; i++) {
        //     const tableData = document.createElement('td');
        
        //     if (i === 0) {
        //             alert(`В стейк добавлено ${input.value} монет`);
        //             tableData.innerText = input.value;
        //             amount.innerText = +amount.innerText - +input.value;
        //             input.value = '';
        //     }
        
        //     if (i === 1) {
        //         tableData.innerText = `${select.value}d`;
        //     }
        
        //     if (i === 2) {
        //         setInterval(() => {
        //             tableData.innerText = `${+select.value - 1}d`;
        //         }, 10)
        //     }
        
        //     if (i === 3) {
        //         tableData.innerText = 0;
        //     }
            
        //     tableRow.append(tableData);
        // }
        tableRow.append(document.createElement('td').innerText = input.value);
        amount.innerText = +amount.innerText - +input.value;
        input.value = '';
        tableRow.append(document.createElement('td').innerText = `${select.value}d`);
        tableRow.append(document.createElement('td').innerText = `${select.value}d`);
    }
    
    table.append(tableRow);
}

body.addEventListener('keydown', addCoin);
button.addEventListener('click', addRow);