function checkAll() {
    var parent = document.getElementsByClassName("parent_checkbox")[0]
    var child = document.getElementsByClassName("child_checkboxs")

    if (parent.checked === true) {
        Array.from(child).forEach(item => {
            item.checked = true
        })
    }
    if (parent.checked === false) {
        Array.from(child).forEach(item => {
            item.checked = false

        })
    }
}

function checkOne() {
    var parent = document.getElementsByClassName("parent_checkbox")[0]
    var child = document.getElementsByClassName("child_checkboxs")

    var flag = true
    Array.from(child).forEach(item => {
        if (item.checked === false) flag = false
    })
    if (flag === true) {
        parent.checked = true
    } else {
        parent.checked = false
    }

}

function deleteRow(index) {
    var i = index.parentNode.parentNode.rowIndex;
    var number = 1
    document.getElementById("table").deleteRow(i)
    var index = document.getElementsByClassName("index")
    Array.from(index).forEach(item => {
        item.innerHTML = number
        number++
    })

}

function deleteAll() {
    var table = document.getElementById("tbody")
    table.innerHTML = ""
}