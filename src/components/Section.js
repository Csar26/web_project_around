export default class Section {
  constructor ({items,renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    
  }

  addItem(element) {
    this._container.append(element);
  }

  setItems(items){
    this.clear();
    this._items = items;
  }


  clear() {
    this._container.innerHTML = "";
  }

  renderItems() {
    this.clear();
    console.log('items', this._items);
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
}
