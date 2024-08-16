Nasıl Çalışır?
Butona Tıklama:

Kullanıcı bir butona tıkladığında (örneğin appendValue('*')), appendValue fonksiyonu çağrılır ve * operatörü input alanına (display) eklenir. Bu işlem aslında sayıları ve işleçleri eklemekten ibarettir; henüz bir hesaplama yapılmaz.
Tam İfade Oluşturma:

Kullanıcı, örneğin 7, *, 3 gibi değerler girer ve input alanında 7*3 gibi bir ifade oluşur. Bu ifade, aslında bir metin (string) olarak saklanır.
Eşittir Butonuna Basma:

Kullanıcı = butonuna bastığında calculateResult() fonksiyonu çağrılır. Bu fonksiyon, eval() kullanarak input alanındaki string ifadeyi değerlendirir.
eval() İle Hesaplama:

eval() fonksiyonu, 7*3 gibi string ifadeyi bir JavaScript ifadesi olarak çalıştırır. Bu sayede çarpma işlemi gerçekleştirilir ve sonuç (21) input alanında gösterilir.
Neden Ayrı Fonksiyon Tanımlamaya Gerek Yok?
eval() fonksiyonu, JavaScript dilinin bir parçası olarak aritmetik işlemleri tanır ve bunları çalıştırır. Yani, eval() fonksiyonu sadece toplama değil, çarpma, bölme, çıkarma gibi işlemleri de anlayabilir ve bunları otomatik olarak gerçekleştirir. Bu yüzden, her işlem için ayrı bir fonksiyon yazmanıza gerek kalmaz. eval() fonksiyonuna 7*3, 12/4, 5-2, 8+7 gibi ifadeler verdiğinizde, JavaScript otomatik olarak doğru işlemi yapar.

Özet:
appendValue() fonksiyonu, sadece karakterleri input alanına eklemekle ilgilenir.
Asıl hesaplama, calculateResult() fonksiyonunda eval() kullanılarak yapılır.
eval(), JavaScript dilinin bir parçası olduğu için toplama, çıkarma, çarpma, bölme gibi işlemleri otomatik olarak tanır ve gerçekleştirir. Bu nedenle, her işlem için ayrı fonksiyon yazmanıza gerek kalmaz.
