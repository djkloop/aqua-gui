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
    return(
      <div>
        row
      </div>
    );
  }

}
