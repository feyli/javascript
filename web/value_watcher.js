class ValueWatcher {
    constructor(intervalTime = 10000) {
        this.intervalTime = intervalTime;
        this.randomNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 51) - 10);
        this.history = [];
        this.counter = -1;
        this.intervalId = null;
        this.jsValueElement = null;
    }

    buildMessageNode(content) {
        if (typeof content !== 'string') throw new Error('Only a string should be passed to this function');

        const E_result = document.createElement('p');
        E_result.classList.add('message');
        E_result.textContent = content;
        E_result.role = 'alert';
        E_result.ariaLive = 'polite';
        return E_result;
    }

    updatePreviewTab(O_node, S_value) {
        // Remove all existing message nodes (in case there are any)
        const A_messageNodes = document.querySelectorAll('.message');
        A_messageNodes.forEach((e) => e.remove());

        O_node.textContent = S_value;
        const I_numericValue = Number.parseInt(S_value);

        // Clear classes from the value node, for a fresh start
        O_node.classList.remove('border-red', 'border-blue', 'border-green', 'border-orange');

        // Assert all conditions and update the DOM accordingly
        if (I_numericValue >= 31 && I_numericValue <= 40) {
            this.jsValueElement.parentElement.before(this.buildMessageNode('Caliente ! Vamos a la playa, ho hoho hoho !!'));
            O_node.classList.add('border-red');
        } else if (I_numericValue >= 1 && I_numericValue <= 20) O_node.classList.add('border-green');
        else if (I_numericValue >= 21 && I_numericValue <= 30) O_node.classList.add('border-orange');
        else if (I_numericValue >= -10 && I_numericValue <= 0) {
            this.jsValueElement.parentElement.before(this.buildMessageNode('Brrrrrrr, un peu froid ce matin, mets ta cagoule !'));
            O_node.classList.add('border-blue');
        }
    }

    updateHistoryTab() {
        const E_historyList = document.querySelector('.history-list');
        E_historyList.innerHTML = ''; // Clear existing history

        this.history.forEach((value, index) => {
            const E_listItem = document.createElement('li');
            E_listItem.textContent = `Value ${index + 1}: ${value}`;
            E_historyList.appendChild(E_listItem);
        });
    }

    start() {
        this.jsValueElement = document.querySelector('#jsValue');

        this.intervalId = setInterval(() => {
            this.counter++;
            const S_value = this.randomNumbers[this.counter].toString();
            this.history.push(S_value);
            this.updatePreviewTab(this.jsValueElement, S_value);
            this.updateHistoryTab();
            if (this.counter >= this.randomNumbers.length - 1) this.stop();
        }, this.intervalTime);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

export default ValueWatcher;