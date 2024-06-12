class Person{
    // data-member
    pname:string;
    fname:string;
    pcontact:number;
    paddress:string;
    psingle:boolean;


    constructor(name:string,contact:number,address:string,single:boolean){
        this.pname=name;
        this.pcontact=contact;
        this.paddress=address;
        this.psingle=single;
    }

    // member function

    // persondetails(){
    //     console.log(` contact:${this.pcontact},address${this.paddress},single${this.psingle}`);
    // }
 
// let person_obj= new Person("sandeep",8888,"chennai",true);
//   console.log( person_obj.pname);
//   person_obj.persondetails();
 }
export default Person