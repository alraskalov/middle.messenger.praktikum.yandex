export type Props<T extends object =
Record<string, any | unknown>, K = T[keyof T]> = { [key: string | symbol]: K };

export type Meta = {
  tag?: string,
  props: Props,
};
