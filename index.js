const submitBtn = document.getElementById('submit')
const runInput = document.getElementById('run')
const pullUpInput = document.getElementById('pullup-amount')
const hangInput = document.getElementById('hang-time')
const weightInput = document.getElementById('weight')
let runEntries = JSON.parse(localStorage.getItem('run')) || []
let pullupEntries = JSON.parse(localStorage.getItem('pullup')) || []
let hangEntries = JSON.parse(localStorage.getItem('hang')) || []
let weightEntries = JSON.parse(localStorage.getItem('weight')) || []
let today = new Date().toLocaleDateString()
let differenceWeight = JSON.parse(localStorage.getItem('weight-difference')) || []
let differenceRun = JSON.parse(localStorage.getItem('run-difference')) || []
let differenceHang = JSON.parse(localStorage.getItem('hang-difference')) || []
let differencePullup = JSON.parse(localStorage.getItem('pullup-difference')) || []
let times = 5

console.log(runEntries)
console.log(differenceRun)

  for (i = 0; i < times; i++){
    renderTable('run-table', runEntries, differenceRun)
    renderTable('pullup-table', pullupEntries, differencePullup)
    renderTable('hang-table', hangEntries, differenceHang)
    renderTable('weight-table', weightEntries, differenceWeight)
  }


submitBtn.addEventListener('click', function(){
    renderRun()
    renderPullup()
    renderHang()
    renderWeight()
})

//Check difference between last 2 entries

function checkDifference(array, differenceArray, diffStorage, arrayName) {

    
    let num1 = array.at(-1)
    let num2 = array.at(-2)
    let sum = num1 - num2

        differenceArray.push(sum)
        localStorage.setItem(arrayName, JSON.stringify(array))
        localStorage.setItem(diffStorage, JSON.stringify(differenceArray))

}

//Render Table + Values to the page
function renderTable(element, entries, difference) {
    const tableEl = document.getElementById(element)
    tableEl.innerHTML = ''

            for (let i = 0; i < entries.length; i++){

        if (entries.length > 5) {
            entries.shift()
            difference.shift()
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
        checkDifference(runEntries, differenceRun, 'run-difference', 'run')
        renderTable('run-table', runEntries, differenceRun)
}


function renderPullup() {
    pullupEntries.push(pullUpInput.value)
    checkDifference(pullupEntries, differencePullup, 'pullup-difference', 'pullup')
    renderTable('pullup-table', pullupEntries, differencePullup)
}


function renderHang() {
    hangEntries.push(hangInput.value)
    checkDifference(hangEntries, differenceHang, 'hang-difference', 'hang')
    renderTable('hang-table', hangEntries, differenceHang)
}


function renderWeight() {
    weightEntries.push(weightInput.value)
    checkDifference(weightEntries, differenceWeight, 'weight-difference', 'weight')
    renderTable ('weight-table', weightEntries, differenceWeight)  
}