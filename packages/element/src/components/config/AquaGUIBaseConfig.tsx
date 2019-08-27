import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import { RenderProps } from '@aqua-gui/types';
import { namespace } from 'vuex-class';
import { isEmpty } from '@aqua-gui/utils';
const CommonModule = namespace('common');


@Component
export default class AquaGUIBaseConfig extends tsx.Component<{}> {
  @CommonModule.Getter('_selectItem') public getSelectedItem!: any;
  @CommonModule.Getter('_getRenderList') public getRenderList!: any;

  // justifyList
  public justifyList: string[] = ['start', 'end', 'center', 'space-around', 'space-between'];
  // alignList
  public alignList: string[] = ['top', 'middle', 'bottom'];

  private res: any = {};

  public findRenderListItem(item: RenderProps) {
    // 如果直接是个空对象直接返回一个空对象
    if (isEmpty(item)) { return {}; }
    if (item.id) {
      this.findIdItem(this.getRenderList, item.id);
    } else {
      return {};
    }
  }

  // 递归去找到唯一的那个renderList里面的item
  // TODO: 这个地方太消耗性能了，要想办法优化
  public findIdItem(list: RenderProps[], id: string) {
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (item.children && item.children.length > 0) {
        this.findIdItem(item.children, id);
      }
      if (item.id === id) {
        this.res = item;
        break;
      }
    }
  }


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
                  min={0}
                  max={24}
                  showInput={true}>
                </el-slider>
              </el-form-item>
            </div>
            :
            null
        }
      </el-form>
    );
  }

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
              <el-select v-model={this.getSelectedItem.componentsProps.props.align} placeholder='布局模式(可选 flex，现代浏览器下有效)'>
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
