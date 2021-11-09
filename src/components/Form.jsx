import React, { useState } from 'react'
import { Button, Form, Input, Spin } from 'antd';

const Forms = function ({ sumbitForm, updater }) {
    const formRef = React.createRef();
    const [name, setName] = useState('')

    function handleChange (event) {
        setName(event.target.value);
    }
    function submit () {
        sumbitForm(name)
        setName('');
    }

    return (
        <div className="form" >
            <h1>Добавьте новую запись</h1>
            <Form onFinish={submit} ref={formRef} name="control-ref">
                <Form.Item
                    name="name"
                    onChange={handleChange}
                    placeholder="Название записи"
                    rules={[
                        {
                            required: true,
                            message: 'Пожайлуста, заполните поле!',
                        },
                    ]}
                >
                    <Input value={name} />
                </Form.Item>
                <Button type="submit" htmlType="submit">
                    {updater ? <Spin /> : 'Сохранить' }
                </Button>
            </Form>

            
        </div>
    );
}

export default Forms