levels[++indexLevel] = {
    width: 14,
    height: 8,
    starts: [{ x: 1, y: 4 }],
    end: { x: 11, y: 4 },
    data: [
        "00000000000000",
        "33333333333300",
        "32222233333300",
        "33333222333300",
        "32223222221200",
        "32223333233300",
        "33322222233300",
        "33333333333300",
    ],
    objects: [],
    triggers: [{ x: 1, y: 2, type: 1, on: [[10, 4, 1, 2]] }],
}

// Tutorial
tuto[indexLevel] = [
    [
        { x: 2, y: -2, z: -6 },
        "Đây là một công tắc, nó thay đổi một cái gì đó trong sân khấu",
        3e3,
    ],
]