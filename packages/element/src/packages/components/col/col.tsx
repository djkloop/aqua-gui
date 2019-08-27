import { Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { AquaGUILayoutColProps } from '@aqua-gui/types';
import PropTypes from 'vue-types';

interface Col {
  item?: AquaGUILayoutColProps;
}

@Component
export default class AquaGUILayoutCol extends tsx.Component<Col> {

  @Prop(PropTypes.object)
  public item!: AquaGUILayoutColProps;

  public render() {
    return(
      <el-col>
        { this.$slots.default }
      </el-col>
    );
  }

}
