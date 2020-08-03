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

$(document).ready(function() {
    // your function, copied 100%
    function setIndex() {
        $("td.index").each(function(index) {
            $(this).text(++index);
        });
    }

    // set the index to begin with. Note the last three 
    // row indexes are actually empty in the sample HTML
    setIndex();

    // Move the click listener to the table. 
    $('table').on('click', '.delete-button', function() {
        // remove the tr...
        $(this).parents('tr').remove();
        //... and reset the index
        setIndex();
    })
})

function bestDivisor(n) {
    var arr = [];
    var k = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) arr.push(i);
    }
    arr.push(n);

    if (Math.max.apply(Math, arr) < 10) k = Math.max.apply(Math, arr);
    else {
        k = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (di(k) < di(arr[i])) {
                k = arr[i];
            }
        }
    }

    return k;

}

function di(a) {
    var sum = 0;
    while (a > 0) {
        sum += a % 10;
        a -= a % 10;
        a /= 10;
    }
    return Math.floor(sum);
}