function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementsByTagName('textarea');
      let bestRestaurantOutput = document.getElementsByTagName('p');


      let inputArr = JSON.parse(input[0].value)

      const restaurants = [];

      inputArr.forEach(restaurant => {
         let [currentRestaurantName, workers] = restaurant.split(' - ');
         let restaurantExist = restaurants.find(n => n.name === currentRestaurantName)
         if (restaurantExist) {
            restaurantExist.workers = restaurantExist.workers + ', ' + workers;
         } else {
            let restaurantInfo = {
               name: currentRestaurantName,
               workers: workers
            }
            restaurants.push(restaurantInfo);
         }
      });
      let bestAvgSalary = 0;
      restaurants.forEach(restaurant => {

         let currentSalarySum = 0;
         let currentBestWorkerSalary = 0;

         workers = Array.from(restaurant.workers.split(', '))
         workers.forEach(worker => {
            let [workerName, workerSalary] = worker.split(' ');
            let currentSalary = Number(workerSalary)
            currentSalarySum += currentSalary;
            if (currentBestWorkerSalary < currentSalary) {
               currentBestWorkerSalary = currentSalary;
            }
         });

         restaurant.avgSalary = currentSalarySum / workers.length;
         restaurant.bestWorkerSalary = currentBestWorkerSalary.toFixed(2);
         if (bestAvgSalary < restaurant.avgSalary) {
            bestAvgSalary = restaurant.avgSalary
         }

      });

      let restaurant = restaurants.find(x => x.avgSalary === bestAvgSalary)
     
      bestRestaurantOutput[0].textContent = `Name: ${restaurant['name']} Average Salary: ${restaurant['avgSalary'].toFixed(2)} Best Salary: ${restaurant['bestWorkerSalary']}`;
      let workersOutput = Array.from(restaurant.workers.split(', '));
      workersOutput = workersOutput.sort((a,b) => a.split(' ')[1] < b.split(' ')[1])
      bestRestaurantOutput[1].textContent = workersOutput.map(w => `Name: ${w.split(' ')[0]} With Salary: ${w.split(' ')[1]}`).join(' ');;
   }
}
/* ["PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660"]
["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"] */