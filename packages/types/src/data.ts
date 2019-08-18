export interface RenderProps {
    children?: RenderProps[]; // 子组件
    id?: string; // 唯一id
    value?: any; //默认值
    placeholder?: string; // 提示
    renderType?: string;
    renderName?: string;
    componentType?: string;
}


export interface AquaGUICoreProps {
    draggable?: any;
    renderList?: RenderProps[];
    dataStore?: any;
}


export interface AquaGUICoreEvents {
    onAdd: (e: any) => void
}

