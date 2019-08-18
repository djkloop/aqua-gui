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
 * @param name 组件名称
 * @param type ui库组件类型
 * @param children 嵌套组件
 * @param componentType 组件的类型
 *
 */
interface FormItemBase {
    children?: RenderProps[];
    renderType?: string;
    renderName?: string;
    componentType?: string;
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
