import { usePosition } from '@/hooks/position.hook';
import { IPositionContext } from '@/types/position.types';
import { createContext, ReactNode, useContext } from 'react';

const PositionContext = createContext<IPositionContext | undefined>(
	undefined,
);

interface IPositionProviderProps {
	children: ReactNode;
}

export const PositionProvider = ({ children }: IPositionProviderProps) => {
	const position = usePosition();

	return (
		<PositionContext.Provider value={position}>
			{children}
		</PositionContext.Provider>
	);
};

export const usePositionContext = (): IPositionContext => {
	const context = useContext(PositionContext);
	if (!context) {
		throw new Error(
			'usePositionContext must be used within a PositionProvider',
		);
	}
	return context;
};
