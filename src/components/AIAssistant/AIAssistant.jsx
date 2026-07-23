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

<div className="suggestion-card">

🖥️ Infrastructure Health

</div>


<div className="suggestion-card">

📋 Summarize Today's Incidents

</div>

<div className="suggestion-card">

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