import { Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { AquaGUILayoutRowProps } from '@aqua-gui/types';
import PropTypes from 'vue-types';

interface Row {
  item?: AquaGUILayoutRowProps;
}

@Component
export default class AquaGUILayoutRow extends tsx.Component<Row> {

  @Prop(PropTypes.object)
  public item!: AquaGUILayoutRowProps;

  public render() {
    const { gutter, type, justify, align, tag } = this.item;
    return(
      <el-row {...{props: { gutter, type, justify, align, tag }}}>
        { this.$slots.default }
      </el-row>
    );
  }

}
