function simuliereVerzoegerung(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function addiereNachVerzoegerung(a, b, ms) {
    await simuliereVerzoegerung(ms);
    const result = a + b;
    console.log("Das Ergebnis ist:", result);
  }
  
  addiereNachVerzoegerung(5, 4, 2000);
  