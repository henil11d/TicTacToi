var c = 1;
function fil(elem) {
    if (c <= 9) {
        if (c % 2 != 0) {
            document.getElementById(elem.id).innerHTML = "X";
            d = 0;
        }
        else {
            document.getElementById(elem.id).innerHTML = "O";
            d = 1;
        }
        c++;
        if (CkeckWin()) {
            if (d == 0) {
                alert("win X");
            }else{
                alert("win O");
            }
            reset();
        }
    } else {
        alert("Match is Draw");
        reset();
    }
}
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("d" + i).innerHTML = "";
    }
    c = 1;
}

function CkeckWin() {
    if (didvalue('d1', 'd2', 'd3') || didvalue('d1', 'd5', 'd9') || didvalue('d7', 'd8', 'd9') || didvalue('d1', 'd4', 'd7') ||
        didvalue('d3', 'd6', 'd9') || didvalue('d3', 'd5', 'd7') || didvalue('d4', 'd5', 'd6') || didvalue('d2', 'd5', 'd8')) {
        return true;
    }
}
function didvalue(id1, id2, id3) {
    if (getData(id1) != "" && getData(id2) != "" && getData(id3) != "" &&
        getData(id1) == getData(id2) && getData(id2) == getData(id3)) {
        return true;
    }
}
function getData(Did) {
    return document.getElementById(Did).innerHTML;
}