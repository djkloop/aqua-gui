import { Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';

interface AquaGUICoreProps {
  name?: string;
  draggable?: any;
}

@Component
export default class AquaGUICore extends tsx.Component<AquaGUICoreProps> {

    // 一定要和上层的draggable使用同一个
    @Prop(PropTypes.any)
    public draggable!: any;

  public handleOnAdd(e: any, type: string) {
    console.log(e);
  }



  public render() {
    return (
      <div class={'aqua-gui-main-core'}>
          { this.createDraggable() }
      </div>
    );
  }

    private createDraggable() {
        // @important: 切记一定要从ui层获取draggable
        const Draggable = this.draggable;
        return (
            <Draggable
                onAdd={(e: any) => this.handleOnAdd(e, 'area')}
                animation={100}
                tag={'ul'}
                group={ { name: 'widget'} }
                ghostClass={'ghost'}
                class={'aqua-gui-main-core-area'}
            >
                <div>1111</div>
            </Draggable>
        );
    }
}
