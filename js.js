const billValue = document.querySelector('#bill-value');
const btn = document.getElementsByClassName('btn-percentagem');
const numberOfPeople = document.querySelector('#number-of-people');
const tipAmountText = document.querySelector('#tip-amount-text');
const totalPorPerson = document.querySelector('#total-person-text');
const valorCustomizado = document.querySelector('#valor-Customizado');

for (let index = 0; index < btn.length; index += 1) {
  btn[index].addEventListener('click', () => {  
    if (Number(numberOfPeople.value) === 0 || typeof Number(numberOfPeople.value) !== 'number') {
       return alert('O número de pessoas não pode ser zero!');
    }
    const tip = parseFloat(billValue.value) * (parseFloat(btn[index].value));
    const tipAmount = tip / parseFloat(numberOfPeople.value);
        tipAmountText.innerText = `$${tipAmount.toFixed(2)}`;
    });
};

//Resetando todos os dados
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    billValue.value = 0;
    numberOfPeople.value = 0;
    tipAmountText.innerText = '$0.00';
    totalPorPerson.innerText = '$0.00';
    valorCustomizado.value = 'Custom';
});
