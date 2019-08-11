import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import Draggable from 'vuedraggable';
import { deepClone, uniqueID } from '@aqua-gui/utils';
import { VNode } from 'vue';

export interface RenderProps {
  name: string;
  tasks?: RenderProps[];
  id?: string;
  type?: string;
}

export interface AquaGUIRenderComponentProps {
  renderComponents: object;
}

@Component
export default class AquaGUIRenderComponent extends tsx.Component<AquaGUIRenderComponentProps> {

  @Prop(PropTypes.object.def({}))
  public renderComponents!: object;

  public created() {
    //
  }

  public createComponents(components: any, type: string = '默认'): VNode {
    return (
      <div class={'aqua-gui-aside-component'}>
        <div class={'aqua-gui-aside-component-title'}>
          {type}组件
        </div>
        <Draggable
          tag={'ul'}
          list={components}
          group={ {name: 'widget', pull: 'clone', put: false }}
          sort={false}
          ghostClass={'ghost'}
          clone={this.handleClone}
          class={'aqua-gui-aside-component-box'}
        >
          {
            components.map((item: any, index: number) => {
              return (
                <li
                  class={'aqua-gui-aside-component-item'}
                  data-item={JSON.stringify(item)}
                  data-index={index + '_' + item.name}
                >
                  <a>{item.name}</a>
                </li>
              );
            })
          }
        </Draggable>
      </div>
    );
  }

  public createRegisterComponent(): VNode[] {
    const Componrnts: any = this.renderComponents;
    const { layoutComponents,  basicComponents, imgComponents, assistComponents} = Componrnts;

    const components = [];
    // 如果存在布局组件
    if (layoutComponents) {
      components.push(this.createComponents(layoutComponents, '布局'));
    }

    // 如果存在基础组件
    if (basicComponents) {
      components.push(this.createComponents(basicComponents, '基础'));
    }

    // 如果存在图片组件
    if (imgComponents) {
      components.push(this.createComponents(imgComponents, '图片'));
    }

    // 如果存在辅助组件
    if (assistComponents) {
      components.push(this.createComponents(assistComponents, '辅助'));
    }
    return components;

  }

  // clone之前添加一个only-key
  public handleClone(v: any) {
    v.id = uniqueID() + '_' + Date.now();
    return deepClone(v);
  }

  public render() {
    return (
      <div>
        {  this.createRegisterComponent() }
      </div>
    );
  }

}
