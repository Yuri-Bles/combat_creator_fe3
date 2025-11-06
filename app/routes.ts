import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("combat_system_draft/", "routes/combat_system_draft.tsx")
] satisfies RouteConfig;
