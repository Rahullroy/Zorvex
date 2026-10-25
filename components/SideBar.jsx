import React from "react";

const SideBar = (props)=>{
    return(
        <>
        <div className="flex flex-col bg-white h-full rounded-md overflow-hidden relative m-2 px-8 py-8 transform translate-y-6">
            <div className="Menu flex flex-col items-center justify-between g-2 ">
            <h1>Menu</h1>
            <span>
                Dashboard : {props.Dashboard}
            </span>
            <span>
                Tasks : {props.Tasks}
            </span>
            <span>
                Project : {props.Project}
            </span>
            <span>
                Analytics : {props.Analytics}
            </span>
            <span>
                Calender : {props.Calender}
            </span>
            <span>
                Team Members : {props.TeamMembers}
            </span>
            <span>
                Reports : {props.Reports}
            </span>
            <span>
                Messages : {props.Messages}
            </span>
        </div>
        <br></br>
        <div className="General flex flex-col items-center justify-between g-2">
            <span>
                Settings: {props.Settings}
            </span>
            <span>
                Help&Support : {props.HelpSupport}
            </span>
            <span>
                Logout : {props.Logout}
            </span>
        </div>
        </div>
         

        </>
       
    );
}
export default SideBar;
