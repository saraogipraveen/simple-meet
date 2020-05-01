import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Home = () => {
  return (
    <div>
      <h1>My Schedule</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Event Types" key="1">
          Event Types
    </TabPane>
        <TabPane tab="Scheduled Events" key="2">
           Events
    </TabPane>
      </Tabs>
    </div>
  )
}


export default Home;