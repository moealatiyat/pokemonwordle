export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  color: string;
}

export const gen1Pokemon: Pokemon[] = [
  { id: 1, name: "bulbasaur", type: ["grass", "poison"], color: "green" },
  { id: 2, name: "ivysaur", type: ["grass", "poison"], color: "green" },
  { id: 3, name: "venusaur", type: ["grass", "poison"], color: "green" },
  { id: 4, name: "charmander", type: ["fire"], color: "red" },
  { id: 5, name: "charmeleon", type: ["fire"], color: "red" },
  { id: 6, name: "charizard", type: ["fire", "flying"], color: "red" },
  { id: 7, name: "squirtle", type: ["water"], color: "blue" },
  { id: 8, name: "wartortle", type: ["water"], color: "blue" },
  { id: 9, name: "blastoise", type: ["water"], color: "blue" },
  { id: 10, name: "caterpie", type: ["bug"], color: "green" },
  { id: 11, name: "metapod", type: ["bug"], color: "green" },
  { id: 12, name: "butterfree", type: ["bug", "flying"], color: "white" },
  { id: 13, name: "weedle", type: ["bug", "poison"], color: "brown" },
  { id: 14, name: "kakuna", type: ["bug", "poison"], color: "yellow" },
  { id: 15, name: "beedrill", type: ["bug", "poison"], color: "yellow" },
  { id: 16, name: "pidgey", type: ["normal", "flying"], color: "brown" },
  { id: 17, name: "pidgeotto", type: ["normal", "flying"], color: "brown" },
  { id: 18, name: "pidgeot", type: ["normal", "flying"], color: "brown" },
  { id: 19, name: "rattata", type: ["normal"], color: "purple" },
  { id: 20, name: "raticate", type: ["normal"], color: "brown" },
  { id: 21, name: "spearow", type: ["normal", "flying"], color: "brown" },
  { id: 22, name: "fearow", type: ["normal", "flying"], color: "brown" },
  { id: 23, name: "ekans", type: ["poison"], color: "purple" },
  { id: 24, name: "arbok", type: ["poison"], color: "purple" },
  { id: 25, name: "pikachu", type: ["electric"], color: "yellow" },
  { id: 26, name: "raichu", type: ["electric"], color: "yellow" },
  { id: 27, name: "sandshrew", type: ["ground"], color: "yellow" },
  { id: 28, name: "sandslash", type: ["ground"], color: "yellow" },
  { id: 29, name: "nidoran-f", type: ["poison"], color: "blue" },
  { id: 30, name: "nidorina", type: ["poison"], color: "blue" },
  { id: 31, name: "nidoqueen", type: ["poison", "ground"], color: "blue" },
  { id: 32, name: "nidoran-m", type: ["poison"], color: "purple" },
  { id: 33, name: "nidorino", type: ["poison"], color: "purple" },
  { id: 34, name: "nidoking", type: ["poison", "ground"], color: "purple" },
  { id: 35, name: "clefairy", type: ["fairy"], color: "pink" },
  { id: 36, name: "clefable", type: ["fairy"], color: "pink" },
  { id: 37, name: "vulpix", type: ["fire"], color: "red" },
  { id: 38, name: "ninetales", type: ["fire"], color: "yellow" },
  { id: 39, name: "jigglypuff", type: ["normal", "fairy"], color: "pink" },
  { id: 40, name: "wigglytuff", type: ["normal", "fairy"], color: "pink" },
  { id: 41, name: "zubat", type: ["poison", "flying"], color: "purple" },
  { id: 42, name: "golbat", type: ["poison", "flying"], color: "purple" },
  { id: 43, name: "oddish", type: ["grass", "poison"], color: "blue" },
  { id: 44, name: "gloom", type: ["grass", "poison"], color: "blue" },
  { id: 45, name: "vileplume", type: ["grass", "poison"], color: "red" },
  { id: 46, name: "paras", type: ["bug", "grass"], color: "red" },
  { id: 47, name: "parasect", type: ["bug", "grass"], color: "red" },
  { id: 48, name: "venonat", type: ["bug", "poison"], color: "purple" },
  { id: 49, name: "venomoth", type: ["bug", "poison"], color: "purple" },
  { id: 50, name: "diglett", type: ["ground"], color: "brown" },
  { id: 51, name: "dugtrio", type: ["ground"], color: "brown" },
  { id: 52, name: "meowth", type: ["normal"], color: "yellow" },
  { id: 53, name: "persian", type: ["normal"], color: "yellow" },
  { id: 54, name: "psyduck", type: ["water"], color: "yellow" },
  { id: 55, name: "golduck", type: ["water"], color: "blue" },
  { id: 56, name: "mankey", type: ["fighting"], color: "brown" },
  { id: 57, name: "primeape", type: ["fighting"], color: "brown" },
  { id: 58, name: "growlithe", type: ["fire"], color: "red" },
  { id: 59, name: "arcanine", type: ["fire"], color: "orange" },
  { id: 60, name: "poliwag", type: ["water"], color: "blue" },
  { id: 61, name: "poliwhirl", type: ["water"], color: "blue" },
  { id: 62, name: "poliwrath", type: ["water", "fighting"], color: "blue" },
  { id: 63, name: "abra", type: ["psychic"], color: "brown" },
  { id: 64, name: "kadabra", type: ["psychic"], color: "brown" },
  { id: 65, name: "alakazam", type: ["psychic"], color: "brown" },
  { id: 66, name: "machop", type: ["fighting"], color: "gray" },
  { id: 67, name: "machoke", type: ["fighting"], color: "gray" },
  { id: 68, name: "machamp", type: ["fighting"], color: "gray" },
  { id: 69, name: "bellsprout", type: ["grass", "poison"], color: "green" },
  { id: 70, name: "weepinbell", type: ["grass", "poison"], color: "green" },
  { id: 71, name: "victreebel", type: ["grass", "poison"], color: "green" },
  { id: 72, name: "tentacool", type: ["water", "poison"], color: "blue" },
  { id: 73, name: "tentacruel", type: ["water", "poison"], color: "blue" },
  { id: 74, name: "geodude", type: ["rock", "ground"], color: "brown" },
  { id: 75, name: "graveler", type: ["rock", "ground"], color: "brown" },
  { id: 76, name: "golem", type: ["rock", "ground"], color: "brown" },
  { id: 77, name: "ponyta", type: ["fire"], color: "yellow" },
  { id: 78, name: "rapidash", type: ["fire"], color: "yellow" },
  { id: 79, name: "slowpoke", type: ["water", "psychic"], color: "pink" },
  { id: 80, name: "slowbro", type: ["water", "psychic"], color: "pink" },
  { id: 81, name: "magnemite", type: ["electric", "steel"], color: "gray" },
  { id: 82, name: "magneton", type: ["electric", "steel"], color: "gray" },
  { id: 83, name: "farfetchd", type: ["normal", "flying"], color: "brown" },
  { id: 84, name: "doduo", type: ["normal", "flying"], color: "brown" },
  { id: 85, name: "dodrio", type: ["normal", "flying"], color: "brown" },
  { id: 86, name: "seel", type: ["water"], color: "white" },
  { id: 87, name: "dewgong", type: ["water", "ice"], color: "white" },
  { id: 88, name: "grimer", type: ["poison"], color: "purple" },
  { id: 89, name: "muk", type: ["poison"], color: "purple" },
  { id: 90, name: "shellder", type: ["water"], color: "purple" },
  { id: 91, name: "cloyster", type: ["water", "ice"], color: "purple" },
  { id: 92, name: "gastly", type: ["ghost", "poison"], color: "purple" },
  { id: 93, name: "haunter", type: ["ghost", "poison"], color: "purple" },
  { id: 94, name: "gengar", type: ["ghost", "poison"], color: "purple" },
  { id: 95, name: "onix", type: ["rock", "ground"], color: "gray" },
  { id: 96, name: "drowzee", type: ["psychic"], color: "yellow" },
  { id: 97, name: "hypno", type: ["psychic"], color: "yellow" },
  { id: 98, name: "krabby", type: ["water"], color: "red" },
  { id: 99, name: "kingler", type: ["water"], color: "red" },
  { id: 100, name: "voltorb", type: ["electric"], color: "red" },
  { id: 101, name: "electrode", type: ["electric"], color: "red" },
  { id: 102, name: "exeggcute", type: ["grass", "psychic"], color: "pink" },
  { id: 103, name: "exeggutor", type: ["grass", "psychic"], color: "yellow" },
  { id: 104, name: "cubone", type: ["ground"], color: "brown" },
  { id: 105, name: "marowak", type: ["ground"], color: "brown" },
  { id: 106, name: "hitmonlee", type: ["fighting"], color: "brown" },
  { id: 107, name: "hitmonchan", type: ["fighting"], color: "brown" },
  { id: 108, name: "lickitung", type: ["normal"], color: "pink" },
  { id: 109, name: "koffing", type: ["poison"], color: "purple" },
  { id: 110, name: "weezing", type: ["poison"], color: "purple" },
  { id: 111, name: "rhyhorn", type: ["ground", "rock"], color: "gray" },
  { id: 112, name: "rhydon", type: ["ground", "rock"], color: "gray" },
  { id: 113, name: "chansey", type: ["normal"], color: "pink" },
  { id: 114, name: "tangela", type: ["grass"], color: "blue" },
  { id: 115, name: "kangaskhan", type: ["normal"], color: "brown" },
  { id: 116, name: "horsea", type: ["water"], color: "blue" },
  { id: 117, name: "seadra", type: ["water"], color: "blue" },
  { id: 118, name: "goldeen", type: ["water"], color: "gold" },
  { id: 119, name: "seaking", type: ["water"], color: "gold" },
  { id: 120, name: "staryu", type: ["water"], color: "brown" },
  { id: 121, name: "starmie", type: ["water", "psychic"], color: "purple" },
  { id: 122, name: "mr-mime", type: ["psychic", "fairy"], color: "pink" },
  { id: 123, name: "scyther", type: ["bug", "flying"], color: "green" },
  { id: 124, name: "jynx", type: ["ice", "psychic"], color: "red" },
  { id: 125, name: "electabuzz", type: ["electric"], color: "yellow" },
  { id: 126, name: "magmar", type: ["fire"], color: "red" },
  { id: 127, name: "pinsir", type: ["bug"], color: "brown" },
  { id: 128, name: "tauros", type: ["normal"], color: "brown" },
  { id: 129, name: "magikarp", type: ["water"], color: "red" },
  { id: 130, name: "gyarados", type: ["water", "flying"], color: "blue" },
  { id: 131, name: "lapras", type: ["water", "ice"], color: "blue" },
  { id: 132, name: "ditto", type: ["normal"], color: "pink" },
  { id: 133, name: "eevee", type: ["normal"], color: "brown" },
  { id: 134, name: "vaporeon", type: ["water"], color: "blue" },
  { id: 135, name: "jolteon", type: ["electric"], color: "yellow" },
  { id: 136, name: "flareon", type: ["fire"], color: "red" },
  { id: 137, name: "porygon", type: ["normal"], color: "pink" },
  { id: 138, name: "omanyte", type: ["rock", "water"], color: "blue" },
  { id: 139, name: "omastar", type: ["rock", "water"], color: "blue" },
  { id: 140, name: "kabuto", type: ["rock", "water"], color: "brown" },
  { id: 141, name: "kabutops", type: ["rock", "water"], color: "brown" },
  { id: 142, name: "aerodactyl", type: ["rock", "flying"], color: "purple" },
  { id: 143, name: "snorlax", type: ["normal"], color: "black" },
  { id: 144, name: "articuno", type: ["ice", "flying"], color: "blue" },
  { id: 145, name: "zapdos", type: ["electric", "flying"], color: "yellow" },
  { id: 146, name: "moltres", type: ["fire", "flying"], color: "red" },
  { id: 147, name: "dratini", type: ["dragon"], color: "blue" },
  { id: 148, name: "dragonair", type: ["dragon"], color: "blue" },
  { id: 149, name: "dragonite", type: ["dragon", "flying"], color: "orange" },
  { id: 150, name: "mewtwo", type: ["psychic"], color: "purple" },
  { id: 151, name: "mew", type: ["psychic"], color: "pink" }
]; 