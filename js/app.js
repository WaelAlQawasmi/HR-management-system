function Employee(employeeId,fullName,department,level,imageUrl,salary)
{this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    

}
Employee.prototype.salary=function(){
    if(this.level=="Senior"){ 
        this.selary=Math.random() * (2000 - 1500) + 1500;
        document.write(this.fullName+" " + this.selary + "<br>");
   
}

if(this.level=="Mid-Senior"){ 
 
    this.selary = Math.random() * (1500 - 1000) + 1000;
   
    document.write(this.fullName+" " + this.selary + "<br>");
}


if(this.level=="Junior"){ 
    this.selary= Math.random() * (1000 - 500) + 500;
     document.write(this.fullName+" " + this.selary + "<br>");
    }
  
}
const GhaziSamer = new Employee(1000,"Ghazi Samer","Administration","Senior","./img/Ghazi.png");
GhaziSamer.salary();

const lanaAli = new Employee(1001,"Lana Ali","Finance","Senior","./img/Lana.png");
lanaAli.salary();

const tamaraAyoub = new Employee(1002,"Tamara Ayoub","Marketing","Senior","./img/tamar.png");
lanaAli.salary();

const safiWalid = new Employee(1003,"Safi Walid","Administration","Mid-Senior","./img/safi.png");
safiWalid.salary();

const omarZaid = new Employee(1004,"Omar Zaid","Development","Senior","./img/Omar.png");
omarZaid.salary();

const ranaSaleh = new Employee(1004,"Rana Saleh","Development","Junior","./img/Rana.png");
ranaSaleh.salary();

const hadiAhmad = new Employee(1004,"Hadi Ahmad","Finance","Mid-Senior","./img/hadi.png");
hadiAhmad.salary();