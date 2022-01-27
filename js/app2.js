function FromLocalStorages(){

    let data=  JSON.parse(localStorage.getItem("employy")) ;
  
    
     return data;
 }


function onStartAcount(){
let allEmployy=0;
let allEmployySal=0;

    let storage=FromLocalStorages();
    let Administration=0;
    let adminCount=0;
    let Marketing=0;
    let MarketingCount=0;
    let Development=0;
    let DevelopmentCount=0;
    let Finance=0;
    let FinanceCOunt=0;
    if(storage!=null){

        for (const index1 of storage) {
            allEmployy++;
            allEmployySal= index1.salary+allEmployySal;
            switch (index1.department){
                case "Administration":
                    Administration=Administration+index1.salary;
                    adminCount++;
                break;

                case "Marketing":
     MarketingCount++;

                    Marketing=index1.salary+Marketing;
                break;

                case "Development":
                    DevelopmentCount++;
                    Development=index1.salary+Development;
                break;
                
                case "Finance":
                    FinanceCOunt++;
                    Finance=index1.salary+Finance;
                break;

            } 
           
  
            
        }

        document.getElementById('allEmployy').innerHTML=allEmployy;
        document.getElementById('allEmployySal').innerHTML=allEmployySal;
        document.getElementById('allEmployySalA').innerHTML=allEmployySal/allEmployy;
       
        document.getElementById('MarketingCount').innerHTML=MarketingCount;
        document.getElementById('FinanceCOunt').innerHTML=FinanceCOunt;
       
        document.getElementById('DevelopmentCount').innerHTML=DevelopmentCount;
        document.getElementById('adminNamber').innerHTML=adminCount;
        document.getElementById('Marketing').innerHTML=Marketing;
        document.getElementById('Finance').innerHTML=Finance;
       
        document.getElementById('Development').innerHTML=Development;
        document.getElementById('Administration').innerHTML=Administration;
      

        document.getElementById('MarketingA').innerHTML=Marketing/MarketingCount;
        document.getElementById('FinanceA').innerHTML=Finance/FinanceCOunt;
       
        document.getElementById('DevelopmentA').innerHTML=Development/DevelopmentCount;
        document.getElementById('AdministrationA').innerHTML=Administration/adminCount;
      
        }

 }
 onStartAcount();