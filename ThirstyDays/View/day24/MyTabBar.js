/**
 * Created by Ape on 2017/7/25.
 */

import React , {Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class MyTabBar extends Component{

    // 必写
    static propTypes = {
        goToPage: React.PropTypes.func,  // 跳转到对应tab的方法
        activeTab: React.PropTypes.number,  // 当前被选中的tab下标
        tabs: React.PropTypes.array,// 所有tabs集合
        // 这三个 内部已经写好了， 使用时这三个属性不用传递

        // 为了让程序的tab可以从父级传过来，声明了这2个属性，自定义的，非必写
        tabNames: React.PropTypes.array, // 保存Tab名称
        tabIconNames  : React.PropTypes.array, // 保存Tab图标
    };


    //  如何需要给tab切换时 添加动画，重写这个方法
    setAnimationValue({value}) {
        /*这个方法会在切换时，执行多次 */
        /*
        * value 值 分析
        *
        * 从 tab1 到 tab2  打印 0-->1的数字
        * 从 tab1 到 tab4  打印 0-->3的数字
        *
        * 从 tab4 到 tab1  打印 2-->0的数字
        * 从 tab3 到 tab1  打印 1-->0的数字
        * 从 tab2 到 tab1  打印 2-2.6-2.4-2.2--->2
        * */
        console.log(value);

    }

    componentDidMount() {

        // 添加监听事件
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    // 必写   单个 tab的样子
    renderTabOption(tab, index) {

        let color = this.props.activeTab === index ? "#fff" : "#5b0e0d";

        return (
            <TouchableOpacity key={index} onPress={()=>{ this.props.goToPage(index)}} style={styles.tab}>
                <Icon name={this.props.tabIconNames[index]}  size={30} color={color}/>
            </TouchableOpacity>
        );
    }


    // 返回这个tab栏的样子
    render(){

        return (
            <View style={styles.tabs} >
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
};
const styles = StyleSheet.create({
    tab : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        paddingBottom : 4,
    },
    tabs: {
        flexDirection: 'row',
        height: 50,
        backgroundColor : '#ff0000',

    },
});
