function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textInputElement = document.querySelector('#inputs textarea');
      const bestRestourantElement = document.querySelector('#bestRestaurant p');
      const workersElement = document.querySelector('#workers p');

      const data = textInputElement.value
      const dataArray = JSON.parse(data);
      let highestAvgSalary = 0;
      let bestRestaurant = null;

      let restaurants = {};

      for (const line of dataArray) {
         let [restaurantName, data] = line.split(' - ');
         let workers = data
                           .split(', ')
                           .map(record => {
                              let [workerName, salary] = record.split(' ');
                              return {workerName, salary: Number(salary)};
                           });
         
         if (restaurants[restaurantName]) {
            workers = restaurants[restaurantName]['workers'].concat(workers)
         }
         
         let bestSalary = Math.max(...workers.map(worker => worker.salary));
         let avgSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         restaurants[restaurantName] = {workers, avgSalary, bestSalary};

         if (restaurants[restaurantName]['avgSalary'] > highestAvgSalary) {
            highestAvgSalary = restaurants[restaurantName]['avgSalary'];
            bestRestaurant = restaurantName;
         }
      }

      const firstOutput = `Name: ${bestRestaurant} Average Salary: ${restaurants[bestRestaurant]['avgSalary'].toFixed(2)} Best Salary: ${restaurants[bestRestaurant]['bestSalary'].toFixed(2)}`;
      const secondOutput = restaurants[bestRestaurant]['workers']
                                                               .sort((a,b) => b.salary - a.salary)
                                                               .map(worker => `Name: ${worker.workerName} With Salary: ${worker.salary}`)
                                                               .join(' ');

      bestRestourantElement.textContent = firstOutput;
      workersElement.textContent = secondOutput;
   }
}