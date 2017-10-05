/**
 * Created by LCN on 2017/9/29 0029.
 */

import React,{ Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';


import Screen from '../../utils/Screen';



export default class SearchHeader extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputValue : '',
            autoFocus : false,
        }
    }


    render(){
        return (
            <View style={styles.container}>
                {
                    this.props.showLocation?
                        <View style={styles.searchLocation}>
                            <IconEntypo style={styles.locationIcon} name="location-pin" />
                            <Text style={styles.locationText} numberOfLines={1}>
                                {this.props.loction ? this.props.loction : '定位中...'}
                            </Text>
                            <Icon style={styles.locationIcon} name="md-arrow-dropdown" />
                        </View>
                        :
                        null
                }

                <View style={styles.searchForm}>
                    <TouchableOpacity
                        style={{ flex: 1, height: 28 }}
                        activeOpacity={1}
                        focusedOpacity={1}
                        onPress={()=>this.jumpPage()}
                    >
                        <Icon style={styles.headerSearchIcon} name="ios-search" />
                        <Text style={styles.headerSearchInput}>请输入商品名称</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    jumpPage(){
        let { navigation, searchType,} = this.props;
        navigation.navigate('Search', { searchType,});
    }
}

const styles =StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#efefef'
    },
    searchLocation : {
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        width: 20,
        height: 20,
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    locationText: {
        fontSize: 14,
        maxWidth: 100,
        flexWrap: 'nowrap',
        width : Screen.width*1/8,
    },
    searchForm: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerSearchIcon: {
        position: 'absolute',
        left: 5,
        width: 28,
        height: 28,
        zIndex: 1,
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    headerSearchInput: {
        flex: 1,
        paddingLeft: 35,
        paddingVertical: 2,
        height: 28,
        borderWidth: 0,
        backgroundColor: '#f2f2f2',
        borderRadius: 14,
        fontSize: 14,
        color: '#666'
    }
});
