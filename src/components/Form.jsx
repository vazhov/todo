import React, { useState } from 'react'
import { Button, Form, Input, Spin } from 'antd';

const Forms = function ({ sumbitForm, updater }) {
    const [form] = Form.useForm();
    const [name, setName] = useState('')

    function handleChange (event) {
        setName(event.target.value);
    }
    function submit (e) {
        if (name !== '') {
            sumbitForm(name)
            setName('');
            form.resetFields();
        }
    }

    return (
        <div className="form" >
            <h1>Добавьте новую запись</h1>
            <Form form={form} onFinish={submit} name="control-ref">
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