import { useEffect, useState } from "react";
import dot from "./assets/images/radio-button-on-outline.svg";

function Card({ picture, name, notification, action, read, time, index, markRead, message, chess }) {

  const [press, setPress] = useState(false);

  function pressHandler() {
    setPress(!press);
  }
  
  return (
    <div className={`card-container ${read ? "" : "unread"}`} onClick={(e) => {markRead(index, e); pressHandler()}}>
      <div className="inner-container">
        <img src={picture} alt="picture" className="image" />
        <div className="detail">
          <div className="detail-upper">
            <span className="detail-name">{name}</span> <span className="detail-notification">{notification}</span> <a href={`/${action}`} className={`detail-action ${read ? "grey" : ""}`}>{action}</a>
          {read ? null : <img src={dot} alt="dot" className="red-dot" />}
          </div>
          <div>{time}</div>
          {(press && message !== "") ? <div className="message">{message}</div> : null}
        </div>
      </div>
        {chess !== "" ? <img src={chess} alt="chess" className="chess" /> : null}
      <style>{`
        .card-container {
          margin-bottom: 20px;
          background-color: inherit;
          padding: 15px 20px;
          display: flex;
          gap: 15px;
          border-radius: 10px;
          cursor: pointer;
          justify-content: space-between;
        }

        .inner-container {
          display: flex;
          gap: 10px;
        }
        
        .red-dot {
          height: 9px;
          width: 9px;
          margin-left: 5px;
        }
        
        .message {
          padding: 15px 20px;
          background-color: hsl(210, 60%, 98%);
          margin-top: 15px;
          border-radius: 5px;
          color: hsl(219, 12%, 42%);
        }

        .chess {
          height: 40px;
          width: 40px;
        }
        
        .unread {
          // background-color: hsl(210, 60%, 98%);
          background-color: hsl(210, 60%, 98%);
        }
        
        .image {
          height: 45px;
          width: 45px;
        }
        
        .detail {
          display: grid;
          gap: 3px;
        }
        
        .detail-upper {
          display: inline;
          gap: 5px;
        }

        .detail-name {
          color: black;
          font-weight: bold;
        }

        .detail-notification {
          color: hsl(219, 12%, 42%);
        }

        .grey {
          color: hsl(219, 12%, 42%) !important;
        }

        .detail-action {
          color: hsl(219, 85%, 26%);
          text-decoration: none;
          font-weight: bold;
        }

        .detail-action:hover {
          text-decoration: underline;
        }

        .detail-name:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

export default Card;
