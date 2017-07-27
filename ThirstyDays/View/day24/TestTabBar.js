/**
 * Created by Ape on 2017/7/26.
 */

import React , {Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class WeiXinTabBar extends Component{

    static propTypes = {
        goToPage: React.PropTypes.func,  // 跳转到对应tab的方法
        activeTab: React.PropTypes.number,  // 当前被选中的tab下标
        tabs: React.PropTypes.array,// 所有tabs集合

        tabNames: React.PropTypes.array, // 保存Tab名称
        tabIconNames: React.PropTypes.array, // 保存Tab图标
    };

    //  如何需要给tab切换时 添加动画，重写这个方法
    setAnimationValue({value}) {
        console.log(value);
    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    renderTabOption(tab, i) {
        let color = this.props.activeTab === i ? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色

        return (
            <TouchableOpacity key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab} >
                <View style={styles.tabItem}>
                    <Icon name={this.props.tabIconNames[i]}  size={30} color={color}/>
                    <Text style={{color: color}}>{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render(){
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 50,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});