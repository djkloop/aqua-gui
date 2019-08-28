/**
 *  数据处理层
 *  负责上级(element/iView/ant....这些ui库)和下级(core)的数据处理和数据抹平
 */

import {Component, Prop, InjectReactive} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';
import AquaGUICore from '../core/AquaGUICore';
import { namespace } from 'vuex-class';
import { RenderProps, AquaGUIVueProps } from '@aqua-gui/types';

const CommonModule = namespace('common');

@Component
export default class AquaGUIVue extends tsx.Component<AquaGUIVueProps> {

  @CommonModule.State((state) => state.selectItem)
  public selectedItem!: RenderProps;

  @CommonModule.Mutation('setSelectItem') public setSelectItem: any;

  @InjectReactive('renderItem') public renderItemData!: any;

  @Prop(PropTypes.string.def('element'))
  public theme!: string;

  @Prop(PropTypes.array.def([]))
  public list!: RenderProps[];

  public render() {
    return (
      <div class={'aqua-gui-main-data'}>
        <AquaGUICore
          renderList={this.list}
        />
      </div>
    );
  }
}


