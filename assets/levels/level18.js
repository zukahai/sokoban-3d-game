var indexLevel = 18;
// Level data
levels[indexLevel] = {
    starts: [
        { x: 0, y: 0 },
    ],
    end: { x: 3, y: 1 },
    data: [
        "1111",
        "1111",
        "1111",
    ],
    objects: [
        [2, 1]
    ],
    triggers: [
        { 
            x: 1, 
            y: 1, 
            type: 2, 
            on: [
                [1, 1, 1, 2]
            ] 
        },
    ],
}

levels[indexLevel].width = levels[indexLevel].data[0].length;
levels[indexLevel].height = levels[indexLevel].data.length;

// Tutorial
tuto[indexLevel] = [
]