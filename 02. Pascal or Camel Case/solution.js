function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let words = text.split(' ');
  let resultCase = [];

  if (convention === 'Camel Case') {
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      resultCase.push(word)
    }
  }
  else if (convention === 'Pascal Case') {
    for (const word of words) {
      resultCase.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
  }
  else {
    resultCase.push('Error!')
  }
  result.textContent = resultCase.join('');
}
/* function solve() {
  const textElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');
  const resultElement = document.querySelector('#result');

  const text = textElement.value;
  const namingConvention = namingConventionElement.value;

  const convertToPascalCase = (text) =>
    text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');

  const convertor = {
    'Pascal Case': convertToPascalCase,
    'Camel Case': (text) => convertToPascalCase(text).charAt(0).toLowerCase() + convertToPascalCase(text).slice(1)
  };

  if (!convertor[namingConvention]) {
    resultElement.textContent = 'Error!';
    return;
  }

  resultElement.textContent = convertor[namingConvention](text);
} */