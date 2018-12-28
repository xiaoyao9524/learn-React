import React, {Component} from 'react';
import {
  Route,
  NavLink,
  Redirect,
  withRouter
} from 'react-router-dom';

// //////////////////////////////////////////////////////////
// 流程简介：
// 1. 点击「public 页面」
// 2. 点击 「protected 页面」
// 3. 登入
// 4. 点击后退，并且在每一步过程中观察URL的变化

const Public = () => <h3>公开的页面</h3>;
const Protected = () => <h3>非公开的页面</h3>;

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100) // 模拟异步。
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
};

// const AuthButton = withRouter(({ history }) => (
//     fakeAuth.isAuthenticated ? (
//         <p>
//           欢迎! <button onClick={() => {
//           fakeAuth.signout(() => history.push('/'))
//         }}>登出</button>
//         </p>
//     ) : (
//         <p>请先登录</p>
//     )
// ));

const AuthButton = withRouter(({history}) => {
  return fakeAuth.isAuthenticated ? (
      <p>
        欢迎! <button onClick={() => {
        fakeAuth.signout(() => {
          history.push('/authExample')
        })
      }}>登出</button>
      </p>
  ) : (
      <p>请先登录</p>
  )
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    }
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({redirectToReferrer: true})
    })
  };

  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;
    if (redirectToReferrer) {
      return (
          <Redirect to={from}/>
      )
    }

    return (
        <div>
          <p>若想访问 {from.pathname} ，你需要先登录</p>
          <button onClick={this.login}>登录</button>
        </div>
    )
  }
}

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
      <Route
          {...rest}
          render={props => {
            return (
                fakeAuth.isAuthenticated ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                      pathname: `/authExample/login`,
                      state: {from: props.location}
                    }}/>
                )
            )
          }}
      />
  )
};

class AuthExample extends Component {
  render() {
    const {match} = this.props;
    return (
        <div>
          <AuthButton/>
          <ul>
            <li><NavLink to={`${match.url}/public`}>公开页面</NavLink></li>
            <li><NavLink to={`${match.url}/Protected`}>非公开页面</NavLink></li>
          </ul>
          <Route path={`${match.url}/public`} component={Public}/>
          <Route path={`${match.url}/login`} component={Login}/>
          <PrivateRoute path={`${match.url}/protected`} component={Protected}/>
        </div>
    )
  }
}

export default AuthExample;