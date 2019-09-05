import { RenderProps } from "./data";
import { AquaGUIInputEleBase } from "./item/AquaGUIInputBase";
import { AquaGUIFormEleBase } from "./item/AquaGUIFormBase";
import { AquaGUIFormItemEleBase } from "./item/AquaGUIFormItemBase";
import { AquaGUILayoutRowEleBase } from './item/AquaGUILayoutRowBase';
import { AquaGUILayoutColEleBase } from './item/AquaGUILayoutColBase';

// 基础类型
/**
 * FormItemBase
 *
 * @param renderName 组件名称
 * @param renderType ui库组件类型
 * @param children 子组件嵌套组件
 * @param componentType 组件的类型
 * @param renderComponentTag ui库要渲染的组件标签tag名
 *
 */
export interface FormItemBase {
    renderName?: string;
    renderType?: string;
    children?: FormItemBase[];
    componentType?: string;
    renderComponentTag?: string;
     customProps?: {
        showLabel?: boolean;
    },
}

/**
 * 布局 - row
 */
interface AquaGUILayoutRowEle extends AquaGUILayoutRowEleBase, FormItemBase {}
export type AquaGUILayoutRowProps = Partial<AquaGUILayoutRowEle>

/**
 * 布局 - col
 */
interface AquaGUILayoutColEle extends AquaGUILayoutColEleBase, FormItemBase {}
export type AquaGUILayoutColProps = Partial<AquaGUILayoutColEle>

/**
 * 表单
 */
interface AquaGUIForm extends AquaGUIFormEleBase, FormItemBase {}
export type AquaGUIFormProps = Partial<AquaGUIForm>


/**
 * 表单item
 *
 */
interface AquaGUIFormItem extends AquaGUIFormItemEleBase, FormItemBase {}
export type AquaGUIFormItemProps = Partial<AquaGUIFormItem>

/**
 * 输入框
 */
interface AquaGUIInputFormItemEleInput extends AquaGUIInputEleBase, FormItemBase {}
export type AquaGUIFormItemInputProps = Partial<AquaGUIInputFormItemEleInput>
