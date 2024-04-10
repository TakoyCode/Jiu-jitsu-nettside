// Modell
const model = {

    app: {
        currentPage: "mainPage",
        user: "Meg",
    },

    inputs: {
        filter: {
            type: "",
            direction: 0,
        },

        session: {
            name: "økt 1",
            level: "2 kyu",
            description: "uke 1 fokus",
            media: [/* model.media[0], model.media[1] */],
        },

        selectedSession: {
            slide: 1,
        },

    },

    data: {

        clickedBelt: 1,
        beltCategoryOpen: true,

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
                        media: [/* model.media[0], model.media[1] */],
                    },
                    {
                        name: "økt 2",
                        level: "2 kyu",
                        description: "uke 1 fokus",
                        media: [/* model.media[0], model.media[1] */],
                    },
                    {
                        name: "økt 3",
                        level: "2 kyu",
                        description: "uke 1 fokus",
                        videos: [/* model.media[0], model.media[1] */],
                    },
                ],
            }
        ],

        categories: ["front", "bak", "bakke", "kata"],

        vidoes: [
            {
                name: "Teknikknavn",
                masteryLevel: 1,
                categories: [/* model.categories[1] */],
                mediaPath: "catKungfu.video",
            },
            {
                name: "Teknikknavn",
                categories: [/* model.categories[1] */],
                masteryLevel: 1,
                mediaPath: "bearFighting.video",
            }
        ],
    },
};