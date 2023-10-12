const secretKey = "ClaveSecreta123";

        function encrypt() {
            const originalText = document.getElementById("originalText").value;
            const ciphertext = CryptoJS.AES.encrypt(originalText, secretKey).toString();
            document.getElementById("encryptedText").value = ciphertext;
        }

        function decrypt() {
            const encryptedText = document.getElementById("encryptedText").value;
            const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
            const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
            document.getElementById("decryptedText").value = decryptedText;
        }