var indexLevel = 14;
// Level data
levels[indexLevel] = {
    width: 16,
    height: 7,
    starts: [{ x: 1, y: 3 }],
    end: { x: 13, y: 3 },
    data: [
        "022222220000200",
        "0021111122202220",
        "0221222111222222",
        "0211111111222212",
        "0211121112222222",
        "0221121112002220",
        "0022222222000200",
    ],
    objects: [
        [2, 2],
        [4, 3],
        [7, 3],
        [6, 4],
    ],
    triggers: [
        { x: 2, y: 5, type: 2, on: [[9, 3, 2, 1]] },
        { x: 3, y: 5, type: 2, on: [[10, 3, 2, 1]] },
        { x: 2, y: 4, type: 2, on: [[11, 3, 2, 1]] },
        { x: 3, y: 4, type: 2, on: [[12, 3, 2, 1]] },
    ],
}

// Tutorial
tuto[indexLevel] = [
]