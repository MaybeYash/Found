document.addEventListener('DOMContentLoaded', function() {
    const hash = "$2b$12$OrjMh.MyyiS1/tA9M8Vyz.cy1Vv7cvQKA2xaPtVEwxnZryDwB/SEy";

    document.querySelector('button').addEventListener('click', function() {
        const password = document.getElementById('password').value;

        if (!password) {
            document.getElementById('result').textContent = "Please enter a password.";
            return;
        }

        bcrypt.compare(password, hash, function(err, result) {
            if (err) {
                console.error(err);
                document.getElementById('result').textContent = "An error occurred.";
                return;
            }

            if (result) {
                document.getElementById('result').textContent = "Password matches the hash!";
            } else {
                document.getElementById('result').textContent = "Password does not match the hash.";
            }
        });
    });
});
