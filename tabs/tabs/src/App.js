import Tabs from "./components/Tabs"
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs style={{padding: 20, marginRight: 10,  border:"2px solid black"}} tabItems={[
        {header: "Tab1", content: "Tab1 Content",callback(){
          console.log(this.header, "was clicked")
        }},
        {header: "Tab2", content: "Tab2 Content",callback(){
          console.log(this.header, "was clicked")
        }},
        {header: "Tab3", content: "Tab3 Content",callback(){
          console.log(this.header, "was clicked")
        }},
      ]} />
    </div>
  );
}

export default App;
