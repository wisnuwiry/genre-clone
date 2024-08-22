import { createContext, useContext, useState } from "react";

interface DirectionContextProps {
  direction: number;
  setDirection: React.Dispatch<React.SetStateAction<number>>;
}

const DirectionContext = createContext<DirectionContextProps | undefined>(
  undefined
);

export const useDirection = () => {
  const context = useContext(DirectionContext);
  if (!context) {
    throw new Error("useDirection must be used within a DirectionProvider");
  }
  return context;
};

export const DirectionProvider = ({
  children,
  direction: directionProp,
  setDirection: setDirectionProp,
}: {
  children: React.ReactNode;
  direction?: number;
  setDirection?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [directionState, setDirectionState] = useState(0);

  const direction =
    directionProp !== undefined ? directionProp : directionState;
  const setDirection =
    setDirectionProp !== undefined ? setDirectionProp : setDirectionState;

  return (
    <DirectionContext.Provider
      value={{
        direction: direction,
        setDirection: setDirection,
      }}
    >
      {children}
    </DirectionContext.Provider>
  );
};

export const Direction = ({
  children,
  direction,
  setDirection,
}: {
  children: React.ReactNode;
  direction?: number;
  setDirection?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <DirectionProvider direction={direction} setDirection={setDirection}>
      {children}
    </DirectionProvider>
  );
};
