import { Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { AquaGUILayoutRowProps } from '@aqua-gui/types';
import PropTypes from 'vue-types';
import Draggable from 'vuedraggable';

interface Row {
  item?: AquaGUILayoutRowProps;
  list?: any;
}

@Component
export default class AquaGUILayoutRow extends tsx.Component<Row> {

  @Prop(PropTypes.object)
  public item!: AquaGUILayoutRowProps;

  @Prop(PropTypes.array)
  public list!: any;

  public render() {
    const { gutter, type, justify, align, tag } = this.item;
    console.log(1111111);
    return(
      <Draggable
        group={ { name: 'widget' } }
        ghostClass={'ghost'}
        tag={'el-row'}
        list={this.list}
        componentData={{...{props: { gutter, type, justify, align, tag }}}}
        >
        { this.$slots.default }
      </Draggable>
    );
  }

}
