const billValue = document.querySelector('#bill-value');
const btnQuinze = document.querySelector('#btn-15');
const numberOfPeople = document.querySelector('#number-of-people');
const tipAmountText = document.querySelector('#tip-amount-text');

btnQuinze.addEventListener('click', () => {
    console.log(Number(numberOfPeople.value) === 0);
    if (Number(numberOfPeople.value) === 0 || typeof Number(numberOfPeople.value) !== 'number') {
        return alert('O número de pessoas não pode ser zero!');
    }
    const tip = Number(billValue.value) * (15/100);
    const tipAmount = tip / Number(numberOfPeople.value);
    tipAmountText.innerText = `$${tipAmount.toFixed(2)}`;
});