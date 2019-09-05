import * as tsx from 'vue-tsx-support';
import { Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const CommonModule = namespace('common');


@Component
export default class AquaGUIBaseConfig extends tsx.Component<{}> {
  @CommonModule.State((state) => state.selectItem) public getSelectedItem!: any;
  @CommonModule.Getter('_getRenderList') public getRenderList!: any;

  // justifyList
  public justifyList: string[] = ['start', 'end', 'center', 'space-around', 'space-between'];
  // alignList
  public alignList: string[] = ['top', 'middle', 'bottom'];

  // TODO: 这个地方也是组件类型越多越没办法写。
  // TODO: 因为每个组件的类型不同这里不知道有没有更好的实现方案.
  public render() {
    const { renderType } = this.getSelectedItem;
    return (

      <el-form label-position='top'>
        {
          renderType === 'row'
          ?
          <div>
            <el-form-item label='栅格间隔'>
              <el-input-number
                v-model={this.getSelectedItem.componentsProps.props.gutter}
                min={0}
              />
            </el-form-item>
            <el-form-item label='布局模式(可选 flex，现代浏览器下有效)'>
              <el-switch
                v-model={this.getSelectedItem.componentsProps.props.type }
                activeText={'开启'}
                inactiveText={'关闭'}
                activeValue={'flex'}
                inactiveValue={' '}
              />
            </el-form-item>
            {
              this.renderFlexChild(this.getSelectedItem.componentsProps.props.type)
            }
          </div>
          :
          null
        }
        {
          renderType === 'col'
            ?
            <div>
              <el-form-item label='栅格占据的列数(span)'>
                <el-slider
                  key={this.getSelectedItem.componentsProps.props.id}
                  v-model={this.getSelectedItem.componentsProps.props.span}
                  min={1}
                  max={24}
                  showInput={true}>
                </el-slider>
              </el-form-item>
            </div>
            :
            null
        }
        {
          renderType === 'input'
          ?
          <div>
            <el-form-item label='是否显示label'>
              <el-switch
                v-model={this.getSelectedItem.customProps.showLabel}
                activeText={'开启'}
                inactiveText={'关闭'}
                activeValue={true}
                inactiveValue={false}
              />
            </el-form-item>
            {
              this.getSelectedItem.customProps.showLabel &&
              (
                <el-form-item  label='label名称'>
                  <el-input
                    v-model={this.getSelectedItem.componentsProps.props.label}
                  />
                </el-form-item>
              )
            }
            <el-form-item label='默认值'>
              <el-input
                maxlength={this.getSelectedItem.componentsProps.attrs.maxlength}
                v-model={this.getSelectedItem.componentsProps.props.value}
              />
            </el-form-item>
            <el-form-item label='提示语'>
              <el-input
                v-model={this.getSelectedItem.componentsProps.attrs.placeholder}
              />
            </el-form-item>
            <el-form-item label='是否可清空'>
              <el-switch
                v-model={this.getSelectedItem.componentsProps.props.clearable}
                activeText={'开启'}
                inactiveText={'关闭'}
                activeValue={true}
                inactiveValue={false}
              />
            </el-form-item>
            <el-form-item label='最大输入长度'>
                <el-input-number
                v-model={this.getSelectedItem.componentsProps.attrs.maxlength}
                min={0}
              />
              </el-form-item>
          </div>
          :
          null
        }
      </el-form>
    );
  }

  // 布局子组件
  private renderFlexChild(type: string) {
    if (type === 'flex') {
      return (
          <div>
            <el-form-item label='justify'>
              <el-select v-model={this.getSelectedItem.componentsProps.props.justify} placeholder='flex 布局下的水平排列方式'>
                {
                  this.justifyList.map((item) => {
                    return <el-option  label={item} value={item} />;
                  })
                }
              </el-select>
            </el-form-item>
            <el-form-item label='align'>
              <el-select
                v-model={this.getSelectedItem.componentsProps.props.align}
                placeholder='布局模式(可选 flex，现代浏览器下有效)'
              >
                {
                  this.alignList.map((item) => {
                    return <el-option  label={item} value={item} />;
                  })
                }
              </el-select>
            </el-form-item>
          </div>
      );
    }
  }
}
