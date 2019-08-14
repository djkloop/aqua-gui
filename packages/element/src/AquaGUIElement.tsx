import { Component, Vue, ProvideReactive, Ref } from 'vue-property-decorator';
import AquaGUIVue from '@aqua-gui/vue/src/AquaGUIVue';
import AquaGUIHeader from './components/AquaGUIHeader';
import AquaGUIRenderComponent from './components/AquaGUIRenderComponent';
import { RenderProps, AquaGUIVueProps } from '@aqua-gui/types';
import Draggable from 'vuedraggable';
import Config from '@aqua-gui/config';
const CURRENT_THEME = 'element';

@Component
export default class AquaGUIElement extends Vue {
  public renderComponents: any;

  @Ref('aqua-data') readonly aquaData!: AquaGUIVue;
  @ProvideReactive('renderItem') public renderItemData: any = '1';



  public created() {
    // 模拟从后台获取数据
    this.renderComponents = require('./data/registerComponents').default;
  }

  public handleOnClone(e: any) {
    this.renderItemData = 3;
    this.aquaData.handleClick();
  }

  public render() {
    return (
      <el-container class={'aqua-gui-container aqua-gui-element'} direction={'vertical'}>
        <AquaGUIHeader theme={CURRENT_THEME}/>
        <el-container>
          <el-aside class={'aqua-gui-aside-left'} style={{ width: Config.LAYOUT.ASIDE_WIDTH }}>
            <AquaGUIRenderComponent
                renderComponents={this.renderComponents}
                onClone={this.handleOnClone}
            />
          </el-aside>
          <el-main clas={'aqua-gui-main'}>
            <AquaGUIVue ref={'aqua-data'} theme={CURRENT_THEME} draggable={Draggable} />
          </el-main>
          <el-aside class={'aqua-gui-aside-right'} style={{width: Config.LAYOUT.ASIDE_WIDTH}}>side-right</el-aside>
        </el-container>
      </el-container>
    );
  }
}
