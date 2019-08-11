import { Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';
import AquaGUICore from '@aqua-gui/core/src/AquaGUICore';

export interface RenderProps {
  name: string;
  tasks?: RenderProps[];
  id?: string;
  type?: string;
}

interface AquaGUIVueProps {
  theme: string;
  renderItem?: RenderProps;
  draggable?: any;
}

@Component
export default class AquaGUIVue extends tsx.Component<AquaGUIVueProps> {

  @Prop(PropTypes.object)
  public renderItem!: RenderProps;

  @Prop(PropTypes.string.def('element'))
  public theme!: string;

  @Prop(PropTypes.any)
  public draggable!: any;

  public created() {
    console.log(this.theme);
  }

  public render() {
    return (
      <div>
        <AquaGUICore />
      </div>
    );
  }
}
