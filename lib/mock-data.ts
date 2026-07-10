import { CachedEvent } from "./types";

export const mockFightCard: CachedEvent = {
  eventId: "UFC_300",
  eventName: "UFC 300",
  eventDate: "2026-07-26T18:00:00Z",
  eventDateAEST: "Sun 26 Jul 2026, 2:00pm AEST",
  venue: "Madison Square Garden, New York",
  broadcast: "Main card ESPN+ 7pm AEST",
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
          rank: undefined,
          age: 36,
          recentFights: [
            {
              opponent: "Dustin Poirier",
              result: "L",
              method: "KO",
              year: 2021,
              weightClass: "Lightweight",
            },
            {
              opponent: "Dustin Poirier",
              result: "L",
              method: "Sub",
              year: 2021,
              weightClass: "Lightweight",
            },
            {
              opponent: "Donald Cerrone",
              result: "W",
              method: "KO",
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
          rank: 1,
          age: 33,
          recentFights: [
            {
              opponent: "Ilia Topuria",
              result: "L",
              method: "KO",
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
          rank: 5,
          age: 29,
          recentFights: [
            { opponent: "Dan Hooker", result: "W", method: "KO", year: 2024 },
            {
              opponent: "Beneil Dariush",
              result: "W",
              method: "Sub",
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
  ],
  generatedAt: Date.now() - 4 * 60 * 60 * 1000,
  _metadata: {
    generationDurationMs: 8500,
  },
};
