
// FUNCTIONS 

// Definition of fuction to for printing Service Level for respective rides
function printServiceLevel (placeholderServiceLevel) {
  let ridesElement = document. querySelector('.rides')
  ridesElement.insertAdjacentHTML('beforeend',`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${placeholderServiceLevel}</span>
        </h1>
   `)      
}



// Definition of fuction to for printing Noober Pool to the Screen
function printPool (placeholderPool) {
  let ridesElement = document. querySelector('.rides')
  ridesElement.insertAdjacentHTML('beforeend',`
        <div class="border-4 border-purple-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${placeholderPool.passengerDetails.first} ${placeholderPool.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">(312) 555-1212</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-purple-600 text-white p-2">
                1 passengers
              </span>
            </div>
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


// Definition of fuction to for printing Noober Purple to the Screen
function printPurple (placeholderPurple) {
  let ridesElement = document. querySelector('.rides')
  ridesElement.insertAdjacentHTML('beforeend',`
              <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                    <h2 class="text-2xl py-1">${placeholderPurple.passengerDetails.first} ${placeholderPurple.passengerDetails.last}</h2>
                    <p class="font-bold text-gray-600">${placeholderPurple.passengerDetails.phoneNumber}</p>
                  </div>
                  <div class="w-1/2 text-right">1 passengers</div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>123 Main St</p>
                    <p>Chicago, IL 60603</p>
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>123 Main St</p>
                    <p>Chicago, IL 60603</p>
                  </div>
                </div>
              </div>

              <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                    <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
                    <p class="font-bold text-gray-600">(312) 555-1212</p>
                  </div>
                  <div class="w-1/2 text-right">1 passengers</div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>123 Main St</p>
                    <p>Chicago, IL 60603</p>
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>123 Main St</p>
                    <p>Chicago, IL 60603</p>
                  </div>
                </div>
              </div>
              `)
            
}

// Definition of fuction to for printing Noober X to the Screen
function printNooberX (placeholderNooberX) {
  let ridesElement = document. querySelector('.rides')
  ridesElement.insertAdjacentHTML('beforeend',`
                <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                    <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
                    <p class="font-bold text-gray-600">(312) 555-1212</p>
                  </div>
                  <div class="w-1/2 text-right">
                    <span class="rounded-xl bg-gray-600 text-white p-2">
                      2 passengers
                    </span>
                  </div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>123 Main St</p>
                    <p>Chicago, IL 60603</p>
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>123 Main St</p>
                    <p>Chicago, IL 60603</p>
                  </div>
                </div>
              </div>
              `)      
}

// Definition of fuction to for printing Noober XL to the Screen
function printNooberXL (placeholderNooberXL) {
  let ridesElement = document. querySelector('.rides')
  ridesElement.insertAdjacentHTML('beforeend',`
            <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
                <p class="font-bold text-gray-600">(312) 555-1212</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                  5 passengers
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>123 Main St</p>
                <p>Chicago, IL 60603</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>123 Main St</p>
                <p>Chicago, IL 60603</p>
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
            printPurple(rides[0])
                // Loops through the second array, i.e. each leg within each ride
                  for(let n=0; n<rides.length; i++) {
                  let legs = rides[n]
                  printPool(legs)  
                }
        // If the ride has only 1 leg, goes on to check what the
        } else if (rides[0].purpleRequested == true) {
            levelOfService = 'Noober Purple'
            printServiceLevel(levelOfService)
            printPurple(rides[0]) 
        } else if (rides.passenger1NumberOfPassengers > 3) {
            levelOfService = 'Noober XL'
            printServiceLevel(levelOfService)
        } else {
            levelOfService = 'Noober X'
            printServiceLevel(levelOfService)
        }  
          
   }

}



window.addEventListener('DOMContentLoaded', pageLoaded)

