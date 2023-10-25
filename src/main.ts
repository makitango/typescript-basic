// Schritt 1: Erstellt ein Array von Zahlen. Nutzt die '.map'-Funktion, um alle Zahlen im Array zu verdoppeln.
const numbers: number[] = [1, 2, 3, 4, 5];
const doubledNumbers: number[] = numbers.map((num: number) => num * 2);
console.log("Schritt 1: Erstellt ein Array von Zahlen. Nutzt die '.map'-Funktion, um alle Zahlen im Array zu verdoppeln.\n" + "const numbers: number[] = [1, 2, 3, 4, 5];\n" + "const doubledNumbers: number[] = numbers.map((num: number) => num * 2);\n" + doubledNumbers);

// Schritt 2: Erstellt ein Array von Wörtern. Nutzt die '.filter'-Funktion, um nur die Wörter auszuwählen, die länger als 5 Buchstaben sind.
const words: string[] = ["Hallo", "Welt", "Hallo Welt", "Hallo Welt!"];
const longWords: string[] = words.filter((word: string): boolean => word.length > 5);
console.log("Schritt 2: Erstellt ein Array von Wörtern. Nutzt die '.filter'-Funktion, um nur die Wörter auszuwählen, die länger als 5 Buchstaben sind.\n" + "const words: string[] = [\"Hallo\", \"Welt\", \"Hallo Welt\", \"Hallo Welt!\"];\n" + "const longWords: string[] = words.filter((word: string): boolean => word.length > 5);\n" + longWords);

// Schritt 3: Erstellt ein Array von Zahlen. Nutzt die '.reduce'-Funktion, um die Summe aller Zahlen im Array zu berechnen.
const numbers2: number[] = [1, 2, 3, 4, 5];
const sum: number = numbers2.reduce((acc: number, num: number) => acc + num, 0);
console.log("Schritt 3: Erstellt ein Array von Zahlen. Nutzt die '.reduce'-Funktion, um die Summe aller Zahlen im Array zu berechnen.\n" + "const numbers2: number[] = [1, 2, 3, 4, 5];\n" + "const sum: number = numbers2.reduce((acc: number, num: number) => acc + num, 0);\n" + sum);

// Schritt 4: Erstellt ein Array von Zahlen. Nutzt die '.some'-Funktion, um zu überprüfen, ob mindestens eine Zahl größer als 10 ist.
const numbers3: number[] = [1, 2, 3, 4, 5];
const isAtLeastOneNumberGreaterThan10: boolean = numbers3.some((num: number): boolean => num > 10);
console.log("Schritt 4: Erstellt ein Array von Zahlen. Nutzt die '.some'-Funktion, um zu überprüfen, ob mindestens eine Zahl größer als 10 ist.\n" + "const numbers3: number[] = [1, 2, 3, 4, 5];\n" + "const isAtLeastOneNumberGreaterThan10: boolean = numbers3.some((num: number): boolean => num > 10);\n" + isAtLeastOneNumberGreaterThan10);
