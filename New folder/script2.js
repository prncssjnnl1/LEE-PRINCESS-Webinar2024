function generatePassword(){
    const vale = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const len = 16;
    let password = "";
    for(let i = 0; i < len; i++){
        let random = Math.floor(Math.random() * vale.length);
        password += vale[random];
    }
    return password;
}

document.addEventListener('DOMContentLoaded', function () {
    let passEl = document.getElementById('password');
    let btnGen = document.getElementById('generate');
    btnGen.addEventListener('click', () => {
        passEl.value = generatePassword();
    });
});
