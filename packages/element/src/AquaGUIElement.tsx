import { Component, Vue } from 'vue-property-decorator';
import AquaGUIVue from '@aqua-gui/vue/src/AquaGUIVue';


@Component
export default class AquaGUIElement extends Vue {
  public render() {
    return (
      <div>
        <div>AquaGUIElement</div>
        <AquaGUIVue />
      </div>
    );
  }
}
