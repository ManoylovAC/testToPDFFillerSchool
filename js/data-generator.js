function generateLines () {
    const linesCount = randomInteger(2, 7);
    const lines = [];

    for (let ii = 0; ii < linesCount; ii++) {
        const elemsCount = randomInteger(2, 7);

        const lineItem = {
            background: generateColor(),
            elements: []
        };

        let minWidth = 100 / (elemsCount / 2);
        let leftWidth = 100;
        for (let kk = 0; kk < elemsCount; kk++) {
            let elWidth = (kk === elemsCount - 1) ? leftWidth : randomInteger(minWidth, leftWidth * .2);
            const elemItem = {
                background: generateColor(),
                updateTime: randomInteger(1500, 10000),
                width: elWidth
            };

            lineItem.elements.push(elemItem);
            leftWidth -= elWidth;
        }

        lines.push(lineItem);
    }

    return lines;
}

