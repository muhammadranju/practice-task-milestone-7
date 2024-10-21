import "./App.css";
import Blogs from "./components/Blogs";
import Bookmark from "./components/Bookmark";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex gap-5">
        <div>
          <Blogs />
        </div>
        <div className=" w-2/5">
          <Bookmark />
        </div>
      </div>
    </div>
  );
}

export default App;
