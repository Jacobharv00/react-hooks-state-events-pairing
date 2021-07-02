import videoData from "../data/video.js";
import Video from './Video'


function App() {
// console.log("Here's your data:", videoData);
  return (
    <div className="App">
    <Video videoData={videoData} />
    </div>
  );
}

export default App;
