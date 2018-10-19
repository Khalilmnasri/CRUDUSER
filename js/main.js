 function register(){
    
    var ch = document.getElementById("pswd").value;
    var indice1 = 0;
    var indice2 = 0; 
    var uppercase = /[A-Z]/;
    var number = /[0-9]/;
    var chr = /["#,@"]/;
    var test1 =true;
    var test2 =false;
    var test3=true;

    for (i=0;i<ch.length;i++){

        if (ch[i].match(uppercase) || ch[i].match(number) || ch[i].match(chr)){
      indice1++;
        }
        else {
            indice2++;
        }
    
        if ((indice1>indice2) && (indice2==0)){
            document.getElementById("output").innerHTML="Votre mot de passe est fort";
        }
        else if ((indice2>indice1) && (indice1!=0)){
            document.getElementById("output").innerHTML="Votre mot de passe est moyenne";
        }
      else {
          document.getElementById("output").innerHTML="Votre mot de passe est faible";
      }
    
    
    }    
    var username =document.getElementById("name").value;
    
 if (username.indexOf(' ')>-1){
    document.getElementById("output1").innerHTML="Le nom ne doit pas contenir d'un espace!";
    var test1 =false;
}

    var usermail =document.getElementById("email").value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
    if( re.test(String(usermail).toLowerCase() )){
        document.getElementById("output2").innerHTML="email valid !";
        var test2 =true;
    }else{
        document.getElementById("output2").innerHTML="email invalid !";

    }

    var userdate= document.getElementById("date").value;
    var annee = userdate.substring(0,4);
    console.log(annee);
    var now = new Date();
    var anneenow   = now.getFullYear();
    var age=anneenow-annee;

    if( age < 18){
        document.getElementById("output3").innerHTML="age - 18!!!";
        var test3 =true;
    }

    GeneratePdf(username,usermail,userdate);

    function GeneratePdf(username,usermail,userdate){

        var doc = new jsPDF()
        doc.text(20, 30, 'Name: '+username)

        doc.text(20, 50, 'email:'+usermail)

        doc.text(20, 70, 'date de naissance:'+userdate)

       doc.save('inscription.pdf');
       

        var pdf = doc.output('datauristring');
        var iframe = "<iframe width='100%' height='100%' src='" + pdf + "'></iframe>"
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
    }

    var userpassword = document.getElementById("pswd").value;

    
    //Stockage Local Storage
    if ((test1 == true) && (test2 == true) && (test3 == true)){
    

    var user1 = {
        name : username,
        email : usermail,
        date : userdate,
        password : userpassword
    }

   var users = [];
   users = JSON.parse(localStorage.getItem("id") || "[]");
   users.push(user1);
   localStorage.setItem("id", JSON.stringify(users));
   console.log(JSON.stringify(users));
   console.log(users);


}else{
    alert("saisie de nouveau");
}
 }
   //Lecture Local Storage

   // renvoie email valid




function login(){

    var userEmail = document.getElementById('userEmail').value;
    var userPw = document.getElementById('userPw').value;
    var user = JSON.parse(localStorage.getItem("id"));
    if((userEmail.value == user.email ) && (userPw.value == user.password)) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
    
}





 
 