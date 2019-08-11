export default {
  layoutComponents: [
    {
      type: 'row',
      name: 'Row组件',
      originProps: {
        gutter: 1,
        type: 'flex',
        justify: 'start',
        align: 'middle',
        tag: 'span',
      },
      customProps: {

      },
      tasks: [],
      componentType: 'layout',
    },
    {
      type: 'col',
      name: 'Col组件',
      tasks: [],
      componentType: 'layout',
    },
  ],
  basicComponents: [
    {
      type: 'phone',
      name: '手机号',
      placeholder: '请输入手机号',
      showLabel: false,
      label: {
        labelTitle: '手机号',
        labelPosition: 'left',
        labelwidth: 50,
        labelWidth: '50px',
      },
      value: '',
      apiKey: 'phone',
      codeValue: '',
      codeKey: 'verifyCode',
      showCode: true,
      style: {
        margin: '0px 0px 0px 0px',
        btnStyle: {
          background: '#409EFF',
        },
      },
      componentType: 'basic',
    },
    {
      type: 'input',
      name: '输入框(可以测试)',
      placeholder: '请输入姓名',
      showLabel: false,
      label: {
        labelTitle: '姓名',
        labelPosition: 'left',
        labelwidth: 50,
        labelWidth: '50px',
      },
      value: '',
      apiKey: 'name',
      fieldTypes: 'inputTypes',
      style: {
        margin: '0px 0px 0px 0px',
      },
      componentType: 'basic',
    },
    {
      type: 'checkbox',
      name: '选择框',
      value: [],
      apiKey: 'shootPlace',
      isRadio: false,
      label: {
        labelTitle: '旅拍城市',
        labelwidth: 66,
        labelWidth: '66px',
        labelPosition: 'left',
      },
      fieldTypes: 'checkboxTypes',
      options: [
        '北京',
        '三亚',
        '丽江',
        '巴厘岛',
        '马尔代夫',
        '威尼斯',
        '其他',
      ],
      style: {
        margin: '0px 0px 0px 0px',
      },
      componentType: 'basic',

    },
    {
      type: 'date',
      name: '日期选择器',
      label: {
        labelTitle: '生日',
        labelwidth: 50,
        labelWidth: '50px',
        labelPosition: 'left',
      },
      apiKey: 'birthday',
      value: '',
      fieldTypes: 'dateTypes',
      style: {
        margin: '0px 0px 0px 0px',
      },
      componentType: 'basic',

    },
    {
      type: 'select',
      name: '下拉选择框',
      value: '',
      apiKey: 'educationLevel',
      placeholder: '请选择教育程度',
      showLabel: true,
      label: {
        labelTitle: '教育程度',
        labelPosition: 'left',
        labelwidth: 66,
        labelWidth: '66px',
      },
      fieldTypes: 'selectTypes',
      options: [
        '硕士及以上',
        '本科',
        '大专',
        '中专/高中及以下',
      ],
      style: {
        margin: '0px 0px 0px 0px',
      },
      componentType: 'basic',

    },
    {
      type: 'switch',
      name: '开关',
      value: false,
      label: {
        labelTitle: '是否有信用卡',
        labelPosition: 'left',
        labelwidth: 100,
        labelWidth: '100px',
      },
      fieldTypes: 'switchTypes',
      apiKey: 'creditCard',
      style: {
        margin: '0px 0px 0px 0px',
      },
      componentType: 'basic',

    },
    {
      type: 'h-picker',
      name: '横向滑动单选',
      value: '',
      options: [
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
      ],
      label: {
        labelTitle: '年龄',
        labelPosition: 'left',
        labelwidth: 50,
        labelWidth: '50px',
      },
      fieldTypes: 'hPickerTypes',
      apiKey: 'age',
      itemWidth: 50,
      showNumber: 5,
      pickerStyle: {
        color: '#409eff',
        fontsize: 18,
        fontSize: '18px',
      },
      style: {
        margin: '0px 0px 0px 0px',
      },
      componentType: 'basic',

    },
    {
      type: 'button',
      name: '按钮',
      btnText: '提交',
      btnType: 'submit',
      apiKey: '',
      btnTypes: [
        {
          value: 'submit',
          label: '提交',
        },
      ],
      style: {
        margin: '0px 0px 0px 0px',
        btnStyle: {
          background: '#409EFF',
        },
      },
      componentType: 'basic',

    },
  ],
  imgComponents: [
    {
      type: 'imgSlide',
      name: '图片轮播',
      value: [
        {
          url: 'https://www.baidu.com',
          image: 'static/img/theme1.jpg',
        },
        {
          url: 'https://qq.com',
          image: 'static/img/theme2.jpg',
        },
        {
          url: 'https://jd.com',
          image: 'static/img/theme3.jpg',
        },
      ],
      interval: 3000,
      style: {
        margin: '0px 0px 0px 0px',
        height: 250,
      },
      componentType: 'img',

    },
    {
      type: 'imgShow',
      name: '图片展示',
      value: '',
      style: {
        margin: '0px 0px 0px 0px',
      },
    },
  ],
  assistComponents: [
    {
      type: 'staticText',
      name: '文本描述',
      value: '文本描述',
      style: {
        textAlign: 'left',
        fontsize: 14,
        fontSize: '14px',
        color: '#333333',
        margin: '0px 0px 0px 0px',
      },
      componentType: 'assist',
    },
    {
      type: 'splitLine',
      name: '分割线',
      value: 'solid',
      style: {
        borderColor: '#d3d3d3',
        borderStyle: 'solid',
        borderTopWidth: '1px',
        margin: '20px 0px 20px 0px',
      },
      componentType: 'assist',
    },
  ],
};
