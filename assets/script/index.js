const p = document.getElementById('text');
const text = p.textContent;

//Свойство **length** - возвращает длину строки.
console.log(`1. Количество символов в тексте: ${text.length}`);

// Метод **replace** - заменяет первое найденное вхождение подстроки или все вхождения, если используется регулярное выражение с глобальным флагом (/g).
const result = text.replace(/;/g, ';\n');
console.log(`2. Текст с переносами строк: \\n ${result}`);

//Метод **replaceAll** - был введён в ECMAScript 2021 и предназначен для замены всех вхождений подстроки в строке без необходимости использования регулярных выражений.
const substring = result.replaceAll(' ', '');
console.log(`3. Текст с удалёнными пробелами: ${substring}`);

//метод **slice** - возвращает новую строку, вырезая часть строки с использованием двух индексов: начального и конечного. Важно отметить, что начальный индекс включается в новую строку, а конечный — нет.
const newText = result.slice(28, 50);
console.log(`4. Извлечение подстроки: ${newText}`);

const replacedText = newText.replaceAll('клён', 'дубе');
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

//Метод **toUpperCase()** - преобразует строку в буквы верхнего регистра.
const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

const replacedText3 = result.replaceAll('клён', 'дуб');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);

//Метод **indexOf()** - возвращает индекс первого вхождения указанного значения.
const index = result.indexOf('моря');
console.log(`8. Индекс первого вхождения "моря": ${index}`);

const modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);