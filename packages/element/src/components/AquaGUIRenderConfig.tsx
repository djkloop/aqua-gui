import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import { RenderProps } from '@aqua-gui/types';
import AquaGUIBaseConfig from './config/AquaGUIBaseConfig';


@Component
export default class AquaGUIRenderConfig extends tsx.Component<{}> {

  public activeAllNames: string[] = ['1', '2', '3'];



  public get selectedItem() {
    console.log('1111');
    return this.$store.state.common.selectItem;
  }

  public set selectedItem(v) {
    console.log(v);
  }

  public render() {
    return (
      <el-collapse v-model={this.activeAllNames}>
        <el-collapse-item title='基础属性' name='1'>
          <AquaGUIBaseConfig selectedItem={this.selectedItem}/>
        </el-collapse-item>
        <el-collapse-item title='标签设置' name='2'>
        </el-collapse-item>
        <el-collapse-item title='外观样式' name='3'>
        </el-collapse-item>
      </el-collapse>
    );
  }

}
