import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "../routes/tab.routes";
import DrawerRoutes from "./drawer.routes";

export default function App() {
    return(
        <NavigationContainer>
            {/* <TabRoutes /> */}
            <DrawerRoutes />
        </NavigationContainer>
    )
}