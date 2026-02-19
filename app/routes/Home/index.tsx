import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chuks Kitchen - Home" },
    { name: "description", content: "Welcome to your dashboard" },
  ];
}

const HomePage = () => {
    
    return ( 
        <>
                <div className="min-h-[47.4vh]  bg-gray-100">
                    <h1>Welcome to Chuks Kitchen!</h1>
                    <p>Your content here</p>
                </div>
        </>
    );
}
 
export default HomePage;