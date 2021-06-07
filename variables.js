
const DropDownMenus = {
  alignmentMenu: document.querySelector('#Alignment'),

  raceMenu: document.querySelector('#Race'),
  
  classONE: document.querySelector('#classONE'),

  classTWO: document.querySelector('#classTWO'),

  classTHREE: document.querySelector('#classTHREE'),

}

const Toon = {
  defaultStats: {
    STR: 8,
    DEX: 8,
    CON: 8, 
    INT: 8,
    WIS: 8,
    CHA: 8
  },

  ClassOne:{
    Level: 0,

    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,

},
  ClassTwo:{
    Level: 0,

    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,

},
  ClassThree:{
    Level: 0,

    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,

},
  Final:{
    Level: 0,

    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,

}
}

const Progression = {
  fastBAB: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],

  medBAB: [0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15],

  slowBAB: [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10],

  fastSAVES: [0,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12],

  slowSAVES: [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6],

  Null: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

  epicBAB: [0,1,1,2,2,3,3,4,4,5,5],

  epicSAVES: [0,0,1,1,2,2,3,3,4,4,5]
}

const Classes = {
  Null: {
    BAB: Progression.Null,
  
    FORT: Progression.Null,
  
    REFL: Progression.Null,
  
    WILL: Progression.Null,

    NAME: 'Null',

    SKILLValues: {
      points: 0,
      preferred: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }

  },
  Arcane_Archer: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Arcane Archer',

    SKILLValues: {
      points: 4,
      preferred: [ 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
    },
    EPICFEAT: 4,

    HITDICE: 6,
  },
  Assassin: {
    BAB: Progression.medBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Assassin',

    SKILLValues: {
      points: 4,
      preferred: [ 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
    },
    EPICFEAT: 4,

    HITDICE: 6,
  },
  Barbarian: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Barbarian',

    SKILLValues: {
      points: 4,
      preferred: [ 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
    },
    EPICFEAT: 4,

    HITDICE: 12,
  },
  Bard: {
    BAB: Progression.medBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Bard',

    SKILLValues: {
      points: 4,
      preferred:  [0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1],
    },

    EPICFEAT: 3,

    HITDICE: 6,

  },
  Blackguard: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Blackguard',

    SKILLValues: {
      points: 2,
      preferred:  [0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1],
    },

    EPICFEAT: 3,

    HITDICE: 10,

  },
  Champion_of_Torm: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Champion of Torm',

    SKILLValues: {
      points: 2,
      preferred:  [0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1],
    },

    EPICFEAT: 4,

    HITDICE: 10,

  },
  Cleric: {
    BAB: Progression.medBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Cleric',
    
    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 1, 2, 2, 1, 2, 2, 2, 0]
    },

    EPICFEAT: 3,

    HITDICE: 8,
  },
  Druid: {
    BAB: Progression.medBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Druid',

    SKILLValues: {
      points: 4,
      preferred: [ 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    }, 
    EPICFEAT: 4,
    
    HITDICE: 8,
  },
  Earthkin_Defender: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Earthkin Defender',

    SKILLValues: {
      points: 2,
      preferred: [ 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    }, 
    EPICFEAT: 4,
    
    HITDICE: 12,
  },
  Fighter: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Fighter',

    SKILLValues: {
      points: 4,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0]
    },
    EPICFEAT: 2,

    HITDICE: 12,
  },
  Harper_Scout: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Harper Scout',

    SKILLValues: {
      points: 4,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0]
    },
    EPICFEAT: 100,
    
    HITDICE: 6,
  },
  Monk: {
    BAB: Progression.medBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Monk',
    
    SKILLValues: {
      points: 4,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 0]
    }, 

    EPICFEAT: 5,

    HITDICE: 8,

  },
  Paladin: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Paladin',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 1, 2, 2, 2, 1, 1, 2, 0]
    }, 

    EPICFEAT: 3,

    HITDICE: 10,
  },
  Palemaster: {
    BAB: Progression.slowBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Palemaster',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 1, 2, 2, 2, 1, 1, 2, 0]
    }, 

    EPICFEAT: 3,

    HITDICE: 6,
  },
  Purple_Dragon_Knight: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Purple Dragon Knight',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 1, 2, 2, 2, 1, 1, 2, 0]
    }, 

    EPICFEAT: 100,

    HITDICE: 10,
  },
  Ranger: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Ranger',

    SKILLValues: {
      points: 6,
      preferred: [ 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0, 2, 2, 1, 1, 1, 2, 1, 2, 2, 0]
    }, 

    EPICFEAT: 5,
    // EVERY 3 AND 5 LEVELS
    HITDICE: 10,

  },
  Red_Dragon_Disciple: {
    BAB: Progression.medBAB,
  
    FORT: Progression.fastSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Red Dragon Disciple',

    SKILLValues: {
      points: 2,
      preferred: [ 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0, 2, 2, 1, 1, 1, 2, 1, 2, 2, 0]
    }, 

    EPICFEAT: 4,

    HITDICE: 12,

  },
  Rogue: {
    BAB: Progression.medBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Rogue',

    SKILLValues: {
      points: 10,
      preferred: [ 0, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1]
    }, 
    
    EPICFEAT: 4,

    HITDICE: 6,
  },
  Sorcerer: {
    BAB: Progression.slowBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Sorcerer',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    }, 

    EPICFEAT: 3,

    HITDICE: 6,
  },
  Weapon_Master: {
    BAB: Progression.fastBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.fastSAVES,
  
    WILL: Progression.slowSAVES,

    NAME: 'Weapon Master',

    SKILLValues: {
      points: 4,
      preferred: [ 0, 2, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    }, 

    EPICFEAT: 3,
    
    HITDICE: 10,
  },
  Wizard: {
    BAB: Progression.slowBAB,
  
    FORT: Progression.slowSAVES,
  
    REFL: Progression.slowSAVES,
  
    WILL: Progression.fastSAVES,

    NAME: 'Wizard',

    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    },

    EPICFEAT: 3,

  },
}



let ClassLevel1 = 0
let ClassLevel2 = 0
let ClassLevel3 = 0

let selectedClassOne=Classes.Null
let selectedClassTwo=Classes.Null
let selectedClassThree=Classes.Null
let displayedClass=Classes.Null.NAME
let currentClass = Classes.Null
let classOneIndex
let classTwoIndex
let classThreeIndex
var boop
const currentStats ={
  STR: 8,
  DEX: 8,
  CON: 8, 
  INT: 8,
  WIS: 8,
  CHA: 8,

}

const score    = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const addsub   = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
const modtable = [-5,-5,-4,-4,-3,-3,-2,-2,-1,-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10]