import MyWeb from "./components/MyWeb";
import "./index.css";
import { PostContextProvider } from "./context/PostContext";

function App() {
  return (
    <>
      <PostContextProvider>
        <MyWeb />
      </PostContextProvider>
    </>
  );
}

export default App;
