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

        
        let table = document.createElement('table');
        
        let table2 = document.createElement('table');
        document.getElementById('main').appendChild(table2);
        document.getElementById('main').appendChild(table);


        createDep("th", " Department","Number of employees","Total salary",table2);
        createDep("td", "All Department",allEmployy,allEmployySal,table2);
        
        createDep("th", "Department Name","Number of employees","Total salary",table);
        createDep("td", "Finance",FinanceCOunt,Finance,table);
        createDep("td", "Development",DevelopmentCount,Development,table);
        createDep("td", "Marketing",MarketingCount,Marketing,table);

        createDep("td", "Administration",adminCount,Administration,table);
       

 function createDep(sty,f1,f2,f3,tableN){
let c=0;

            let tr1 = document.createElement('tr');
            let th1 = document.createElement(sty);
            th1.setAttribute("id", c++);
            th1.innerHTML =f1;
            let th2= document.createElement(sty);
            th2.innerHTML =f2 ;
            let th3 = document.createElement(sty);
            th3.innerHTML = f3;
            let th4 = document.createElement(sty);
            if (sty=="th") {
                th4.innerHTML ="Average salary" ;   
            }
            else
            {
                th4.innerHTML =f3/nanHandel(f2);    
            }
          
    
            tr1.appendChild(th1);
            tr1.appendChild(th2);
            tr1.appendChild(th3);
            tr1.appendChild(th4);
            tableN.appendChild(tr1);
            


        }

        function nanHandel(n1){
      
            if (n1==0||n1==null||n1==NaN) {
                return 1;

                
            }
            else{
                return n1  
            }
        }
       
      
        }

 }
 onStartAcount();