import React from "react";

const Heading = (props)=>{
    return(
        <div className="flex items-center justify-between g-2 bg-white rounded-2xl w-full m-2 py-6 px-8">
            <div className="flex flex-col">
                <h1>Projects:{props.Projects}</h1>
                <p>Manage and monitor all active projects</p>
            </div>
            <input 
                type="text" 
                placeholder="Search..."
                className='padding: "8px",
                width: "250px",
                borderRadius: "4px",
                border: "1px solid #ccc"
                m-3'
            />
            <img
                src="https://static.vecteezy.com/system/resources/previews/001/505/138/non_2x/notification-bell-icon-free-vector.jpg"
                alt="Notification"
                className="w-5 h-5 object-contain"
            />
            <h3>email</h3>
        </div>
    );
}


export default Heading;