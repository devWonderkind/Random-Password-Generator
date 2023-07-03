function generatePassword() {
    let length = 10; // Length of the password
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?></=";
    let password = "";
    
    for (var i = 0; i < length; i++) {
     let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    
    document.getElementById("password").value = password;
}