
export class Card {
  constructor(title, link) {
    this._title = title;
    this._link = link;
  }

  _getTemplate() {
    this._node = document
      .querySelector(".card-template")
      .content.querySelector(".element")
      .cloneNode(true);
    this._node = querySelector(".element__title").textContent = this._title;
    this._node = querySelector(".element__image").src = this._link;
    return this._node;
  }

  _setEventListeners() {
    this._node = querySelector(".element__like").addEventListener(
      "click",
      () => {
        this._node = querySelector(".elemnet__like").classList.toggle(
          "element__like-click"
        );
      }
    );

    this._node = querySelector(".add-button").addEventListener("click", () => {
      this._node.remove();
    });

    this._node = querySelector(".element__image").addEventListener(
      "click",
      () => {
        this._node.remove();
      }
    );
  }

  render() {
    this._getTemplate();
    this._setEventListeners();
    return this._node;
  }
}
