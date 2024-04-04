function search() {
   let townsElements = document.querySelectorAll('#towns li');
   let searchWord = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let towns = Array.from(townsElements)
   let results = [];
   for (const element of towns) {
      let town = element.textContent.toLowerCase();
      if (town.includes(searchWord.toLowerCase())) {
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
         results.push(town);
      }
   }
   result.textContent = `${results.length} matches found`
}
