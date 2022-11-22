// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let distanceInBlocks;
    let scuberLocation;
    scuberLocation = 42;
    if (location > scuberLocation) {
        distanceInBlocks = location - scuberLocation;
    } else {
        distanceInBlocks = scuberLocation - location;
    }
    return distanceInBlocks;
}

function distanceFromHqInFeet(distance) {
    let distanceInFeet;
    distanceInFeet = distanceFromHqInBlocks(distance) * 264
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    let distanceInFeet;
    if (start > destination) {
        distanceInFeet = (start - destination) * 264
    } else if (destination > start) {
        distanceInFeet = (destination - start) * 264
    } else {
        return destination;
    }
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    let totalFeetTravelled;
    totalFeetTravelled = distanceTravelledInFeet(start, destination)
    let charges;
    if (totalFeetTravelled <= 400) {
        charges = 0;
    } else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000) {
        charges = (totalFeetTravelled - 400) * 0.02;
    } else if (totalFeetTravelled > 2000 && totalFeetTravelled <= 2500) {
        charges = 25;
    } else {
        return ("cannot travel that far")
    }
    return charges;
}