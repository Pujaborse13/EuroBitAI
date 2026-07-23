import "./Dashboard.css";

import AIAssistant from "../../components/AIAssistant/AIAssistant";
import SystemHealth from "../../components/SystemHealth/SystemHealth";


function Dashboard(){

return(

<div className="dashboard">

<div className="dashboard-layout">


<AIAssistant/>


<SystemHealth/>


</div>


</div>

);

}


export default Dashboard;