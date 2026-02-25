import { type RouteConfig,route, index, layout } from "@react-router/dev/routes";

export default [
index('routes/RedirectRoute.tsx'),
route("/onboarding", "routes/Onboarding/index.tsx",[
    index('routes/Onboarding/OnboardingPage.tsx'),
    route('signUp', 'routes/Onboarding/SignUpPage.tsx'),
    route('login', "routes/Onboarding/LoginPage.tsx")
]),
layout('Layout/Main.tsx',[
    route("/home", "routes/Home/index.tsx"),
    route("/explore", "routes/Explore/index.tsx"),
    route("/my-orders", "routes/My Orders/index.tsx"),
    route("/my-orders-summary", "routes/Order Summary/index.tsx"),    
    route("/checkout", "routes/Payment/index.tsx"),    
    route("/order-confirmation", "routes/Order Confirmation/index.tsx"),    
])
] satisfies RouteConfig;
