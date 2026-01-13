export default {
  tags: [
    { tag: "ongoing",         name: "Ongoing"},
    { tag: "completed",       name: "Completed"},
    { tag: "circuits",        name: "Circuits"},
    { tag: "cad_design",      name: "CAD Design"},
    { tag: "environmental",   name: "Environmental"}
  ],
  projects: [
    // {
    //   id: "mahjong-bot",
    //   title: "Mahjong Bot",
    //   description: "A text-based Discord chatbot to run the Chinese game Mahjong.",
    //   tags: [
    //     "ongoing"
    //   ],
    // },
    {
      id: "mta-maze",
      title: "MTA Maze",
      description: "A NYC-based subway game where players must learn to commute to a destination with potential delays.",
      tags: [
        "completed"
      ],
    },
    {
      id: "smart-irrigation-system",
      title: "Smart Irrigation System",
      description: "Students learn to create an irrigation system using sensor information to activate an actuator.",
      tags: [
        "completed",
        "environmental",
        "circuits"
      ],
    },
    {
      id: "physical-computing",
      title: "Physical Computing Project",
      description: "Students learn how to create electrical circuits and program the Arduino Uno to perform various tasks.",
      tags: [
        "completed",
        "circuits"
      ],
    },
    {
      id: "wind-turbine",
      title: "Wind Turbine Project",
      description: "Students create a wind turbine to better understand sustainable wind energy, its efficiency, and impact on the environment.",
      tags: [
        "completed",
        "environmental"
      ],
    },
    {
      id: "compound-machines",
      title: "Compound Machines Project",
      description: "Students learn about simple machines and mechanical advantages, and utilize them to create complex machines.",
      tags: [
        "completed"
      ],
    },
    {
      id: "autocad-environmental-science-lab",
      title: "AutoCAD Environmental Science Lab Design",
      description: "Students create a design for a new environmental science lab for Bayside High School.",
      tags: [
        "completed",
        "cad_design",
        "environmental"
      ],
    },
  ]
}