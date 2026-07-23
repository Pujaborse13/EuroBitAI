import "./Notification.css";


function Notification(){

    const notifications = [

        {
            id:1,
            type:"Critical",
            title:"Production API Down",
            message:"Payment Gateway service is not responding.",
            time:"2 minutes ago"
        },

        {
            id:2,
            type:"Warning",
            title:"IBM MQ Queue Threshold Exceeded",
            message:"PAYMENT.REQUEST.Q depth reached 8500 messages.",
            time:"10 minutes ago"
        },


        {
            id:3,
            type:"Success",
            title:"Auto Healing Completed",
            message:"Application service restarted successfully.",
            time:"20 minutes ago"
        },


        {
            id:4,
            type:"Info",
            title:"Deployment Completed",
            message:"DB Assist v2.5 deployed successfully on OpenShift.",
            time:"1 hour ago"
        },


        {
            id:5,
            type:"Security",
            title:"Security Alert Detected",
            message:"Multiple failed login attempts detected.",
            time:"2 hours ago"
        }

    ];



    return(

        <div className="notification-page">


            <h1>
                Notifications
            </h1>


            <div className="notification-container">


            {
                notifications.map((item)=>(

                    <div 
                    className={`notification-card ${item.type}`}
                    key={item.id}
                    >


                        <div className="notification-header">

                            <h3>
                                {item.title}
                            </h3>


                            <span>
                                {item.type}
                            </span>

                        </div>


                        <p>
                            {item.message}
                        </p>


                        <small>
                            {item.time}
                        </small>


                    </div>


                ))
            }


            </div>


        </div>


    );

}


export default Notification;