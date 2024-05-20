levels[++indexLevel] = {
    width: 14,
    height: 8,
    starts: [{ x: 1, y: 4 }],
    end: { x: 11, y: 4 },
    data: [
        "00000000000000",
        "33333333333300",
        "32222222333300",
        "33323232333300",
        "32222232322200",
        "32223232333300",
        "33322233333300",
        "33333333333300",
    ],
    objects: [
        [2, 5],
        [5, 5],
    ],
    triggers: [{ x: 1, y: 2, type: 2, on: [[8, 4, 3, 2]] }],
}

// Tutorial
tuto[indexLevel] = [
    [
        { x: 2, y: -2, z: -6 },
        "Đây là một loại kích hoạt khác, phải giữ nó được nhấn",
        3e3,
    ],
]