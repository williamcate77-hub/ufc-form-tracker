import { CachedEvent } from "./types";

export const mockFightCard: CachedEvent = {
  eventId: "UFC_329",
  eventName: "UFC 329",
  eventDate: "2026-07-11T22:00:00Z",
  eventDateAEST: "Sat 11 Jul 2026, 4:00pm AEST",
  venue: "T-Mobile Arena, Las Vegas, Nevada",
  broadcast: "Main card PPV 10am AEST Sunday",
  cardSummary:
    "McGregor returns after five years to face Holloway in a rematch that could reshape the welterweight division. Saint Denis brings relentless pressure to Pimblett in the co-main. Sandhagen and Bautista clash with title implications at bantamweight. Whittaker makes his light heavyweight debut against Krylov. Gable Steveson makes his UFC debut as an Olympic wrestler.",
  nextEvent: {
    name: "UFC 330",
    date: "August 23, 2026",
  },
  fights: [
    {
      boutIndex: 0,
      boutType: "main card",
      rounds: 3,
      division: "Lightweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "King Green",
          nickname: "The Vet",
          country: "USA",
          record: "35-17-1",
          uFCRecord: "8-5",
          rank: undefined,
          age: 39,
          recentFights: [
            {
              opponent: "Francisco Trinaldo",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Jared Gordon",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Natan Levy",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Gleison Tibau",
              result: "L",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Raul Rivas",
              result: "W",
              method: "KO",
              year: 2023,
            },
          ],
        },
        {
          name: "Terrance McKinney",
          nickname: "The Badlands",
          country: "USA",
          record: "18-8",
          uFCRecord: "6-4",
          rank: undefined,
          age: 28,
          recentFights: [
            {
              opponent: "Bobby Green",
              result: "L",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Jai Herbert",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Grant Dawson",
              result: "L",
              method: "Submission",
              year: 2023,
            },
            {
              opponent: "Rowe",
              result: "W",
              method: "KO",
              year: 2023,
            },
            {
              opponent: "Nathan Leon",
              result: "W",
              method: "KO",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "McKinney by first-round finish or Green on points. Hinges entirely on the opening two minutes.",
        sneakyAngle:
          "Green's experience and distance management could disrupt McKinney's early rush.",
        recentForm:
          "McKinney has finished 17 of his 18 wins in round one. Green is riding a three-fight win streak at 39 years old.",
        fightingStyle:
          "McKinney: explosive early pace, devastating in the first round, fades if it goes long. Green: veteran savvy, point fighting, durable.",
        historyBetweenThem:
          "First meeting.",
        experienceAndRecord:
          "Green is 39-year-old veteran on three-fight streak. McKinney is young knockout artist hunting fourth straight.",
        popularityAndPopCulture:
          "Green is a beloved journeyman. McKinney is rising hype prospect.",
        oneLiner:
          "Perfect main card opener. Someone is getting hurt or someone is getting schooled.",
        oneLinnerSubstantiation: [
          "McKinney has finished 17 of 18 wins in round one",
          "If it goes long, McKinney fades badly",
          "Green on three-fight win streak",
          "Different eras colliding",
        ],
      },
    },
    {
      boutIndex: 1,
      boutType: "main card",
      rounds: 3,
      division: "Flyweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Brandon Royval",
          nickname: "The Rooster",
          country: "USA",
          record: "17-9",
          uFCRecord: "8-5",
          rank: 4,
          age: 34,
          recentFights: [
            {
              opponent: "Tatsuro Taira",
              result: "L",
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Matheus Nicolau",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Kai Kara-France",
              result: "L",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Jalin Turner",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Alex Perez",
              result: "W",
              method: "Submission",
              year: 2022,
            },
          ],
        },
        {
          name: "Lone'er Kavanagh",
          nickname: "The London Striker",
          country: "UK",
          record: "10-1",
          uFCRecord: "3-1",
          rank: 6,
          age: 25,
          recentFights: [
            {
              opponent: "Cody Garbrandt",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Alex Caceres",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Seungwoo Choi",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Mike Breeden",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Miguel Madeira",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Kavanagh on points. The young gun should out-strike the fading contender.",
        sneakyAngle:
          "Royval's submission game could catch Kavanagh if he gets tired.",
        recentForm:
          "Royval is 17-9 with recent losses. Kavanagh is 10-1 and climbing fast.",
        fightingStyle:
          "Royval: submission specialist, former title challenger, showing wear. Kavanagh: crisp London striker, excellent pace.",
        historyBetweenThem:
          "First meeting.",
        experienceAndRecord:
          "Changing of the guard fight at flyweight. Royval was a contender, Kavanagh is the future.",
        popularityAndPopCulture:
          "Royval is respected veteran. Kavanagh is exciting prospect.",
        oneLiner:
          "Classic changing of the guard at flyweight. Young pace against fading contender.",
        oneLinnerSubstantiation: [
          "Royval was title challenger but showing wear",
          "Kavanagh is 10-1 with only losses to elite",
          "Kavanagh's striking is crisp and clean",
          "Flyweights deliver pace from first bell",
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
              opponent: "Merab Dvalishvili",
              result: "L",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Deiveson Figueiredo",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Song Yadong",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Dominick Cruz",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Sean O'Malley",
              result: "L",
              method: "Decision",
              year: 2023,
            },
          ],
        },
        {
          name: "Mario Bautista",
          nickname: "The Gladiator",
          country: "Mexico",
          record: "17-3",
          uFCRecord: "6-2",
          rank: 7,
          age: 28,
          recentFights: [
            {
              opponent: "José Aldo",
              result: "W",
              method: "Decision",
              year: 2024,
            },
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
            {
              opponent: "Montel Jackson",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Anderson dos Santos",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Sandhagen on points, but only just. Genuine coin flip based on form. Bautista has won nine of his last ten.",
        sneakyAngle:
          "Bautista's wrestling and momentum could upset the more technical Sandhagen.",
        recentForm:
          "Sandhagen is returning after title shot loss. Bautista has won nine of ten.",
        fightingStyle:
          "Sandhagen: creative striker, one of the best technical strikers in the division. Bautista: pressure, wrestling, improving boxing.",
        historyBetweenThem:
          "They have fought. Sandhagen submitted Bautista in Bautista's UFC debut back in 2019. Both are completely different fighters now.",
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
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Ottman Azaitar",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Giga Chikadze",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Nasrat Haqparast",
              result: "W",
              method: "KO",
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
              opponent: "King Green",
              result: "W",
              method: "Decision",
              year: 2025,
            },
            {
              opponent: "Jed Harrison",
              result: "W",
              method: "Decision",
              year: 2025,
            },
            {
              opponent: "Ade Fentress",
              result: "W",
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Bobby Green",
              result: "W",
              method: "Decision",
              year: 2024,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Saint Denis by late stoppage. He is the more violent finisher and Pimblett's defence gets loose when tired.",
        sneakyAngle: "Pimblett's jiu-jitsu and scrambles could drag this deep.",
        recentForm:
          "Saint Denis has won four straight, all finishes. Pimblett lost to champion Gaethje in January but this is ranked matchup.",
        fightingStyle:
          "Saint Denis: relentless French pressure fighter, ex-special forces soldier, hunts finishes everywhere. Pimblett: elite jiu-jitsu and scrambles, improved boxing, durable.",
        historyBetweenThem:
          "Never fought, but there is genuine needle. Plenty of trash talk between the two camps.",
        experienceAndRecord:
          "Saint Denis ranked #5, Pimblett #6. Winner stays in the title picture.",
        popularityAndPopCulture:
          "Paddy is massively more famous: the haircut, the scouse accent, huge on YouTube. Saint Denis is respected but nowhere near the same profile.",
        oneLiner:
          "The loudest man in the division against a French ex-commando who has finished four blokes straight. Expect chaos.",
        oneLinnerSubstantiation: [
          "Saint Denis has 4 straight finishes",
          "Paddy showed granite chin against Gaethje",
          "Saint Denis is relentless pressure fighter",
          "Paddy's jiu-jitsu is elite, scrambles are dangerous",
        ],
      },
    },
    {
      boutIndex: 4,
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
          age: 37,
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
              method: "Submission",
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
          rank: undefined,
          age: 34,
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
              opponent: "Yair Rodriguez",
              result: "W",
              method: "Decision",
              year: 2023,
              weightClass: "Featherweight",
            },
            {
              opponent: "City Kickboxing",
              result: "W",
              method: "Decision",
              year: 2023,
              weightClass: "Lightweight",
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
          "Holloway on points, and it is not a coin flip. This is a mismatch on activity alone.",
        sneakyAngle:
          "McGregor by KO early. His left hand is the great equaliser if he lands it in the first two rounds.",
        recentForm:
          "McGregor has not fought since July 2021 when he snapped his leg against Poirier. He has lost three of his last four. Holloway has fought elite blokes non-stop.",
        fightingStyle:
          "McGregor: counter-striking southpaw with the most famous left hand in the sport. Front-loads his fights, fades late. Holloway: volume machine with highest striking output in UFC history, iron chin, gets stronger as the fight goes on.",
        historyBetweenThem:
          "They fought in Boston in August 2013 when both were kids. McGregor won a unanimous decision, and he did it with a torn ACL for much of the fight. Both men are unrecognisable from that night.",
        weightClassMovement:
          "Fight is at welterweight, which suits two ageing fighters who cannot be bothered cutting. Both are natural featherweights who have drifted up.",
        experienceAndRecord:
          "McGregor: 22-6, aged 37, former two-division champion, the first man to hold two UFC belts at once. Holloway: 27-9, former featherweight champion, one of the most respected fighters alive.",
        popularityAndPopCulture:
          "McGregor is the biggest star in the sport's history. Holloway is universally loved Hawaiian family man, famous for pointing to the ground and swinging late.",
        oneLiner:
          "Five years of ring rust against the busiest man in the sport. If Conor does not land the left hand in two rounds, Max drowns him.",
        oneLinnerSubstantiation: [
          "McGregor lost 3 of his last 4 fights",
          "Holloway has 24 UFC wins vs McGregor's 9",
          "McGregor hasn't fought in 5 years (since July 2021)",
          "Five-round fights heavily favour cardio machines like Holloway",
          "McGregor's power is a first-two-rounds weapon; Holloway gets stronger late",
          "Holloway's striking volume drowns strikers who can't sustain pace",
        ],
      },
    },
    {
      boutIndex: 5,
      boutType: "featured prelim",
      rounds: 3,
      division: "Light Heavyweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Robert Whittaker",
          nickname: "The Reaper",
          country: "Australia",
          record: "27-9",
          uFCRecord: "16-5",
          rank: undefined,
          age: 36,
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
            {
              opponent: "Marvin Vettori",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Geraldo Alves",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
        {
          name: "Nikita Krylov",
          nickname: "The Bully",
          country: "Canada",
          record: "31-11",
          uFCRecord: "11-8",
          rank: 14,
          age: 35,
          recentFights: [
            {
              opponent: "Jailton Almeida",
              result: "L",
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Tyson Pedro",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Michal Oleksiejczuk",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Magomed Ankalaev",
              result: "L",
              method: "Submission",
              year: 2023,
            },
            {
              opponent: "Azamat Murzakanov",
              result: "W",
              method: "Submission",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Whittaker on points. Faster, sharper striker, and Krylov's durability has slipped.",
        sneakyAngle:
          "Krylov's wrestling and early aggression could catch Whittaker moving up.",
        recentForm:
          "Whittaker is the former middleweight champion. Krylov is ranked 14th at light heavyweight.",
        fightingStyle:
          "Whittaker: well-rounded, great cardio, excellent striking. Krylov: brawler with wrestling, dangerous early.",
        historyBetweenThem:
          "First meeting. Whittaker's light heavyweight debut after full career at middleweight.",
        experienceAndRecord:
          "Whittaker is Australia's best ever fighter. Krylov is solid light heavyweight vet.",
        popularityAndPopCulture:
          "Whittaker is beloved in Australia. Krylov is respected vet.",
        oneLiner:
          "Former middleweight champion makes light heavyweight debut against solid veteran.",
        oneLinnerSubstantiation: [
          "Whittaker is the former middleweight champion",
          "Whittaker hasn't fought at 205 since 2013",
          "Whittaker's cardio is elite",
          "Krylov is dangerous early",
        ],
      },
    },
    {
      boutIndex: 6,
      boutType: "prelim",
      rounds: 3,
      division: "Heavyweight",
      notableFlag: "debut",
      fighters: [
        {
          name: "Gable Steveson",
          nickname: "The Gold Medal",
          country: "USA",
          record: "3-0",
          uFCRecord: "0-0",
          rank: undefined,
          age: 25,
          recentFights: [
            {
              opponent: "Jared Vanderaa",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Chase Sherman",
              result: "W",
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Greg Hardy",
              result: "W",
              method: "TKO",
              year: 2023,
            },
          ],
        },
        {
          name: "Elisha Ellison",
          nickname: "The Soldier",
          country: "USA",
          record: "5-2",
          uFCRecord: "1-2",
          rank: undefined,
          age: 30,
          recentFights: [
            {
              opponent: "Sergei Pavlovich",
              result: "L",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Alexander Romanov",
              result: "L",
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Don'Tale Mayes",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Steveson by first-round finish. He is an Olympic gold medal wrestler mentored by Jon Jones.",
        sneakyAngle:
          "Ellison has taken tough assignments and survived. He could disrupt early.",
        recentForm:
          "Steveson is 3-0 with massive hype. Ellison is a decorated Army veteran on short notice.",
        fightingStyle:
          "Steveson: Olympic wrestler with Jon Jones mentorship, massive size and power. Ellison: tough soldier, experienced grappler.",
        historyBetweenThem:
          "First meeting. Late opponent change for this fight.",
        experienceAndRecord:
          "Steveson is an Olympic star making UFC debut with massive hype. Ellison is taking the toughest assignment.",
        popularityAndPopCulture:
          "Steveson is the biggest hype of the night. Ellison is a true soldier.",
        oneLiner:
          "Steveson's UFC debut with Olympic pedigree against Army veteran.",
        oneLinnerSubstantiation: [
          "Steveson is Olympic gold medal wrestler",
          "Mentored by Jon Jones",
          "Massive hype for this fighter",
          "Ellison taking short-notice tough assignment",
        ],
      },
    },
    {
      boutIndex: 7,
      boutType: "prelim",
      rounds: 3,
      division: "Bantamweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Cody Garbrandt",
          nickname: "No Love",
          country: "USA",
          record: "15-7",
          uFCRecord: "11-6",
          rank: undefined,
          age: 32,
          recentFights: [
            {
              opponent: "Adrian Yanez",
              result: "L",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Said Nurmagomedov",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Rob Font",
              result: "L",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Devin Mahoney",
              result: "W",
              method: "KO",
              year: 2023,
            },
            {
              opponent: "Marlon Vera",
              result: "W",
              method: "Decision",
              year: 2022,
            },
          ],
        },
        {
          name: "Adrian Yanez",
          nickname: "The Prince",
          country: "USA",
          record: "17-6-1",
          uFCRecord: "9-3-1",
          rank: undefined,
          age: 29,
          recentFights: [
            {
              opponent: "Cody Garbrandt",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Paiva",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Song Yadong",
              result: "W",
              method: "KO",
              year: 2023,
            },
            {
              opponent: "Dominick Cruz",
              result: "L",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Julio Arce",
              result: "W",
              method: "KO",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Yanez by knockout. Both are knockout artists but Garbrandt's chin has gone.",
        sneakyAngle:
          "Garbrandt's boxing skills could frustrate Yanez if he stays off the gas.",
        recentForm:
          "Yanez is fresher with recent knockout wins. Garbrandt is a former champion well past his peak.",
        fightingStyle:
          "Yanez: knockout artist, aggressive strikes, sharp timing. Garbrandt: skilled boxer, chin issues, former champion.",
        historyBetweenThem:
          "First meeting.",
        experienceAndRecord:
          "Garbrandt is a former bantamweight champion. Yanez is the fresher puncher.",
        popularityAndPopCulture:
          "Garbrandt is beloved for his heart. Yanez is rising prospect.",
        oneLiner:
          "Knockout artist vs former champion whose chin has gone. Do not blink.",
        oneLinnerSubstantiation: [
          "Yanez is knockout artist",
          "Garbrandt's chin has deteriorated",
          "Both are aggressive strikers",
          "Explosive firefight expected",
        ],
      },
    },
    {
      boutIndex: 8,
      boutType: "prelim",
      rounds: 3,
      division: "Featherweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Luke Riley",
          nickname: "The Scouser",
          country: "UK",
          record: "13-0",
          uFCRecord: "3-0",
          rank: undefined,
          age: 27,
          recentFights: [
            {
              opponent: "Makwan Amirkhani",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Eduardo Garagorri",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Seungwoo Choi",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Rodrigo Aspecto",
              result: "W",
              method: "KO",
              year: 2023,
            },
            {
              opponent: "Antonio Esteban Osuna",
              result: "W",
              method: "KO",
              year: 2023,
            },
          ],
        },
        {
          name: "Kai Kamaka III",
          nickname: "The Hawaiian",
          country: "USA",
          record: "18-7-1",
          uFCRecord: "6-5",
          rank: undefined,
          age: 31,
          recentFights: [
            {
              opponent: "Aden Walker",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Garrett Armfield",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Marcus McGhee",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Michael Trizano",
              result: "L",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Jeremiah Bulaong",
              result: "W",
              method: "TKO",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Riley on points. The undefeated Scouser keeps rolling.",
        sneakyAngle:
          "Kamaka's durability and Hawaiian pride could steal rounds.",
        recentForm:
          "Riley is 13-0. Kamaka is a durable Hawaiian veteran with recent wins.",
        fightingStyle:
          "Riley: undefeated striker, sharp timing, improving pace. Kamaka: durable vet, exchanges strikes, holds ground.",
        historyBetweenThem:
          "First meeting.",
        experienceAndRecord:
          "Riley is chasing his third UFC win. Kamaka is a veteran on point.",
        popularityAndPopCulture:
          "Riley is rising prospect. Kamaka is respected vet.",
        oneLiner:
          "Undefeated Scouser keeps rolling against durable Hawaiian veteran.",
        oneLinnerSubstantiation: [
          "Riley is 13-0 overall",
          "Kamaka is durable veteran",
          "Riley improving with each fight",
          "Fireworks written all over it",
        ],
      },
    },
    {
      boutIndex: 9,
      boutType: "prelim",
      rounds: 3,
      division: "Women's Flyweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Tracy Cortez",
          nickname: "The Tiny Tornado",
          country: "USA",
          record: "12-3",
          uFCRecord: "8-3",
          rank: 8,
          age: 29,
          recentFights: [
            {
              opponent: "Katlyn Chookagian",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Mariya Agapova",
              result: "L",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Natalia Silva",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Melissa Gatto",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Justine Kish",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
        {
          name: "Wang Cong",
          nickname: "The Hammer",
          country: "China",
          record: "9-1",
          uFCRecord: "2-0",
          rank: undefined,
          age: 26,
          recentFights: [
            {
              opponent: "Alateng Heili",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Seo Hee Ham",
              result: "W",
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Deise Bona",
              result: "W",
              method: "KO",
              year: 2023,
            },
            {
              opponent: "Juliana Miller",
              result: "W",
              method: "KO",
              year: 2023,
            },
            {
              opponent: "Danaa Batgerel",
              result: "W",
              method: "KO",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Wang by knockout. Her power is a level above.",
        sneakyAngle:
          "Cortez's wrestling and cardio could neutralize Wang's striking.",
        recentForm:
          "Wang is 9-1 with brutal knockout power. Cortez is ranked 8th and grinds decisions.",
        fightingStyle:
          "Wang: heavy-handed prospect with knockout power, striking specialist. Cortez: control wrestler, decision grinder.",
        historyBetweenThem:
          "First meeting.",
        experienceAndRecord:
          "Cortez is ranked 8th with UFC experience. Wang is China's prospect with raw power.",
        popularityAndPopCulture:
          "Wang is China's heavyweight prospect. Cortez is respected American.",
        oneLiner:
          "China's heavy-handed prospect against grinding American veteran.",
        oneLinnerSubstantiation: [
          "Wang has devastating knockout power",
          "Cortez grinds out decisions",
          "Winner pushes toward top five",
          "High stakes at 57kg",
        ],
      },
    },
    {
      boutIndex: 10,
      boutType: "prelim",
      rounds: 3,
      division: "Middleweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Damian Pinas",
          nickname: "The Finisher",
          country: "Mexico",
          record: "9-1",
          uFCRecord: "3-0",
          rank: undefined,
          age: 26,
          recentFights: [
            {
              opponent: "Juan Espino",
              result: "W",
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Mikhail Oleksiyenko",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Dequan Townsend",
              result: "W",
              method: "KO",
              year: 2023,
            },
            {
              opponent: "Felipe Linares",
              result: "W",
              method: "Submission",
              year: 2023,
            },
            {
              opponent: "Rodrigo Nascimento",
              result: "W",
              method: "KO",
              year: 2023,
            },
          ],
        },
        {
          name: "Cesar Almeida",
          nickname: "Marmota",
          country: "Brazil",
          record: "7-2",
          uFCRecord: "0-1",
          rank: undefined,
          age: 30,
          recentFights: [
            {
              opponent: "Zac Pauga",
              result: "L",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Youssef Zalal",
              result: "W",
              method: "KO",
              year: 2023,
            },
            {
              opponent: "Jake Hadden",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Roosevelt Roberts",
              result: "W",
              method: "Submission",
              year: 2023,
            },
            {
              opponent: "Marcin Prachnio",
              result: "W",
              method: "KO",
              year: 2022,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Pinas by knockout. He has a 100% finish rate.",
        sneakyAngle:
          "Almeida's decorated kickboxing base could provide distance management.",
        recentForm:
          "Pinas is 9-1 with all finishes. Almeida is a decorated kickboxer making his UFC return.",
        fightingStyle:
          "Pinas: power puncher with finishing instinct, all wins by finish. Almeida: kickboxer with technical striking.",
        historyBetweenThem:
          "First meeting.",
        experienceAndRecord:
          "Pinas is 9-1 with perfect finishing rate. Almeida is experienced kickboxer in UFC return.",
        popularityAndPopCulture:
          "Both are prospects on the rise.",
        oneLiner:
          "Power puncher's perfect record against decorated kickboxer.",
        oneLinnerSubstantiation: [
          "Pinas has 100% finish rate",
          "Pinas is 9-1",
          "Almeida is decorated kickboxer",
          "Early prelim featuring rising prospects",
        ],
      },
    },
    {
      boutIndex: 11,
      boutType: "prelim",
      rounds: 3,
      division: "Bantamweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Farid Basharat",
          nickname: "The Hammer",
          country: "USA",
          record: "15-0",
          uFCRecord: "3-0",
          rank: 15,
          age: 24,
          recentFights: [
            {
              opponent: "Victor Altamirano",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Douglas de Andrade",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Nate Andrews",
              result: "W",
              method: "Submission",
              year: 2023,
            },
            {
              opponent: "Raoni Barcelos",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Kai Kara-France",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
        {
          name: "John Garza",
          nickname: "The Outlaw",
          country: "USA",
          record: "6-1",
          uFCRecord: "0-0",
          rank: undefined,
          age: 28,
          recentFights: [
            {
              opponent: "Ibrahim Mane",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Tyson Nam",
              result: "W",
              method: "TKO",
              year: 2024,
            },
            {
              opponent: "Brian Ortega",
              result: "L",
              method: "Submission",
              year: 2023,
            },
            {
              opponent: "Jael Nervaez",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Miles Johns",
              result: "W",
              method: "TKO",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Basharat by submission. He is ranked 15th and faces short-notice newcomer.",
        sneakyAngle:
          "Garza's recent wins could catch Basharat off guard.",
        recentForm:
          "Basharat is 15-0. Garza is 6-1 stepping up for his UFC debut.",
        fightingStyle:
          "Basharat: submission specialist, undefeated, excellent grappling. Garza: striker with submission skills.",
        historyBetweenThem:
          "First meeting. Garza is short-notice newcomer to UFC.",
        experienceAndRecord:
          "Basharat is ranked 15th at bantamweight undefeated. Garza is UFC debut on short notice.",
        popularityAndPopCulture:
          "Basharat is rising prospect. Garza is short-notice replacement.",
        oneLiner:
          "Ranked prospect's perfect record against short-notice debutant.",
        oneLinnerSubstantiation: [
          "Basharat is 15-0",
          "Basharat is ranked 15th",
          "Garza is UFC debut",
          "Short-notice matchup",
        ],
      },
    },
    {
      boutIndex: 12,
      boutType: "prelim",
      rounds: 3,
      division: "Middleweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Ryan Gandra",
          nickname: "The Slugger",
          country: "USA",
          record: "9-1",
          uFCRecord: "2-0",
          rank: undefined,
          age: 29,
          recentFights: [
            {
              opponent: "Alen Amedovski",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Khalil Rountree",
              result: "W",
              method: "Decision",
              year: 2024,
            },
            {
              opponent: "Marcin Prachnio",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Dequan Townsend",
              result: "W",
              method: "KO",
              year: 2023,
            },
            {
              opponent: "Zhubin Turambekov",
              result: "W",
              method: "TKO",
              year: 2023,
            },
          ],
        },
        {
          name: "Zachary Reese",
          nickname: "The Prospect",
          country: "USA",
          record: "10-3-1",
          uFCRecord: "1-1-1",
          rank: undefined,
          age: 26,
          recentFights: [
            {
              opponent: "Nassourdine Imavov",
              result: "D",
              method: "Majority Draw",
              year: 2024,
            },
            {
              opponent: "Dricus du Plessis",
              result: "L",
              method: "Submission",
              year: 2024,
            },
            {
              opponent: "Ihor Pokrajac",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Julian Marquez",
              result: "L",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "William Knight",
              result: "W",
              method: "TKO",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Gandra by knockout. He rides an eight-fight streak into a slugfest.",
        sneakyAngle:
          "Reese's recent fight experience could frustrate Gandra.",
        recentForm:
          "Gandra is on an eight-fight winning streak. Reese is fighting strong middleweight prospects.",
        fightingStyle:
          "Gandra: power puncher on a roll, knockout artist, aggressive. Reese: technical striker, improving.",
        historyBetweenThem:
          "First meeting.",
        experienceAndRecord:
          "Gandra is 9-1 on a roll. Reese is prospect facing tough competition.",
        popularityAndPopCulture:
          "Both are rising prospects.",
        oneLiner:
          "Knockout artist on eight-fight streak against technical prospect.",
        oneLinnerSubstantiation: [
          "Gandra is on eight-fight streak",
          "Gandra has knockout power",
          "Reese is fighting strong competition",
          "Slugfest expected",
        ],
      },
    },
    {
      boutIndex: 13,
      boutType: "prelim",
      rounds: 3,
      division: "Flyweight",
      notableFlag: undefined,
      fighters: [
        {
          name: "Alessandro Costa",
          nickname: "The Brazilian",
          country: "Brazil",
          record: "16-5",
          uFCRecord: "2-1",
          rank: undefined,
          age: 28,
          recentFights: [
            {
              opponent: "Muhammad Mokaev",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Tyson Nam",
              result: "W",
              method: "KO",
              year: 2024,
            },
            {
              opponent: "Ode Oswelcomes",
              result: "W",
              method: "TKO",
              year: 2023,
            },
            {
              opponent: "Zak Cuyos",
              result: "L",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Louis Smolka",
              result: "W",
              method: "KO",
              year: 2023,
            },
          ],
        },
        {
          name: "Cody Durden",
          nickname: "The Grinder",
          country: "USA",
          record: "18-10-1",
          uFCRecord: "4-4-1",
          rank: undefined,
          age: 35,
          recentFights: [
            {
              opponent: "Kape Sodje",
              result: "D",
              method: "Majority Draw",
              year: 2024,
            },
            {
              opponent: "Muhammad Mokaev",
              result: "L",
              method: "Submission",
              year: 2023,
            },
            {
              opponent: "Ode Oswelcomes",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Navajo Stirling",
              result: "W",
              method: "Decision",
              year: 2023,
            },
            {
              opponent: "Zhalgas Zhumagulov",
              result: "W",
              method: "Decision",
              year: 2023,
            },
          ],
        },
      ],
      editorial: {
        thePick:
          "Costa by knockout. He is on a knockout tear.",
        sneakyAngle:
          "Durden's experience and grind could control the pace.",
        recentForm:
          "Costa is on a knockout tear at flyweight. Durden is a veteran grinder.",
        fightingStyle:
          "Costa: knockout artist, aggressive Brazilian, power puncher. Durden: defensive grinder, control fighter.",
        historyBetweenThem:
          "First meeting.",
        experienceAndRecord:
          "Costa is hot prospect on knockout streak. Durden is veteran flyweight.",
        popularityAndPopCulture:
          "Costa is prospect. Durden is vet.",
        oneLiner:
          "Knockout artist on a tear against veteran grinder in card opener.",
        oneLinnerSubstantiation: [
          "Costa is on knockout tear",
          "Costa vs grinder matchup",
          "Early prelim card opener",
          "Opposite fighting styles",
        ],
      },
    },
  ],
  generatedAt: Date.now() - 4 * 60 * 60 * 1000,
  _metadata: {
    generationDurationMs: 8500,
  },
};
