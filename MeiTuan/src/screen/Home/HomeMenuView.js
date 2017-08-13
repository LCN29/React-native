/**
 * Created by LCN on 2017/8/9 0009.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

import HomeMenuItem from './HomeMenuItem';
import Screen from '../../utils/Screen';
import Colors from '../../utils/Colors';

import PageControl from '../../widget/PageControl';

export default class HomeMenuView extends Component{

    constructor(props: Object) {
        super(props);
        this.state = {
            currentPage: 0
        }
    }

    onMenuSelected(index: number) {
        alert(index);
    }

    onScroll( e : any){
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = Math.round(x / Screen.width);
        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage
            })
        }
    }

   render(){

       let { menuInfos} = this.props;

       let menuItems = menuInfos.map((info,index)=>{
            return (
                <HomeMenuItem
                    key={index}
                    title={info.title}
                    icon={info.icon}
                    onPress={()=>{this.onMenuSelected(index)}}
                />
            );
       });

       let menuViews = [];
       let pageCount = Math.ceil(menuItems.length / 10);

       for (let i = 0; i < pageCount; i++) {
           let length = menuItems.length < (i * 10) ? menuItems.length - (i * 10) : 10;
           let items = menuItems.slice(i * 10, i * 10 + length);
           let menuView = (
               <View style={styles.itemsView} key={i}>
                   {items}
               </View>
           );
           menuViews.push(menuView);
       }

       return (
           <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    onScroll={(e)=>this.onScroll(e)}
                    showsHorizontalScrollIndicator={false} >
                    {menuViews}
                </ScrollView>
               <PageControl
                   style={styles.pageControl}
                   numberOfPages={pageCount}
                   currentPage={this.state.currentPage}
                   currentPageIndicatorTintColor={Colors.theme}
                   indicatorSize={{ width: 8, height: 8 }}
                   hidesForSinglePage={true}
                   pageIndicatorTintColor='gray'
                   onPageIndicatorPress={(index)=>{this.pageChange(index)}}
               />
           </View>
       );
   }

    pageChange(index){
       /*this.setState({
            currentPage: index,
       });*/
        alert(index);
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    menuContainer: {
        flexDirection: 'row',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Screen.width,
    },
    contentContainer :{
    },
    pageControl: {
        margin: 10,
    }
});
