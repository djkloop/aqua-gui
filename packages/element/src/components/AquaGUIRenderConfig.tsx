import * as tsx from 'vue-tsx-support';
import { Component } from 'vue-property-decorator';
import AquaGUIBaseConfig from './config/AquaGUIBaseConfig';

@Component
export default class AquaGUIRenderConfig extends tsx.Component<{}> {
  public activeAllNames: string[] = ['1', '2', '3'];

  public render() {
    return (
      <el-collapse v-model={this.activeAllNames}>
        <el-collapse-item class={'config-item'} title='基础属性' name='1'>
          <AquaGUIBaseConfig />
        </el-collapse-item>
        <el-collapse-item class={'config-item'} title='标签设置' name='2'>
        </el-collapse-item>
        <el-collapse-item class={'config-item'} title='外观样式' name='3'>
        </el-collapse-item>
      </el-collapse>
    );
  }

}
