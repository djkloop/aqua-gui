import { Component, Vue } from 'vue-property-decorator';
import AquaGUIVue from '@aqua-gui/vue/src/AquaGUIVue';
import AquaGUIHeader from './components/AquaGUIHeader';
import AquaGUIRenderComponent from './components/AquaGUIRenderComponent';
import Draggable from 'vuedraggable';
import Config from '@aqua-gui/config';
const CURRENT_THEME = 'element';


@Component
export default class AquaGUIElement extends Vue {
  public renderComponents: any;


  public created() {
    // 模拟从后台获取数据
    this.renderComponents = require('./data/registerComponents').default;
  }


  public render() {
    return (
      <el-container class={'aqua-gui-container aqua-gui-element'} direction={'vertical'}>
        <AquaGUIHeader theme={CURRENT_THEME}/>
        <el-container>
          <el-aside class={'aqua-gui-aside-left'} style={{ width: Config.LAYOUT.ASIDE_WIDTH }}>
            <AquaGUIRenderComponent renderComponents={this.renderComponents}/>
          </el-aside>
          <el-main clas={'aqua-gui-main'}>
            <AquaGUIVue theme={CURRENT_THEME} draggable={Draggable} />
          </el-main>
          <el-aside class={'aqua-gui-aside-right'} style={{width: Config.LAYOUT.ASIDE_WIDTH}}>side-right</el-aside>
        </el-container>
      </el-container>
    );
  }
}
