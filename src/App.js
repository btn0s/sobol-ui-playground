import React from 'react';

import { Button, Icon, Tabs, TabPane } from './components';

import { Menu, Dropdown, Card, Table, Alert, Row, Col, Input, Modal, PageHeader } from 'antd';

import './App.less';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const Sheet = ({ children }) => <div className="Sheet">{children}</div>;
const SheetHeader = ({ children }) => (
  <div className="Sheet__Header">
    <PageHeader
      backIcon={<Icon type="ArrowLeft" />}
      onBack={() => null}
      title="NonPrime Object"
      subTitle="goal"
      extra={[
        <Button key="3">
          <Icon type="MoreHorizontal" />
        </Button>,
        <Button key="2">
          <Icon type="Share2" />
        </Button>,
        <Button key="1">
          <Icon type="X" />
        </Button>,
      ]}
      footer={
        <Tabs defaultActiveKey="1">
          <TabPane tab="Details" key="1" />
          <TabPane tab="Rule" key="2" />
        </Tabs>
      }
    />
  </div>
);
const SheetContent = ({ children }) => <div className="Sheet__Content">{children}</div>;

class ModalWrapper extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Sheet>
        <SheetHeader />
        <SheetContent>
          <Row type="flex" gutter={8} justify="space-between" className="sheet__actions">
            <Col>
              <Row type="flex" gutter={8}>
                <Col>
                  <Button type="primary" icon={<Icon type="Target" />}>
                    Add Goal
                  </Button>
                </Col>
                <Col>
                  <Button>
                    <Icon type="Layout" />
                    Add Section
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Input
                prefix={<Icon type="Search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Search and filter"
              />
            </Col>
          </Row>
          <Row>
            <Table dataSource={dataSource} columns={columns} />
          </Row>
        </SheetContent>
      </Sheet>
      <header className="App-header">
        <ModalWrapper />
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="ChevronDown" />
          </a>
        </Dropdown>
        <Card
          hoverable
          size="small"
          title="Small size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Button type="primary">
          <Icon type="Target" />
          Add Goal
        </Button>
        <Button>Default</Button>
        <Button type="danger">Danger</Button>

        <div>
          <Alert message="Success Text" type="success" />
          <Alert message="Info Text" type="info" />
          <Alert message="Warning Text" type="warning" />
          <Alert message="Error Text" type="error" />
        </div>
      </header>
    </div>
  );
}

export default App;
