
import Town from "./Town.js";
import {Mailbox} from "./Mailbox.js";


// import Town from "./Town";
// import {Mailbox} from "./Mailbox";
//
// class Scanner{
//     #visitor;
//     constructor(visitor) {
//         this.#visitor = visitor;
//     }
//     visit(f,target){this.#visitor.visit(f,target);}
//     scan(target){
//         const binder = new Binder, f= el=>{
//             const model = el.className;
//             if(model instanceof Town) binder.add(new Town())
//             else if(model instanceof Mailbox)binder.add(new Mailbox())
//         }
//         f(target);
//         this.visit(f,target)
//         throw 'override';
//     }
// }
// class Binder{
//     #items = new Set;
//     add(v){
//         this.#items.add(v)
//     }
//     render(){
//         this.#items.forEach(item=>{
//             item.
//         })
//     }
// }
// class Model{
//     #parent;
//     el;
//     constructor(parent) {
//         this.#parent = parent;
//     }
//     _render(){
//         throw 'override';
//     }
//     render(){
//         this._render()
//         this.#parent.
//     }
// }

export default class Scanner {
  #model;
  constructor(model) {
    this.#model = model;
  }

  scan(model) {}
}
