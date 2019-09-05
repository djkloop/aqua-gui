import * as tsx from 'vue-tsx-support';
import {Prop, Component, InjectReactive} from 'vue-property-decorator';
import PropTypes from 'vue-types';
import Draggable from 'vuedraggable';
import { FormItemBase } from '@aqua-gui/types';
import { namespace } from 'vuex-class';

interface AquaGUIRenderEngineProps {
  idx?: string;
  renderComponentTag?: string;
  renderName?: string;
  renderItem?: FormItemBase;
  list: FormItemBase[];
  renderId?: string;
  componentsProps?: any;
}

interface AquaGUIRenderEngineEvents {
  onSet: (e: any, item: any) => void;
  onAdd: (e: any) => void;
}

const CommonModule = namespace('common');

@Component({
  name: 'AquaGUIRenderEngine',
})
export default class AquaGUIRenderEngine extends tsx.Component<AquaGUIRenderEngineProps, AquaGUIRenderEngineEvents> {

  @CommonModule.Mutation('setSelectItem') public setSelectItem: any;
  @CommonModule.State((state) => state.selectItem) public selectItem!: any;
  @InjectReactive('renderItem') public renderItemData!: any;

  @Prop(PropTypes.string.def(''))
  public renderId!: string;

  @Prop(PropTypes.string.def(''))
  public idx!: string;

  @Prop(PropTypes.string.def('div'))
  public renderComponentTag!: string;

  @Prop(PropTypes.string.def('c-a'))
  public renderName!: string;

  @Prop(PropTypes.object)
  public renderItem!: FormItemBase;

  @Prop(PropTypes.array.isRequired)
  public list!: FormItemBase[];

  @Prop(PropTypes.object.def({}))
  public componentsProps!: any;

  public handleClick(e: Event, name: string, item: any) {
    this.setSelectItem(item);
    // TODO: 后面需要优化(不应该在渲染层处理数据)
    // 这个地方不知道什么bug
    // 不能在阻止事件冒泡上使用emit
    // 所以直接用vuex吧
    // this.$emit('set', item);
    e.stopPropagation();
  }

  /**
   * handleOnChange
   *
   * 用change吧
   * add事件貌似有点问题
   *
   */
  public handleOnChange(e: any) {
    this.setSelectItem(e.added.element);
  }

  public render() {
    return (
      <Draggable
        class={{
          [`aqua-gui-main-core-area${this.idx === '' ? '' : '-item'}`]: true,
          active: this.renderId === this.selectItem.id,
          [`r_id_${this.renderId}`]: true,
          [`r_i_id_${this.renderItemData.id}`]: true,
        }}
        onChange={(e: Event) => this.handleOnChange(e)}
        data-idx={this.idx}
        nativeOn-click={(e: Event) => this.handleClick(e, this.renderName, this.renderItem)}
        data-name={this.renderName}
        list={this.list}
        data-selectId={this.selectItem.id}
        animation={100}
        tag={this.renderComponentTag}
        group={ {name: 'widget' }}
        componentData={this.componentsProps}
      >
        {
          this.list.map((item: any, idx) => {
            return (<AquaGUIRenderEngine
              idx={idx + '_' + item.renderName + '_' + item.id}
              renderName={item.renderName}
              list={item.children}
              renderId={item.id}
              renderComponentTag={item.renderComponentTag}
              renderItem={item}
              componentsProps={item.componentsProps}
            >
            </AquaGUIRenderEngine>);
          })
        }
      </Draggable>
    );
  }
}
