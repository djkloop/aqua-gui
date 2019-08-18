import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import { RenderProps } from '@aqua-gui/types';
import { namespace } from 'vuex-class';
const CommonModule = namespace('common');


interface AquaGUIBaseConfigProps {
  selectedItem?: any;
}

@Component
export default class AquaGUIBaseConfig extends tsx.Component<AquaGUIBaseConfigProps> {

  public numberT: number = 0;



  @Prop(PropTypes.object.def({}))
  public selectedItem!: any;

  public handleChange(v) {
    console.log(v);
  }

  public render() {
    const { renderType } = this.selectedItem;
    return (
      <el-form label-position='top'>
        {
          renderType === 'row'
          ?
          <div>
            <el-form-item label='栅格间隔'>
              <el-input-number
                v-model={this.selectedItem.gutter}
                min={0}
                onChange={this.handleChange}
              />
            </el-form-item>
            <el-form-item label='活动名称'>
              <el-input ></el-input>
            </el-form-item>
          </div>
          :
          null
        }
      </el-form>
    );
  }

}
