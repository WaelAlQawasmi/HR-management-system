function Employee(employeeId,fullName,department,level,imageUrl,salary)
{this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    

}
Employee.prototype.salary=function(){
    if(this.level=="Senior"){ 
       
        this.selary=Math.floor(Math.random() * (2000 - 1500) + 1500);
        this.salary=this.salary-(this.salary*.075);
        creatCard(this.fullName,this.imageUrl,this.level,this.department,this.employeeId);
   
}

if(this.level=="Mid-Senior"){ 
 
    this.selary = Math.floor(Math.random() * (1500 - 1000) + 1000);
    this.salary=this.salary-(this.salary*.075);
    creatCard(this.fullName,this.imageUrl,this.level,this.department,this.employeeId);
 
}


if(this.level=="Junior"){ 
    this.selary= Math.floor(Math.random() * (1000 - 500) + 500);
    this.salary=this.salary-(this.salary*.075);
    creatCard(this.fullName,this.imageUrl,this.level,this.department,this.employeeId);
    // document.write(this.fullName+" " + this.selary + "<br>");
    }
  
}
const GhaziSamer = new Employee(1000,"Ghazi Samer","Administration","Senior","./img/Ghazi .png");
GhaziSamer.salary();

const lanaAli = new Employee(1001,"Lana Ali","Finance","Senior","./img/Lana .png");
lanaAli.salary();

const tamaraAyoub = new Employee(1002,"Tamara Ayoub","Marketing","Senior","./img/Tamara .png");
tamaraAyoub.salary();

const safiWalid = new Employee(1003,"Safi Walid","Administration","Mid-Senior","./img/Safi.png");
safiWalid.salary();

const omarZaid = new Employee(1004,"Omar Zaid","Development","Senior","./img/Omar .png");
omarZaid.salary();

const ranaSaleh = new Employee(1004,"Rana Saleh","Development","Junior","./img/Rana .png");
ranaSaleh.salary();



///////////////////////////////////////////
var continer=document.getElementById("continer");
let form =document.getElementById("form");
function addPerson(event){
  event.preventDefault();
  let  name=event.target.fullName.value;
  let imgUrl=event.target.imgUrl.value;
  let level=event.target.level.value;
  let Department=event.target.Department.value;
  
  console.table(name,imgUrl,level,Department,idGenrator());
  creatCard(name,imgUrl,level,Department,idGenrator());
}


function idGenrator()
{let id =Math.floor(Math.random() * 10000);
    return id;
}

function creatCard(name,imgUrl,level,Department ,id){
    var continer=document.getElementById("continer");
   let div= document.createElement('div');
   let contant= document.createElement('div');
   let img= document.createElement('img');
   div.appendChild(img);
   img.setAttribute('src',imgUrl);
   let card= continer.appendChild(div);
card.appendChild(contant);
contant.textContent=` Name:${name} -Level:${level} Department:${Department}-ID: ${id}`;
    div.setAttribute('class','card');
  

}
form.addEventListener('submit', addPerson);

const hadiAhmad = new Employee(1004,"Hadi Ahmad","Finance","Mid-Senior","./img/hadi.png");
hadiAhmad.salary();
