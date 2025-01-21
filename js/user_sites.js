const sites = [
  {
    "name": "Olivia Ochoa",
    "year": 2025,
    "website": "https://oliviaochoa.dev"
  },
  {
    "name": "Jamie Bennett",
    "year": 2022,
    "website": "https://jamiebennett.io"
  },
  {
    "name": "Pena Howard",
    "year": 2022,
    "website": "https://penahoward.tech"
  },
  {
    "name": "Aguirre Becker",
    "year": 2023,
    "website": "https://aguirrebecker.dev"
  },
  {
    "name": "Selena Franco",
    "year": 2023,
    "website": "https://selenafranco.io"
  },
  {
    "name": "Bradley Cannon",
    "year": 2024,
    "website": "https://bradleycannon.dev"
  },
  {
    "name": "Gilmore Petty",
    "year": 2024,
    "website": "https://gilmorepetty.tech"
  },
  {
    "name": "Ada Jordan",
    "year": 2022,
    "website": "https://adajordan.io"
  },
  {
    "name": "Sharon Kline",
    "year": 2025,
    "website": "https://sharonkline.dev"
  },
  {
    "name": "Cohen Tucker",
    "year": 2024,
    "website": "https://cohentucker.tech"
  },
  {
    "name": "Tracey Thompson",
    "year": 2022,
    "website": "https://traceythompson.io"
  },
  {
    "name": "Moss Peters",
    "year": 2023,
    "website": "https://mosspeters.dev"
  },
  {
    "name": "Mosley Frederick",
    "year": 2024,
    "website": "https://mosleyfrederick.tech"
  },
  {
    "name": "Ramirez Warren",
    "year": 2024,
    "website": "https://ramirezwarren.io"
  },
  {
    "name": "Wilkins Gibbs",
    "year": 2023,
    "website": "https://wilkinsgibbs.dev"
  },
  {
    "name": "Danielle Contreras",
    "year": 2022,
    "website": "https://daniellecontreras.tech"
  },
  {
    "name": "Maya Rodriguez",
    "year": 2023,
    "website": "https://mayarodriguez.dev"
  },
  {
    "name": "Xavier Chen",
    "year": 2024,
    "website": "https://xavierchen.io"
  },
  {
    "name": "Luna Parker",
    "year": 2025,
    "website": "https://lunaparker.tech"
  },
  {
    "name": "Kai Nguyen",
    "year": 2023,
    "website": "https://kainguyen.dev"
  },
  {
    "name": "Zara Mitchell",
    "year": 2024,
    "website": "https://zaramitchell.io"
  },
  {
    "name": "Felix Cooper",
    "year": 2022,
    "website": "https://felixcooper.tech"
  },
  {
    "name": "Nova Williams",
    "year": 2025,
    "website": "https://novawilliams.dev"
  },
  {
    "name": "Atlas Turner",
    "year": 2023,
    "website": "https://atlasturner.io"
  },
  {
    "name": "Iris Martinez",
    "year": 2024,
    "website": "https://irismartinez.tech"
  },
  {
    "name": "River Santos",
    "year": 2022,
    "website": "https://riversantos.dev"
  },
  {
    "name": "Phoenix Wright",
    "year": 2025,
    "website": "https://phoenixwright.io"
  },
  {
    "name": "Aurora Lee",
    "year": 2023,
    "website": "https://auroralee.tech"
  },
  {
    "name": "Orion Black",
    "year": 2024,
    "website": "https://orionblack.dev"
  },
  {
    "name": "Sage Anderson",
    "year": 2022,
    "website": "https://sageanderson.io"
  },
  {
    "name": "Echo Rivera",
    "year": 2025,
    "website": "https://echorivera.tech"
  },
  {
    "name": "Axel Kumar",
    "year": 2023,
    "website": "https://axelkumar.dev"
  },
  {
    "name": "Aria Patel",
    "year": 2024,
    "website": "https://ariapatel.io"
  },
  {
    "name": "Sol Castro",
    "year": 2022,
    "website": "https://solcastro.tech"
  },
  {
    "name": "Sky Johnson",
    "year": 2025,
    "website": "https://skyjohnson.dev"
  },
  {
    "name": "Nova Brooks",
    "year": 2023,
    "website": "https://novabrooks.io"
  },
  {
    "name": "Rain Taylor",
    "year": 2024,
    "website": "https://raintaylor.tech"
  },
  {
    "name": "Ash Morgan",
    "year": 2022,
    "website": "https://ashmorgan.dev"
  },
  {
    "name": "Dawn Wilson",
    "year": 2025,
    "website": "https://dawnwilson.io"
  },
  {
    "name": "Blaze Thompson",
    "year": 2023,
    "website": "https://blazethompson.tech"
  },
  {
    "name": "Storm Garcia",
    "year": 2024,
    "website": "https://stormgarcia.dev"
  },
  {
    "name": "Lake Anderson",
    "year": 2022,
    "website": "https://lakeanderson.io"
  },
  {
    "name": "Vale Martinez",
    "year": 2025,
    "website": "https://valemartinez.tech"
  },
  {
    "name": "Reed Johnson",
    "year": 2023,
    "website": "https://reedjohnson.dev"
  },
  {
    "name": "Brook Taylor",
    "year": 2024,
    "website": "https://brooktaylor.io"
  },
  {
    "name": "Robin Santos",
    "year": 2022,
    "website": "https://robinsantos.tech"
  },
  {
    "name": "Skye Wilson",
    "year": 2025,
    "website": "https://skyewilson.dev"
  },
  {
    "name": "Bay Cooper",
    "year": 2023,
    "website": "https://baycooper.io"
  },
  {
    "name": "Ocean Lee",
    "year": 2024,
    "website": "https://oceanlee.tech"
  },
  {
    "name": "Cloud Mitchell",
    "year": 2022,
    "website": "https://cloudmitchell.dev"
  },
  {
    "name": "River Phoenix",
    "year": 2025,
    "website": "https://riverphoenix.io"
  },
  {
    "name": "Sky Walker",
    "year": 2023,
    "website": "https://skywalker.tech"
  },
  {
    "name": "Star Fields",
    "year": 2024,
    "website": "https://starfields.dev"
  },
  {
    "name": "Moon Rivers",
    "year": 2022,
    "website": "https://moonrivers.io"
  },
  {
    "name": "Sun Powers",
    "year": 2025,
    "website": "https://sunpowers.tech"
  },
  {
    "name": "Dawn Meadows",
    "year": 2023,
    "website": "https://dawnmeadows.dev"
  },
  {
    "name": "Dusk Shadows",
    "year": 2024,
    "website": "https://duskshadows.io"
  },
  {
    "name": "Rain Forest",
    "year": 2022,
    "website": "https://rainforest.tech"
  },
  {
    "name": "Storm Cloud",
    "year": 2025,
    "website": "https://stormcloud.dev"
  },
  {
    "name": "Crystal Waters",
    "year": 2023,
    "website": "https://crystalwaters.io"
  },
  {
    "name": "Autumn Leaves",
    "year": 2024,
    "website": "https://autumnleaves.tech"
  },
  {
    "name": "Winter Snow",
    "year": 2022,
    "website": "https://wintersnow.dev"
  },
  {
    "name": "Summer Ray",
    "year": 2025,
    "website": "https://summerray.io"
  },
  {
    "name": "Spring Bloom",
    "year": 2023,
    "website": "https://springbloom.tech"
  },
  {
    "name": "Forest Green",
    "year": 2024,
    "website": "https://forestgreen.dev"
  },
  {
    "name": "Meadow Lane",
    "year": 2022,
    "website": "https://meadowlane.io"
  },
  {
    "name": "Desert Rose",
    "year": 2025,
    "website": "https://desertrose.tech"
  },
  {
    "name": "Ocean Wave",
    "year": 2023,
    "website": "https://oceanwave.dev"
  },
  {
    "name": "Mountain Peak",
    "year": 2024,
    "website": "https://mountainpeak.io"
  },
  {
    "name": "Valley Stream",
    "year": 2022,
    "website": "https://valleystream.tech"
  },
  {
    "name": "Raphaël Onana",
    "year": 2022,
    "website": "https://nathonana.com"
  }
];

export default sites;