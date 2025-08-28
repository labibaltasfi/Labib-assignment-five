

// add heart feature 


document.getElementsByClassName('add-heart-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()
        console.log('click')
        let heartCount = parseInt(document.getElementById('heart-count').innerText);
        heartCount++;
        document.getElementById('heart-count').innerText = heartCount;

        console.log(heartCount)

    })

// call-btn, copy-btn, get-number
// navigator.clipboard.writeText(var)