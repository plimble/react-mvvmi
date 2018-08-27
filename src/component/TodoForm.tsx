// import * as React from 'react'
// import { observer } from 'mobx-react';
// import { Form, Input, Button } from 'antd';
// import { WrappedFormUtils } from 'antd/lib/form/Form';

// const FormItem = Form.Item

// interface IProps {
//   form: WrappedFormUtils
// }

// @observer
// class TodoForm extends React.Component<IProps, any> {

//   // private forms() {
//   //   this.props.form.getFieldDecorator()
//   // }

//   // render() {
//   //   return (
//   //     <Form layout="inline" onSubmit={this.handleSubmit}>
//   //       <FormItem
//   //         validateStatus={userNameError ? 'error' : ''}
//   //         help={userNameError || ''}
//   //       >
//   //         {getFieldDecorator('userName', {
//   //           rules: [{ required: true, message: 'Please input your username!' }],
//   //         })(
//   //           <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
//   //         )}
//   //       </FormItem>
//   //       <FormItem
//   //         validateStatus={passwordError ? 'error' : ''}
//   //         help={passwordError || ''}
//   //       >
//   //         {getFieldDecorator('password', {
//   //           rules: [{ required: true, message: 'Please input your Password!' }],
//   //         })(
//   //           <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
//   //         )}
//   //       </FormItem>
//   //       <FormItem>
//   //         <Button
//   //           type="primary"
//   //           htmlType="submit"
//   //           disabled={hasErrors(getFieldsError())}
//   //         >
//   //           Log in
//   //         </Button>
//   //       </FormItem>
//   //     </Form>
//   //   )
//   // }
// }

// export default Form.create()(TodoForm)


