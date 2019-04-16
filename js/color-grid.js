"use strict";

function ColorGrid (_config) {
    this.intervalsIdsG = [];
    this.config = _config;

    this.buildAndDrawColorGrid = function () {
        const holder = this.config.container;
        addClass(holder, 'fullsize');

        const {allLines, allElements} = this.createTreeOfElements();
        this.drawElements(holder, allLines);
        this.setIntervalsForColorChangingElements(allElements, this.config.lineElementUpdateAttr);
    };

    this.createTreeOfElements = function () {
        if (this.config.data.lines && this.config.data.lines.length) {
            const allLines = [];
            const allElements = [];
            const height = 100 / this.config.data.lines.length;

           this.config.data.lines.forEach(line => {
                const lineEl = createElement('div');
                setStyles(lineEl, {background: line.background, width: '100%', height: height + '%'});
                addClass(lineEl, this.config.lineClassName);

                line.elements.forEach(el => {
                    const newElem = createElement('div');
                    setStyles(newElem, {background: el.background, width: el.width + '%', height: '100%'});
                    addClass(newElem, this.config.lineElementClassName);
                    setData(newElem, this.config.lineElementUpdateAttr, el.updateTime);
                    allElements.push(newElem);

                    insertOneElToAnother(lineEl, newElem);
                });

                allLines.push(lineEl);
            });

            return {allLines, allElements};
        } else {
            return [];
        }
    };

    this.drawElements = function (holder, allLines) {
        insertArrayElementsToTarget(holder, allLines);
    };

    this.setIntervalsForColorChangingElements = function(_elements, dataTimeName) {
        _elements.forEach(elem => {
            const interval = elem.dataset[dataTimeName] || 3000;
            const idi = setInterval(_ => {
                setStyles(elem, {background: generateColor()})
            }, interval);

            this.intervalsIdsG.push(idi);
        });
    };

    this.updateData = function(_data) {
        this.config.data = _data;
    };

    this.rebuildGrid = function (_data) {
        if (_data) {
            this.updateData(_data);
        }

       this.clearAllIntervals();
       removeAllChildsFromElem(this.config.container);
       this.config.container.classList.remove('fullsize');
       this.buildAndDrawColorGrid();
    };

    this.clearAllIntervals = function () {
        this.intervalsIdsG.forEach(id => {
            clearInterval(id);
        });
        this.intervalsIdsG = [];
    };
}
