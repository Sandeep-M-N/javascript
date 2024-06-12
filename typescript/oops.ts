

class Person{
    // data-member
    // fname:string="sandeep";
    pcontact:number=88888;
    paddress:string="chennai";
    psingle:boolean=true;

    // member function

    persondetails(){
        console.log(` contact:${this.pcontact} address${this.paddress} single${this.psingle}`);
    }
}
let person_obj= new Person();
//   console.log( person_obj.);
  person_obj.persondetails();