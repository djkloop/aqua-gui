export interface RenderProps {
    name?: string; // 名称
    tasks?: RenderProps[]; // 子组件
    id?: string; // 唯一id
    type?: string; // 类型
    value?: any; //默认值
}


export interface AquaGUICoreProps {
    draggable?: any;
    renderList?: RenderProps[];
    dataStore?: any;
}


export interface AquaGUICoreEvents {
    onAdd: (e: any) => void
}

