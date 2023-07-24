export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    append(element) {
        this._container.append(element);
    }

    prepend(element) {
        this._container.prepend(element);
    }

    renderItems(items, user){
        items.forEach((item) => {
            this._renderer(item, user);
        })
    }
}