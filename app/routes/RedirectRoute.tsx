import { redirect } from "react-router";

export async function loader() {
  return  redirect('/onboarding')
}



const RedirectRoute = () => {
    return null
}
 
export default RedirectRoute;