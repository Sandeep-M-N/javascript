var Person = /** @class */ (function () {
    function Person() {
        // data-member
        // fname:string="sandeep";
        this.pcontact = 88888;
        this.paddress = "chennai";
        this.psingle = true;
    }
    // member function
    Person.prototype.persondetails = function () {
        console.log(" contact:".concat(this.pcontact, " address").concat(this.paddress, " single").concat(this.psingle));
    };
    return Person;
}());
var person_obj = new Person();
//   console.log( person_obj.);
person_obj.persondetails();
