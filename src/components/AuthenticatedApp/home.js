import React from 'react';
import { Tabs, Row, Col, Button, Card, Divider } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

function EventTypes() {

  const cardStyle = { borderTop: "2px solid blue", borderRadius: "4px" };


  return (
    <>
      <Row>
        <Col span={8}>
          My Link
      <br />
          <a href="">appointment.com/sdsasa </a>
        </Col>
        <Col span={4} offset={12}>
          <Button icon={<PlusOutlined />}>New Event Type</Button>
        </Col>
      </Row>
      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }} />
      <Row gutter={16}>
        <Col span={8}>
          <Card
            style={{...cardStyle}}
            actions={[
              <a href="">Edit </a>
            ]}>
            Demo Call
            <br/>
            30 min
        </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{...cardStyle}}
            actions={[
              <a href="">Edit </a>
            ]}>
            Demo Call <br/>
            30 min
        </Card>
        </Col>
        <Col span={8} >
          <Card
            style={{...cardStyle}}
            actions={[
              <a href="">Edit </a>
            ]} >
            Demo Call<br/>
            30 min
        </Card>
        </Col>
      </Row>
    </>
  )
}

function ScheduledEvents() {
  return (
    'schedlued meeting'
  )
}

const Home = () => {
  return (
    <div>
      <h1>My Schedule</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Event Types" key="1">
          <EventTypes />
        </TabPane>
        <TabPane tab="Scheduled Events" key="2">
          <ScheduledEvents />
        </TabPane>
      </Tabs>
    </div>
  )
}


export default Home;