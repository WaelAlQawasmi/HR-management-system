
let allEmployy=[];
function Employee(employeeId,fullName,department,level,imageUrl)
{this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    

}
Employee.prototype.salary=function(){
    if(this.level=="Senior"){ 
       
        seniorSelary=Math.round(Math.random() * (2000 - 1500) + 1500);
        this.salary=seniorSelary-seniorSelary*.075;
        creatCard(this.fullName,this.imageUrl,this.level,this.department,this.employeeId);
   
}

if(this.level=="Mid-Senior"){ 
 
    this.selary = Math.round(Math.random() * (1500 - 1000) + 1000);
    // this.salary=this.salary-this.salary*.075;
    this.salary=this.salary-this.salary*.075;
    creatCard(this.fullName,this.imageUrl,this.level,this.department,this.employeeId);
 
}


if(this.level=="Junior"){ 
    this.selary= Math.round(Math.random() * (1000 - 500) + 500);
    this.salary=this.salary-this.salary*.075;
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


const ranaSaleh = new Employee(1005,"Rana Saleh","Development","Junior","./img/Rana .png");
ranaSaleh.salary();

const hadiAhmad = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","./img/Hadi .png");

hadiAhmad.salary();

///////////////////////////////////////////

//localStorages(allEmployy);

var continer=document.getElementById("continer");
let form =document.getElementById("form");


    function addPerson(event){
    event.preventDefault();
    let id=idGenrator();
    let  name=event.target.fullName.value;
    let imgUrl=event.target.imgUrl.value;
    let level=event.target.level.value;
    let Department=event.target.Department.value;
    let syl=salaryNewEmployy(level)
    let newEmployy={employeeId:id,
        fullName:name,
        department:Department,
        level:level,
        imageUrl:imgUrl,
    salary:syl};
   alert(
    newEmployy.salary
   ) ;

//console.log(newEmployy);
        allEmployy.push(newEmployy);
        // for (const iterator of allEmployy) {
        //     console.log(iterator);
        // }
    
        localStorages(allEmployy);
         
  //console.table(name,imgUrl,level,Department,id);
  creatCard(name,imgUrl,level,Department,id);
}


function salaryNewEmployy(level) {
   let SelaryNew;
   alert(level);
    if(level=="Senior"){ 
        
       
        SelaryNew=Math.round(Math.random() * (2000 - 1500) + 1500);
      
   
}

if(level=="Mid-Senior"){ 
 
    SelaryNew = Math.round(Math.random() * (1500 - 1000) + 1000);
    // this.salary=this.salary-this.salary*.075;
  
    
 
}



if(level=="Junior"){ 
    SelaryNew= Math.round(Math.random() * (1000 - 500) + 500);
 
    }
    alert(SelaryNew);
  return SelaryNew;
}  




var Uid=1007;
function idGenrator()
{
    return Uid++;
}



function salaryNewEmployy(level) {
    let SelaryNew;
  
     if(level=="Senior"){ 
         
        
         SelaryNew=Math.round(Math.random() * (2000 - 1500) + 1500);
       
    
 }
 
 if(level=="Mid-Senior"){ 
  
     SelaryNew = Math.round(Math.random() * (1500 - 1000) + 1000);
     // this.salary=this.salary-this.salary*.075;
   
     
  
 }
 
 
 if(level=="Junior"){ 
     SelaryNew= Math.round(Math.random() * (1000 - 500) + 500);
  
     }
    
   return SelaryNew;
 }  
 
 

function creatCard(name,imgUrl,level,Department ,id){
    var continer=document.getElementById(Department);
   let div= document.createElement('div');
   let contant= document.createElement('div');
   let img= document.createElement('img');
   div.appendChild(img);
   img.setAttribute('src',imgUrl);
   let card= continer.appendChild(div);
card.appendChild(contant);
let ssLry =salaryNewEmployy(level);
contant.textContent=` Name:${name} -Level:${level} Department:${Department}-ID: ${id}-salary ${ssLry}`;
    div.setAttribute('class','card');
    
  

}

function localStorages(arr){
    let jeson=JSON.stringify(arr);
    localStorage.setItem("employys",jeson);
}


function FromLocalStorages(){

   let data=  JSON.parse(localStorage.getItem("employys")) ;
   if(data!=null){
   for (const iterator of data) {
    creatCard(iterator.fullName,iterator.imageUrl,iterator.level,iterator.department ,iterator.employeeId)
 console.log(iterator.fullName)
   }}
   
    return data;
}


function onStart(){
    let storage=FromLocalStorages();
    let Administration=[];
    let Marketing=[];
    let Development=[];
    let Finance=[];
    if(storage!=null){

        for (const index1 of storage) {
          
        
            
  
             allEmployy.push(index1);
        }
       console.log(Development);
        }
        

        console.log(allEmployy);
}


onStart();

form.addEventListener('submit', addPerson);
///////////////account page/////////

