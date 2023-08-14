const element = document.getElementById('text');
const text = element.textContent;

console.log(`1. Количество символов в тексте: ${text.length}`);

const result = text.replace(/;/g, ';\n');
console.log(`2. Текст с переносом строк: \n ${result}`);

const substring = result.replace(/\s/g, "")
console.log(`3. Текст с  удалёнными пробелами: ${substring}`);

const newText = result.slice(28, 50);
console.log(`4. Извлечение подстроки: ${newText}`);

const replaceText = newText.replace('клён', 'дубе');
console.log(`5. Замена "клён" на "дубе": ${replaceText}`);

const replaceText2 = result.toLocaleUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replaceText2}`);

const replaceText3 = result.replace(/клён/g, 'дуб');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replaceText3}`);

const index = text.indexOf('моря');
console.log(`8. Индекс первого вхождения "моря": ${index}`);

const modifiedText = replaceText.charAt(0).toUpperCase() + replaceText.slice(1);
console.log(`9. Строка с измененной первой буквой :${modifiedText}`);

