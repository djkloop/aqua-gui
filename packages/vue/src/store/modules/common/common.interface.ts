import { RenderProps } from '@aqua-gui/types';


export interface RenderProps {
    name?: string;
    tasks?: RenderProps[];
    id?: string;
    type?: string;
}

export interface CommonState {
    selectItem: RenderProps;
    renderList?: RenderProps[];
}
