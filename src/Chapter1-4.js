import React from "react";
import { NavLink, Route } from "react-router-dom";

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
);

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
);

const OldSchoolMenuLink = ({ to, exact = false, label }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => {
      return (
        <div className={match ? "active" : ""}>
          {match ? ">" : ""}
          <NavLink to={to} exact={exact}>
            {label}
          </NavLink>
        </div>
      );
    }}
  />
);

const CustomLinkExample = ({ match }) => (
  <div>
    <div>
      <ul>
        <li>
          <OldSchoolMenuLink to={`${match.url}`} exact={true} label="首页" />
        </li>
        <li>
          <OldSchoolMenuLink to={`${match.url}/about`} label="关于" />
        </li>
      </ul>

      <Route exact path={`${match.url}`} component={Home} />
      <Route path={`${match.url}/about`} component={About} />
    </div>
  </div>
);

export default CustomLinkExample;
