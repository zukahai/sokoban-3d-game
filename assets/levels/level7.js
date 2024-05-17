var indexLevel = 7;
// Level data
levels[indexLevel] = {
    width: 9,
    height: 7,
    starts: [
        { x: 1, y: 1 },
        { x: 4, y: 3 },
    ],
    end: { x: 1, y: 5 },
    data: [
        "222222222",
        "211111122",
        "222222122",
        "211112122",
        "222222122",
        "211111112",
        "222222222",
    ],
    triggers: [{ x: 1, y: 3, type: 2, on: [[7, 1, 2, 1]] }],
    objects: [[6, 1]],
}

// Tutorial
tuto[indexLevel] = [
    [
        { x: 8, y: 6, z: 0 },
        "Đây là một nhân bản của bạn.",
        3e3,
    ],
    [
        { x: 8, y: 6, z: 0 },
        "Chuyển đổi giữa các nhân bản bằng phím cách",
        4e3,
    ],
]