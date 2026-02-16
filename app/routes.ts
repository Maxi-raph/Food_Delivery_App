import { type RouteConfig,route, index, layout } from "@react-router/dev/routes";

export default [
index('routes/RedirectRoute.tsx'),
route("/onboarding", "routes/Onboarding/index.tsx",[
    index('routes/Onboarding/OnboardingPage.tsx'),
    route('signUp', 'routes/Onboarding/SignUpPage.tsx'),
    route('login', "routes/Onboarding/LoginPage.tsx")
]),
route("/home", "routes/Home/index.tsx")
] satisfies RouteConfig;
