/**
 * Created by LCN on 2017/9/30 0030.
 */

import React,{ Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

import Screen from '../utils/Screen';

export default class Block extends Component{

    render(){
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <View style={styles.blockContent}>
                    {this.props.children}
                </View>
            </View>
        );
    }

    renderHeader(){
        let type = parseInt(this.props.type, 10);
        let header = null;

        switch (type){
            case 1 :
                    if(this.props.title){
                        header = (
                            <View style={styles.blockHeader}>
                                <View style={styles.headerTitleMain}>
                                    <Text style={[styles.titleMain,styles.titleMainLeft, styles.titleWithBorderLeft]}>
                                        {this.props.title}
                                    </Text>
                                    {this.renderLink()}
                                </View>
                            </View>
                        );
                    }
                break;

            case 2 :
                header = (
                    <View style={styles.blockHeader}>
                        <View style={styles.headerTitleMain}>
                            <Text style={styles.titleMain}>{this.props.title}</Text>
                            {this.renderLink()}
                        </View>
                        {this.props.subTitle ?
                            <View style={styles.headerTitleSub}>
                                <Text style={styles.titleSub}>{this.props.subTitle}</Text>
                            </View>
                            :
                            null
                        }
                    </View>
                );
                break;

            default :
                break;
        }

        return header;
    }


    renderLink(){
        let link = this.props.link;

        if (link) {
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    focusedOpacity={1}
                    onPress={()=>{alert('点击了更多')}}
                >
                    <Text style={styles.headerLink}>{this.props.link || '更多'}</Text>
                </TouchableOpacity>
            );
        }else{
            return null;
        }
    }

}

const styles = StyleSheet.create({
    container : {
        marginBottom: 8,
        justifyContent: 'space-between',
        minHeight: 50,
        backgroundColor: '#fff'
    },
    blockHeader: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#efefef'
    },
    headerTitleMain :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleMain: {
        fontSize: 20,
        color: '#333',
        flex: 1,
        textAlign: 'center'
    },
    titleMainLeft: {
        textAlign: 'left'
    },
    titleWithBorderLeft: {
        paddingLeft: 10,
        borderColor: '#2eb257',
        borderLeftWidth: 3
    },
    headerLink: {
        fontSize: 14,
        width: 28,
        height: 20,
        color: '#2eb257'
    },

    headerTitleSub: {
        alignItems: 'center'
    },
    titleSub: {
        paddingRight: 28,
        fontSize: 12,
        color: '#666'
    },

    blockContent: {
        paddingVertical: 10,
    }
});
