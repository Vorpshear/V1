RaceList["Behemoth"] = {
	regExpSearch : /behemoth/i,
	name : "Behemoth",
	source : ["HB", 0],
	plural : "Behemoths",
	size : 4,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", "Undercommon", "Giant"],
	vision : [["Darkvision", 60]],
	abilitySave : 1, 3,
	weapons : ["Behemoth Slam"],
	dmgres : ["Necrotic", "Cold"],
	savetxt : { adv_vs : ["frightened"] },
	toolProfs : ["Mason's tools"],
	armorOptions : {
		regExpSearch : /^((?=.*umbral)|(?=.*(hide)).*$/i,
		name : "Umbral Hide",
		source : ["HB", 0],
		ac : 14
	},
	armorProfs : [false, false, false, false],
	armorAdd : "Umbral Hide",
	weaponProfs : [false, false, ["Glaive", "Pike", "Spear", "Halberd"]],
	skills : ["Athletics"],
	age : " reach adulthood around 3 years and live around 3000 years",
	height : " range from 7 to 8 feet tall)",
	weight : " weigh around 400 to 500 lb.",
	improvements : "Behemoth: +3 Strength, +1 Constitution;",
	scores : [3, 0, 1, 0, 0, 0],
	trait : "Behemoth (+3 Strength, +1 Constitution)" + (typePF ? "\n" : "") + "\nUmbral Regeneration: Once per short rest, I can regenerate 1d12 + my Con" + (typePF ? "" : "stitution") + " modifier." + (typePF ? "\n" : "") + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + (typePF ? "\n" : "") + "\nBrutality: critical strikes with melee weapons or unarmed strikes occur on a hit roll of 19 or 20.\n Unmatched Strength: your strength can start at 18 and be raised to 24 through ASI's.",
	carryingCapacity : 2,
	};
	
	
WeaponsList["Behemoth Slam"] = {
	regExpSearch : /^(?=.*behemoth)(?=.*\bslam?\b).*$/i,
	name : "Behemoth Slam",
	source : ["behemoth", 0],
	ability : 1,
	type : "Natural",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true,
	};

	
features : { "Umbral Regeneration" : {
		name : "Umbral Regeneration",
		minlevel : 1,
		usages : 1,
		recovery : "short rest",
		tooltip : "",
		action : ["reaction", ""]
		},
},
		
