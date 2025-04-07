import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../homepage";
import Vibhag from "../division/vibhag";
import Bhag from "../division/bhag";
import Nagar from "../division/nagar";
import Vasathi from "../division/vasathi";
import Upavasathi from "../division/upavasathi";
//import EventParticipantsForm from "./components/EventParticipantsForm"; // example
//import About from "./components/About"; // example

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      }, 
      {
        path: "/vibhag/:prantId",
        element: <Vibhag />,
      },
      {
        path: "/bhag/:vibhagId",
        element: <Bhag />,
      },
      {
        path: "/nagar/:bhagId",
        element: <Nagar />,
      },
      {
        path: "/vasathi/:nagarId",
        element: <Vasathi />,
      },
      {
        path: "/upavasathi/:vasathiId",
        element: <Upavasathi />,
      },
    //   {
    //     path: "/home/eventId/participantsform",
    //     element: <EventParticipantsForm />,
    //   },
    //   {
    //     path: "/about",
    //     element: <About />,
    //   }
    ],
  },
]);
