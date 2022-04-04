// Create a hero
//==========================================================================
// The hero should have:
// real name
// alias
// location
// nemesis
// friends
// Status, like is alive
// Power level (which should be 100)
// powers
//==========================================================================
    // each power should have
    // A name
    // A level #
//==========================================================================

    // - There should be a method to use a power
    // - When a power is used its level should be subtracted from the hero’s power level
    // - If the power used would take the hero’s power level below 0 a warning should be issued that 
    //   it can’t be used because they’ll die
//==========================================================================

    // - There should be a method to force a power to be used, meaning that no warning should be issued even if 
    //   the hero’s power level will be taken below 0.
    // - If a hero’s power level goes below zero their status should be dead and none of the methods should work
//==========================================================================
    // Create a superhero
    // This superhero should have all of the details and abilities of the hero with some slight differences:
    // Superhero should have a default power level of 200
//==========================================================================
    // In addition that should have SUPER powers that are stronger than (higher level) than regular powers
    // Superhero should be able to function up until their power level has reached -100
    // The way in which they operate should have the same names
    // Create at least 2 instances of a hero and 2 instances of a superhero.

    //hint: if , else, conditional should be used 

    const alias = 'missAmerica'
    const nickname = 'lilChica'
    const realName = 'americaChavez'
    const nemesis = 'blackHeart'
    const power1 = 'starPunch'
    const power2 = 'openPortal'
    const power3 = 'bliss'
    const powerLvl = 'health'
    const status = 'alive'
    const alive = true
    const location = 'theBoogieDown'

//hero constructor 
class Hero {
    constructor(alias, nickname, powerLvl,realName,location, nemesis, status){
        this.alias = alias;         //'missAmerica';
        this.nickname = nickname;   //'lilChica';
        this.powerLvl = 100;        //100;
        this.realName = realName;   //'americaChavez';
        this.location = location;   //'theBoogieDown';
        this.nemesis =  nemesis;    //'blackHeart';
        this.status =   status;     //'alive';
        this.powers =   {
            starPunch:    25,
            openPortal:   15,
            bliss:        10,
        };
        // this.friend = friend     // 
        // this.friends = 'friends'
    }
//alive function
    alive () {
        this.alive = alive
        alive = true
    }
//dead function
    dead() {
        this.alive = alive
        alive = false
        if (!alive){
            this.powerLvl = 0
            console.log ("this hero has died, unable to perform any powers")
        }
    }
// //powers list (not necessary now)
//     powers() {
//         this.starPunch =  starPunch    //"starPunch : 55 PWR"
//         this.openPortal = openPortal          //"openPortal : 25 PWR"
//         this.bliss =      bliss      //"bliss : 10 PWR"
//     }

    // starPunch() {
    //     console.log('hit target with a Super Punch! -55 PWR')
    // }

    // console.log(superHero("james", "jamesnickname", "jamesTorrez", "jamesBad", "superPunch", "openPortal",));
}

//addFriend method
addFriend(friends){
    this.friend.push()
}
//addEnemy Method
addEnemy(nemesis){
    this.nemesis.push()
}

// usePower1 () {
//     let power1 = 
//     let power1 = [55, 100]
//     let difference = 
// }

// IF THERES TIME, WORKING ON A NEMESIS CLASS AS WELL
class antagonist extends Hero {
    super (){
    this.alias    = 'theBeast';
    this.nickname = 'spawnOfTheBeast';
    this.powerLvl = 100;
    this.realName = 'blackHeart';
    this.location = 'the 7th Circle';
    this.nemesis  = 'missAmerica';
    this.status   = 'alive';
    }
}

class superHero extends Hero {
        super () {
        this.alias    = 'Miss America';
        this.nickname = 'lilChica';
        this.powerLvl = 100;
        this.realName = 'America Chavez';
        this.location = 'The BoogieDown';
        this.nemesis  = 'blackheart';
        this.status   = 'alive';
        }
    }
}

// function starPunch(){
//     let this.powerLvl = this.powerLvl - 25
//     console.log(`${this.alias} used ${power}. Their power level is now is now ${this.powerLvl}`)
// }

const newbie = new Hero();
// console.log(newbie);
newbie.dead();
console.log(newbie)
// newbie.powers();
// console.log(newbie)
// newbie.starPunch()
console.log (new Hero())
console.log (new antagonist())


