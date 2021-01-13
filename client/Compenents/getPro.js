const {React,useEffect} = require('react')
const {useQuery,gql} = require("@apollo/client");
const { LOAD_USERS } = require ('../GraphQL/Queries');
function GetPro(){

    const{error, loading, data}=useQuery(LOAD_USERS)

    useEffect(()=>{
        console.log(data)

    }, [data])
    return(
        "<div> </div>"
    )

}
module.exports = GetPro;