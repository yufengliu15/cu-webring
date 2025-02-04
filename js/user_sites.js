/* Format:
{
  "name": "",
  "year": ,
  "website": ""
},
*/
const sites = [
  {
    "name": "Yufeng Liu",
    "year": 2022,
    "website": "https://yufengliu.tech"
  },
  {
    "name": "Joe Bob",
    "year": 2023,
    "website": "https://joebob.tech"
  },
  {
    "name": "Pena Howard",
    "year": 2022,
    "website": "https://penahoward.tech",
    "major": "Computer Engineering"
  },
  {
    "name": "Aguirre Becker",
    "year": 2023,
    "website": "https://aguirrebecker.dev",
    "major": "Data Science"
  },
  {
    "name": "Selena Franco",
    "year": 2023,
    "website": "https://selenafranco.io",
    "major": "Information Systems"
  },
  {
    "name": "Bradley Cannon",
    "year": 2024,
    "website": "https://bradleycannon.dev",
    "major": "Artificial Intelligence"
  },
  {
    "name": "Gilmore Petty",
    "year": 2024,
    "website": "https://gilmorepetty.tech",
    "major": "Cybersecurity"
  },
  {
    "name": "Ada Jordan",
    "year": 2022,
    "website": "https://adajordan.io",
    "major": "Computer Science"
  },
  {
    "name": "Sharon Kline",
    "year": 2025,
    "website": "https://sharonkline.dev",
    "major": "Software Engineering"
  },
  {
    "name": "Cohen Tucker",
    "year": 2024,
    "website": "https://cohentucker.tech",
    "major": "Data Science"
  },
  {
    "name": "Tracey Thompson",
    "year": 2022,
    "website": "https://traceythompson.io",
    "major": "Information Technology"
  },
  {
    "name": "Moss Peters",
    "year": 2023,
    "website": "https://mosspeters.dev",
    "major": "Computer Engineering"
  },
  {
    "name": "Mosley Frederick",
    "year": 2024,
    "website": "https://mosleyfrederick.tech",
    "major": "Cybersecurity"
  },
  {
    "name": "Ramirez Warren",
    "year": 2024,
    "website": "https://ramirezwarren.io",
    "major": "Software Engineering"
  },
  {
    "name": "Wilkins Gibbs",
    "year": 2023,
    "website": "https://wilkinsgibbs.dev",
    "major": "Computer Science"
  },
  {
    "name": "Danielle Contreras",
    "year": 2022,
    "website": "https://daniellecontreras.tech",
    "major": "Data Science"
  },
  {
    "name": "Maya Rodriguez",
    "year": 2023,
    "website": "https://mayarodriguez.dev",
    "major": "Artificial Intelligence"
  },
  {
    "name": "Xavier Chen",
    "year": 2024,
    "website": "https://xavierchen.io",
    "major": "Computer Engineering"
  },
  {
    "name": "Luna Parker",
    "year": 2025,
    "website": "https://lunaparker.tech",
    "major": "Information Systems"
  },
  {
    "name": "Kai Nguyen",
    "year": 2023,
    "website": "https://kainguyen.dev",
    "major": "Software Engineering"
  },
  {
    "name": "Zara Mitchell",
    "year": 2024,
    "website": "https://zaramitchell.io",
    "major": "Computer Science"
  },
  {
    "name": "Felix Cooper",
    "year": 2022,
    "website": "https://felixcooper.tech",
    "major": "Cybersecurity"
  },
  {
    "name": "Nova Williams",
    "year": 2025,
    "website": "https://novawilliams.dev",
    "major": "Data Science"
  },
  {
    "name": "Atlas Turner",
    "year": 2023,
    "website": "https://atlasturner.io",
    "major": "Information Technology"
  },
  {
    "name": "Iris Martinez",
    "year": 2024,
    "website": "https://irismartinez.tech",
    "major": "Computer Engineering"
  },
  {
    "name": "River Santos",
    "year": 2022,
    "website": "https://riversantos.dev",
    "major": "Software Engineering"
  },
  {
    "name": "Phoenix Wright",
    "year": 2025,
    "website": "https://phoenixwright.io",
    "major": "Artificial Intelligence"
  },
  {
    "name": "Aurora Lee",
    "year": 2023,
    "website": "https://auroralee.tech",
    "major": "Computer Science"
  },
  {
    "name": "Orion Black",
    "year": 2024,
    "website": "https://orionblack.dev",
    "major": "Data Science"
  },
  {
    "name": "Sage Anderson",
    "year": 2022,
    "website": "https://sageanderson.io",
    "major": "Information Systems"
  },
  {
    "name": "Echo Rivera",
    "year": 2025,
    "website": "https://echorivera.tech",
    "major": "Cybersecurity"
  },
  {
    "name": "Axel Kumar",
    "year": 2023,
    "website": "https://axelkumar.dev",
    "major": "Computer Engineering"
  },
  {
    "name": "Aria Patel",
    "year": 2024,
    "website": "https://ariapatel.io",
    "major": "Software Engineering"
  },
  {
    "name": "Sol Castro",
    "year": 2022,
    "website": "https://solcastro.tech",
    "major": "Information Technology"
  },
  {
    "name": "Sky Johnson",
    "year": 2025,
    "website": "https://skyjohnson.dev",
    "major": "Artificial Intelligence"
  },
  {
    "name": "Nova Brooks",
    "year": 2023,
    "website": "https://novabrooks.io",
    "major": "Data Science"
  },
  {
    "name": "Rain Taylor",
    "year": 2024,
    "website": "https://raintaylor.tech",
    "major": "Computer Science"
  },
  {
    "name": "Ash Morgan",
    "year": 2022,
    "website": "https://ashmorgan.dev",
    "major": "Software Engineering"
  },
  {
    "name": "Dawn Wilson",
    "year": 2025,
    "website": "https://dawnwilson.io",
    "major": "Cybersecurity"
  },
  {
    "name": "Blaze Thompson",
    "year": 2023,
    "website": "https://blazethompson.tech",
    "major": "Computer Engineering"
  },
  {
    "name": "Storm Garcia",
    "year": 2024,
    "website": "https://stormgarcia.dev",
    "major": "Information Systems"
  },
  {
    "name": "Lake Anderson",
    "year": 2022,
    "website": "https://lakeanderson.io",
    "major": "Data Science"
  },
  {
    "name": "Vale Martinez",
    "year": 2025,
    "website": "https://valemartinez.tech",
    "major": "Artificial Intelligence"
  },
  {
    "name": "Reed Johnson",
    "year": 2023,
    "website": "https://reedjohnson.dev",
    "major": "Computer Science"
  },
  {
    "name": "Brook Taylor",
    "year": 2024,
    "website": "https://brooktaylor.io",
    "major": "Software Engineering"
  },
  {
    "name": "Robin Santos",
    "year": 2022,
    "website": "https://robinsantos.tech",
    "major": "Information Technology"
  },
  {
    "name": "Skye Wilson",
    "year": 2025,
    "website": "https://skyewilson.dev",
    "major": "Cybersecurity"
  },
  {
    "name": "Bay Cooper",
    "year": 2023,
    "website": "https://baycooper.io",
    "major": "Data Science"
  },
  {
    "name": "Ocean Lee",
    "year": 2024,
    "website": "https://oceanlee.tech",
    "major": "Computer Engineering"
  },
  {
    "name": "Cloud Mitchell",
    "year": 2022,
    "website": "https://cloudmitchell.dev",
    "major": "Information Systems"
  },
  {
    "name": "River Phoenix",
    "year": 2025,
    "website": "https://riverphoenix.io",
    "major": "Artificial Intelligence"
  },
  {
    "name": "Sky Walker",
    "year": 2023,
    "website": "https://skywalker.tech",
    "major": "Software Engineering"
  },
  {
    "name": "Star Fields",
    "year": 2024,
    "website": "https://starfields.dev",
    "major": "Computer Science"
  },
  {
    "name": "Moon Rivers",
    "year": 2022,
    "website": "https://moonrivers.io",
    "major": "Data Science"
  },
  {
    "name": "Sun Powers",
    "year": 2025,
    "website": "https://sunpowers.tech",
    "major": "Cybersecurity"
  },
  {
    "name": "Dawn Meadows",
    "year": 2023,
    "website": "https://dawnmeadows.dev",
    "major": "Computer Engineering"
  },
  {
    "name": "Dusk Shadows",
    "year": 2024,
    "website": "https://duskshadows.io",
    "major": "Information Systems"
  },
  {
    "name": "Rain Forest",
    "year": 2022,
    "website": "https://rainforest.tech",
    "major": "Artificial Intelligence"
  },
  {
    "name": "Storm Cloud",
    "year": 2025,
    "website": "https://stormcloud.dev",
    "major": "Software Engineering"
  },
  {
    "name": "Crystal Waters",
    "year": 2023,
    "website": "https://crystalwaters.io",
    "major": "Computer Science"
  },
  {
    "name": "Autumn Leaves",
    "year": 2024,
    "website": "https://autumnleaves.tech",
    "major": "Data Science"
  },
  {
    "name": "Winter Snow",
    "year": 2022,
    "website": "https://wintersnow.dev",
    "major": "Information Technology"
  },
  {
    "name": "Summer Ray",
    "year": 2025,
    "website": "https://summerray.io",
    "major": "Cybersecurity"
  },
  {
    "name": "Spring Bloom",
    "year": 2023,
    "website": "https://springbloom.tech",
    "major": "Computer Engineering"
  },
  {
    "name": "Forest Green",
    "year": 2024,
    "website": "https://forestgreen.dev",
    "major": "Information Systems"
  },
  {
    "name": "Meadow Lane",
    "year": 2022,
    "website": "https://meadowlane.io",
    "major": "Artificial Intelligence"
  },
  {
    "name": "Desert Rose",
    "year": 2025,
    "website": "https://desertrose.tech",
    "major": "Software Engineering"
  },
  {
    "name": "Ocean Wave",
    "year": 2023,
    "website": "https://oceanwave.dev",
    "major": "Computer Science"
  },
  {
    "name": "Mountain Peak",
    "year": 2024,
    "website": "https://mountainpeak.io",
    "major": "Data Science"
  },
  {
    "name": "Valley Stream",
    "year": 2022,
    "website": "https://valleystream.tech",
    "major": "Information Technology"
  },
  {
    "name": "Raphaël Onana",
    "year": 2022,
    "website": "https://nathonana.com",
    "major": "Computer Science"
  }
];

export default sites;