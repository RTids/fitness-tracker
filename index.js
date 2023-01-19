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
let differenceWeight = []
let differenceRun = []
let differenceHang = []
let differencePullup = []


submitBtn.addEventListener('click', function(){
    renderRun()
    renderPullup()
    renderHang()
    renderWeight()
})

//Check difference between last 2 entries
function checkDifference(array, differenceArray) {
    let num1 = array.at(-1)
    let num2 = array.at(-2)
    let sum = num1 - num2

    if (array.length <2){
        differenceArray.push("-----")
    } else
        differenceArray.push(sum)
}

//Render Table + Values to the page
function renderTable(element, entries, difference) {
    const tableEl = document.getElementById(element)
    tableEl.innerHTML = ''

            for (let i = 0; i < entries.length; i++){

        if (entries.length > 5) {
            entries.shift()
            tableEl.innerHTML += `
            <tr>
                        <td>${entries[i]}</td>
                        <td>${difference[i]}</td>
                        <td>${today}</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${entries[i]}</td>
                    <td>${difference[i]}</td>
                    <td>${today}</td>
                </tr>
        `
        }
    }
}

function renderRun() {
        runEntries.push(runInput.value)
        checkDifference(runEntries, differenceRun)
        renderTable('run-table', runEntries, differenceRun)
}


function renderPullup() {
    pullupEntries.push(pullUpInput.value)
    checkDifference(pullupEntries, differencePullup)
    renderTable('pullup-table', pullupEntries, differencePullup)
}


function renderHang() {
    hangEntries.push(hangInput.value)
    checkDifference(hangEntries, differenceHang)
    renderTable('hang-table', hangEntries, differenceHang)
}


function renderWeight() {
    weightEntries.push(weightInput.value)
    checkDifference(weightEntries, differenceWeight)
    renderTable ('weight-table', weightEntries, differenceWeight)  
}