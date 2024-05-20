levels[++indexLevel] = {
    width: 8,
    height: 7,
    starts: [{ x: 3, y: 4 }],
    end: { x: 7, y: 2 },
    data: [
        "12222200",
        "22221100",
        "21111102",
        "12222101",
        "21111101",
        "22222122",
        "12222222",
    ],
    objects: [
        [2, 2],
        [2, 4],
    ],
    triggers: [
        { x: 5, y: 5, type: 2, on: [[5, 5, 1, 2]] },
        { x: 4, y: 1, type: 2, on: [[4, 1, 1, 2]] },
        { x: 1, y: 4, type: 2, on: [[1, 4, 1, 2]] },
    ],
}

// Tutorial
tuto[indexLevel] = [
]