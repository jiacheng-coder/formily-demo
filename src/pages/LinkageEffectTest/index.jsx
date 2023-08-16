import React from 'react'
import { createForm, onFieldValueChange } from '@formily/core'
import { createSchemaField, FormConsumer } from '@formily/react'
import { Form, FormItem, Input, Password, Select } from '@formily/antd-v5'
import * as ICONS from '@ant-design/icons'

const form = createForm({
  effects() {
    // 字段值改变时触发
    onFieldValueChange('select', field => {
      console.log('effects', Math.random())
      form.setFieldState('input', state => {
        // 对于初始联动，如果字段找不到，setFieldState会将更新推入更新队列，直到字段出现再执行操作
        state.display = field.value
      })
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    Select,
  },
  scope: {
    icon(name) {
      return React.createElement(ICONS[name])
    },
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name='username'
        title='用户名'
        required
        x-decorator='FormItem'
        x-component='Input'
        x-validator={{
          required: true,
        }}
        x-component-props={{
          prefix: "{{icon('UserOutlined')}}",
        }}
      />
      <SchemaField.String
        name='password'
        title='密码'
        required
        x-decorator='FormItem'
        x-component='Password'
        x-component-props={{
          prefix: "{{icon('LockOutlined')}}",
        }}
      />
      <SchemaField.String
        name='select'
        title='控制者'
        default='visible'
        enum={[
          { label: '显示', value: 'visible' },
          { label: '隐藏', value: 'none' },
          { label: '隐藏-保留值', value: 'hidden' },
        ]}
        x-component='Select'
        x-decorator='FormItem'
      />
      <SchemaField.String name='input' title='受控者' x-component='Input' x-decorator='FormItem' />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)
