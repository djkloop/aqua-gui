import { Component, Prop, InjectReactive } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';
import { AquaGUICoreProps, AquaGUICoreEvents, RenderProps } from '@aqua-gui/types';


@Component
export default class AquaGUICore extends tsx.Component<AquaGUICoreProps, AquaGUICoreEvents> {
    public key: string | undefined = '';
    public index: number = 0;

    // 一定要和上层的draggable使用同一个
    @Prop(PropTypes.any)
    public draggable!: any;

    // 去从数据层获取数据
    @Prop(PropTypes.any)
    public dataStore!: any;

  @InjectReactive('renderList')
  public renderListData!: RenderProps[];


  public handleOnAdd(e: any, type: string) {
    this.$emit('add', e);
  }


  public handleClick(item: RenderProps, index: number) {
      this.key = item.id;
      this.index = index;
  }

  public render() {
      return (
      <div class={'aqua-gui-main-core'}>
          { this.createDraggableList(this.renderListData) }
      </div>
    );
  }

    public createDraggableList(renderList: RenderProps[], clsName?: string) {
        // @important: 切记一定要从ui层获取draggable
        const Draggable = this.draggable;
        return (
            <Draggable
                onAdd={this.handleOnAdd}
                class={`${clsName ? clsName : 'aqua-gui-main-core-area'}`}
                animation={100}
                list={renderList}
                tag={clsName ? 'ul' : 'div'}
                group={ { name: 'widget' } }
                ghostClass={'ghost'}
            >
                {
                    renderList.map((item: RenderProps, index: number) => {
                        return (
                            item.tasks
                                ?
                                <div
                                    class={{'aqua-gui-main-core-area-item': true, 'active': this.key === item.id}}
                                    key={item.name + '_' + index + '_' + item.id}
                                    data-key={item.name + '_' + index + '_' + item.id}
                                    id={item.name + '_' + index + '_' + item.id}
                                    onClick={() => this.handleClick(item, index)}
                                >
                                    {
                                      this.createDraggableList(item.tasks, `aqua-gui-main-core-area-item-${item.type}`)
                                    }
                                </div>
                                :
                                <div
                                    class={{'aqua-gui-main-core-area-item': true, 'active': this.key === item.id}}
                                    key={item.name + '_' + index + '_' + item.id}
                                    data-key={item.name + '_' + index + '_' + item.id}
                                    onClick={() => this.handleClick(item, index)}
                                >
                                    <p>{item.name}</p>
                                </div>
                        );
                    })
                }
            </Draggable>);
    }

}

