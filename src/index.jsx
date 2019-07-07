/** @jsx h */
import { h, Component, render } from "preact";
import { Router } from "preact-router";
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
//import API from "./api"
import "./figure.css"

const NODE = document.body.querySelector("main");
const API = {
  id: 0,
  title: `No, motherfucker`,
  body: `My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?`,
  image: require("./img/s3-news-tmp-77017-pulp-fiction-053--2x1--940.jpg")

};

class SomeClassName extends Component {
  constructor() {
    super();
    this.state = API
  }
  render(props, state) {
    return (
      <main>

        <figure>
          <figcaption>
            <h3>{state.title}</h3>
            <p>{state.body}</p>
          </figcaption>
          <img src={state.image.srcSet} alt="" />
        </figure>

      </main>

    )
  }
}

const App = () => (
  <div>
    <SomeClassName />
  </div>
);

render(<App />, document.body, NODE);
