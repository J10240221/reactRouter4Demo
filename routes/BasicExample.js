import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BasicExample = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

const Home = () => <h2>Home</h2>;
const About = props => <h2>About{props.aa}</h2>;
const Topics = ({ match }) => (
  <div>
    <h2>Topic</h2>
    <div>
      <ul>
        <li><Link to={`${match.path}/topic1`}> topic1</Link></li>
        <li><Link to={`${match.path}/topic2`}> topic2</Link></li>
        <li><Link to={`${match.path}/topic3`}> topic3</Link></li>
      </ul>
      <Route path={`${match.path}/:topicNum`} component={Topic} />
      <Route path={`${match.path}`} exact render={() => {
        return (<div>Please select a topic</div>);
      }} />
    </div>
  </div>
);

const Topic = ({ match }) => {
  console.log(match.params);
  return (
    <div>
      {match.params.topicNum}
    </div>
  );
};

export default BasicExample;