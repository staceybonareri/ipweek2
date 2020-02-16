function getName(){
    var name = document.getElementById("name").value;
    var date = new Date(document.getElementById("dateofbirth").value).getDay();
    var gender = document.getElementById("gender").checked;
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"][date];

    var FakanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var MakanNames = ["Kwasi","Kwadwo", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    if(date && name && gender !== null){
        if(gender == true){
        var names = ["Kwasi","Kwadwo", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var akanName = names[date];

        //section for male

        }else{
        var names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
            var akanName = names[date];

        //section for female

        }
        alert("Hello " + name + ", Your Akan Name is " + akanName + ", and your birth day was on " + days);
    }
    else{
        alert("You Must Fill All the required Fields");
    }
}