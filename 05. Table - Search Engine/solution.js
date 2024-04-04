function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rowsElements = document.querySelectorAll('tbody tr');
      let searchWord = document.getElementById('searchField').value;

      let rows = Array.from(rowsElements)

      for (const row of rows) {
         let word = row.textContent.toLowerCase();
         if (word.includes(searchWord.toLowerCase())) {
            row.classList.add("select")
         }
      }

   }
}