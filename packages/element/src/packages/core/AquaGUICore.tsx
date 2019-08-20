import {Component, Prop, Watch} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';
import { AquaGUICoreProps, AquaGUICoreEvents, RenderProps } from '@aqua-gui/types';
import { namespace } from 'vuex-class';
import Draggable from 'vuedraggable';
import { AquaGUIFormItemInput, AquaGUILayoutRow, AquaGUILayoutCol } from '../components';

const CommonModule = namespace('common');

@Component
export default class AquaGUICore extends tsx.Component<AquaGUICoreProps, AquaGUICoreEvents> {
  public key: string | undefined = '';
  public index: number = 0;

  @CommonModule.State((state) => state.selectItem) public selectItem!: any;
  @CommonModule.Mutation('setSelectItem') public setSelectItem: any;

  @Prop(PropTypes.array.def([]))
  public renderList!: RenderProps[];

  public handleOnAdd(e: any, type: string) {
    this.$emit('add', e);
    // 默认选中添加进去的
    this.key = this.selectItem.id;
  }

  public handleClick(e: Event, item: RenderProps, index: number) {
    e.stopPropagation();
    this.key = item.id;
    this.index = index;
    this.setSelectItem(item);
  }

  public render() {
    return (
      <div class={'aqua-gui-main-core'}>
        { this.createDraggableList(this.renderList) }
      </div>
    );
  }

  public createDraggableList(renderList: RenderProps[], clsName?: string, tagEle?: string) {
    return (
      <Draggable
        onAdd={this.handleOnAdd}
        class={`${clsName ? '这是二次渲染的组件-class-能拖拽的组件必须有这一级才能拖拽-但是真正有属性的组件还在最外层' : 'aqua-gui-main-core-area'}`}
        animation={100}
        list={renderList}
        tag={clsName ? tagEle : 'div'}
        group={ { name: 'widget' } }
        ghostClass={'ghost'}
      >
        {
          renderList.map((item, index) => {
            const { componentType } = item;
            if (componentType === 'layout') {
              if (item.children) {
                return this.createDraggableLayout(item, index);
              }
            } else {
              return this.createDraggableFormItem(item, index);
            }
          })
        }
      </Draggable>
    );
  }

  private createDraggableLayout(item: RenderProps, index: number) {
    const { renderType } = item;
    if (renderType === 'row') {
        return (
          <AquaGUILayoutRow
            id={item.renderName + '_' + index + '_' + item.id}
            data-key={item.renderName + '_' + index + '_' + item.id}
            key={item.renderName + '_' + index + '_' + item.id}
            class={{'aqua-gui-main-core-area-item': true, 'active': this.key === item.id}}
            item={item}
            nativeOn-click={(e: Event) => this.handleClick(e, item, index)}
          >
            {
              // 这个地方必须要在渲染出来一个draggable组件给它的内部
              item.children && this.createDraggableList(item.children, `aqua-gui-main-core-area-item-${renderType}`, 'el-row')
            }
          </AquaGUILayoutRow>
        );
    } else if (renderType === 'col') {
      return (
        <AquaGUILayoutCol
          id={item.renderName + '_' + index + '_' + item.id}
          data-key={item.renderName + '_' + index + '_' + item.id}
          key={item.renderName + '_' + index + '_' + item.id}
          class={{'aqua-gui-main-core-area-item': true, 'active': this.key === item.id}}
          item={item}
          nativeOn-click={(e: Event) => this.handleClick(e, item, index)}
        >
          {
            item.children && this.createDraggableList(item.children, `aqua-gui-main-core-area-item-${renderType}`)
          }
        </AquaGUILayoutCol>
      );
  }


  }

  private createDraggableFormItem(item: RenderProps, index: number) {
    return (
      <div
        class={{'aqua-gui-main-core-area-item': true, 'active': this.key === item.id}}
        key={item.renderName + '_' + index + '_' + item.id}
        data-key={item.renderName + '_' + index + '_' + item.id}
        onClick={(e) => this.handleClick(e, item, index)}
      >
        { this.createFormItem(item) }
      </div>
  );
  }


  private createFormItem(item: RenderProps) {
    // 输入框
    const { renderType } = item;
    if (renderType === 'input') {
      return <AquaGUIFormItemInput item={item}/>;
    }
  }
}

