function appendValue(value){
  document.getElementById('display').value += value;
}

function clearDisplay(){
  document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// eval() fonksiyonu, JavaScript'te bir string ifadesini (metin olarak verilen kodu) değerlendirmek ve çalıştırmak için kullanılır.
//   Bu fonksiyon, string olarak verilen bir JavaScript kodunu alır ve bu kodu çalıştırır. 
//   Bu durumda, hesap makinesindeki işlemleri bu fonksiyon çözüyor.

