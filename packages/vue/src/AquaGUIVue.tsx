/**
 *  数据处理层
 *  负责上级(element/iView/ant....这些ui库)和下级(core)的数据处理和数据抹平
 */

import {Component, Prop, InjectReactive, ProvideReactive, Vue} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';
import AquaGUICore from './core/AquaGUICore';
import { RenderProps, AquaGUIVueProps } from '@aqua-gui/types';

@Component
export default class AquaGUIVue extends tsx.Component<AquaGUIVueProps> {


  @InjectReactive('renderItem') public renderItemData!: any;
  // 全局参数
  // @ProvideReactive('renderList')
  // public ProvideRenderList: RenderProps[] = [];

  @Prop(PropTypes.string.def('element'))
  public theme!: string;

  @Prop(PropTypes.array.def([]))
  public list!: RenderProps[];

  // 一定要和上层的draggable使用同一个
  // 因为同一个对象才能互相拖拽...
  @Prop(PropTypes.any)
  public draggable!: any;

  public created() {
  }

  public handleEmitAdd(e: any) {
    console.log(e, ' emit');
    console.log(this.renderItemData, ' emit');
  }

  public render() {
    return (
      <div class={'aqua-gui-main-data'}>
        <AquaGUICore
          draggable={this.draggable}
          onAdd={this.handleEmitAdd}
          renderList={this.list}
        />
      </div>
    );
  }
}


