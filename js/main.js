function Bold(){
var Text=document.getElementById("textArea")
if (Text.style.fontWeight=="bold"){
    Text.style.fontWeight="normal";
}
else {Text.style.fontWeight="bold"};
}

function Italic(){
    var Text=document.getElementById("textArea")
    if (Text.style.fontStyle=="italic"){
        Text.style.fontStyle="normal";
    }
    else {Text.style.fontStyle="italic"};
    }

    function Underline(){
        var Text=document.getElementById("textArea")
        if (Text.style.textDecoration=="underline"){
            Text.style.textDecoration="none";
        }
        else {Text.style.textDecoration="underline"};
        }



function changeSize(){
    document.getElementById('textArea').style.fontSize=document.getElementById('selectSize').value
}

function changeFont(){
    document.getElementById('textArea').style.fontFamily=document.getElementById('selectFont').value
}