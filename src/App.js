import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [value, setValue] = useState(0);
  const [followers, setFollowers] = useState([]);

  const changePage = (index)=>{
    setValue(index)
  }

  useEffect(() => {
    if (loading) {
      return;
    }
    setFollowers(data[value]);
  }, [loading, value]);

  return (
    <main>
      <div className="section-title">
        <h1>pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
       {
         !loading &&(<div className="btn-container">
          {data.map((item,index)=>{
            return <button 
            key={index} 
            className={`page-btn ${index === value ? "active-btn" :null}`}
            onClick={()=>changePage(index)}
            > 
            
            {index + 1}
            </button>
          })}
        </div>)
       } 
      </section>
    </main>
  );
}

export default App;
