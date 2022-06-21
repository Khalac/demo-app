import React from "react";
import { Button, Form, Input, Select } from "antd";
import { user } from "../../database/user";
import { useState,useCallback } from "react";


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const ListSelect = {
  gender: [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ],
};

const Home = () => {

  const [userId,setUserId] = useState()

  const [form] = Form.useForm();

  const checkId = (userId) => {
      for( let i = 0; i < user.length();++i){
        if(user[i].id == userId) return true
        else return false
      }
  }

  const onFinish = (values) => {
      user.push(values)
      console.log(user)
  };

  const handleUserId = useCallback((e) => setUserId(e.target.value),[])

  return (
    <div>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ gender: "Male" }}
    >
      <Form.Item
        name="id"
        label="ID"
        rules={[
          {
            required: true,
            message: "Please input ID",
          },
        ]}
      >
        <Input 
        placeholder="ID"
        onChange={handleUserId} 
        />
      </Form.Item>

      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your name",
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="yearOfBirth"
        label="Year of Birth"
        rules={[
          {
            required: true,
            message: "Please input your year of birth",
          },
        ]}
      >
        <Input placeholder="Year of birth" />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select your gender",
          },
        ]}
      >
        <Select options={ListSelect.gender} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Home;
