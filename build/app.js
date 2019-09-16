"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __importDefault(require("./core/Node"));
var Component_1 = __importDefault(require("./core/Component"));
//Test
// class A extends Component { }
// let node = new Node("node1");
// let node2 = new Node("node2");
// let a = new A()
// console.log(node.components)
// console.log(node2.components)
// node.addComponent(a);
// console.log(node.components)
// console.log(node2.components)
// node2.addComponent(a);
// console.log(node.components)
// console.log(node2.components)
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return A;
}(Component_1.default));
var node = new Node_1.default();
node.addComponent(A);
var a = new A();
node.addComponent(a);
console.log(node.findComponent("Component"));
node.removeComponent(A);
node.removeComponent(a);
console.log(node.components);
var com = node.addComponent(A);
console.log(node.components);
var node2 = new Node_1.default();
if (com) {
    com.node = (node2);
}
console.log(node.components);
console.log(node2.components);
