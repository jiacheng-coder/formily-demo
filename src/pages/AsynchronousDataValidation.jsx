import React from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Form, FormItem, Input } from '@formily/antd-v5'
import { debounce } from 'lodash'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const requestMock = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!value) {
        resolve('')
      }
      if (value === '123') {
        resolve('')
      } else {
        reject('错误❎')
      }
    }, 200)
  })
}

const debounceValidator = debounce((value, callback) => {
  requestMock(value)
    .then(() => {
      console.log('success')
      callback('')
    })
    .catch(err => {
      console.log(err)
      callback(err)
    })
}, 300)

const schema = {
  type: 'object',
  properties: {
    async_validate: {
      title: '异步校验',
      required: true,
      'x-validator': value => {
        return new Promise(resolve => {
          debounceValidator(value, resolve)
        })
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
  },
}

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField schema={schema} />
  </Form>
)
