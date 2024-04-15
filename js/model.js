// Modell
const model = {

    app: {
        currentPage: null,
        user: "Meg",
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

        videos: [
            {
                name: "Teknikknavn",
                masteryLevel: 1,
                categories: [/* model.categories[1] */],
                mediaPath: "placeholder.mp4",
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