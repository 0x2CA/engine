"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __importDefault(require("../Math/Vector"));
var Node = /** @class */ (function () {
    function Node(name) {
        if (name === void 0) { name = "Node"; }
        this.name = "";
        this._Vector = new Vector_1.default();
        this._parent = null;
        this._childrens = new Array();
        this._components = new Array();
        this.name = name;
    }
    Object.defineProperty(Node.prototype, "Vector", {
        get: function () {
            return this._Vector;
        },
        set: function (value) {
            this._Vector = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (value) {
            this._parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "childrens", {
        get: function () {
            return this._childrens;
        },
        set: function (value) {
            this._childrens = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "components", {
        get: function () {
            return this._components;
        },
        set: function (value) {
            this._components = value;
        },
        enumerable: true,
        configurable: true
    });
    Node.prototype.addComponent = function (_component) {
        if (typeof _component == "function") {
            var component = new _component();
            this._components.push(component);
            component.node = this;
            return component;
        }
        else if (typeof _component == "object") {
            if (!this.findComponent(_component)) {
                this._components.push(_component);
                _component.node = this;
            }
            return _component;
        }
    };
    Node.prototype.removeComponent = function (_component) {
        for (var index = 0; index < this._components.length; index++) {
            var component = this._components[index];
            if (typeof _component == "function") {
                if (component instanceof _component) {
                    this._components.splice(index, 1);
                    component.node = null;
                    return component;
                }
            }
            else if (typeof _component == "object") {
                if (component == _component) {
                    this._components.splice(index, 1);
                    component.node = null;
                    return component;
                }
            }
            else if (typeof _component == "string") {
                if (component.name == _component) {
                    this._components.splice(index, 1);
                    component.node = null;
                    return component;
                }
            }
        }
    };
    Node.prototype.findComponent = function (_component) {
        for (var index = 0; index < this._components.length; index++) {
            var component = this._components[index];
            if (typeof _component == "function") {
                if (component instanceof _component) {
                    return component;
                }
            }
            else if (typeof _component == "object") {
                if (component == _component) {
                    return component;
                }
            }
            else if (typeof _component == "string") {
                if (component.name == _component) {
                    return component;
                }
            }
        }
    };
    Node.prototype.Destroy = function () {
    };
    return Node;
}());
exports.default = Node;
