import Vector from "../Math/Vector";
import Component from "./Component";

export default class Node {

    name = "";

    constructor(name: string = "Node") {
        this.name = name;
    }

    private _Vector: Vector = new Vector();
    public get Vector() {
        return this._Vector;
    }
    public set Vector(value) {
        this._Vector = value;
    }

    private _parent: Node | null = null;
    public get parent(): Node | null {
        return this._parent;
    }
    public set parent(value: Node | null) {
        this._parent = value;
    }


    private _childrens: Array<Node> = new Array<Node>();
    public get childrens(): Array<Node> {
        return this._childrens;
    }
    public set childrens(value: Array<Node>) {
        this._childrens = value;
    }

    private _components: Array<Component> = new Array<Component>();
    public get components(): Array<Component> {
        return this._components;
    }
    public set components(value: Array<Component>) {
        this._components = value;
    }

    addComponent<T extends Component>(_component: (new () => T) | T) {
        if (typeof _component == "function") {
            let component: T = new _component();
            this._components.push(component);
            component.node = this;
            return component;
        } else if (typeof _component == "object") {
            if (!this.findComponent(_component)) {
                this._components.push(_component);
                _component.node = this;
            }
            return _component;
        }
    }

    removeComponent<T extends Component>(_component: (new () => T) | T | string) {
        for (let index = 0; index < this._components.length; index++) {
            const component = this._components[index];
            if (typeof _component == "function") {
                if (component instanceof _component) {
                    this._components.splice(index, 1);
                    component.node = null;
                    return component;
                }
            } else if (typeof _component == "object") {
                if (component == _component) {
                    this._components.splice(index, 1);
                    component.node = null;
                    return component;
                }
            } else if (typeof _component == "string") {
                if (component.name == _component) {
                    this._components.splice(index, 1);
                    component.node = null;
                    return component;
                }
            }
        }
    }

    findComponent<T extends Component>(_component: (new () => T) | T | string) {
        for (let index = 0; index < this._components.length; index++) {
            const component = this._components[index];
            if (typeof _component == "function") {
                if (component instanceof _component) {
                    return component;
                }
            } else if (typeof _component == "object") {
                if (component == _component) {
                    return component;
                }
            } else if (typeof _component == "string") {
                if (component.name == _component) {
                    return component;
                }
            }
        }
    }

    Destroy() {

    }

}