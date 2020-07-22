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
    document.getElementById("table").deleteRow(i)
}

function deleteAll() {
    var table = document.getElementById("table")
    table.innerHTML = ""
}