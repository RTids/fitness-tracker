const submitBtn = document.getElementById('submit')
const runInput = document.getElementById('run')
const pullUpInput = document.getElementById('pullup-amount')
const hangInput = document.getElementById('hang-time')
const weightInput = document.getElementById('weight')
let runEntries = []
let pullupEntries = []
let hangEntries = []
let weightEntries = []
let today = new Date().toLocaleDateString()

console.log(today)

submitBtn.addEventListener('click', function(){
    runEntries.push(runInput.value)
    pullupEntries.push(pullUpInput.value)
    hangEntries.push(pullUpInput.value)
    weightEntries.push(weightInput.value)

    renderRun()
    renderPullup()
    renderHang()
    renderWeight()

})



function renderRun() {
    const tableEl = document.getElementById('run-table')
    tableEl.innerHTML = ''
    for (let i = 0; i < runEntries.length; i++){


        if (runEntries.length > 5) {
            runEntries.shift()
            tableEl.innerHTML += `
            <tr>
                        <td>${runEntries[i]}</td>
                        <td>32</td>
                        <td>${today}</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${runEntries[i]}</td>
                    <td>32</td>
                    <td>${today}</td>
                </tr>
        `
        }
    }
    
}


function renderPullup() {
    const tableEl = document.getElementById('pullup-table')
    tableEl.innerHTML = ''
    for (let i = 0; i < pullupEntries.length; i++){


        if (pullupEntries.length > 5) {
            pullupEntries.shift()
            tableEl.innerHTML += `
            <tr>
                        <td>${pullupEntries[i]}</td>
                        <td>32</td>
                        <td>${today}</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${pullupEntries[i]}</td>
                    <td>32</td>
                    <td>${today}</td>
                </tr>
        `
        }
    }
    
}


function renderHang() {
    const tableEl = document.getElementById('hang-table')
    tableEl.innerHTML = ''
    for (let i = 0; i < hangEntries.length; i++){


        if (hangEntries.length > 5) {
            hangEntries.shift()
            tableEl.innerHTML += `
            <tr>
                        <td>${hangEntries[i]}</td>
                        <td>32</td>
                        <td>${today}</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${hangEntries[i]}</td>
                    <td>32</td>
                    <td>${today}/td>
                </tr>
        `
        }
    }
    
}


function renderWeight() {
    const tableEl = document.getElementById('weight-table')
    tableEl.innerHTML = ''
    for (let i = 0; i < weightEntries.length; i++){


        if (weightEntries.length > 5) {
            weightEntries.shift()
            tableEl.innerHTML += `
            <tr>
                        <td>${weightEntries[i]}</td>
                        <td>32</td>
                        <td>${today}</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${weightEntries[i]}</td>
                    <td>32</td>
                    <td>${today}</td>
                </tr>
        `
        }
    }
    
}