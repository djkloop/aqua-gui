export interface RenderProps {
    name?: string; // 名称
    tasks?: RenderProps[]; // 子组件
    id?: string; // 唯一id
    type?: string; // 类型
}


export interface AquaGUICoreProps {
    draggable?: any;
}


