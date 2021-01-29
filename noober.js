
// FUNCTIONS 

// Definition of fuction to for printing Service Level for respective rides
function printServiceLevel (placeholderServiceLevel) {
  let ridesService = document. querySelector('.rides')
  ridesService.insertAdjacentHTML('beforeend',`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${placeholderServiceLevel}</span>
        </h1>
   `)      
}



// Definition of fuction to for printing Noober PURPLE to the Screen
function printPurple (placeholderPurple) {
  let ridesElement = document. querySelector('.rides')
  ridesElement.insertAdjacentHTML('beforeend',`
        <div class="border-4 border-purple-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${placeholderPurple.passengerDetails.first} ${placeholderPurple.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">(312) 555-1212</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-purple-600 text-white p-2">
              ${placeholderPurple.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${placeholderPurple.pickupLocation.address}</p>
              <p>${placeholderPurple.pickupLocation.city} ${placeholderPurple.pickupLocation.state} ${placeholderPurple.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${placeholderPurple.dropoffLocation.address}>
              <p>${placeholderPurple.dropoffLocation.city} ${placeholderPurple.dropoffLocation.state} ${placeholderPurple.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
              `)      
}


// Definition of fuction to for printing Noober Purple to the Screen
function printPool (placeholderPool) {
  let ridesElementPool= document. querySelector('.rides')
  ridesElementPool.insertAdjacentHTML('beforeend',`
              <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                    <h2 class="text-2xl py-1">${placeholderPool.passengerDetails.first} ${placeholderPool.passengerDetails.last}</h2>
                    <p class="font-bold text-gray-600">${placeholderPool.passengerDetails.phoneNumber}</p>
                  </div>
                  <div class="w-1/2 text-right">${placeholderPool.numberOfPassengers} passengers</div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>${placeholderPool.pickupLocation.address}</p>
                    <p>${placeholderPool.pickupLocation.city} ${placeholderPool.pickupLocation.state} ${placeholderPool.pickupLocation.zip}</p>      
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>${placeholderPool.dropoffLocation.address}>
                    <p>${placeholderPool.dropoffLocation.city} ${placeholderPool.dropoffLocation.state} ${placeholderPool.dropoffLocation.zip}</p>
                  </div>
                </div>
              </div>
              `)
            
}

// Definition of fuction to for printing Noober X to the Screen
function printNooberX (placeholderNooberX) {
  let ridesElementX = document. querySelector('.rides')
  ridesElementX.insertAdjacentHTML('beforeend',`
                <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                    <h2 class="text-2xl py-1">${placeholderNooberX.passengerDetails.first} ${placeholderNooberX.passengerDetails.last}</h2>
                    <p class="font-bold text-gray-600">${placeholderNooberX.passengerDetails.phoneNumber}</p>
                  </div>
                  <div class="w-1/2 text-right">
                    <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${placeholderNooberX.numberOfPassengers} passengers
                    </span>
                  </div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>${placeholderNooberX.pickupLocation.address}</p>
                    <p>${placeholderNooberX.pickupLocation.city} ${placeholderNooberX.pickupLocation.state} ${placeholderNooberX.pickupLocation.zip}</p>
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>${placeholderNooberX.dropoffLocation.address}>
                    <p>${placeholderNooberX.dropoffLocation.city} ${placeholderNooberX.dropoffLocation.state} ${placeholderNooberX.dropoffLocation.zip}</p>
                  </div>
                </div>
              </div>
              `)      
}

// Definition of fuction to for printing Noober XL to the Screen
function printNooberXL (placeholderNooberXL) {
  let ridesElementXL = document. querySelector('.rides')
  ridesElementXL.insertAdjacentHTML('beforeend',`
            <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${placeholderNooberXL.passengerDetails.first} ${placeholderNooberXL.passengerDetails.last}</h2>
                <p class="font-bold text-gray-600">${placeholderNooberXL.passengerDetails.phoneNumber}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                ${placeholderNooberXL.numberOfPassengers} passengers
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${placeholderNooberXL.pickupLocation.address}</p>
                <p>${placeholderNooberXL.pickupLocation.city} ${placeholderNooberXL.pickupLocation.state} ${placeholderNooberXL.pickupLocation.zip}</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${placeholderNooberXL.dropoffLocation.address}>
                <p>${placeholderNooberXL.dropoffLocation.city} ${placeholderNooberXL.dropoffLocation.state} ${placeholderNooberXL.dropoffLocation.zip}</p>
              </div>
            </div>
          </div>
              `)      
}



// MAIN CODE

async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()


  // writes the returned JSON to the console
  console.dir(json)
  
  // Checks for the number of Rides in the array
  let numberRides = json.length
  console.log(json.length)

  // Loops through first array
  for(let i=0; i<numberRides; i++) {
    let rides = json[i]
    console.log(rides.length)
    console.log(rides)   
         // Determines depending on the properties of the legs, which corresponding layout to append
          if (rides.length > 1) {
          let levelOfService = 'Noober Pool'          
          printServiceLevel(levelOfService)             
                       // Loops through the second array, i.e. each leg within each ride                       
                       for(let n=0; n<rides.length; n++) {
                            let legs = rides[n] 
                            printPool(rides[n])
                       }
          // If the ride has only 1 leg, goes on to check whether its an Pruple, XL, or X
           } else if (rides[0].purpleRequested == true) {
          levelOfService = 'Noober Purple'
          printServiceLevel(levelOfService)
          printPurple(rides[0]) 
          } else if (rides[0].numberOfPassengers > 3) {
          console.log(rides[0].numberOfPassengers)
            levelOfService = 'Noober XL'
          printServiceLevel(levelOfService)
          printNooberX(rides[0]) 
          } else {
          levelOfService = 'Noober X'
          printServiceLevel(levelOfService)
          printNooberX(rides[0])
          } 
   }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

