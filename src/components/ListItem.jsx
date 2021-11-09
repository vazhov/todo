import React from 'react'
import { List, Button, Checkbox, Typography  } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const  { Text } = Typography;

const ListItem = ({data, onClick, onChange}) => {
    const deleteTodo = () => {
        onClick(data.id);
    }
    const toggleCheckbox = () => {
        onChange(data.id)
    }
    return (
        <List.Item className="list-item">
            <Checkbox
                defaultChecked={data.checked}
                onChange={toggleCheckbox}
            />
            <Text delete={data.checked} >{data.title}</Text>
            <Button
                danger
                icon={<DeleteOutlined />}
                onClick={deleteTodo}
            >
            </Button>
        </List.Item>
    )
}

export default ListItem