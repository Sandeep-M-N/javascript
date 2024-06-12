import Person from "./oops2";
 class Company extends Person{
    cname:string;
    gstnumber:number;
    state:string

    constructor(name:string,contact:number,address:string,single:boolean,compname:string,compgst:number,compstate:string){
        super(name,contact,address,single);
    }


    personDetails(){
        console.log(`name:${this.pname}  contact:${this.pcontact} single:${this.psingle},address:${this.paddress}  companyname:${this.cname} gstnumber:${this.gstnumber} state ${this.state} `)
    }
   
 }
 let company= new Company("sandeep",8888,"chennai",true,"changepond",1234,"tamilnadu")
 company.personDetails();

 

