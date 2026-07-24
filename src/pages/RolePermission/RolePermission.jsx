import "./RolePermission.css";

import {
  Shield,
  CheckCircle,
  UserCog,
  Users,
  UserPlus,
  X
} from "lucide-react";

import { useState } from "react";



const permissions = [
  "Dashboard Access",
  "AI Assistant",
  "Knowledge Search",
  "Infrastructure Monitoring",
  "Incident Management",
  "User Management",
  "Notifications",
  "Reports",
  "Settings",
  "Audit Logs",
  "Role Management",
  "Scheduler Control",
];




function RolePermission() {


const [showMembers,setShowMembers] = useState(false);

const [showAddForm,setShowAddForm] = useState(false);



const [members,setMembers] = useState([

{
id:1,
name:"Rahul Sharma",
email:"rahul@company.com",
role:"Application Support",
level:"L1",
status:"Active"
},


{
id:2,
name:"Amit Patil",
email:"amit@company.com",
role:"Production Engineer",
level:"L2",
status:"Active"
},


{
id:3,
name:"Shivam Kumar",
email:"shivam@company.com",
role:"Platform Administrator",
level:"L3",
status:"Active"
}

]);




const [formData,setFormData]=useState({

name:"",
email:"",
role:"",
level:"L1"

});





const handleInput=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};





const saveMember=()=>{


if(
!formData.name ||
!formData.email ||
!formData.role
){

alert("Please fill all details");

return;

}



const newUser={

id:members.length+1,

name:formData.name,

email:formData.email,

role:formData.role,

level:formData.level,

status:"Active"

};



setMembers([

...members,

newUser

]);



setFormData({

name:"",
email:"",
role:"",
level:"L1"

});



setShowAddForm(false);



alert("Member Added Successfully");


};






return (

<div className="role-page">



{/* HEADER */}

<div className="page-header">

<h2>
Role & Permissions
</h2>


<p>
Manage user roles, access levels and permissions.
</p>


</div>







{/* ROLE DETAILS */}


<div className="role-card">


<div className="role-top">


<Shield
size={45}
color="#2563eb"
/>



<div>

<h3>
Administrator
</h3>


<p>
L3 Support Engineer
</p>


</div>



</div>






<div className="role-info">


<div>

<span>
Access Level
</span>

<strong className="badge">
Level 3
</strong>

</div>





<div>

<span>
Department
</span>

<strong>
Platform Engineering
</strong>

</div>





<div>

<span>
Total Members
</span>

<strong>
{members.length} Users
</strong>

</div>





<div>

<span>
Status
</span>

<strong className="active">
Active
</strong>

</div>



</div>






<div className="member-actions">



<button
className="primary-btn"
onClick={()=>setShowMembers(!showMembers)}
>

<Users size={18}/>

{
showMembers
?
"Hide Members"
:
"View Members"
}


</button>






<button
className="add-btn"
onClick={()=>setShowAddForm(true)}
>


<UserPlus size={18}/>

Add Member


</button>



</div>




</div>









{/* PERMISSION */}



<div className="permission-card">


<div className="permission-title">


<UserCog size={24}/>


<h3>
Assigned Permissions
</h3>



</div>





<div className="permission-grid">


{

permissions.map((item,index)=>(


<div
className="permission-item"
key={index}
>


<CheckCircle
size={18}
color="#22c55e"
/>


{item}


</div>


))

}


</div>



</div>









{/* ADD MEMBER FORM */}



{

showAddForm &&



<div className="form-card">


<div className="form-header">


<h3>
Add New Member
</h3>



<X
size={22}
cursor="pointer"
onClick={()=>setShowAddForm(false)}
/>



</div>






<input

type="text"

name="name"

placeholder="Employee Name"

value={formData.name}

onChange={handleInput}

/>






<input

type="email"

name="email"

placeholder="Email Address"

value={formData.email}

onChange={handleInput}

/>







<input

type="text"

name="role"

placeholder="Role"

value={formData.role}

onChange={handleInput}

/>






<select

name="level"

value={formData.level}

onChange={handleInput}

>


<option value="L1">
L1 Support Engineer
</option>


<option value="L2">
L2 Production Engineer
</option>


<option value="L3">
L3 Administrator
</option>



</select>







<button

className="save-btn"

onClick={saveMember}

>

Save Member

</button>




</div>



}









{/* MEMBER TABLE */}



{

showMembers &&



<div className="member-card">


<div className="member-header">


<h3>
Role Members
</h3>



<button

className="add-btn"

onClick={()=>setShowAddForm(true)}

>

<UserPlus size={18}/>

Add Member

</button>



</div>







<table>


<thead>


<tr>

<th>
Name
</th>


<th>
Email
</th>


<th>
Role
</th>


<th>
Level
</th>


<th>
Status
</th>


</tr>



</thead>







<tbody>



{

members.map((member)=>(



<tr key={member.id}>


<td>
{member.name}
</td>



<td>
{member.email}
</td>



<td>
{member.role}
</td>




<td>


<span className="level-badge">

{member.level}

</span>


</td>





<td>

<span className="active">

{member.status}

</span>


</td>



</tr>



))

}



</tbody>



</table>



</div>


}



</div>


);


}



export default RolePermission;