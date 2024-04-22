// Modell
const model = {

    app: {
        currentPage: "sessionView",
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
        chosenSessionIndex: null,
        oneMaxExp: 0,
        twoMaxExp: 0,
        threeMaxExp: 0,


        users: [
            {
                name: "Meg",
                level: 2,
                percentToNextBelt: 0,
                sessions: [
                    {
                        name: "økt 1",
                        level: "1 kyu",
                        description: "uke 1 fokus",
                        media: [0, 1],
                    },
                    {
                        name: "økt 2",
                        level: "2 kyu",
                        description: "uke 2 fokus",
                        media: [0, 1],
                    },
                    {
                        name: "økt 3",
                        level: "3 kyu",
                        description: "uke 3 fokus",
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
                name: "Front1",
                masteryLevel: 1,
                categories: [0],
                relBelt: 1,
                mediaPath: "videos/1kyu (1).mp4",
            },
            {
                name: "Front2",
                masteryLevel: 1,
                categories: [0],
                relBelt: 1,
                mediaPath: "videos/1kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 1,
                categories: [1],
                relBelt: 1,
                mediaPath: "videos/1kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 1,
                categories: [1],
                relBelt: 1,
                mediaPath: "videos/1kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 1,
                categories: [2],
                relBelt: 1,
                mediaPath: "videos/1kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 1,
                categories: [2],
                relBelt: 1,
                mediaPath: "videos/1kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 1,
                categories: [3],
                relBelt: 1,
                mediaPath: "videos/1kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 1,
                categories: [3],
                relBelt: 1,
                mediaPath: "videos/1kyu (8).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 2,
                categories: [0],
                relBelt: 2,
                mediaPath: "videos/2kyu (1).mp4",
            },
            {
                name: "Front2",
                masteryLevel: 2,
                categories: [0],
                relBelt: 2,
                mediaPath: "videos/2kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 2,
                categories: [1],
                relBelt: 2,
                mediaPath: "videos/2kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 2,
                categories: [1],
                relBelt: 2,
                mediaPath: "videos/2kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 2,
                categories: [2],
                relBelt: 2,
                mediaPath: "videos/2kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 2,
                categories: [2],
                relBelt: 2,
                mediaPath: "videos/2kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 2,
                categories: [3],
                relBelt: 2,
                mediaPath: "videos/2kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 2,
                categories: [3],
                relBelt: 2,
                mediaPath: "videos/2kyu (8).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 3,
                categories: [0],
                relBelt: 3,
                mediaPath: "videos/3kyu (1).mp4",
            },
            {
                name: "Front2",
                masteryLevel: 3,
                categories: [0],
                relBelt: 3,
                mediaPath: "videos/3kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 3,
                categories: [1],
                relBelt: 3,
                mediaPath: "videos/3kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 3,
                categories: [1],
                relBelt: 3,
                mediaPath: "videos/3kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 3,
                categories: [2],
                relBelt: 3,
                mediaPath: "videos/3kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 3,
                categories: [2],
                relBelt: 3,
                mediaPath: "videos/3kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 3,
                categories: [3],
                relBelt: 3,
                mediaPath: "videos/3kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 3,
                categories: [3],
                relBelt: 3,
                mediaPath: "videos/3kyu (8).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 4,
                categories: [0],
                relBelt: 4,
                mediaPath: "videos/4kyu (1).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 4,
                categories: [0],
                relBelt: 4,
                mediaPath: "videos/4kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 4,
                categories: [1],
                relBelt: 4,
                mediaPath: "videos/4kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 4,
                categories: [1],
                relBelt: 4,
                mediaPath: "videos/4kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 4,
                categories: [2],
                relBelt: 4,
                mediaPath: "videos/4kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 4,
                categories: [2],
                relBelt: 4,
                mediaPath: "videos/4kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 4,
                categories: [3],
                relBelt: 4,
                mediaPath: "videos/4kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 4,
                categories: [3],
                relBelt: 4,
                mediaPath: "videos/4kyu (8).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 5,
                categories: [0],
                relBelt: 5,
                mediaPath: "videos/5kyu (1).mp4",
            },
            {
                name: "Front2",
                masteryLevel: 5,
                categories: [0],
                relBelt: 5,
                mediaPath: "videos/5kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 5,
                categories: [1],
                relBelt: 5,
                mediaPath: "videos/5kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 5,
                categories: [1],
                relBelt: 5,
                mediaPath: "videos/5kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 5,
                categories: [2],
                relBelt: 5,
                mediaPath: "videos/5kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 5,
                categories: [2],
                relBelt: 5,
                mediaPath: "videos/5kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 5,
                categories: [3],
                relBelt: 5,
                mediaPath: "videos/5kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 5,
                categories: [3],
                relBelt: 5,
                mediaPath: "videos/5kyu (8).mp4",
            },
            
        ],
    },
};

