import * as tsx from 'vue-tsx-support';
import { Prop, Component } from 'vue-property-decorator';
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
  componentsProps?: any;
}

interface AquaGUIRenderEngineEvents {
  onSet: (e: any, item: any) => void;
}

const CommonModule = namespace('common');

@Component({
  name: 'AquaGUIRenderEngine',
})
export default class AquaGUIRenderEngine extends tsx.Component<AquaGUIRenderEngineProps, AquaGUIRenderEngineEvents> {

  @CommonModule.Mutation('setSelectItem') public setSelectItem: any;

  @Prop(PropTypes.string.def(''))
  public idx!: string;

  @Prop(PropTypes.string.def('div'))
  public renderComponentTag!: string;

  @Prop(PropTypes.string.def('c-a'))
  public renderName!: string;

  @Prop(PropTypes.object.def({}))
  public renderItem!: FormItemBase;

  @Prop(PropTypes.array.isRequired)
  public list!: FormItemBase[];

  @Prop(PropTypes.object.def({}))
  public componentsProps!: any;

  public handleClick(e: Event, name: string, item: any) {
    this.setSelectItem(item);
    // 这个地方不知道什么bug
    // 不能在阻止事件冒泡上使用emit
    // this.$emit('set', item);
    e.stopPropagation();
  }

  public render() {
    return (
      <Draggable
        class={{
          'aqua-gui-main-core-area': this.idx === '',
          'aqua-gui-main-core-area-item': this.idx !== '',
          'active': false,
        }}
        data-idx={this.idx}
        nativeOn-click={(e: Event) => this.handleClick(e, this.renderName, this.renderItem)}
        data-name={this.renderName}
        list={this.list}
        tag={this.renderComponentTag}
        group={ {name: 'widget' }}
        componentData={this.componentsProps}
      >
        {
          this.list.map((item: any, idx) => {
            return (<AquaGUIRenderEngine
              idx={idx + '_' + item.renderName}
              key={item.id}
              renderName={item.renderName}
              list={item.children}
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
