import { createContext } from "react";

const ApiContext = createContext();
export default ApiContext;

// created and exported ApiContext to share API data and loading state across components without passing props at each level. This allows ApiProvider to supply fetched product data to any component that needs it.
