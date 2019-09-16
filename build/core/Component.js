"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component = /** @class */ (function () {
    function Component(name) {
        if (name === void 0) { name = "Component"; }
        this._node = null;
        this.name = "";
        this.name = name;
    }
    Object.defineProperty(Component.prototype, "node", {
        get: function () {
            return this._node;
        },
        set: function (node) {
            if (node != this._node) {
                if (this._node) {
                    this._node.removeComponent(this);
                }
                this._node = node;
                if (this._node) {
                    this._node.addComponent(this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Component.prototype.onEnable = function () {
    };
    Component.prototype.onDisable = function () {
    };
    Component.prototype.onLoad = function () {
    };
    Component.prototype.start = function () {
    };
    Component.prototype.update = function (td) {
    };
    Component.prototype.Destroy = function () {
    };
    return Component;
}());
exports.default = Component;
