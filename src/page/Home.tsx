import * as React from 'react'
import { Todos } from '../container'
import { Layout } from 'antd'

const { Header, Content } = Layout

export default () => (
  <div>
    <Layout>
      <Header>Header</Header>
      <Content style={{ height: '300px', padding: '30px' }}>
        <Todos />
      </Content>
    </Layout>
  </div>
)
