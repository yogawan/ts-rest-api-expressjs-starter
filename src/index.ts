import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => rl.question(question, resolve));
};

const calculate = (a: number, b: number, operator: string): number | string => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "❌ Error: Pembagian dengan nol";
    default:
      return "❌ Operator tidak valid";
  }
};

const main = async () => {
  console.log("📟 Simple TypeScript CLI Calculator");

  let exit = false;

  while (!exit) {
    const num1 = parseFloat(await askQuestion("Masukkan angka pertama: "));
    const operator = await askQuestion("Masukkan operator (+, -, *, /): ");
    const num2 = parseFloat(await askQuestion("Masukkan angka kedua: "));

    const result = calculate(num1, num2, operator);
    console.log(`💡 Hasil: ${result}\n`);

    const confirmExit = await askQuestion("Apakah anda ingin keluar? (ya/tidak): ");
    if (confirmExit.trim().toLowerCase() === "ya") {
      exit = true;
      console.log("👋 Terima kasih telah menggunakan kalkulator CLI.");
    }
  }

  rl.close();
};

main();
