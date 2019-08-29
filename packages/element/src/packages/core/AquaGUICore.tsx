import {Component, Prop, Watch} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';
import { AquaGUICoreProps, AquaGUICoreEvents, RenderProps } from '@aqua-gui/types';
import { namespace } from 'vuex-class';
import Draggable from 'vuedraggable';
import AquaGUIRenderEngine from './AquaGUIRenderEngine';
// import { AquaGUIFormItemInput, AquaGUILayoutRow, AquaGUILayoutCol } from '../components';

const CommonModule = namespace('common');

@Component
export default class AquaGUICore extends tsx.Component<AquaGUICoreProps, AquaGUICoreEvents> {

  @CommonModule.State((state) => state.selectItem) public selectItem!: any;
  @CommonModule.Mutation('setSelectItem') public setSelectItem: any;

  @Prop(PropTypes.array.def([]))
  public renderList!: RenderProps[];

  public handleEmitAdd() {
    this.$emit('add');
  }

  public render() {
    return (
      <div class={'aqua-gui-main-core'}>
        { this.createDraggableList(this.renderList) }
      </div>
    );
  }

  public createDraggableList(renderList: RenderProps[]) {
    return (
      <AquaGUIRenderEngine
        list={renderList}
        onAdd={this.handleEmitAdd}
      />
    );
  }
}

