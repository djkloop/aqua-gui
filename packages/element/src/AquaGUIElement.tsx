import { Component, Vue, ProvideReactive, Ref } from 'vue-property-decorator';
import AquaGUIVue from './packages/vue/AquaGUIVue';
import AquaGUIHeader from './components/AquaGUIHeader';
import AquaGUIRenderComponent from './components/AquaGUIRenderComponent';
import AquaGUIRenderConfig from './components/AquaGUIRenderConfig';
import { namespace } from 'vuex-class';
import { RenderProps } from '@aqua-gui/types';
import Config from '@aqua-gui/config';
const CURRENT_THEME = 'element';

const CommonModule = namespace('common');

@Component
export default class AquaGUIElement extends Vue {
  public renderComponents: any;
  @CommonModule.State((state) => state.renderList) public renderList!: RenderProps[];

  // Ref
  @Ref('aqua-data') public aquaData!: AquaGUIVue;

  // 全局参数
  @ProvideReactive('renderItem')
  public ProviderRenderItem: RenderProps = {};

  public created() {
    // 模拟从后台获取数据
    this.renderComponents = require('./data/registerComponents').default;
  }

  public handleOnClone(e: any) {
    this.ProviderRenderItem = Object.assign(this.ProviderRenderItem, e);
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
          <el-main class={'aqua-gui-main'}>
            <AquaGUIVue
                ref={'aqua-data'}
                theme={CURRENT_THEME}
                list={this.renderList}
            />
          </el-main>
          <el-aside class={'aqua-gui-aside-right'} style={{width: Config.LAYOUT.ASIDE_WIDTH}}>
            <AquaGUIRenderConfig />
          </el-aside>
        </el-container>
        <el-footer class={'aqua-gui-footer'}>
          <p>AquaGUIElement-v{Config.LAYOUT.FOOTER.VERSION}</p>
        </el-footer>
      </el-container>
    );
  }
}
