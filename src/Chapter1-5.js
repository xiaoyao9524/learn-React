import React, { Component } from "react";
import { NavLink, Route, Prompt } from "react-router-dom";

const PreventingTransitionsExample = ({match}) => (
  <div>
    <ul>
      <li><NavLink exact to={`${match.url}`}>表单</NavLink></li>
      <li><NavLink to={`${match.url}/one`}>页面 1</NavLink></li>
      <li><NavLink to={`${match.url}/two`}>页面 2</NavLink></li>
    </ul>

    <Route exact path={`${match.url}`} component={Form}/>
    <Route path={`${match.url}/one`} render={() => (<h3>页面 1</h3>)}/>
    <Route path={`${match.url}/two`} render={() => (<h3>页面 2</h3>)}/>
  </div>
)

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isBlocking: false
    }
  }

  render () {
    const {isBlocking} = this.state;
    return (
      <form 
        onSubmit={ev => {
          ev.preventDefault();
          ev.target.reset();
          this.setState({
            isBlocking: true
          })

        }}
      >
        <Prompt
          when={isBlocking}
          message={location => (`你真的要跳转到 ${location.pathname}么？`)}
        />
        <p>
          是否无法跳转? {isBlocking ? '好，现在试试再试试点击那些链接' : '可以正常跳转'}
        </p>
        
        <p>
          <input
            size="50"
            placeholder="你这里面输入了以后就不能正常跳转了"
            onChange={event => {
              this.setState({
                isBlocking: event.target.value.length > 0
              })
            }}
          />
        </p>

        <p>
          <button>提交表单以后就可以正常跳转了</button>
        </p>
      </form>
    )
  }
}

export default PreventingTransitionsExample;
