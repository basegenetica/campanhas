function auth (fomr){
    
    if( form.username.value == "natan" && form.password.value == "070799" || 
        form.username.value == "lucas" && form.password.value == "110193" || 
        form.username.value == "weslley" && form.password.value == "123456" ||
        form.username.value == "ricardo" && form.password.value == "123456" ||  
        form.username.value == "supervisor" && form.password.value == "123456"
        ){
            location.href = "https://drive.google.com/drive/u/0/folders/1JbAX-ERm9bCcAdH2Z6COapioUcwRPPlf"
        }
        else{
            form.username.value == ""
            form.password.value == ""
            alert("Dados incorretos!")
        }
}