import Node from "./Node";

export default class Component {
    private _node: Node | null = null;

    set node(node: Node | null) {
        if (node != this._node) {
            if (this._node) {
                this._node.removeComponent(this);
            }
            this._node = node;
            if (this._node) {
                this._node.addComponent(this);
            }
        }
    }


    get node() {
        return this._node;
    }

    name = ""

    constructor(name = "Component") {
        this.name = name;
    }

    onEnable() {
    }

    onDisable() {
    }

    onLoad() {
    }

    start() {
    }

    update(td: number) {
    }

    Destroy() {

    }
}