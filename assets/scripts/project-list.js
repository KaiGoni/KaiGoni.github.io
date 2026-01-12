export default {
  tags: [
    { tag: "ongoing",         name: "Ongoing"},
    { tag: "complete",        name: "Complete"},
    { tag: "circuits",        name: "Circuits"},
    { tag: "cad_design",      name: "CAD Design"},
    { tag: "environmental",   name: "Environmental"}
  ],
  projects: [
    {
      id: "smart-irrigation-system",
      title: "Smart Irrigation System",
      description: "Students learn to create an irrigation system using sensor information to activate an actuator.",
      tags: [
        "complete",
        "environmental",
        "circuits"
      ],
    },
    {
      id: "physical-computing",
      title: "Physical Computing",
      description: "Students learn how to create electrical circuits and program the Arduino Uno to perform various tasks.",
      tags: [
        "complete",
        "circuits"
      ],
    },
    {
      id: "wind-turbine",
      title: "Wind Turbine",
      description: "Students create a wind turbine to better understand sustainable wind energy, its efficiency, and impact on the environment.",
      tags: [
        "complete",
        "environmental"
      ],
    },
    {
      id: "compound-machines",
      title: "Compound Machines",
      description: "Students learn about simple machines and mechanical advantages, and utilize them to create complex machines.",
      tags: [
        "complete"
      ],
    },
    {
      id: "autocad-environmental-science-lab",
      title: "AutoCAD Environmental Science Lab",
      description: "Students create a design for a new environmental science lab for Bayside High School.",
      tags: [
        "complete",
        "cad_design",
        "environmental"
      ],
    },
    // {
    //   id: "onshape-train-model",
    //   title: "OnShape Train Model",
    //   description: "Students learn how to create use various OnShape tools to create and assemble a 3D train model.",
    //   tags: [
    //     "complete",
    //     "cad_design"
    //   ],
    // },
    // {
    //   id: "mahjong-bot",
    //   title: "Mahjong Bot",
    //   description: "A text-based Discord chatbot to run the Chinese game Mahjong.",
    //   tags: [
    //     "ongoing"
    //   ],
    // },
    // {
    //   id: "connect-four",
    //   title: "Connect Four",
    //   description: "A text-based Discord chatbot to run the Chinese game Mahjong.",
    //   tags: [
    //     "ongoing"
    //   ],
    // },
    // {
    //   id: "mta-maze",
    //   title: "MTA Maze",
    //   description: "A text-based Discord chatbot to run the Chinese game Mahjong.",
    //   tags: [
    //     "ongoing"
    //   ],
    // },
  ]
}