const INTERVAL_TIME = 10000;

const A_randomNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 51) - 10);

const buildMessageNode = (content) => {
    if (typeof content !== 'string') throw new Error('Only a string should be passed to this function');

    const E_result = document.createElement('p');
    E_result.classList.add('message');
    E_result.textContent = content;
    E_result.role = 'alert';
    E_result.ariaLive = 'polite';
    return E_result;
}

function main() {
    let I_counter = -1;

    const E_jsValue = document.querySelector('#jsValue');

    const updateInterval = setInterval(() => {
        I_counter++;
        const S_value = A_randomNumbers[I_counter].toString();
        updateDOM(E_jsValue, S_value);
        if (I_counter >= A_randomNumbers.length - 1) clearInterval(updateInterval);
    }, INTERVAL_TIME);

    const updateDOM = (O_node, S_value) => {
        // Remove all existing message nodes (in case there are any)
        const A_messageNodes = document.querySelectorAll('.message');
        A_messageNodes.forEach((e) => e.remove());

        O_node.textContent = S_value;
        const I_numericValue = Number.parseInt(S_value);

        // Clear classes from the value node, for a fresh start
        O_node.classList.remove('border-red', 'border-blue', 'border-green', 'border-orange');

        // Assert all conditions and update the DOM accordingly
        if (I_numericValue >= 31 && I_numericValue <= 40) {
            E_jsValue.parentElement.before(buildMessageNode('Caliente ! Vamos a la playa, ho hoho hoho !!'));
            O_node.classList.add('border-red');
        } else if (I_numericValue >= 1 && I_numericValue <= 20) O_node.classList.add('border-green');
        else if (I_numericValue >= 21 && I_numericValue <= 30) O_node.classList.add('border-orange');
        else if (I_numericValue >= -10 && I_numericValue <= 0) {
            E_jsValue.parentElement.before(buildMessageNode('Brrrrrrr, un peu froid ce matin, mets ta cagoule !'));
            O_node.classList.add('border-blue');
        }
    };
}

main();