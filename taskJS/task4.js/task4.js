function FnClick(){
    let nameber = document.getElementById("numeber_input").value;
    console.log(nameber);

    switch(nameber){
        case '1':
            document.getElementById("txtH5").innerHTML = "Қыс";
        break;
    
        case '2':
            document.getElementById("txtH5").innerHTML = "Көктем";
        break;
    
        case '3':
            document.getElementById("txtH5").innerHTML = "Жаз";
        break;
    
        case '4':
            document.getElementById("txtH5").innerHTML = "Күз";
        break;

        default:
            document.getElementById("txtH5").innerHTML = "1ден 4ке дейінгі бір санды еңгіз !!! ";
    }
}

