import { useEffect, useState } from "react";
import { getRoles } from "../service/api";


export default  function RoleSelector(){
    
    const [roles , setRoles] = useState<string[]>([]);

    useEffect(() =>{
        getRoles().then((res) =>{
            console.log("res.data.roles",res.data);
            setRoles(res.data);
        });
    },[]);

    return (
        <div>
 <label className="block font-medium mb-2">
        Select Target Role
      </label>

<select>
    <option>Select Role</option>
    {roles?.map((role)=>(
        <option key={role} value={role}>
{role}
        </option>
    ))}
</select>

            
        </div>
    )

}