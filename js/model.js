// Modell
const model = {

    app: {
        currentPage: null,
        previousPage: null,
        user: "Meg",
        currentTechnique: null,
    },

    inputs: {
        filter: {
            category: -1,
            masteryLevel: 1,
            beltLevel: 1,
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

        belt: {
            percentageToNext: 0,
            oneMaxExp: 0,
            twoMaxExp: 0,
            threeMaxExp: 0,
            fourMaxExp: 0,
            fiveMaxExp: 0,
        },


        users: [
            {
                name: "Meg",
                level: 5,
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
                name: "belt1front",
                title: "Front for belte 1",
                level: 1,
                videos: [0, 1],
            },
            {
                name: "belt1behind",
                title: "Bak for belte 1",
                level: 1,
                videos: [2, 3]
            },
            {
                name: "belt1ground",
                title: "Bakke for belte 1",
                level: 1,
                videos: [4, 5]
            },
            {
                name: "belt1kata",
                title: "Kata for belte 1",
                level: 1,
                videos: [6, 7]
            },
            {
                name: "belt2front",
                title: "Front for belte 2",
                level: 1,
                videos: [8, 9],
            },
            {
                name: "belt2behind",
                title: "Bak for belte 2",
                level: 1,
                videos: [10, 11]
            },
            {
                name: "belt2ground",
                title: "Bakke for belte 2",
                level: 1,
                videos: [12, 13]
            },
            {
                name: "belt2kata",
                title: "Kata for belte 2",
                level: 1,
                videos: [14, 15]
            },
            {
                name: "belt3front",
                title: "Front for belte 3",
                level: 1,
                videos: [16, 17]
            },
            {
                name: "belt3behind",
                title: "Bak for belte 3",
                level: 1,
                videos: [18, 19]
            },
            {
                name: "belt3ground",
                title: "Bakke for belte 3",
                level: 1,
                videos: [20, 21]
            },
            {
                name: "belt3kata",
                title: "Kata for belte 3",
                level: 1,
                videos: [22, 23]
            },
            {
                name: "belt4front",
                title: "Front for belte 4",
                level: 1,
                videos: [24, 25]
            },
            {
                name: "belt4behind",
                title: "Bak for belte 4",
                level: 1,
                videos: [26, 27]
            },
            {
                name: "belt4ground",
                title: "Bakke for belte 4",
                level: 1,
                videos: [28, 29]
            },
            {
                name: "belt4kata",
                title: "Kata for belte 4",
                level: 1,
                videos: [30, 31]
            },
            {
                name: "belt5front",
                title: "Front for belte 5",
                level: 1,
                videos: [32, 33]
            },
            {
                name: "belt5behind",
                title: "Bak for belte 5",
                level: 1,
                videos: [34, 35]
            },
            {
                name: "belt5ground",
                title: "Bakke for belte 5",
                level: 1,
                videos: [36, 37]
            },
            {
                name: "belt5kata",
                title: "Kata for belte 5",
                level: 1,
                videos: [38, 39]
            },
        ],

        categories: ["front", "bak", "bakke", "kata"],

        videos: [
            {
                name: "Front1",
                masteryLevel: 2,
                categories: [0],
                relBelt: 1,
                mediaPath: "videos/1kyu (1).mp4",
            },
            {
                name: "Front2",
                masteryLevel: 0,
                categories: [0],
                relBelt: 1,
                mediaPath: "videos/1kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 0,
                categories: [1],
                relBelt: 1,
                mediaPath: "videos/1kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 0,
                categories: [1],
                relBelt: 1,
                mediaPath: "videos/1kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 0,
                categories: [2],
                relBelt: 1,
                mediaPath: "videos/1kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 0,
                categories: [2],
                relBelt: 1,
                mediaPath: "videos/1kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 0,
                categories: [3],
                relBelt: 1,
                mediaPath: "videos/1kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 0,
                categories: [3],
                relBelt: 1,
                mediaPath: "videos/1kyu (8).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 0,
                categories: [0],
                relBelt: 2,
                mediaPath: "videos/2kyu (1).mp4",
            },
            {
                name: "Front2",
                masteryLevel: 0,
                categories: [0],
                relBelt: 2,
                mediaPath: "videos/2kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 0,
                categories: [1],
                relBelt: 2,
                mediaPath: "videos/2kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 0,
                categories: [1],
                relBelt: 2,
                mediaPath: "videos/2kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 0,
                categories: [2],
                relBelt: 2,
                mediaPath: "videos/2kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 0,
                categories: [2],
                relBelt: 2,
                mediaPath: "videos/2kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 0,
                categories: [3],
                relBelt: 2,
                mediaPath: "videos/2kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 0,
                categories: [3],
                relBelt: 2,
                mediaPath: "videos/2kyu (8).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 0,
                categories: [0],
                relBelt: 3,
                mediaPath: "videos/3kyu (1).mp4",
            },
            {
                name: "Front2",
                masteryLevel: 0,
                categories: [0],
                relBelt: 3,
                mediaPath: "videos/3kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 0,
                categories: [1],
                relBelt: 3,
                mediaPath: "videos/3kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 0,
                categories: [1],
                relBelt: 3,
                mediaPath: "videos/3kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 0,
                categories: [2],
                relBelt: 3,
                mediaPath: "videos/3kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 0,
                categories: [2],
                relBelt: 3,
                mediaPath: "videos/3kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 0,
                categories: [3],
                relBelt: 3,
                mediaPath: "videos/3kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 0,
                categories: [3],
                relBelt: 3,
                mediaPath: "videos/3kyu (8).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 0,
                categories: [0],
                relBelt: 4,
                mediaPath: "videos/4kyu (1).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 0,
                categories: [0],
                relBelt: 4,
                mediaPath: "videos/4kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 0,
                categories: [1],
                relBelt: 4,
                mediaPath: "videos/4kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 0,
                categories: [1],
                relBelt: 4,
                mediaPath: "videos/4kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 0,
                categories: [2],
                relBelt: 4,
                mediaPath: "videos/4kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 0,
                categories: [2],
                relBelt: 4,
                mediaPath: "videos/4kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 0,
                categories: [3],
                relBelt: 4,
                mediaPath: "videos/4kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 0,
                categories: [3],
                relBelt: 4,
                mediaPath: "videos/4kyu (8).mp4",
            },
            {
                name: "Front1",
                masteryLevel: 0,
                categories: [0],
                relBelt: 5,
                mediaPath: "videos/5kyu (1).mp4",
            },
            {
                name: "Front2",
                masteryLevel: 0,
                categories: [0],
                relBelt: 5,
                mediaPath: "videos/5kyu (2).mp4",
            },
            {
                name: "Bak1",
                masteryLevel: 0,
                categories: [1],
                relBelt: 5,
                mediaPath: "videos/5kyu (3).mp4",
            },
            {
                name: "Bak2",
                masteryLevel: 0,
                categories: [1],
                relBelt: 5,
                mediaPath: "videos/5kyu (4).mp4",
            },
            {
                name: "Bakke1",
                masteryLevel: 0,
                categories: [2],
                relBelt: 5,
                mediaPath: "videos/5kyu (5).mp4",
            },
            {
                name: "Bakke2",
                masteryLevel: 0,
                categories: [2],
                relBelt: 5,
                mediaPath: "videos/5kyu (6).mp4",
            },
            {
                name: "Kata1",
                masteryLevel: 0,
                categories: [3],
                relBelt: 5,
                mediaPath: "videos/5kyu (7).mp4",
            },
            {
                name: "Kata2",
                masteryLevel: 0,
                categories: [3],
                relBelt: 5,
                mediaPath: "videos/5kyu (8).mp4",
            },

        ],
    },
};
