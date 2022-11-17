var user =(function  (){
    let email

    function setemail(e){
        email=e;
        this.email=e;
    }



    var password='aaaaaa';
    function consoleme(){
        console.log('Usuari: '+ email)
    }

    return{
        setemail:setemail,
        email:email,
        consoleme:consoleme


    }
})();

