import React from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Form, FormItem, Input } from '@formily/antd-v5'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
  scope: {
    requiredReactions(field) {
      const requiredField = field.query('required_1').take()
      console.log('requiredField: ', Math.random(), requiredField.value)
      if (!requiredField) {
        return
      }
      field.setState({
        value: requiredField.value,
      })
    },
  },
})

const requireSchema = {
  type: 'object',
  properties: {
    required_1: {
      name: 'required_1',
      title: '必填',
      type: 'string',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    required_2: {
      name: 'required_2',
      title: '必填',
      type: 'string',
      'x-validator': {
        required: true,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    required_3: {
      name: 'required_3',
      title: '必填',
      type: 'string',
      'x-validator': [
        {
          required: true,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-reactions': '{{requiredReactions}}',
      // "x-reactions": {
      //   dependencies: ["required_1"],
      //   fulfill: {
      //     state: {
      //       value: "{{$deps[0]}}"
      //     }
      //   }
      // }
    },
  },
}

export default class FormPart extends React.Component {
  form = createForm({
    initialValues: {
      required_1: 1,
    },
  })
  render() {
    return (
      <>
        <Form form={this.form} labelCol={6} wrapperCol={10}>
          <SchemaField schema={requireSchema} />
        </Form>
        <div onClick={() => console.log(this.form.values)}> 点击 </div>
      </>
    )
  }
}
