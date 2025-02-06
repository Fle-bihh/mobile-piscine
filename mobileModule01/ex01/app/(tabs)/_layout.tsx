import * as React from 'react';
import { SafeAreaView, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import CurrentlyView from '.';
import TodayView from './today';
import WeeklyView from './weekly';
import { TabBar } from '@/ui/tab-bar/tab-bar.component';
import { EAppIcons } from '@/constants/icons.constants';
import AppBar from '@/ui/app-bar/app-bar.component';

export interface AppRoute {
    key: string;
    title: string;
    icon: EAppIcons
}

const renderScene = SceneMap({
    first: CurrentlyView,
    second: TodayView,
    third: WeeklyView
});

const routes: AppRoute[] = [
    { key: 'first', title: 'Currently', icon: EAppIcons.Currently },
    { key: 'second', title: 'Today', icon: EAppIcons.Today },
    { key: 'third', title: 'Weekly', icon: EAppIcons.Weekly },
];

export default function TabsLayout() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppBar />
            <TabView<AppRoute>
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                tabBarPosition='bottom'
                renderTabBar={TabBar}
            />
        </SafeAreaView>
    );
}