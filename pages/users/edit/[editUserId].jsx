// next provides hooks for using params
import { useRouter } from "next/router";

export default function EditIdPage(){
    // open an instance of useRouter
    const router = useRouter()
    // pull the path param (called query)  from the router object
    const { editUserId } = router.query
    
    return (
        <>
        <h1> Hello user with an id of {editUserId}</h1>
        </>
    )
}