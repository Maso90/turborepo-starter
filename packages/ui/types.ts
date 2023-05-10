
import { ComponentPropsWithoutRef, ElementType } from 'react';

export type StringElementType = ElementType & string;
export type AsProps<T extends StringElementType> = ComponentPropsWithoutRef<T> & {
  as?: T;
};
