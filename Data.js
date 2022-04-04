function checkData() {
    var Data = document.getElementById("Data").value;
    var regex = /https:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11}).*/gi;

    if (regex.test(Data)) { // if testing of first is true
        document.getElementById("Data_Check").style.color = "green";
        document.getElementById("Data_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("Data_Check").style.color = "red";
        document.getElementById("Data_Check").innerHTML = "Некорректная ссылка";
    }
}
