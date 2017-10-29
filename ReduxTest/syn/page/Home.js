/**
 * Created by LCN on 2017/9/10 0010.
 */
/**
 * Created by LCN on 2017/9/10 0010.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { increase,decrease,reset } from '../action/actions';

class Home extends  Component{

    constructor(props) {
        super(props);
    }

    _onPressReset(){
        this.props.dispatch(reset());
    }

    _onPressInc(){
        this.props.dispatch(increase());
    }

    _onPressDec(){
        this.props.dispatch(decrease());
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.counter}>{this.props.num.count}</Text>
                <TouchableOpacity style={styles.reset} onPress={()=>this._onPressReset()}>
                    <Text>归零</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.start} onPress={()=>this._onPressInc()}>
                    <Text>加1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stop} onPress={()=>this._onPressDec()}>
                    <Text>减1</Text>
                </TouchableOpacity>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        fontSize: 50,
        marginBottom: 70
    },
    reset: {
        margin: 10,
        backgroundColor: 'yellow',
        width : 200,
        alignItems: 'center',
        padding : 10,
    },
    start: {
        margin: 10,
        backgroundColor: 'yellow',
        width : 200,
        alignItems: 'center',
        padding : 10,
    },
    stop: {
        margin: 10,
        backgroundColor: 'yellow',
        width : 200,
        alignItems: 'center',
        padding : 10,
    }
});

//  connect(mapStateToProps，mapDispatchToProps)(控件);   2个括号局部调用，   参数2个
//  connect 返回一个容器控件  有React-Redux 自动生成



/*
*   mapStateToProps   负责数据的输入，state映射到 UI 组件的参数（props)
*    function(state,props) 返回一个对象,参数props不是必须的（代表着这个容器的props） 用处；可以用来比较
*    如 active:  props.show === state.arg.show  这样可以用来返回true,false等
*    state.test  对应 reducers test 中对应的reducer返回的state;
*    将其映射到这个UI控件的 this.props.num 中
*    在这个页面中要使用时  this.props.映射的key.对应的key对象  this.props.num.count
 */

// 会使用到 counter 这个reducer 返回的state
const mapStateToProps = (state ,props)=>({
    num : state.counter,
});

/*
* mapDispatchToProps 负责逻辑的输出  既用户对 UI 组件的操作映射成 Action，简单的理解 操作发送不同的action
* 它可以是一个函数，也可以是一个对象。
*
*
* 函数 function (dispatch ,ownProps)
* const mapDispatchToProps = (dispatch ,ownProps)=>({
*   key :()=>{ dispatch(action)  },
* });
*
* 对象
* const mapDispatchToProps = {
*   key :()=>action,
* }；
*
**/

// 不知道怎么调用里面的方法。

const mapDispatchToProps ={
    key : ()=> ({
        type : 'ok'
    })
};



export default connect(mapStateToProps)(Home);
