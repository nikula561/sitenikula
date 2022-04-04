function checklast() {
    var last = document.getElementById("last").value;
    var regex = /^\d{6}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Почтовый индекс должен состоять из 6 цифр";
        return false;
    }
}



