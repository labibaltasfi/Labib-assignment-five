
// heart Button 

const heartButtons = document.getElementsByClassName('add-heart-btn')

for (const heartButton of heartButtons) {
    heartButton.addEventListener('click', function () {
        let heartCount = parseInt(document.getElementById('heart-count').innerText);
        heartCount++;
        document.getElementById('heart-count').innerText = heartCount;
    })
}



// copy Button 

const copyButtons = document.getElementsByClassName('copy-btn')

for (const copyButton of copyButtons) {
    copyButton.addEventListener('click', function () {
        const phoneNumber = copyButton.parentNode.parentNode.children[1].children[2].innerText
        navigator.clipboard.writeText(phoneNumber);
        alert('Number copied: ' + phoneNumber);
        let copyCount = parseInt(document.getElementById('count-copy').innerText);
        copyCount++;
        document.getElementById('count-copy').innerText = copyCount;
    })
}



// call button 


const callButtons = document.getElementsByClassName('call-btn')

for (let callButton of callButtons) {
    callButton.addEventListener('click', function () {
        const cardTitle = callButton.parentNode.parentNode.children[1].children[0].innerText;
        const cardSubTitle = callButton.parentNode.parentNode.children[1].children[1].innerText;
        const phoneNumber = callButton.parentNode.parentNode.children[1].children[2].innerText;
        const date = new Date().toLocaleTimeString();
        let coinCount = parseInt(document.getElementById('coin-count').innerText);
        coinCount = coinCount - 20;
        const historyContainer = document.getElementById('history-container');
        const usesHistory = document.createElement('div');
        usesHistory.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] rounded-md p-3 mt-3">
                <div>
                    <h1 id="history-title" class="text-[18px] font-bold">${cardTitle}</h1>
                    <p id="history-number" class="text-[#5C5C5C]">${phoneNumber}</p>
                </div>
                <div>
                    <p id="date">${date}</p>
                </div>
            </div>
    `;
        if (coinCount >= 0) {
            document.getElementById('coin-count').innerText = coinCount;
            alert(`📞 Calling ${cardSubTitle} ${phoneNumber}...`);
            historyContainer.append(usesHistory);
        }
        else {
            alert("❌ You don't have enough coins. You need at least 20 coins to make a call.")
        }
    })
}





