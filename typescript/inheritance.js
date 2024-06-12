"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oops2_1 = require("./oops2");
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(name, contact, address, single, compname, compgst, compstate) {
        return _super.call(this, name, contact, address, single) || this;
    }
    Company.prototype.personDetails = function () {
        console.log("name:".concat(this.pname, "  contact:").concat(this.pcontact, " single:").concat(this.psingle, ",address:").concat(this.paddress, "  companyname:").concat(this.cname, " gstnumber:").concat(this.gstnumber, " state ").concat(this.state, " "));
    };
    return Company;
}(oops2_1.default));
var company = new Company("sandeep", 8888, "chennai", true, "changepond", 1234, "tamilnadu");
