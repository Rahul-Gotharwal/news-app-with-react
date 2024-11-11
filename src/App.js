
import NewsNav from "./News-Comp/NewsNav";
import News from "./News-Comp/News"
import "./App.css";
const  App = ()=> {
    return (
     <>
      <div>
      <NewsNav/> 
      <News key="general" pageSize={6} country="in" category="general"/>
      </div>
      </>
    
    )
  
}
export default App;