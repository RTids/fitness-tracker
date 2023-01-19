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

    runEntries.push(runInput.value)
    pullupEntries.push(pullUpInput.value)
    hangEntries.push(hangInput.value)
    weightEntries.push(weightInput.value)

    renderRun()
    renderPullup()
    renderHang()
    renderWeight()

})

function checkDifference(array, differenceArray) {
    let num1 = array.at(-1)
    let num2 = array.at(-2)
    let sum = num1 - num2

    if (array.length <2){
        differenceArray.push("-----")
    } else
        differenceArray.push(sum)
}


function renderRun() {
    const tableEl = document.getElementById('run-table')
    tableEl.innerHTML = ''

        checkDifference(runEntries, differenceRun)

            for (let i = 0; i < runEntries.length; i++){

        if (runEntries.length > 5) {
            runEntries.shift()
            tableEl.innerHTML += `
            <tr>
                        <td>${runEntries[i]}</td>
                        <td>${differenceRun[i]}</td>
                        <td>${today}</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${runEntries[i]}</td>
                    <td>${differenceRun[i]}</td>
                    <td>${today}</td>
                </tr>
        `
        }
    }
}


function renderPullup() {
    const tableEl = document.getElementById('pullup-table')
    tableEl.innerHTML = ''
    
    checkDifference(pullupEntries, differencePullup)

        for (let i = 0; i < pullupEntries.length; i++){

        if (pullupEntries.length > 5) {
            pullupEntries.shift()
            tableEl.innerHTML += `
            <tr>
                        <td>${pullupEntries[i]}</td>
                        <td>${differencePullup[i]}</td>
                        <td>${today}</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${pullupEntries[i]}</td>
                    <td>${differencePullup[i]}</td>
                    <td>${today}</td>
                </tr>
        `
        }
    }
    
}


function renderHang() {
    const tableEl = document.getElementById('hang-table')
    tableEl.innerHTML = ''

    checkDifference(hangEntries, differenceHang)

    for (let i = 0; i < hangEntries.length; i++){


        if (hangEntries.length > 5) {
            hangEntries.shift()
            tableEl.innerHTML += `
            <tr>
                        <td>${hangEntries[i]}</td>
                        <td>${differenceHang[i]}</td>
                        <td>${today}</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${hangEntries[i]}</td>
                    <td>${differenceHang[i]}</td>
                    <td>${today}</td>
                </tr>
        `
        }
    }
    
}


function renderWeight() {
    const tableEl = document.getElementById('weight-table')
    tableEl.innerHTML = ''
    
    checkDifference(weightEntries, differenceWeight)


    for (let i = 0; i < weightEntries.length; i++){


        if (weightEntries.length > 5) {
            weightEntries.shift()
            tableEl.innerHTML += `
            <tr>
                        <td>${weightEntries[i]}</td>
                        <td>${differenceWeight[i]}</td>
                        <td>${today}</td>
                    </tr>
            `
        } else {
        tableEl.innerHTML += `
        <tr>
                    <td>${weightEntries[i]}</td>
                    <td>${differenceWeight[i]}</td>
                    <td>${today}</td>
                </tr>
        `
        }

    }
    
}