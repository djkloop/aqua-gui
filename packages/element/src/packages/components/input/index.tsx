import { Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import PropTypes from 'vue-types';
import { RenderProps } from '@aqua-gui/types';

interface AquaGUIFormItemInputProps {
  item?: RenderProps;
}


@Component
export default class AquaGUIFormItemInput extends tsx.Component<AquaGUIFormItemInputProps> {

  @Prop(PropTypes.object.def({}))
  public item!: RenderProps;

  public render() {
    const { item } = this;
    return (
      <el-input
        v-model={item.value}
      />
    );
  }
}
