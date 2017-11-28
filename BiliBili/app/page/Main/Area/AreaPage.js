/**
 * Created by LCN on 2017/8/18 0018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

import AreaData from '../../../testData/AreaData';

import ImgItem from '../../../component/Area/ImgItem';

import VideoArea from '../../../component/Area/VideoArea';

export default class AreaPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id : 1,
                    data : {},
                }
            ],
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    ref={(listView) => this.listView = listView}
                    data = {AreaData.item}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={() => this._renderHeader()}
                    showsVerticalScrollIndicator={false}
                    renderItem = {({item})=>this._renderItem(item)}
                />
            </View>
        );
    }

    _renderHeader(){
        return (
            <View style={styles.headerContainer}>
                {
                    AreaData.Icon.map( ( elem ,index)=> {
                        return (
                            <ImgItem key={index} name={elem.name} source={elem.img} iconClik={()=>this.IconEvent(index)}/>
                        );
                    })
                }
            </View>
        );
    }

    _renderItem(item){
        return (
            <VideoArea data={item}/>
        );
    }

    IconEvent(index){
        switch (index){
            case 0 : {
                alert('点击了直播');
                break;
            }
            case  1 : {
                alert('点击了番剧');
                break;
            }
            case  2 : {
                alert('点击了动画');
                break;
            }
            case  3 : {
                alert('点击了国创');
                break;
            }
            case  4 : {
                alert('点击了音乐');
                break;
            }
            case  5 : {
                alert('点击了舞蹈');
                break;
            }
            case  6 : {
                alert('点击了游戏');
                break;
            }
            case  7 : {
                alert('点击了科技');
                break;
            }
            case  8 : {
                alert('点击了生活');
                break;
            }
            case  9 : {
                alert('点击了鬼畜');
                break;
            }
            case  10 : {
                alert('点击了时尚');
                break;
            }
            case  11 : {
                alert('点击了广告');
                break;
            }
            case  12 : {
                alert('点击了娱乐');
                break;
            }
            case  13 : {
                alert('点击了电影');
                break;
            }
            case  14 : {
                alert('点击了电视剧');
                break;
            }
            case  15 : {
                alert('点击了小视频');
                break;
            }
            case  16 : {
                alert('点击了专栏');
                break;
            }
            case  17 : {
                alert('点击了游戏中心');
                break;
            }
        }
    }
};

const styles = StyleSheet.create({

    container : {
        backgroundColor : '#2c2c2c',
        flex : 1,
        paddingLeft : 10,
        paddingRight : 10,
        paddingBottom : 10,
    },
    headerContainer : {
        flexDirection: 'row',
        flexWrap : 'wrap',
    }

});