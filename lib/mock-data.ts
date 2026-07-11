import { CachedEvent } from "./types";

export const mockFightCard: CachedEvent = {
  eventId: "UFC_300",
  eventName: "UFC 300",
  eventDate: "2026-07-12T04:00:00Z",
  eventDateAEST: "Sun 12 Jul 2026, 2:00pm AEST",
  venue: "Madison Square Garden, New York",
  broadcast: "Prelims from 10am, main card 2pm AEST on ESPN+",
  cardSummary:
    "McGregor returns after five years to face Holloway in the main event. A brutal rematch between two legends with completely different careers in between. BSD brings the pressure to Paddy in the co-main. Sandhagen and Bautista is the real title eliminator. Kavanagh is the next big name at flyweight. Our Rob wins his light heavyweight debut on points.",
  nextEvent: {
    name: "UFC 301",
    date: "August 16, 2026",
  },
  fights: [
    {
      boutIndex: 0,
      boutType: "main event",
      rounds: 5,
      division: "Welterweight",
      notableFlag: "rematch",
      fighters: [
        {
          name: "Conor McGregor",
          nickname: "The Notorious",
          country: "Ireland",
          record: "22-6",
          uFCRecord: "9-4",
          heightCm: 175,
          reachCm: 188,
          stance: "Southpaw",
          rank: undefined,
          age: 36,
          recentFights: [
            {
              opponent: "Dustin Poirier",
              result: "L",
              method: "KO",
              round: 2,
              year: 2021,
              weightClass: "Lightweight",
            },
            {
              opponent: "Dustin Poirier",
              result: "L",
              method: "Sub",
              round: 1,
              year: 2021,
              weightClass: "Lightweight",
            },
            {
              opponent: "Donald Cerrone",
              result: "W",
              method: "KO",
              round: 1,
              year: 2020,
              weightClass: "Welterweight",
            },
            {
              opponent: "Nate Diaz",
              result: "L",
              method: "Decision",
              year: 2016,
              weightClass: "Lightweight",
            },
            {
              opponent: "Eddie Alvarez",
              result: "W",
              method: "KO",
              round: 2,
              year: 2016,
              weightClass: "Lightweight",
            },
          ],
        },
        {
          name: "Max Holloway",
          nickname: "Blessed",
          country: "USA",
          record: "27-9",
          uFCRecord: "24-9",
          heightCm: 180,
          reachCm: 175,
          stance: "Orthodox",
          rank: 1,
          age: 33,
          recentFights: [
            {
              opponent: "Ilia Topuria",
              result: "L",
              method: "KO",
              round: 3,
              year: 2024,
              weightClass: "Featherweight",
            },
            {
              opponent: "Charles Oliveira",
              result: "L",
              method: "Decision",
              year: 2024,
              weightClass: "Lightweight",
            },
            {
              opponent: "City Kickboxing",
              result: "W",
              method: "Decision",
              year: 2023,
              weightClass: "Lightweight",
            },
            {
              opponent: "Yair Rodriguez",
              result: "W",
              method: "Decision",
              year: 2023,
              weightClass: "Featherweight",
            },
            {
              opponent: "Calvin Kattar",
              result: "W",
              method: "Decision",
              year: 2021,
              weightClass: "Featherweight",
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Holloway by decision. Max is heavily favoured at -210, McGregor back at +175. The betting public is on Max.",
        sneakyAngle:
          "McGregor by KO early. His left hand is the great equaliser and Sean O'Malley has predicted a 12-second knockout.",
        recentForm:
          "McGregor has not fought since July 2021 when he snapped his leg against Dustin Poirier. He has lost three of his last four. Holloway has stayed busy against the absolute elite, including Ilia Topuria and a rematch with Charles Oliveira. He has spent five years fighting killers.",
        fightingStyle:
          "McGregor: counter-striking southpaw with the most famous left hand in the sport. Front-loads his fights, historically fades late. Holloway: volume machine with highest striking output in UFC history, iron chin, gets stronger as the fight goes on. Five rounds heavily favours him.",
        historyBetweenThem:
          "They fought in Boston in August 2013 when both were kids. McGregor won a unanimous decision, and he did it with a torn ACL for much of the fight. Both men are unrecognisable from that night.",
        weightClassMovement:
          "Fight is at welterweight, which suits two ageing legends who cannot be bothered cutting. Both are natural featherweights who have drifted up.",
        experienceAndRecord:
          "McGregor: 22-6, aged 37, former two-division champion, the first man to hold two UFC belts at once. Holloway: 27-9, former featherweight champion and BMF champion, one of the most respected fighters alive.",
        popularityAndPopCulture:
          "McGregor is the biggest star in the history of the sport. Proper 12 whiskey, Mayweather boxing match, Road House remake with Jake Gyllenhaal. He lost a civil sexual assault lawsuit in Ireland and at the face-off ripped the sunglasses off Holloway's face. Holloway is universally loved Hawaiian family man, famous for pointing to the ground and swinging in the final seconds.",
        oneLiner:
          "Five years of ring rust against the busiest man in the sport. If Conor does not land the left hand in two rounds, Max drowns him.",
        oneLinnerSubstantiation: [
          // Fast facts
          "McGregor lost 3 of his last 4 fights before this",
          "Holloway has 24 UFC wins vs McGregor's 9",
          "McGregor hasn't fought in 5 years (since July 2021)",
          // Strategic context
          "Five-round fights heavily favour cardio machines like Holloway",
          "McGregor's power is a first-two-rounds weapon; Holloway gets stronger late",
          "Holloway's striking volume (highest in UFC history) drowns strikers who can't sustain pace",
        ],
      },
    },
    {
      boutIndex: 1,
      boutType: "co-main",
      rounds: 3,
      division: "Lightweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Benoît Saint Denis",
          nickname: "God of War",
          country: "France",
          record: "17-3",
          uFCRecord: "8-2",
          heightCm: 180,
          reachCm: 185,
          stance: "Southpaw",
          rank: 5,
          age: 29,
          recentFights: [
            { opponent: "Dan Hooker", result: "W", method: "KO", round: 1, year: 2024 },
            {
              opponent: "Beneil Dariush",
              result: "W",
              method: "Sub",
              round: 2,
              year: 2024,
            },
            {
              opponent: "Ottman Azaitar",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
        {
          name: "Paddy Pimblett",
          nickname: "The Baddy",
          country: "UK",
          record: "23-5",
          uFCRecord: "7-2",
          heightCm: 178,
          reachCm: 185,
          stance: "Orthodox",
          rank: 6,
          age: 28,
          recentFights: [
            {
              opponent: "Justin Gaethje",
              result: "L",
              method: "Decision",
              year: 2026,
            },
            {
              opponent: "Jed Harrison",
              result: "W",
              method: "Decision",
              year: 2025,
            },
            {
              opponent: "King Green",
              result: "W",
              method: "KO",
              round: 1,
              year: 2024,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Saint Denis, probably by finish. He is around -140, Paddy +124. Live underdog though: several pundits are backing Paddy's toughness.",
        sneakyAngle: "Pimblett's jiu-jitsu and scrambles could drag this deep.",
        recentForm:
          "BSD has won four straight, all finishes. Pimblett lost a decision to champion Justin Gaethje in an interim title fight, his first ever UFC loss.",
        fightingStyle:
          "BSD: relentless French pressure fighter, ex-special forces soldier, hunts finishes everywhere. Paddy: scouser with elite jiu-jitsu and scrambles, improved boxing, size for the division.",
        historyBetweenThem:
          "Never fought, but there is genuine needle. Plenty of trash talk between the two camps this week.",
        experienceAndRecord:
          "BSD ranked #5, Pimblett #6. Winner is right in the title conversation.",
        popularityAndPopCulture:
          "Paddy is massively more famous: the haircut, the scouse accent, the weight blowouts, huge on YouTube. BSD is respected but nowhere near the same profile.",
        oneLiner:
          "The loudest man in the division against a French ex-commando who has finished four blokes straight. Style says BSD, chin says Paddy.",
        oneLinnerSubstantiation: [
          "BSD has 4 straight finishes",
          "Paddy showed granite chin against Gaethje",
          "BSD is relentless pressure fighter",
          "Paddy's jiu-jitsu is elite",
        ],
      },
    },
    {
      boutIndex: 2,
      boutType: "main card",
      rounds: 3,
      division: "Bantamweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Cory Sandhagen",
          nickname: "The Sandman",
          country: "USA",
          record: "18-6",
          uFCRecord: "11-6",
          heightCm: 180,
          reachCm: 178,
          stance: "Switch",
          rank: 4,
          age: 32,
          recentFights: [
            {
              opponent: "Deiveson Figueiredo",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Merab Dvalishvili",
              result: "L",
              method: "Decision",
              year: 2024,
            },
          ],
        },
        {
          name: "Mario Bautista",
          nickname: "The Gladiator",
          country: "Mexico",
          record: "17-3",
          uFCRecord: "6-2",
          heightCm: 168,
          reachCm: 173,
          stance: "Orthodox",
          rank: 12,
          age: 28,
          recentFights: [
            { opponent: "José Aldo", result: "W", method: "Decision", year: 2024 },
            {
              opponent: "Umar Nurmagomedov",
              result: "L",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Patchy Mix",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Coin flip, lean Sandhagen on class. He is -135, Bautista +114, and plenty of sharps are on Bautista.",
        sneakyAngle:
          "Bautista's wrestling could surprise if Sandhagen is caught early.",
        recentForm:
          "Sandhagen bounced back from a title-fight loss to Merab with a brutal TKO. Bautista has won nine of his last ten.",
        fightingStyle:
          "Sandhagen: one of the most creative strikers in the sport, flying knees, spinning stuff. Bautista: pressure, clinch grappling and takedowns.",
        historyBetweenThem:
          "They have fought. Sandhagen submitted Bautista in Bautista's UFC debut back in 2019. Both are so different now it hardly feels like a rematch.",
        experienceAndRecord:
          "Sandhagen is the bigger name from his title runs. Winner is probably next in line at bantamweight.",
        popularityAndPopCulture:
          "No drama on either side, both pure professionals.",
        oneLiner:
          "Sandhagen already tapped him once, but Bautista has won nine of ten since. Real title eliminator.",
        oneLinnerSubstantiation: [
          "Sandhagen is more experienced at title level",
          "Bautista's recent form is superior (9-1)",
          "Rematch but both fighters evolved significantly",
          "Winner gets title shot next",
        ],
      },
    },
    {
      boutIndex: 3,
      boutType: "main card",
      rounds: 3,
      division: "Flyweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Kayla Harrison",
          nickname: "The Prodigy",
          country: "USA",
          record: "16-1",
          uFCRecord: "5-1",
          heightCm: 173,
          reachCm: 175,
          stance: "Orthodox",
          rank: 3,
          age: 34,
          recentFights: [
            {
              opponent: "Kara-Jane Murray",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Erin Blanchfield",
              result: "L",
              method: "Submission",
              year: 2023,
            },
            {
              opponent: "Raquel Pennington",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
        {
          name: "Alexa Grasso",
          nickname: "The Queen",
          country: "Mexico",
          record: "18-3",
          uFCRecord: "8-3",
          heightCm: 165,
          reachCm: 168,
          stance: "Orthodox",
          rank: 2,
          age: 32,
          recentFights: [
            {
              opponent: "Valentina Shevchenko",
              result: "D",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Valentina Shevchenko",
              result: "W",
              method: "Submission",
              year: 2023,
            },
            {
              opponent: "Viviane Pereira",
              result: "W",
              method: "TKO",
              year: 2022,
            },
          ],
        },
      ],
      editorial: {
        thePick: "Grasso by submission. She beat Shevchenko twice and is -180.",
        sneakyAngle: "Harrison's judo is elite and she has length advantage.",
        recentForm:
          "Grasso is the reigning champion with back-to-back wins over Shevchenko. Harrison had a setback against Blanchfield but has bounced back.",
        fightingStyle:
          "Grasso: elite striker with championship experience, submits when needed. Harrison: judo specialist with power, aggressive grappler.",
        historyBetweenThem: "First meeting.",
        experienceAndRecord:
          "Grasso is the champion. Harrison is the biggest threat in the division.",
        popularityAndPopCulture:
          "Grasso is massively popular in Mexico and Latin America. Harrison brings Olympic pedigree.",
        oneLiner:
          "Champion experience vs undefeated striking. Grasso's cunning vs Harrison's raw athleticism.",
        oneLinnerSubstantiation: [
          "Grasso is defending champion",
          "Harrison is undefeated in UFC",
          "Grasso's experience edge",
          "Harrison's athletic potential is off the charts",
        ],
      },
    },
    {
      boutIndex: 4,
      boutType: "featured prelim",
      rounds: 3,
      division: "Light Heavyweight",
      notableFlag: "debut",
      fighters: [
        {
          name: "Robert Whittaker",
          nickname: "The Reaper",
          country: "Australia",
          record: "28-7",
          uFCRecord: "16-5",
          heightCm: 183,
          reachCm: 186,
          stance: "Orthodox",
          rank: 8,
          age: 35,
          recentFights: [
            {
              opponent: "Dricus du Plessis",
              result: "L",
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Paulo Costa",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Kelvin Gastelum",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
        {
          name: "Jamahal Hill",
          nickname: "Sweet Dreams",
          country: "USA",
          record: "14-1",
          uFCRecord: "8-1",
          heightCm: 193,
          reachCm: 200,
          stance: "Southpaw",
          rank: undefined,
          age: 32,
          recentFights: [
            {
              opponent: "Alex Pereira",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Anthony Smith",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Glover Teixeira",
              result: "W",
              method: "Submission",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick: "Hill by knockout. He is -200 and has knockout power.",
        sneakyAngle: "Whittaker's experience and toughness could grind.",
        recentForm:
          "Hill is on a winning streak with finishes. Whittaker lost his last fight to du Plessis but is moving up to light heavyweight.",
        fightingStyle:
          "Hill: elite striking with power, former champion. Whittaker: well-rounded, great cardio, volume striker.",
        historyBetweenThem: "First meeting.",
        experienceAndRecord:
          "Whittaker is moving up in weight. Hill is the light heavyweight champion.",
        popularityAndPopCulture:
          "Both are fan favourites. Whittaker is beloved in Australia.",
        oneLiner:
          "Champion power puncher against legendary middleweight in debut at 205.",
        oneLinnerSubstantiation: [
          "Hill is the current champion",
          "Hill has significant knockout power",
          "Whittaker is moving up in weight for first time",
          "This determines if Hill is real or not",
        ],
      },
    },
    {
      boutIndex: 5,
      boutType: "prelim",
      rounds: 3,
      division: "Welterweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Jack Della Maddalena",
          nickname: "The Hammer",
          country: "Australia",
          record: "15-0",
          uFCRecord: "6-0",
          heightCm: 180,
          reachCm: 178,
          stance: "Orthodox",
          rank: undefined,
          age: 26,
          recentFights: [
            {
              opponent: "Jared Gooden",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Tristan Connelly",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Viacheslav Borshchenko",
              result: "W",
              method: "Submission",
              year: 2024,
            },
          ],
        },
        {
          name: "Neil Magny",
          nickname: "The Prospect",
          country: "USA",
          record: "29-11",
          uFCRecord: "23-9",
          heightCm: 191,
          reachCm: 203,
          stance: "Orthodox",
          rank: undefined,
          age: 36,
          recentFights: [
            {
              opponent: "Gilbert Burns",
              result: "L",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Michael Page",
              result: "L",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Shawn Brady",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick: "Della Maddalena by knockout. He is -280 and undefeated.",
        sneakyAngle: "Magny's experience and distance management could disrupt.",
        recentForm:
          "Della Maddalena is undefeated with all finishes. Magny is on a skid.",
        fightingStyle:
          "Della Maddalena: aggressive pressure, heavy hands, young and hungry. Magny: defensive, uses distance, grinds.",
        historyBetweenThem: "First meeting.",
        experienceAndRecord:
          "Della Maddalena is the prospect, Magny is the veteran looking for a win.",
        popularityAndPopCulture:
          "Della Maddalena is rising fast. Magny is respected vet.",
        oneLiner:
          "Undefeated young gun with finishing power against veteran survivor.",
        oneLinnerSubstantiation: [
          "Della Maddalena is 15-0 overall",
          "All 6 UFC wins are finishes",
          "Magny is 0-2 in last fights",
          "Clear talent gap favours Australian",
        ],
      },
    },
    {
      boutIndex: 6,
      boutType: "prelim",
      rounds: 3,
      division: "Featherweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Ilia Topuria",
          nickname: "El Matador",
          country: "Spain",
          record: "15-0",
          uFCRecord: "8-0",
          heightCm: 170,
          reachCm: 175,
          stance: "Orthodox",
          rank: undefined,
          age: 27,
          recentFights: [
            {
              opponent: "Max Holloway",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Alexander Volkanovski",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Yair Rodriguez",
              result: "W",
              method: "TKO",
              year: 2023,
            },
          ],
        },
        {
          name: "Arnold Allen",
          nickname: "The Pitbull",
          country: "UK",
          record: "19-1",
          uFCRecord: "10-1",
          heightCm: 173,
          reachCm: 178,
          stance: "Southpaw",
          rank: undefined,
          age: 30,
          recentFights: [
            {
              opponent: "Giga Chikadze",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Calvin Kattar",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Dan Ige",
              result: "W",
              method: "TKO",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick: "Topuria by submission. He is -320, the champion.",
        sneakyAngle: "Allen's durability and wrestling could grind rounds.",
        recentForm:
          "Topuria is undefeated and just knocked out Holloway. Allen has won three straight.",
        fightingStyle:
          "Topuria: striking specialist, devastating power, champion. Allen: all-rounder with wrestling.",
        historyBetweenThem: "First meeting.",
        experienceAndRecord:
          "Topuria is the featherweight champion. Allen is the challenger.",
        popularityAndPopCulture:
          "Topuria is a Spanish sensation. Allen is respected vet.",
        oneLiner:
          "Undefeated champion with scary striking vs durable challenger.",
        oneLinnerSubstantiation: [
          "Topuria just knocked out Holloway",
          "Topuria is undefeated",
          "Allen is on a win streak",
          "Champion belt on the line",
        ],
      },
    },
    {
      boutIndex: 7,
      boutType: "prelim",
      rounds: 3,
      division: "Middleweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Sean Strickland",
          nickname: "Tarzan",
          country: "USA",
          record: "29-6",
          uFCRecord: "15-4",
          heightCm: 185,
          reachCm: 193,
          stance: "Orthodox",
          rank: undefined,
          age: 33,
          recentFights: [
            {
              opponent: "Dricus du Plessis",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Paulo Costa",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Jared Cannonier",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
        {
          name: "Nassourdine Imavov",
          nickname: "Russian Hammer",
          country: "Russia",
          record: "14-3",
          uFCRecord: "6-3",
          heightCm: 191,
          reachCm: 191,
          stance: "Orthodox",
          rank: undefined,
          age: 28,
          recentFights: [
            {
              opponent: "Roman Kopylov",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Brendan Allen",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Warlley Alves",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick: "Strickland by decision. He is slightly favoured at -115.",
        sneakyAngle: "Imavov's wrestling could turn this into a grappling match.",
        recentForm:
          "Both are on winning streaks. Strickland is the bigger name.",
        fightingStyle:
          "Strickland: volume striker, cardio machine. Imavov: well-rounded with wrestling.",
        historyBetweenThem: "First meeting.",
        experienceAndRecord:
          "Strickland is more experienced at high levels. Imavov is rising.",
        popularityAndPopCulture:
          "Strickland is known for his outspoken nature. Imavov is quiet pro.",
        oneLiner:
          "Volume striker vs well-rounded rising prospect in middleweight showcase.",
        oneLinnerSubstantiation: [
          "Strickland just beat du Plessis",
          "Imavov's wrestling is getting better",
          "Both are on hot streaks",
          "Winner could get title shot",
        ],
      },
    },
  ],
  generatedAt: Date.now() - 4 * 60 * 60 * 1000,
  _metadata: {
    generationDurationMs: 8500,
  },
};
