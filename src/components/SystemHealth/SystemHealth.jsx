import "./SystemHealth.css";
import { useState } from "react";
import {
    Server,
    Database,
    Monitor,
    Network,
    Plus,
    Activity,
    Bot,
    Ticket,
    Search,
    AlertTriangle
} from "lucide-react";


function SystemHealth(){


const [systems,setSystems] = useState([
{
name:"Servers",
value:"98.7%",
icon:<Server/>
},

{
name:"Applications",
value:"97.1%",
icon:<Monitor/>
},

{
name:"Databases",
value:"99.2%",
icon:<Database/>
},

{
name:"Network",
value:"98.9%",
icon:<Network/>
}

]);



const actions=[

{
name:"Create Incident",
icon:<Plus/>
},

{
name:"Check Server",
icon:<Activity/>
},

{
name:"Run Automation",
icon:<Bot/>
},

{
name:"View My Tickets",
icon:<Ticket/>
},

{
name:"Search Knowledge",
icon:<Search/>
},

{
name:"Report Issue",
icon:<AlertTriangle/>
}

];

const refreshHealth = () => {


const updatedSystems = systems.map((item)=>({

...item,

value:`${(95 + Math.random()*5).toFixed(1)}%`

}));


setSystems(updatedSystems);


};



return(


<div className="health-container">



{/* SYSTEM HEALTH CARD */}


<div className="health-card">


<div className="health-header">

<h2>
System Health
</h2>


<span>
View all
</span>


</div>




<div className="overall-status">


<div className="check-circle">
✓
</div>


<div>

<h3>
All Systems Operational
</h3>

<p>
No major issues at the moment
</p>

</div>


</div>





<div className="system-list">


{
systems.map((item,index)=>(


<div 
className="system-row"
key={index}
>


<div className="system-icon">

{item.icon}

</div>


<div className="system-name">

{item.name}

</div>


<div className="system-value">

{item.value}

</div>


</div>


))
}



</div>




<div className="updated">

Last updated: 2 mins ago


<span 
onClick={refreshHealth}
className="refresh-btn"
>
↻
</span>


</div>



</div>





{/* QUICK ACTION CARD */}



<div className="quick-card">


<h2>
Quick Actions
</h2>



<div className="action-grid">


{

actions.map((item,index)=>(


<div 
className="action-item"
key={index}
>


<div className="action-icon">

{item.icon}

</div>


<p>

{item.name}

</p>


</div>


))

}


</div>



</div>



</div>


)

}


export default SystemHealth;