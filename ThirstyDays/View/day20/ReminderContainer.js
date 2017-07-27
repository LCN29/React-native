/**
 * Created by Ape on 2017/7/22.
 */


import React , {Component}from 'react';
import {
    Text,
    View,
    LayoutAnimation,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    Image,
    ScrollView
}from 'react-native';

import Util from '../../utils/Util';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ReminderContainer extends Component{

    static defaultProps = {
        listData:{
            title : '注意事项',
            numOfItems : 0,
            theme : '#fe952b',
            list : [],
        }
    };

    static propTypes = {
        listData: React.PropTypes.object,
    };

    constructor(props){
        super(props);
        this.state = {
            listData : this.props.listData,
            numberOfItem: this.props.listData.numOfItems,
        };

        this.animations = {
            duration : 200,
            create : {
                type : LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update : {
                type : LayoutAnimation.Types.linear,
                springDamping : 0.7
            }
        }
    }

    _addList(text) {

      //  this.refs.addList.setNativeProps({style : {backgroundColor : '#ff0'}});

        const listData = this.state.listData;
        const numberOfItem = this.state.numberOfItem + 1;
        listData.list.push({
            selected:false,
            text
        });

        this.refs.addList.setNativeProps({text: ''});
        this.setState({
            listData,
            numberOfItem,
        })
    }

    _done(index){
        const listData = this.state.listData;
        listData.list[index].selected = !listData.list[index].selected;
        this.setState({
            listData,
        });
       LayoutAnimation.configureNext(this.animations);
    }

    _add(){
        // 让其失去焦点
        this.refs.addList.blur();
    }

    render(){
        const listData = this.state.listData;
        const list = listData.list.map((elem ,index)=>{
            return (
                <View ref={"list"+index} key={index} style={[styles.reminderList,{opacity:elem.selected? 0.5 : 1}]}>
                    <TouchableHighlight
                        style={[styles.check,{borderColor: elem.selected ? listData.theme : "#c6c6c6"}]}
                        underlayColor="transparent"
                        onPress={()=>{ this._done(index)}}>

                        <View style={ elem.selected ? [styles.fill,{backgroundColor:listData.theme}] : null} />
                    </TouchableHighlight>
                    <View style={styles.input}>
                        <TextInput style={styles.inputText} defaultValue={elem.text}  underlineColorAndroid='transparent'/>
                    </View>
                </View>
            );
        });


        /* event.nativeEvent.text  这个方法获取到的不是输入的内容，而是 一个数字*/

        /* 通过打印 找到的key  为 event._dispatchListeners.__reactBoundContext._reactInternalInstance._instance._lastNativeText
        *   使用时 如果出错，请自己找一下key
        * */
        list.push(
            <View key="add" style={styles.reminderList}>
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={()=>{this._add()}}
                    ref="btn">
                    <Icon name="md-add" size={22} color="#c6c6c6"/>
                </TouchableHighlight>
                <View style={styles.input}>
                    <TextInput ref="addList"
                               style={styles.inputText}

                               underlineColorAndroid='transparent'
                               onBlur={(event)=>{this._addList(event._dispatchListeners.__reactBoundContext._reactInternalInstance._instance._lastNativeText)}}/>
                </View>
            </View>
        );

        return (
            <View style={[styles.reminderContainer]}>
                <Image source={require('./img/bg.png')} style={styles.reminderBg}/>
                <ScrollView style={styles.reminderContent} showsVerticalScrollIndicator={false}>
                    <TouchableHighlight underlayColor="transparent">
                        <View style={styles.reminderTitleContainer}>
                            <Text style={[styles.reminderTitle,{color:listData.theme}]}>{listData.title}</Text>
                            <Text style={[styles.reminderTitle,{color:listData.theme}]}>{this.state.numberOfItem}</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.reminderListContainer}>
                        {list}
                    </View>
                </ScrollView>
            </View>

        );
    }
};
const styles = StyleSheet.create({

    reminderList : {
        flexDirection:"row",
        paddingLeft:15,
        height:45,
        width:Util.size.width,
        justifyContent:"space-between",
        alignItems:"center",
    },
    check :{
        backgroundColor:"transparent",
        borderWidth:1,
        borderColor:"#c6c6c6",
        width:22,
        height:22,
        borderRadius:11,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fill:{
        width:16,
        height:16,
        borderRadius:8,
        backgroundColor : '#adf'
    },
    input: {
        width: Util.size.width - 50,
        height: 45,
        borderBottomWidth:1,
        borderBottomColor:"#ccc",
    },
    inputText:{
        height:43,
        color:"#363636",
    },
    reminderBg: {
        height: Util.size.height-65,
        width:Util.size.width,
        borderRadius: 10,
        resizeMode:"cover",
        opacity:0.5,
    },
    reminderContainer:{
        height: Util.size.height-65,
        width:Util.size.width,
        borderRadius: 10,
        backgroundColor:"#fff",
        position:"absolute",
        top:20,
        left:0,
    },
    reminderContent:{
        height: Util.size.height-65,
        width:Util.size.width,
        backgroundColor:"transparent",
        position:"absolute",
        top:0,
        left:0,
    },
    reminderTitleContainer:{
        height: 65,
        width: Util.size.width,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:15,
        paddingRight:15,
        alignItems:"center",
    },
    reminderTitle:{
        fontSize:28,
        fontWeight:"300",
        textShadowColor:"#ccc",
        textShadowOffset:{width:0, height:1,},
        textShadowRadius:1,
    },
    reminderListContainer:{
        flex:1,
        borderTopColor:"#ccc",
        borderTopWidth:1,
    },

});