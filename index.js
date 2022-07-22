// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

// function findMatching(drivers, names) {
//     return drivers.filter(function (driver) {
//         return driver.toLowerCase() === names.toLowerCase
//     })
// } 




function findMatching(arrDrivers, str) {
    function driverName(driverStr) {
         return driverStr.toLowerCase() === str.toLowerCase()
    }
    const matchingList = arrDrivers.filter(driverName)
    return matchingList
    // const matchingList = arrDrivers.filter(function () {})
    // return arrDrivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase() })
}


//  function fuzzyMatch(drivers, name) {
//     return drivers.filter(function (driver) {
//      const result = driver.startsWith() === name.startsWith();
//      if(result !== result){
//          return false
//     }
//      })
//    }

function fuzzyMatch(arrDrivers, str) {
    function driverName(driverStr) {
        return driverStr.startsWith(str) 
        
   }
   const matchingList = arrDrivers.filter(driverName)
   return matchingList
}

// Bobby bob

function matchName(drivers, string) {
    return drivers.filter(function(driver){
         return driver.name === string
    })
 }