import * as Network from "expo-network";

export class NetworkService {
	m_isOnline: boolean = true;

	constructor() {}

	get isOnline(): boolean {
		return this.m_isOnline;
	}

	public setIsOnline(value: boolean) {
		if (this.m_isOnline !== value) {
			this.m_isOnline = value;
		}
	}

	public isConnected(state: Network.NetworkState): boolean {
		return (
			state.type !== Network.NetworkStateType.NONE &&
			!!state.isInternetReachable &&
			!!state.isConnected
		);
	}
}
