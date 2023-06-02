import "./App.css";
import NavigationBar from "./componets/Navigation bar";
import "./style/LandingPage.css";
import Intro from "./componets/intro";
import ContentOne from "./componets/ContentOne";
import ContentTwo from "./componets/ContentTwo";

function App() {
  return (
    <div>
      {/* {intro} */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* {intro end} */}

      {/* {trending} */}
      <div className="ContentOne">
      <ContentOne/>
      </div>
      {/* {trending end} */}
      <ContentTwo/>

    </div>
  );
}

export default App;
