import React from 'react';
import {Input, Button, List} from 'antd';

/*
* 无状态组件:
*   性能好（只是一个函数）
* */
const TodoListUI = (props) => (
    <div className="todo-list" style={{display: 'flex', justifyContent: 'center'}}>
      <div className="main" style={{width: '500px'}}>
        <div style={{marginTop: '10px'}}>
          <Input
              onChange={props.handlerChange}
              value={props.inputValue}
              placeholder="请输入要添加的任务"
              style={{width: '300px', marginRight: '10px'}}
          />
          <Button type='primary' onClick={props.handlerClick}>保存</Button>
        </div>
        <List
            style={{width: '300px', marginTop: '10px'}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
                <List.Item onClick={() => {
                  props.deleteItem(index)
                }}>{item}</List.Item>
            )}
        />
      </div>
    </div>
);

export default TodoListUI;