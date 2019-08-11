import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';

interface AquaGUIHeaderProps {
  theme: string;
}

@Component
export default class AquaGUIHeader extends tsx.Component<AquaGUIHeaderProps> {

  @Prop(PropTypes.string.def('element'))
  public theme!: string;

  public render() {
    return(
      <el-header class={'aqua-gui-header'}>
          <h1>
            <a href='/'>
              <img
                class={'aqua-gui-header-logo'}
                width={146} height={38}
                src={require(`../assets/${this.theme}-logo.svg`)}
              />
              <span>
                VersatileGUI-{this.theme}
              </span>
            </a>
          </h1>
        </el-header>
    );
  }
}
