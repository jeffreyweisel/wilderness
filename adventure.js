//will import data and functions from trails.js and rivers.js
const {
    trails, least, most, details, totalTrailMiles, shortTrail, longTrail, leastAndMostExpensive, trailDetailsBjorn
} = require("./trails.js")

const {
    rivers, leastRiver, mostRiver, riverDetails, totalRiverMiles, longRiver, shortRiver, leastAndMostExpensiveRiver, riverDetailsBjorn
}=require("./rivers.js")


console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')

const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} kilometers of wilderness trails across the US`)   //changed to kilometers instead of miles to return proper units

const shortest = shortTrail(trails)
console.log(`The shortest trail is ${shortest} kilometers`)

const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)

console.log('***************************************************')     //added the output from the river sizes portion of the assignment
console.log('*****              R I V E R S               *****')
console.log('***************************************************')

const riverTotal = totalRiverMiles(rivers)
console.log(`We offer guidance on ${riverTotal} kilometers of scenic rivers across the US`)

const riverShort = shortRiver(rivers)
console.log(`The shortest river tour is ${riverShort} kilometers`)

const riverLong = longRiver(rivers)
console.log(`The longest river tour is ${riverLong} kilometers`)

console.log(' ')

const noMoney = leastAndMostExpensive(trails)
console.log(`The least expensive trails are:`)

for (const trail of least) {
    console.log(trail)
}

console.log(' ')

console.log(`The most expensive trails are:`)

for (const trail of most) {
    console.log(trail)
}

console.log(' ')

const noMoneyRiver = leastAndMostExpensiveRiver(rivers)
console.log('The least expensive river tours are:')

for (const river of leastRiver) {
    console.log(river)
}

console.log(' ')

console.log(`The most expensive river tours are:`)

for (const river of mostRiver) {
    console.log(river)
}

console.log(' ')
console.log(`Trail Details:`)

const daTrip = trailDetailsBjorn(trails)

for (const result of details) {
    console.log(result)
    
}

console.log(' ')
console.log(`River Details:`)

const daRiver = riverDetailsBjorn(rivers)

for (const result of riverDetails) {
    console.log(result)
}