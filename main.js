const body = document.querySelector('body');
const amount = document.querySelector('.amount');
const input = document.querySelector('input');
const button = document.querySelector('button');
const table = document.querySelector('table');
const tableRow = document.querySelector('.row');
const select = document.querySelector('select');
const D_KEYCODE = 68;

function addCoin(e) {
    if (e.keyCode === D_KEYCODE) {
        amount.innerText = +amount.innerText + 1;
    }
}

function addRow() {
    if (input.value === '') {
        alert('Сначала введите кол-во монет для добавления в стейк');
        return;

    } else if (+input.value > +amount.innerText) {
        alert('Недостаточно монет');
        return;
        
    } else {
        let days = +select.value;
        let interest;
        let bonus = 0;
        const stakedCoins = +input.value;

        if (+select.value === 30) {
            interest = 20;
        } else if (+select.value === 60) {
            interest = 35;
        } else {
            interest = 50;
        }

        const row = tableRow.cloneNode(true);

        alert(`В стейк добавлено ${input.value} монет`);
        row.children[0].innerHTML = input.value;
        amount.innerText = +amount.innerText - +input.value;
        input.value = '';
        row.children[1].innerHTML = `${days}d`;
        row.children[2].innerHTML = `${days}d`;
        row.children[3].innerHTML = bonus;
        table.append(row);

        let timer = setInterval(update, 1000);
        
        function update() {
            row.children[2].innerHTML = `${days--}d`;
            bonus += +((Math.log10(stakedCoins) * interest).toFixed(4));
            row.children[3].innerHTML = `${bonus}`;
            if (days < 0) {
                clearInterval(timer);
                amount.innerText = (+amount.innerText + bonus).toFixed(4);
                row.remove();
            }
        }
    }
}

body.addEventListener('keydown', addCoin);
button.addEventListener('click', addRow);