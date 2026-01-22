const A_randomNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 51) - 10);

function main() {
    let I_counter = -1;

    const E_jsValue = document.querySelector('#jsValue');
    const E_message = document.querySelector('#message');

    const updateInterval = setInterval(() => {
        I_counter++;
        const S_value = A_randomNumbers[I_counter].toString();
        updateDOM(E_jsValue, E_message, S_value);
        if (I_counter >= A_randomNumbers.length - 1) clearInterval(updateInterval);
    }, 1000);

    const updateDOM = (O_node, O_messageNode, S_value) => {
        O_node.textContent = S_value;
        const I_numericValue = Number.parseInt(S_value);

        O_node.classList.remove('border-red', 'border-blue', 'border-green', 'border-orange');

        O_messageNode.textContent = '';

        if (I_numericValue >= 31 && I_numericValue <= 40) {
            O_messageNode.textContent = 'Caliente ! Vamos a la playa, ho hoho hoho !!';
            O_node.classList.add('border-red');
        } else if (I_numericValue >= 1 && I_numericValue <= 20) O_node.classList.add('border-green');
        else if (I_numericValue >= 21 && I_numericValue <= 30) O_node.classList.add('border-orange');
        else if (I_numericValue >= -10 && I_numericValue <= 0) {
            O_messageNode.textContent = 'Brrrrrrr, un peu froid ce matin, mets ta cagoule !';
            O_node.classList.add('border-blue');
        }
    };
}

window.onload = main;