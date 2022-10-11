import { useState, useEffect } from "react";
import json_data from "./data.js";
import "./styles.css";
import Card from "./Card";

function Home() {

  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);

  function markRead(index, e) {
    e.preventDefault();
    console.log(index);
    data[index].read = true;
    setData(data);
    console.log(data[index].read);
  }

  function markAllAsRead() {
    for (let datum in data) {
      data[datum].read = true;
      setData(data);
      setClick(!click);
    }
  }
  
  function Clicker() {
    setClick(!click);
  }

  useEffect(() => {

    document.title = (count > 0 ? `Notifications (${count})` : `Notification`)
    
    setData(json_data);
    let counter = 0;
    for (let datum in data) {
      if (!data[datum].read)
        counter++
      setCount(counter);
    }
  });

  return (
    <div className="container">
      <div className="bar">
        <div className="notifications">
          <div className="noteification-text">Notifications</div>
          {count > 0 ? <div className="noteification-number">{count}</div> : null}
        </div>
        <div className="mark" onClick={markAllAsRead}>Mark all as read</div>
      </div>
      <div className="cards" onClick={Clicker}>
        {data.map((datum, index) => <Card key={index} picture={datum.picture} name={datum.name} notification={datum.notification} action={datum.action} read={datum.read} time={datum.time} index={index} markRead={markRead} message={datum.message} chess={datum.chess} />)}
      </div>
    </div>
  )
}

export default Home;