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


  public render() {
    this.findRenderListItem(this.getSelectedItem);
    const { renderType } = this.getSelectedItem;
    return (

      <el-form label-position='top'>
        {
          renderType === 'row'
          ?
          <div>
            <el-form-item label='栅格间隔'>
              <el-input-number
                key={this.res.id}
                v-model={this.res.gutter}
                min={0}
              />
            </el-form-item>
          </div>
          :
          null
        }

        {
          renderType === 'col'
            ?
            <div>
              <el-form-item label='span'>
                <el-input-number
                  key={this.res.id}
                  v-model={this.res.span}
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

}
