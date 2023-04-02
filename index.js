// Code your solution in this file!
//let returnFirstTwoDrivers = function([x1, x2, x3, x4]){
  //  return [x1, x2]
//}
//const returnLastTwoDrivers = function([x11, x22, x33, x44]){
  //  return [x33, x44]
//}
const returnFirstTwoDrivers = function(drivers = [x1, x2, x3, x4]){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers = [x1,x2,x3,x4]){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(x){
   return function(fare){
        return fare * x
   }
}

const fareDoubler = function(x){
    return 2 * x
}
const fareTripler = function(fare){
    return 3 * fare
}
const selectDifferentDrivers = function(arrayOfDrivers, argu){
    if (argu === returnFirstTwoDrivers){
       return returnFirstTwoDrivers(arrayOfDrivers)
    }
    else {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}