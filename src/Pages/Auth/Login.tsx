
import { useState } from "react";
import { message, Form, Input, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type LoginFieldType = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values: LoginFieldType) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/auth/dashboard/login", values);
      const { access, refresh, role } = response.data.data;
      
      // Store tokens in localStorage
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("userRole", role);
      
      message.success("Login successful!");
      navigate("/dashboard/home");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.meta?.message || "Login failed. Please try again.";
      message.error(errorMessage);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <div className="bg-white shadow-md rounded p-6 w-[440px] text-center">
        <img
          src="src/assets/Images/FP_Project.png"
          alt="Project Logo"
          className="w-[223px] h-[214px] mx-auto"
        />
        <h1 className="text-2xl font-normal leading-[30.26px] text-gray-800 mb-6">
          Welcome Back!
        </h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          className="space-y-4"
        >
          <Form.Item<LoginFieldType>
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              type="email"
              placeholder="Email"
              className="rounded-md"
            />
          </Form.Item>
          <Form.Item<LoginFieldType>
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Password"
              className="rounded-md"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#011C38] text-white py-2 rounded-md"
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
