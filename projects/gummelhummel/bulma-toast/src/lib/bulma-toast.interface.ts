import { BulmaColor } from './bulma-color.enum';

export interface BulmaToast {
    message?: string;
    headline?: string;
    color?: BulmaColor;
    light?: boolean;
    time?: number;
    visible?: boolean;
}
