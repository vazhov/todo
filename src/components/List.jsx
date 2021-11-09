import React from 'react'
import ListItem from './ListItem'
import { List } from 'antd';

const ListBoard = ({ todos, deleteTodo, updateCheckbox }) => {
    const handleChange = (index) => {
        deleteTodo(index)
    }
    const toggleCheckbox = (value) => {
        updateCheckbox(value)
    }
    return (
        <div>
            <List
                size="small"    
                bordered
                dataSource={todos}
                renderItem={item => (
                    <ListItem
                        data={item}
                        onClick={handleChange}
                        onChange={toggleCheckbox}
                    />
                )}
            />
        </div>
    )
}

export default ListBoard