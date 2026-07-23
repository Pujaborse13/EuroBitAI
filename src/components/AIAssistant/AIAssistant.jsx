import "./AIAssistant.css";
import { useState } from "react";


import {
  Send,
  Mic,
  ArrowLeft
} from "lucide-react";


function AIAssistant() {


    const [prompt,setPrompt] = useState("");
    const [response,setResponse] = useState("");


    const handleSend =()=>{


        if(prompt.trim()==="") return;


        if(prompt.toLowerCase().includes("payment application slow")){


            setResponse(

            <>


            <div className="status-card">

                <h4>🚨 Payment Gateway</h4>

                <span className="severity high">
                    HIGH
                </span>

            </div>



            <div className="section">

                <h5>Status</h5>

                <p>
                    High response time detected.
                </p>

            </div>



            <div className="section">


                <h5>
                    Possible Root Cause
                </h5>


                <ul>

                    <li>
                        CPU utilization reached 92%
                    </li>

                    <li>
                        Database connection pool exhausted
                    </li>

                    <li>
                        2 backend pods restarted recently
                    </li>

                </ul>


            </div>


            <div className="section">


                <h5>
                    Recommended Actions
                </h5>


                <ol>

                    <li>
                        Restart payment-service pods
                    </li>

                    <li>
                        Increase DB connection pool
                    </li>

                    <li>
                        Check JVM Heap usage
                    </li>

                    <li>
                        Review deployment logs
                    </li>


                </ol>


            </div>


            </>


            );


        }
        else{


            setResponse(
                "Sorry, I don't have an answer for this query yet."
            );


        }


    }

    const handleBack = () => {
     setResponse("");
        };

const handleSuggestion = (type) => {


    if(type === "infrastructure") {


        setResponse(

        <>


        <div className="status-card">

            <h4>🖥️ Infrastructure Health</h4>

            <span className="severity low">
                HEALTHY
            </span>

        </div>



        <div className="section">

            <h5>Status</h5>

            <p>
                All critical infrastructure components are operating normally.
            </p>

        </div>



        <div className="section">

            <h5>System Metrics</h5>

            <ul>

                <li>
                    CPU Utilization : 48%
                </li>

                <li>
                    Memory Usage : 62%
                </li>

                <li>
                    Active Kubernetes Pods : 124
                </li>

                <li>
                    Application Availability : 99.98%
                </li>

            </ul>


        </div>



        <div className="section">

            <h5>AI Recommendation</h5>

            <p>
                No immediate action required. Continue monitoring application workloads.
            </p>

        </div>


        </>

        );


    }



    else if(type === "incidents") {



        setResponse(

        <>


        <div className="status-card">

            <h4>📋 Today's Incident Summary</h4>

            <span className="severity medium">
                5 INCIDENTS
            </span>

        </div>



        <div className="section">

            <h5>Summary</h5>

            <p>
                AI analyzed today's operational incidents and generated the summary.
            </p>

        </div>




        <div className="section">

            <h5>Incident Overview</h5>

            <ul>

                <li>
                    Payment Gateway latency issue - Resolved
                </li>

                <li>
                    Database connection timeout - Monitoring
                </li>

                <li>
                    API authentication failure - Closed
                </li>

                <li>
                    Batch processing delay - Investigating
                </li>


            </ul>


        </div>




        <div className="section">

            <h5>AI Insight</h5>

            <p>
                Majority of incidents are related to database and service dependency performance.
            </p>


        </div>


        </>

        );



    }



    else if(type === "servers") {



        setResponse(

        <>


        <div className="status-card">

            <h4>🖧 Server Status Overview</h4>

            <span className="severity low">
                ONLINE
            </span>

        </div>




        <div className="section">

            <h5>Environment Status</h5>

            <p>
                All production servers are reachable.
            </p>

        </div>




        <div className="section">


            <h5>
                Server Health
            </h5>


            <ul>

                <li>
                    Application Servers : 32/32 Healthy
                </li>


                <li>
                    Database Servers : 8/8 Healthy
                </li>


                <li>
                    Middleware Servers : 15/15 Healthy
                </li>


                <li>
                    Failed Health Checks : 0
                </li>


            </ul>


        </div>



        <div className="section">

            <h5>
                Recommendation
            </h5>


            <p>
                Continue normal operations. No server remediation required.
            </p>


        </div>


        </>

        );



    }


};
return(


<div className="ai-card">



<div className="ai-content">


<h1>
I'm your AI Operations Assistant
</h1>


<p>
Ask me anything in natural language.
</p>


</div>




<div className="search-box-ai">


<input


value={prompt}


onChange={(e)=>setPrompt(e.target.value)}


onKeyDown={(e)=>{

if(e.key==="Enter")
{
handleSend();
}

}}


placeholder="Example: Why is payment application slow since morning?"

/>

<button className="mic-btn">

<Mic size={18}/>

</button>




<button 
className="send-btn"
onClick={handleSend}
>

<Send size={18}/>

</button>


</div>

{
!response ?



<div className="suggestions">


<p className="suggestions-title"> Not sure what to ask? </p>



<div className="suggestion-list">

<div className="suggestion-card" onClick={()=>handleSuggestion("infrastructure")}
>🖥️ Infrastructure Health

</div>


<div className="suggestion-card" onClick={()=>handleSuggestion("incidents")}>
📋 Summarize Today's Incidents

</div>

<div className="suggestion-card" onClick={()=>handleSuggestion("servers")}>

🖧 Check Status of All Servers

</div>
</div>

</div>

:

<div className="ai-response">

<button 
className="back-btn"
onClick={handleBack}
>

<ArrowLeft size={20}/>

</button>


<div className="response-content">

{response}

</div>


</div>


}



</div>


)


}


export default AIAssistant;