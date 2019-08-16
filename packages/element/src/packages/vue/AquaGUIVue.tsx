/**
 *  数据处理层
 *  负责上级(element/iView/ant....这些ui库)和下级(core)的数据处理和数据抹平
 */

import {Component, Prop, InjectReactive} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';
import AquaGUICore from '../core/AquaGUICore';
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

  public handleEmitAdd(e: any) {
    console.log(e, ' emit');
    console.log(this.list, ' emit');
    console.log(this.renderItemData);
  }

  public render() {
    return (
      <div class={'aqua-gui-main-data'}>
        <AquaGUICore
          onAdd={this.handleEmitAdd}
          renderList={this.list}
        />
      </div>
    );
  }
}


