// Hash provided (ensure it's from bcryptjs for consistency)
const hash = "$2b$12$OrjMh.MyyiS1/tA9M8Vyz.cy1Vv7cvQKA2xaPtVEwxnZryDwB/SEy";

function checkPassword() {
    const password = document.getElementById('password').value;

    bcrypt.compare(password, hash, function(err, result) {
        const resultElement = document.getElementById('result');
        if (result) {
            resultElement.textContent = "Password matches the hash!";
        } else {
            resultElement.textContent = "Password does not match the hash.";
        }
    });
}
