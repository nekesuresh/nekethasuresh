import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set the background to black at the document level
document.documentElement.style.backgroundColor = 'black';
document.body.style.backgroundColor = 'black';

createRoot(document.getElementById("root")!).render(<App />);
