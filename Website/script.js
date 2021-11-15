function change_slide(){
    //Variables p1 and p2 are assigned the ID of paragraphs
    var p1 = document.getElementById("para1");
    var p2 = document.getElementById("para2");

    //Displays p1 if p2 is being displayed and vice versa
    if(p1.style.display === "none"){
        p1.style.display = "block";
        p2.style.display = "none";
    }
    else{
        p1.style.display = "none";
        p2.style.display = "block";
    }
}
//Displays the first paragraph (p1)
document.getElementById ("para1").style.display = "block";