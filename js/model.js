// Modell
const model = {

    app: {
        currentPage: "techniqueView",
        user: "Meg",
        currentTechnique: 'Bakke1'
    },

    inputs: {
        filter: {
            type: "",
            direction: 0,
        },

        session: {
            name: null,
            level: null,
            description: null,
            media: [],
        },

        selectedSession: {
            slide: 1,
        },

    },

    data: {
        clickedBelt: null,
        beltCategoryOpen: false,

        users: [
            {
                name: "Meg",
                level: 2,
                percentToNextBelt: 0,
                sessions: [
                    {
                        name: "økt 1",
                        level: "2 kyu",
                        description: "uke 1 fokus",
                        media: [0, 1],
                    },
                    {
                        name: "økt 2",
                        level: "2 kyu",
                        description: "uke 1 fokus",
                        media: [0, 1],
                    },
                    {
                        name: "økt 3",
                        level: "2 kyu",
                        description: "uke 1 fokus",
                        videos: [0, 1],
                    },
                ],
            }
        ],

        techniques: [
            {
                name: "Front1",
                level: 1,
                videos: [0, 1],
            },
            {
                name: "Bak1",
                level: 1,
                videos: [0, 1]
            },
            {
                name: "Bakke1",
                level: 1,
                videos: [0, 1]
            },
            {
                name: "Kata1",
                level: 1,
                videos: [0, 1]
            },
        ],

        categories: ["front", "bak", "bakke", "kata"],

        videos: [
            {
                name: "Teknikknavn1",
                masteryLevel: 1,
                categories: [1],
                mediaPath: "placeholder.mp4",
            },
            {
                name: "Teknikknavn2",
                masteryLevel: 1,
                categories: [1],
                mediaPath: "placeholder.mp4",
            },
        ],
    },
};