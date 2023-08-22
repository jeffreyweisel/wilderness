//this file holds all the functions for the rivers sectio of the wilderness chapter

const rivers = [{
    id: 1,
    price: "$$$$",
    latitude: 57.6055534,
    longitude: 12.2028691,
    uniqueFish: "Hystrix indica",
    river: "Eleven Point National Scenic River",
    length: 22
}, {
    id: 2,
    price: "$$$$$",
    latitude: -27.950568,
    longitude: -51.8148609,
    uniqueFish: "Libellula quadrimaculata",
    river: "Willamette River Water Trail",
    length: 73
}, {
    id: 3,
    price: "$$$$",
    latitude: 58.5944316,
    longitude: 49.6634858,
    uniqueFish: "Ceratotherium simum",
    river: "Missouri National Recreational River Water Trail",
    length: 19
}, {
    id: 4,
    price: "$$",
    latitude: 41.6409278,
    longitude: -8.5624704,
    uniqueFish: "Philetairus socius",
    river: "Kenai River",
    length: 15
}, {
    id: 5,
    price: "$$$",
    latitude: 56.9191069,
    longitude: 60.4807823,
    uniqueFish: "Gopherus agassizii",
    river: "Huron River Water Trail",
    length: 32
}, {
    id: 6,
    price: "$$$",
    latitude: 10.6934511,
    longitude: 122.4801854,
    uniqueFish: "Macropus fuliginosus",
    river: "Buffalo National River",
    length: 67
}, {
    id: 7,
    price: "$",
    latitude: 21.2350622,
    longitude: -102.3342182,
    uniqueFish: "Centrocercus urophasianus",
    river: "Black Canyon Water Trail",
    length: 88
}, {
    id: 8,
    price: "$$",
    latitude: 30.8861589,
    longitude: 104.2532768,
    uniqueFish: "Sceloporus magister",
    river: "Mulberry River",
    length: 52
}, {
    id: 9,
    price: "$$$$",
    latitude: 7.9414261,
    longitude: 122.3862362,
    uniqueFish: "Numida meleagris",
    river: "Duck River",
    length: 78
}, {
    id: 10,
    price: "$$$",
    latitude: 65.4026,
    longitude: 21.1886684,
    uniqueFish: "Pteropus rufus",
    river: "Northern Forest Canoe Trail",
    length: 74
}, {
    id: 11,
    price: "$$$",
    latitude: 29.00707,
    longitude: 114.246016,
    uniqueFish: "Phalaropus lobatus",
    river: "Green River",
    length: 100
}, {
    id: 12,
    price: "$$$$$",
    latitude: 60.0528555,
    longitude: 23.6314746,
    uniqueFish: "Alcelaphus buselaphus cokii",
    river: "Tuolumne River",
    length: 13
}, {
    id: 13,
    price: "$",
    latitude: 58.3493356,
    longitude: 13.8300629,
    uniqueFish: "Catharacta skua",
    river: "Noatak River",
    length: 61
}, {
    id: 14,
    price: "$",
    latitude: 35.2099034,
    longitude: 107.7918964,
    uniqueFish: "Spermophilus parryii",
    river: "Wabakimi Provincial Park",
    length: 90
}, {
    id: 15,
    price: "$$",
    latitude: 24.965651,
    longitude: 102.591737,
    uniqueFish: "Oryx gazella callotis",
    river: "Nahanni River",
    length: 55
}, {
    id: 16,
    price: "$$$",
    latitude: 34.810487,
    longitude: 117.323725,
    uniqueFish: "Zenaida asiatica",
    river: "Gauley River",
    length: 50
}, {
    id: 17,
    price: "$$$",
    latitude: 53.5279314,
    longitude: -114.001928,
    uniqueFish: "Coluber constrictor",
    river: "San Juan River",
    length: 84
}, {
    id: 18,
    price: "$",
    latitude: 43.1227567,
    longitude: 45.7420648,
    uniqueFish: "Upupa epops",
    river: "Devils River",
    length: 70
}, {
    id: 19,
    price: "$",
    latitude: 14.972892,
    longitude: 8.8831506,
    uniqueFish: "Panthera leo",
    river: "Clearwater River Canoe Trail",
    length: 71
}, {
    id: 20,
    price: "$$",
    latitude: 38.0625172,
    longitude: 23.7946578,
    uniqueFish: "Phalacrocorax albiventer",
    river: "Allagash Wilderness Waterway",
    length: 65
}, {
    id: 21,
    price: "$",
    latitude: 9.8422682,
    longitude: 11.3885001,
    uniqueFish: "Phalacrocorax carbo",
    river: "John Day River",
    length: 46
}, {
    id: 22,
    price: "$$",
    latitude: 47.2186081,
    longitude: 34.6661709,
    uniqueFish: "Ictonyx striatus",
    river: "Rio Grande",
    length: 77
}, {
    id: 23,
    price: "$$$",
    latitude: 43.2625974,
    longitude: 23.6556259,
    uniqueFish: "Anhinga rufa",
    river: "Chattooga River",
    length: 46
}, {
    id: 24,
    price: "$$$$",
    latitude: 33.9485698,
    longitude: 44.9159938,
    uniqueFish: "Theropithecus gelada",
    river: "Loxahatchee River",
    length: 77
}, {
    id: 25,
    price: "$$",
    latitude: 50.480431,
    longitude: 121.682569,
    uniqueFish: "Phoenicopterus ruber",
    river: "Pecatonica River",
    length: 87
}]

//Get the total of all the rivers
const totalRiverMiles = (allRivers) => {
    let total = 0
    for (const river of allRivers) {
        total = total+=river.length
    }
    return total
}



// Get the longest of all rivers
const longRiver = (allRivers) => {
    let longest = 0 
    for (const river of allRivers) {
        if(river.length > longest)
        longest = river.length
    }
    return longest
}



//Get the shortest of all rivers

const shortRiver = (allRivers) => {
    let shortest = rivers[0].river.length   //cant be set to 0 because all the lengths are positive so nothing will ever be less than 0 so it wouldnt be able to get a value
    for (const river of allRivers) {
        if (river.length < shortest)
        shortest = river.length
    }
        return shortest
}



//Get the most and least expensive river tours
// Created new arrays to hold most and least expensive river tours
let leastRiver = []
let mostRiver = []

const leastAndMostExpensiveRiver = (allRivers) => {
    let noMoneyRiver = allRivers[0].price
    for (const river of allRivers) {
        if(river.price.length === 1) {              //if the number of dollar signs is equal to 1 then it will output the names of the trails in the console
            leastRiver.push(river.river)
            }else if(river.price.length >= 4){      //else if for if the number if dollar signs is 4 or greater

                mostRiver.push(river.river)
            }
    }

}




let riverDetails = []
const riverDetailsBjorn = (rivers) => {
    let detailsRiver = ""

    for (const river of rivers) {
        const nameOfRiver = river.river
        const riverStart = river.latitude
        const riverLongitude = river.longitude
        const highlightFish = river.uniqueFish
        const riverLength = river.length

    detailsOfRiver = `${nameOfRiver} starts at [${riverStart},${riverLongitude}] and is ${riverLength} kilometers long. The highlight plant for this trail is ${highlightFish}.`
    riverDetails.push(detailsOfRiver)
        
    }
    return riverDetails
}

module.exports = {
    rivers, leastRiver, mostRiver, riverDetails, totalRiverMiles, longRiver, shortRiver, leastAndMostExpensiveRiver, riverDetailsBjorn
}
