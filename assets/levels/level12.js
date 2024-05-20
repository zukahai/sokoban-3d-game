var indexLevel = 12;
// Level data
levels[indexLevel] = {
    width: 9,
    height: 7,
    starts: [{ x: 5, y: 3 }],
    end: { x: 7, y: 3 },
    data: [
        "111111111",
        "111111112",
        "111111012",
        "111111020",
        "111111012",
        "111111112",
        "111111111",
    ],
    objects: [
        [4, 1, 2],
        [1, 2],
        [1, 3],
        [1, 4],
        [4, 5, 2],
    ],
    triggers: [
        { x: 5, y: 5, type: 2, on: [[5, 5, 1, 2]] },
        { x: 5, y: 1, type: 2, on: [[5, 1, 1, 2]] },
    ],
}

// Tutorial
tuto[indexLevel] = [
    [
        { x: 8, y: -2, z: -8 },
        "Khối này không thể di chuyển, nhưng có thể leo lên",
        4e3,
    ],
]