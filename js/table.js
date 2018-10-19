function Add() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dateb = document.getElementById("date").value;

    var tabofUsers = JSON.parse(localStorage.getItem("tabofUsers"));//Retrieve the stored data 
    if (tabofUsers == null) { 
    var tabofUsers = [];
}
    var user = { 
        id: generateUid(),
        name: name,
        email: email,
        date: dateb
    };

    tabofUsers.push(user);
    localStorage.setItem("tabofUsers", JSON.stringify(tabofUsers));
    //console.log(tabofUsers);
    alert("The data was saved.");
    //console.log()
    return true;
    //lister()
} 

function lister() {

    var tabuser = [];
    tabuser = JSON.parse(localStorage.getItem("tabofUsers"));
    var render = "<table border='1'>";
    render += "<tr><th>id</th><th>Name</th><th>Email</th><th>Date</th><th>Action</th></tr>";

    for (var i in tabuser) {
        var p =tabuser[i];

        render += "<tr><td>" + p.id + " </td>";
        render += "<td>" + p.name + " </td>";
        render += "<td>" + p.email + "</td>";
        render += "<td>" + p.date + "</td>";
        render += '<td><button onclick="updateUser(' + "" + p.id + ')" class="btnEdit"/>Edit<button onclick="deleteUser(' + "" + p.id + ')" class="btnDelete"/>Delete</td></tr>'

    }
    render += "</table>";
    dvcontainer.innerHTML = render;

}

function generateUid() {
    var uniqueId = Math.round(Math.floor(Math.random() * Math.floor(1000)));
    return uniqueId;
}

function deleteUser(ids) {
    var tabuser = JSON.parse(localStorage.getItem("tabofUsers"));
    for (i = 0; i < tabuser.length; i++) {
        console.log(ids);
        if (tabuser[i].id == ids) {
            tabuser.splice(i, 1);
        }
    }
    localStorage.setItem("tabofUsers", JSON.stringify(tabuser));
    alert("user deleted.");
    lister();
}

function updateUser(index) {

    var tabuser = JSON.parse(localStorage.getItem("tabofUsers"));
    for (i = 0; i < tabuser.length; i++) {
        if (index==tabuser[i].id){
    document.getElementById("index").value=tabuser[i].id ;  
    document.getElementById("name").value=tabuser[i].name;
    document.getElementById("email").value=tabuser[i].email;
    document.getElementById("date").value=tabuser[i].date;

    //document.getElementById("pswd").value=tabuser[i].pswd;
        }
    
    }
    
}

function edit(){

var index=document.getElementById("index").value;
var newname=document.getElementById("name").value;
var newemail=document.getElementById("email").value;
var newdate=document.getElementById("date").value;



var user={
    id: index,
    name: newname,
    email: newemail,
    date: newdate
};

var tabuser = JSON.parse(localStorage.getItem("tabofUsers"));
for (i = 0; i < tabuser.length; i++) {
    if (index==tabuser[i].id){
tabuser[i]=user;

}

}

localStorage.setItem("tabofUsers", JSON.stringify(tabuser));

}


