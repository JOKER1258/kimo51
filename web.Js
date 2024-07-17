// script.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // اسم المستخدم وكلمة المرور الصحيحة
    const correctUsername = "asmaa";
    const correctPassword = "essam";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "https://www.facebook.com/"; // ضع هنا الرابط الذي تريد التحويل إليه
    } else {
        document.getElementById('login-result').textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
        document.getElementById('login-result').style.color = "red";
    }
}
