export default {
  layoutComponents: [
    {
      renderType: 'row',
      renderName: 'Row组件',
      renderComponentTag: 'el-row',
      componentsProps: {
        props: {
          gutter: 1,
          type: 'flex',
          justify: 'start',
          align: 'middle',
          tag: 'div',
        }
      },
      children: [],
      componentType: 'layout',
    },
    {
      type: 'col',
      renderType: 'col',
      name: 'Col组件',
      renderName: 'Col组件',
      renderComponentTag: 'el-col',
      componentsProps: {
        props: {
          gutter: 1,
          type: 'flex',
          justify: 'start',
          align: 'middle',
          tag: 'div',
        }
      },
      children: [],
      componentType: 'layout',
      span: 6,
    },
  ],
  // basicComponents: [
  //   {
  //     type: 'phone',
  //     renderType: 'phone',
  //     renderName: '手机号',
  //     name: '手机号',
  //     placeholder: '请输入手机号',
  //     showLabel: false,
  //     label: {
  //       labelTitle: '手机号',
  //       labelPosition: 'left',
  //       labelwidth: 50,
  //       labelWidth: '50px',
  //     },
  //     value: '',
  //     apiKey: 'phone',
  //     codeValue: '',
  //     codeKey: 'verifyCode',
  //     showCode: true,
  //     style: {
  //       margin: '0px 0px 0px 0px',
  //       btnStyle: {
  //         background: '#409EFF',
  //       },
  //     },
  //     componentType: 'basic',
  //   },
  //   {
  //     renderType: 'input',
  //     name: '输入框(可以测试)',
  //     renderName: '输入框(可以测试)',
  //     placeholder: '请输入姓名',
  //     showLabel: false,

  //     label: {
  //       labelTitle: '姓名',
  //       labelPosition: 'left',
  //       labelwidth: 50,
  //       labelWidth: '50px',
  //     },
  //     value: '222',
  //     apiKey: 'name',
  //     fieldTypes: 'inputTypes',
  //     style: {
  //       margin: '0px 0px 0px 0px',
  //     },
  //     componentType: 'basic',
  //   },
  //   {
  //     type: 'checkbox',
  //     renderType: 'checkbox',
  //     renderName: '选择框',
  //     name: '选择框',
  //     value: [],
  //     apiKey: 'shootPlace',
  //     isRadio: false,
  //     label: {
  //       labelTitle: '旅拍城市',
  //       labelwidth: 66,
  //       labelWidth: '66px',
  //       labelPosition: 'left',
  //     },
  //     fieldTypes: 'checkboxTypes',
  //     options: [
  //       '北京',
  //       '三亚',
  //       '丽江',
  //       '巴厘岛',
  //       '马尔代夫',
  //       '威尼斯',
  //       '其他',
  //     ],
  //     style: {
  //       margin: '0px 0px 0px 0px',
  //     },
  //     componentType: 'basic',

  //   },
  //   {
  //     type: 'date',
  //     renderType: 'date',
  //     name: '日期选择器',
  //     renderName: '日期选择器',
  //     label: {
  //       labelTitle: '生日',
  //       labelwidth: 50,
  //       labelWidth: '50px',
  //       labelPosition: 'left',
  //     },
  //     apiKey: 'birthday',
  //     value: '',
  //     fieldTypes: 'dateTypes',
  //     style: {
  //       margin: '0px 0px 0px 0px',
  //     },
  //     componentType: 'basic',

  //   },
  //   {
  //     type: 'select',
  //     renderType: 'select',
  //     name: '下拉选择框',
  //     value: '',
  //     apiKey: 'educationLevel',
  //     placeholder: '请选择教育程度',
  //     renderName: '下拉选择框',
  //     showLabel: true,
  //     label: {
  //       labelTitle: '教育程度',
  //       labelPosition: 'left',
  //       labelwidth: 66,
  //       labelWidth: '66px',
  //     },
  //     fieldTypes: 'selectTypes',
  //     options: [
  //       '硕士及以上',
  //       '本科',
  //       '大专',
  //       '中专/高中及以下',
  //     ],
  //     style: {
  //       margin: '0px 0px 0px 0px',
  //     },
  //     componentType: 'basic',

  //   },
  //   {
  //     type: 'switch',
  //     name: '开关',
  //     renderName: '开关',
  //     value: false,
  //     label: {
  //       labelTitle: '是否有信用卡',
  //       labelPosition: 'left',
  //       labelwidth: 100,
  //       labelWidth: '100px',
  //     },
  //     fieldTypes: 'switchTypes',
  //     apiKey: 'creditCard',
  //     style: {
  //       margin: '0px 0px 0px 0px',
  //     },
  //     componentType: 'basic',

  //   },
  //   {
  //     type: 'button',
  //     renderType: 'button',
  //     name: '按钮',
  //     renderName: '按钮',
  //     btnText: '提交',
  //     btnType: 'submit',
  //     apiKey: '',
  //     btnTypes: [
  //       {
  //         value: 'submit',
  //         label: '提交',
  //       },
  //     ],
  //     style: {
  //       margin: '0px 0px 0px 0px',
  //       btnStyle: {
  //         background: '#409EFF',
  //       },
  //     },
  //     componentType: 'basic',

  //   },
  // ],
  // imgComponents: [
  //   {
  //     type: 'imgSlide',
  //     renderType: 'imgSlide',
  //     renderName: '图片轮播',
  //     name: '图片轮播',
  //     value: [
  //       {
  //         url: 'https://www.baidu.com',
  //         image: 'static/img/theme1.jpg',
  //       },
  //       {
  //         url: 'https://qq.com',
  //         image: 'static/img/theme2.jpg',
  //       },
  //       {
  //         url: 'https://jd.com',
  //         image: 'static/img/theme3.jpg',
  //       },
  //     ],
  //     interval: 3000,
  //     style: {
  //       margin: '0px 0px 0px 0px',
  //       height: 250,
  //     },
  //     componentType: 'img',

  //   },
  //   {
  //     type: 'imgShow',
  //     renderType: 'imgShow',
  //     name: '图片展示',
  //     renderName: '图片展示',
  //     value: '',
  //     style: {
  //       margin: '0px 0px 0px 0px',
  //     },
  //   },
  // ],
  // assistComponents: [
  //   {
  //     type: 'staticText',
  //     renderType: 'staticText',
  //     name: '文本描述',
  //     renderName: '文本描述',
  //     value: '文本描述',
  //     style: {
  //       textAlign: 'left',
  //       fontsize: 14,
  //       fontSize: '14px',
  //       color: '#333333',
  //       margin: '0px 0px 0px 0px',
  //     },
  //     componentType: 'assist',
  //   },
  //   {
  //     type: 'splitLine',
  //     renderType: 'splitLine',
  //     name: '分割线',
  //     renderName: '分割线',
  //     value: 'solid',
  //     style: {
  //       borderColor: '#d3d3d3',
  //       borderStyle: 'solid',
  //       borderTopWidth: '1px',
  //       margin: '20px 0px 20px 0px',
  //     },
  //     componentType: 'assist',
  //   },
  // ],

};
