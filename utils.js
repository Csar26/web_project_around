export class Popup {
constructor (selector){
  this._selector = selector;
}


open (){

}

close (){

}

}

class PopupImage extends Popup {
constructor (selector){
  super(selector)
}

open (link, title){
  super.open();

}

} 

class PopupProfile extends Popup {
  constructor (selector){

  }

}

class popupAddElement extends Popup {
  constructor (selector){

  }

}