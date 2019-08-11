import { Component } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import Draggable from 'vuedraggable';

interface AquaGUICoreProps {
  name?: string;
}

@Component
export default class AquaGUICore extends tsx.Component<AquaGUICoreProps> {

  public handleOnAdd(e: any, type: string) {
    console.log(e);
  }

  public render() {
    return (
      <div class={'aqua-gui-main-core'}>
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
      </div>
    );
  }
}
