console.log(
    "good afternoon all"
);

// number datatype
 let num1:number =100 , num2:number=200, num3:number =300;
 console.log(num1,num2,num3);
 // string
  let fname:string="sandeep";
  console.log(fname);
  //boolean
  let con1:boolean =true;
  console.log(con1);
  //array
  let students_roll:number[]=[1,2,3,4,5,6,7];
  console.log(students_roll);
  let emp:Array<string>=["ram","shyam","sundar"];
  console.log(emp);

  // tuple : it allows user to store mutliple type of data in array

  let product:[number,string]=[101,"shyam"];

  // enum data : it is use to create constant variable with value
  enum days{sun,mon,tue,wed,thurs,fri,sat};
  let data1=days.sun;
  let data2=days.mon;
  let data3=days.wed;

  // union data: it allows user to store multiple type of data in single variable.
  let items:string | number=25645;
  // any data type : when we dont know what type of data is going to store in a variable
  let futureData:any=true;


  // write a finction with three parametwer fname,mname laname and display full name
   function full_name(fname:string, mname:string,lname:string){
   
    return `^${fname} ${mname} ${lname}`;
    
   }
   console.log(full_name("Sandeep","M N","Rao"));