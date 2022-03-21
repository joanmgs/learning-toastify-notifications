//@ts-nocheck
import "./styles/App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/notifyToasty.css";
import { useState } from "react/cjs/react.development";

// Toasty component
const ToastyDesignComponent = ({ title, message }) => {
  return (
    <div className="container-text-toasty">
      <span className="title-toasty">{title}</span>
      <span className="msg-toasty">{message}</span>
    </div>
  );
};

function App() {
  const [title, setTitle] = useState("Agrega un título");
  const [message, setMessage] = useState("Agrega un mensaje");

  // Notification
  const notify = () => {
    toast.success(<ToastyDesignComponent title={title} message={message} />, {
      hideProgressBar: true, //hide the progress bar
      autoClose: 100000,
    });
    toast.warning(<ToastyDesignComponent title={title} message={message} />, {
      hideProgressBar: true, //hide the progress bar
      autoClose: 100000,
    });
    toast.error(<ToastyDesignComponent title={title} message={message} />, {
      hideProgressBar: true, //hide the progress bar
      autoClose: 100000,
    });
    toast.info(<ToastyDesignComponent title={title} message={message} />, {
      hideProgressBar: true, //hide the progress bar
      autoClose: 100000,
    });
  };

  const handleNotification = (e) => {
    e.preventDefault();
    setTitle(e.target.elements.title.value);
    setMessage(e.target.elements.message.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleNotification}>
        <input name="title" type="text" placeholder="Title: " />
        <input name="message" type="text" placeholder="Message: " />
        <button type="submit">Fill me</button>
      </form>
      <button
        type="button"
        onClick={() => {
          notify();
        }}
      >
        Show
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
