function solve() {
  let text = document.getElementById('input').value;
  let output = document.getElementById('output');

  let textArr = text.split('.');

  let newParagraph = '';
  let newParagraphLong = '';

  let counter = 0;
  for (const sentance of textArr) {
    if (sentance.length > 1){
      newParagraph += sentance + '.';
      counter++;
      if (counter % 3 === 0) {
        newParagraphLong += `<p>${newParagraph}</p>`;
        newParagraph = '';
      }
    }
  }

  if (newParagraphLong != '') {
    if (newParagraph.length > 5) {
      newParagraphLong += `<p>${newParagraph}</p>`;
    }
    output.innerHTML = (newParagraphLong.trim())
  }
  else {

    output.innerHTML = (`<p>${newParagraph.trim()}</p>`)
  }
}