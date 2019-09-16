import Node from "./core/Node";
import Component from "./core/Component";


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

class A extends Component { }
let node = new Node();
node.addComponent(A);
let a = new A()
node.addComponent(a);
console.log(node.findComponent("Component"))
node.removeComponent(A);
node.removeComponent(a);
console.log(node.components)
let com = node.addComponent(A);
console.log(node.components)
let node2 = new Node()
if (com) {
    com.node = (node2);
}
console.log(node.components)
console.log(node2.components)

