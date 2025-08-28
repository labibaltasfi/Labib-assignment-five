

// add heart feature 

function heartCounts() {
    let heartCount = parseInt(document.getElementById('heart-count').innerText);
    heartCount++;
    document.getElementById('heart-count').innerText = heartCount;
}

document.getElementById('add-heart-btn1')
    .addEventListener('click', function (e) {
        e.preventDefault()
        heartCounts()
    })
document.getElementById('add-heart-btn2')
    .addEventListener('click', function (e) {
        e.preventDefault()
        heartCounts()
    })


// call-btn, copy-btn, get-number
// navigator.clipboard.writeText(var)

// copy button 

function copyCounts(id) {
    const copyText = document.getElementById(id).innerText;
    navigator.clipboard.writeText(copyText);
    alert('Number copied: ' + copyText);
    let copyCount = parseInt(document.getElementById('count-copy').innerText);
    copyCount++;
    document.getElementById('count-copy').innerText = copyCount;
}


document.getElementById('copy-btn1')
    .addEventListener('click', function () {
        copyCounts('get-number1')
    })

document.getElementById('copy-btn2')
    .addEventListener('click', function () {
        copyCounts('get-number2')
    })


// call button 

function coinCounts(id, number) {
    const cardTitle = document.getElementById(id).innerText;
    const phoneNumber = document.getElementById(number).innerText;

    let coinCount = parseInt(document.getElementById('coin-count').innerText);
    coinCount = coinCount - 20;
    if (coinCount >= 0) {
        document.getElementById('coin-count').innerText = coinCount;
        alert(`📞 Calling  ${cardTitle} ${phoneNumber}...`);
    }
    else {
        alert("❌ You don't have enough coins. You need at least 20 coins to make a call.")
    }
}


document.getElementById('call-button1')
    .addEventListener('click', function (e) {
        e.preventDefault()
        coinCounts('card-title1', 'get-number1')
    })

document.getElementById('call-button2')
    .addEventListener('click', function (e) {
        e.preventDefault()
        coinCounts('card-title2', 'get-number2')
    })




// call history 

