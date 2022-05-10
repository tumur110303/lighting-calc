import { FC, createContext } from "react";

const CalcContext = createContext<{
  interpolation: Interpolation;
} | null>(null);

type Interpolation = (
  userValue: number,
  key: number[],
  value: number[]
) => number;

export const CalcStore: FC = ({ children }) => {
  // Интерполяц хийх утга буцаадаг функц...
  const interpolation: Interpolation = (userValue, key, value) => {
    const minKeys: number[] = key.filter((e) => {
      if (userValue > e) return e;
    });

    const firstKey = minKeys[minKeys.length - 1];
    const nextKey = key[minKeys.length];
    const firstValue = value[minKeys.length - 1];
    const nextValue = value[minKeys.length];

    const difference1 = userValue - nextKey;
    const difference2 = firstKey - nextKey;
    const difference3 = userValue - firstKey;
    const difference4 = nextKey - firstKey;

    const item1 = (difference1 / difference2) * firstValue;
    const item2 = (difference3 / difference4) * nextValue;

    return item1 + item2;
  };

  return (
    <CalcContext.Provider
      value={{
        interpolation,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContext;
