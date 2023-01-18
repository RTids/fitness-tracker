const submitBtn = document.getElementById('submit')
const runInput = document.getElementById('run')
const pullUpInput = document.getElementById('pullup-amount')
const hangInput = document.getElementById('hang-time')
const weightInput = document.getElementById('weight')
let runEntries = []
let pullupEntries = []
let hangEntries = []
let weightEntries = []

submitBtn.addEventListener('click', function(){
    runEntries.push(runInput.value)
    pullupEntries.push(pullUpInput.value)
    hangEntries.push(pullUpInput.value)
    weightEntries.push(weightInput.value)

    renderRun()
    renderPullup()


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
                        <td>02/02/22</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${runEntries[i]}</td>
                    <td>32</td>
                    <td>02/02/22</td>
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
                        <td>02/02/22</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${pullupEntries[i]}</td>
                    <td>32</td>
                    <td>02/02/22</td>
                </tr>
        `
        }
    }
    
}