/**
 *  数据处理层
 *  负责上级(element/iView/ant....这些ui库)和下级(core)的数据处理和数据抹平
 */

import {Component, Prop, InjectReactive, Watch} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';
import AquaGUICore from '@aqua-gui/core/src/AquaGUICore';
import { RenderProps, AquaGUIVueProps } from '@aqua-gui/types';

@Component
export default class AquaGUIVue extends tsx.Component<AquaGUIVueProps> {

  @InjectReactive('renderItem') public renderItemData!: any;

  @Prop(PropTypes.string.def('element'))
  public theme!: string;

  // 一定要和上层的draggable使用同一个
  // 因为同一个对象才能互相拖拽...
  @Prop(PropTypes.any)
  public draggable!: any;





  handleClick() {
    console.log(this.renderItemData);
  }

  public render() {
    console.log(this.renderItemData);
    return  (
        <div class={'aqua-gui-main-data'}>
          <AquaGUICore
              draggable={this.draggable}
          />
        </div>
    );
  }
}
