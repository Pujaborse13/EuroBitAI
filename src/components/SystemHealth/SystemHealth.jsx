import "./SystemHealth.css";

import {
    Cpu,
    Database,
    Server,
    Activity
} from "lucide-react";


function SystemHealth(){


const systems=[

{
name:"CPU Usage",
value:"45%",
icon:<Cpu/>
},

{
name:"Memory",
value:"62%",
icon:<Activity/>
},

{
name:"Database",
value:"Healthy",
icon:<Database/>
},

{
name:"Services",
value:"98%",
icon:<Server/>
}

];


return(

<div className="health-card">


<h2>
System Health
</h2>



{
systems.map((item,index)=>(


<div className="health-item" key={index}>


<div>

{item.icon}

</div>


<div>

<p>{item.name}</p>

<h3>{item.value}</h3>


</div>


</div>


))

}


</div>

);


}


export default SystemHealth;