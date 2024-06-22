import React, { useState, useEffect } from "react";
import useUser from "../../hooks/useUser";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Form, Image, Input, Row, Typography, Space } from "antd";
import {
  EditOutlined,
  SaveOutlined,
  CloseOutlined,
  LockOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

function UserProfile() {
  const { id } = useParams();
  const { userDetail, fetchUserDetail, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      (async () => {
        await fetchUserDetail(id);
      })();
    }
  }, [id]);

  useEffect(() => {
    if (userDetail) {
      form.setFieldsValue(userDetail);
    }
  }, [userDetail]);

  useEffect(() => {
    if (!isEditing) {
      form.setFieldsValue({ password: "", confirm: "" });
    }
  }, [isEditing]);

  console.log("check user", userDetail);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleUpdate = async () => {
    setLoading(true);
    const values = form.getFieldsValue();
    const changes = {};

    for (const key in values) {
      if (values[key] !== userDetail[key]) {
        changes[key] = values[key];
      }
    }

    if (Object.keys(changes).length > 0) {
      try {
        await updateUser(id, changes);
        setIsEditing(false); // set isEditing to false after successful update
      } catch (error) {
        // handle error here
        console.error(error);
      }
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto py-8">
      <Row gutter={16}>
        <Col span={12} className="flex justify-center items-center">
          <Image
            src="https://i.pinimg.com/originals/3f/fe/bf/3ffebf9cb953a5eceb48bfd2d54db8a2.jpg"
            width={400}
            preview={false}
            className="rounded-lg shadow-lg"
          />
        </Col>
        <Col span={12}>
          <Title level={2}>User Profile</Title>
          <Form form={form} initialValues={userDetail} layout="vertical">
            <Form.Item label="Member Name" name="membername">
              <Input readOnly={!isEditing} />
            </Form.Item>
            <Form.Item label="Name" name="name">
              <Input readOnly={!isEditing} />
            </Form.Item>
            <Form.Item label="Birth Year" name="YOB">
              <Input readOnly={!isEditing} />
            </Form.Item>
            <Form.Item>
              {isEditing ? (
                <Space>
                  <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    loading={loading}
                    onClick={handleUpdate}
                  >
                    Submit
                  </Button>
                  <Button
                    type="default"
                    icon={<CloseOutlined />}
                    onClick={handleCancel}
                  >
                    Close
                  </Button>
                </Space>
              ) : (
                <Space>
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={handleEdit}
                  >
                    Edit
                  </Button>
                  <Button type="default" icon={<LockOutlined />}>
                    <Link to={`/user/change-password/${id}`}>
                      Change Password
                    </Link>
                  </Button>
                </Space>
              )}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default UserProfile;
