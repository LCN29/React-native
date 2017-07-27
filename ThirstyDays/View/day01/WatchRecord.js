/**
 * Created by Ape on 2017/7/15.
 */


import React,{ Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

import Util from '../../utils/Util';

export default class WatchRecord extends Component{

    render(){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        theDataSource = ds.cloneWithRows(this.props.record);

        return(
            <ListView
                dataSource={theDataSource}
                renderRow={(rowData)=>
                    <View style={styles.recordItem}>
                        <Text style={styles.recordItemTitle}>{rowData.title}</Text>
                        <View style={{alignItems: "center"}}>
                            <Text style={styles.recordItemTime}>{rowData.time}</Text>
                        </View>
                    </View>}
                />
        );
    }
};


const styles = StyleSheet.create({
    recordItem:{
        width : Util.size.width,
        height: 40,
        borderBottomWidth:Util.pixel,borderBottomColor:"#bbb",
        paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
        flexDirection:"row",
        alignItems:"center"
    },
    recordItemTitle:{

        flex:1,
        textAlign:"left",
        paddingLeft:20,
        color:"#777",
        backgroundColor : 'transparent'
    },
    recordItemTime : {
        backgroundColor : 'transparent',
        flex:1,
        textAlign:"right",
        paddingRight:20,
        color:"#222",
    }

});